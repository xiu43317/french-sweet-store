<template>
  <div>
    <myLoading :active="isLoading"></myLoading>
    <div class="h3 mt-4 text-center">新增文章</div>
    <div class="container">
      <div class="text-end mt-4">
        <button class="btn btn-primary" type="button" @click="openModal()">
          建立新的頁面
        </button>
      </div>
      <table class="table mt-4">
        <thead>
          <tr>
            <th style="width: 200px">標題</th>
            <th style="width: 200px">作者</th>
            <th>描述</th>
            <th style="width: 100px">建立時間</th>
            <th style="width: 100px">是否公開</th>
            <th style="width: 120px">編輯</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="article in articles" :key="article.id">
            <td>{{ article.title }}</td>
            <td>{{ article.author }}</td>
            <td>{{ article.description }}</td>
            <td>{{ date(article.create_at) }}</td>
            <td>
              <span v-if="article.isPublic">已上架</span>
              <span v-else>未上架</span>
            </td>
            <td>
              <div class="btn-group">
                <button
                  class="btn btn-outline-primary btn-sm"
                  type="button"
                  @click="getArticle(article.id)"
                >
                  編輯
                </button>
                <button
                  class="btn btn-outline-danger btn-sm"
                  type="button"
                  @click="openDelArticleModal(article)"
                >
                  刪除
                </button>
              </div>
            </td>
          </tr>
        </tbody>
      </table>
      <BottomPagination
      :pages="pages"
      @emit-page="getArticles"
      ref="pagination"
      />
    </div>
    <ArticleModal ref="articleModal"
    @update-article="updateArticle"
    :isNew="isNew"
    :article="tempArticle" />
    <DeleteModal
      :product="tempArticle"
      @delete-item="deleteArticle"
      ref="deleteModal"
    />
  </div>
</template>

<script>
import ArticleModal from '@/modals/ArticleModal.vue'
import DeleteModal from '@/modals/DeleteModal.vue'
import BottomPagination from '@/components/BottomPagination.vue'
import axios from 'axios'
import { ref, onMounted } from 'vue'

const url = import.meta.env.VITE_APP_API_URL
const path = import.meta.env.VITE_APP_API_NAME
export default {
  components: { ArticleModal, DeleteModal, BottomPagination },
  setup () {
    const isLoading = ref(null)
    const isNew = ref(false)
    const pages = ref({})
    const articles = ref([])
    const tempArticle = ref({})
    const articleModal = ref(null)
    const deleteModal = ref(null)
    const getArticles = (page = 1) => {
      isLoading.value = true
      axios
        .get(`${url}/api/${path}/admin/articles?page=${page}`)
        .then((res) => {
          articles.value = [...res.data.articles]
          pages.value = { ...res.data.pagination }
          isLoading.value = false
        })
        .catch((err) => {
          alert(err.response.data.message)
          isLoading.value = false
        })
    }
    const date = (time) => {
      const localDate = new Date(time * 1000)
      return localDate.toLocaleDateString()
    }
    const openModal = () => {
      isNew.value = true
      tempArticle.value = { create_at: Math.floor(new Date() / 1000) }
      articleModal.value.openModal()
    }
    const openDelArticleModal = (item) => {
      isNew.value = false
      tempArticle.value = item
      deleteModal.value.openModal()
    }
    const getArticle = (id) => {
      isLoading.value = true
      isNew.value = false
      axios.get(`${url}/api/${path}/admin/article/${id}`)
        .then((res) => {
          tempArticle.value = res.data.article
          articleModal.value.openModal()
          isLoading.value = false
        })
        .catch((err) => {
          alert(err.response.data.message)
          isLoading.value = false
        })
    }
    const updateArticle = (item) => {
      isLoading.value = true
      if (isNew.value === true) {
        axios.post(`${url}/api/${path}/admin/article`, { data: item })
          .then((res) => {
            alert(res.data.message)
            articleModal.value.closeModal()
            isLoading.value = false
            getArticles()
          })
          .catch((err) => {
            console.log(err)
            alert(err.response.data.message)
            articleModal.value.closeModal()
            isLoading.value = false
          })
      } else {
        axios.put(`${url}/api/${path}/admin/article/${item.id}`, { data: item })
          .then((res) => {
            alert(res.data.message)
            articleModal.value.closeModal()
            isLoading.value = false
            getArticles()
          })
          .catch((err) => {
            console.log(err)
            alert(err.response.data.message)
            articleModal.value.closeModal()
            isLoading.value = false
          })
      }
    }
    const deleteArticle = (id) => {
      isLoading.value = true
      axios
        .delete(`${url}/api/${path}/admin/article/${id}`)
        .then((res) => {
          alert(res.data.message)
          deleteModal.value.hideModal()
          isLoading.value = false
          getArticles()
        })
        .catch((err) => {
          alert(err.response.data.message)
          deleteModal.value.hideModal()
          isLoading.value = false
        })
    }
    onMounted(() => {
      getArticles()
    })
    return {
      isLoading,
      isNew,
      pages,
      articles,
      tempArticle,
      articleModal,
      deleteModal,
      getArticles,
      date,
      openModal,
      openDelArticleModal,
      getArticle,
      updateArticle,
      deleteArticle
    }
  }
}
</script>
