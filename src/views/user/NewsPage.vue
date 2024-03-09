<template>
  <div class="container mt-3">
    <div class="text-center">
      <h3 class="fs-2 my-3 my-lg-5">最新消息</h3>
    </div>
    <template v-for="article in articles" :key="article.id">
      <NewsBigCard :article="article" v-if="article.isPublic"/>
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
export default {
  components: { NewsBigCard, BottomPagination },
  setup (props) {
    const articles = ref(null)
    const pages = ref({})
    const getArticles = (page) => {
      api.getArticles(page)
        .then((res) => {
          articles.value = [...res.data.articles]
          pages.value = { ...res.data.pagination }
          console.log(articles.value)
        })
        .catch((err) => {
          console.log(err.response.message)
        })
    }
    onMounted(() => {
      getArticles(1)
    })
    return {
      articles,
      pages,
      getArticles
    }
  }
}
</script>
