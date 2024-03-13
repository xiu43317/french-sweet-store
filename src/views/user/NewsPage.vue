<template>
  <myLoading :active="isLoading"></myLoading>
  <div class="container mt-3" style="overflow-x: hidden;">
    <div class="text-center">
      <h3 class="fs-2 my-3 my-lg-5"
      data-aos="fade-right">最新消息</h3>
    </div>
    <template v-for="article in articles" :key="article.id">
      <div data-aos="fade-left" data-aos-duration="1000" data-aos-once="false">
      <NewsBigCard :article="article" v-if="article.isPublic"/>
      </div>
    </template>
    <div class="d-flex justify-content-center">
      <BottomPagination @emit-page="getArticles" :pages="pages"/>
    </div>
  </div>
</template>
<script>
import { ref, onMounted } from 'vue'
import BottomPagination from '@/components/BottomPagination.vue'
import NewsBigCard from '@/components/NewsBigCard.vue'
import api from '@/api/axios'
import { notify } from '@/api/toast.js'
export default {
  components: { NewsBigCard, BottomPagination },
  setup (props) {
    const articles = ref(null)
    const pages = ref({})
    const isLoading = ref(false)
    const getArticles = (page) => {
      isLoading.value = true
      api.getArticles(page)
        .then((res) => {
          articles.value = [...res.data.articles]
          pages.value = { ...res.data.pagination }
          // console.log(articles.value)
          isLoading.value = false
        })
        .catch((err) => {
          // console.log(err.response.data.message)
          notify(false, err.response.data.message)
          isLoading.value = false
        })
    }
    onMounted(() => {
      getArticles(1)
    })
    return {
      isLoading,
      articles,
      pages,
      getArticles
    }
  }
}
</script>
