<template>
  <div>
    <myLoading :active="isLoading"></myLoading>
    <div class="h3 mt-4 text-center">新增文章</div>
    <div class="container">
      <div class="text-end mt-4">
        <button class="btn btn-primary" type="button" @click="openModal(true)">
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
      <AdminPagination
      :pages="pagination"
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
import AdminPagination from '@/components/BottomPagination.vue'

const url = import.meta.env.VITE_APP_API_URL
const path = import.meta.env.VITE_APP_API_NAME
export default {
  data () {
    return {
      isLoading: false,
      isNew: false,
      pagination: {},
      articles: [],
      tempArticle: {}
    }
  },
  components: { ArticleModal, DeleteModal, AdminPagination },
  methods: {
    getArticles () {
      this.isLoading = true
      this.$http
        .get(`${url}/api/${path}/admin/articles`)
        .then((res) => {
          this.articles = [...res.data.articles]
          this.pagination = { ...res.data.pagination }
          this.isLoading = false
        })
        .catch((err) => {
          console.log(err)
          this.isLoading = false
        })
    },
    date (time) {
      const localDate = new Date(time * 1000)
      return localDate.toLocaleDateString()
    },
    openModal (isNew) {
      this.isNew = isNew
      this.tempArticle = { create_at: Math.floor(new Date() / 1000) }
      this.$refs.articleModal.openModal()
    },
    getArticle (id) {
      this.isLoading = true
      this.isNew = false
      this.$http.get(`${url}/api/${path}/admin/article/${id}`)
        .then((res) => {
          // console.log(res.data.article)
          this.isLoading = false
          this.tempArticle = res.data.article
          this.$refs.articleModal.openModal()
        })
        .catch((err) => {
          console.log(err)
          this.isLoading = false
        })
    },
    openDelArticleModal (item) {
      this.isNew = false
      this.tempArticle = item
      this.$refs.deleteModal.openModal()
    },
    updateArticle (item) {
      this.isLoading = true
      if (this.isNew === true) {
        this.$http.post(`${url}/api/${path}/admin/article`, { data: item })
          .then((res) => {
            this.isLoading = false
            alert(res.data.message)
            this.$refs.articleModal.closeModal()
            this.getArticles()
          })
          .catch((err) => {
            console.log(err)
            this.isLoading = false
            alert(err.response.data.message)
            this.$refs.articleModal.closeModal()
          })
      } else {
        this.$http.put(`${url}/api/${path}/admin/article/${item.id}`, { data: item })
          .then((res) => {
            this.isLoading = false
            alert(res.data.message)
            this.$refs.articleModal.closeModal()
            this.getArticles()
          })
          .catch((err) => {
            console.log(err)
            this.isLoading = false
            alert(err.response.data.message)
            this.$refs.articleModal.closeModal()
          })
      }
    },
    deleteArticle (id) {
      this.isLoading = true
      this.$http
        .delete(`${url}/api/${path}/admin/article/${id}`)
        .then((res) => {
          this.isLoading = false
          alert(res.data.message)
          this.getArticles()
        })
        .catch((err) => {
          console.log(err.response.data.message)
          this.isLoading = false
          alert(err.response.data.message)
        })
    }
  },
  mounted () {
    this.getArticles()
  }
}
</script>
