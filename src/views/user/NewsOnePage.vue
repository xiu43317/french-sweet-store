<template>
  <div class="container">
    <nav aria-label="breadcrumb">
      <ol class="breadcrumb">
        <li class="breadcrumb-item">
          <RouterLink to="/news">消息列表</RouterLink>
        </li>
        <li class="breadcrumb-item active" aria-current="page">
          {{ article.title }}
        </li>
      </ol>
    </nav>
    <div class="row justify-content-center">
      <article class="col-8">
        <h2>{{ article.title }}</h2>
        <p>
          <strong class="text-muted"><i class="bi bi-calendar"></i>
            {{ article.create_at }}
          </strong>
          -
          <strong class="text-muted">
            <i class="bi bi-pencil-square"></i>
            作者：{{ article.author }}</strong>
        </p>
        <img
          :src="article.imageUrl"
          :alt="article.title"
          class="img-fluid mb-3"
        />
        <hr>
        <div v-html="article.content" class="fs-5"></div>
      </article>
    </div>
  </div>
  <ArticlePages :currentNum="num"/>
</template>
<script setup>
import { useRoute } from 'vue-router'
import { onMounted, ref, watch } from 'vue'
import ArticlePages from '@/components/ArticlePages.vue'
import api from '@/api/axios'

const route = useRoute()
const article = ref({})
const getArticle = (id) => {
  api.getArticle(id)
    .then((res) => {
      console.log(res)
      article.value = { ...res.data.article }
      article.value.create_at =
      new Date(article.value.create_at * 1000).toLocaleDateString()
      num.value = route.params.num
    })
    .catch((err) => {
      console.log(err)
    })
}
console.log(route.params.id, route.params.num)
const num = ref(route.params.num)
onMounted(() => {
  getArticle(route.params.id)
})
watch(
  () => route.params.id,
  async newId => {
    await getArticle(route.params.id)
  }
)
</script>
