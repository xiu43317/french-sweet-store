<template>
    <div class="container mt-5">
        <div class="d-flex justify-content-between fs-5">
            <strong v-if="prevPageId">
              <router-link class="text-decoration-none link-dark" :to="`/onenews/${prevPageId.id}/num/${prevPageId.num}`">
                <i class="bi bi-chevron-double-left"></i>
                較舊一篇：{{ prevPageId.title }}
              </router-link>
            </strong>
            <strong v-else><span>  </span></strong>
              <strong v-if="nextPageId">
                <router-link class="text-decoration-none link-dark" :to="`/onenews/${nextPageId.id}/num/${nextPageId.num}`">
                  較新一篇：{{ nextPageId.title }}
                  <i class="bi bi-chevron-double-right"></i>
                </router-link>
            </strong>
            <strong v-else>  </strong>
        </div>
    </div>
</template>
<script setup>
import api from '@/api/axios'
import { ref, onMounted, watch } from 'vue'

// const articles = ref({})
const props = defineProps(['currentNum'])
let num = parseInt(props.currentNum)
const nextPageId = ref('')
const prevPageId = ref('')
const getPages = () => {
  num = parseInt(props.currentNum)
  // 剛好是這頁的最後一頁
  if (num % 10 === 0) {
    api.getArticles(num / 10 + 1)
      .then((res) => {
        // console.log(res.data.articles)
        if (!res.data.articles) prevPageId.value = ''
        else prevPageId.value = res.data.articles.filter((item) => item.num === num + 1)[0]
        console.log('prev:', prevPageId.value.id)
        console.log('prevNum:', prevPageId.value.num)
      })
    api.getArticles(num / 10)
      .then((res) => {
        // console.log(res.data.articles)
        const next = res.data.articles.filter((item) => item.num === num - 1)[0]
        nextPageId.value = next
        console.log('next:', nextPageId.value.id)
        console.log('nextNum:', nextPageId.value.num)
      })
  } else if (num === 1) {
    // 全部的最後一頁
    nextPageId.value = ''
    console.log('next', nextPageId.value)
    console.log('nextNum', 0)
    api.getArticles(1)
      .then((res) => {
        prevPageId.value = res.data.articles.filter(item => item.num === num + 1)[0]
        console.log('prev', prevPageId.value.id)
        console.log('prevNum', prevPageId.value.num)
      })
  } else if (num % 10 === 1 && num !== 1) {
    // 此頁第一筆資料
    api.getArticles(num / 10)
      .then((res) => {
        // console.log(res.data.articles)
        const next = res.data.articles.filter(item => item.num === num - 1)
        nextPageId.value = next[0]
        console.log('next:', nextPageId.value.id)
        console.log('nextNum:', nextPageId.value.num)
      })
    api.getArticles(num / 10 + 1)
      .then((res) => {
        // console.log(res.data.articles)
        if (!res.data.articles) prevPageId.value = ''
        else nextPageId.value = res.data.articles.filter(item => item.num === num + 1)[0]
        console.log('prev:', nextPageId.value.id)
        console.log('prevNum', nextPageId.value.num)
      })
  } else {
    api.getArticles(num / 10 + 1)
      .then((res) => {
        // console.log(res.data.articles)
        nextPageId.value = res.data.articles.filter(item => item.num === num - 1)[0]
        if (!res.data.articles.filter(item => item.num === num + 1)[0]) prevPageId.value = ''
        else prevPageId.value = res.data.articles.filter(item => item.num === num + 1)[0]
        console.log('next:', nextPageId.value.id)
        console.log('nextNum:', nextPageId.value.num)
        console.log('prev:', prevPageId.value.id)
        console.log('prevNum:', prevPageId.value.num)
      })
  }
}
onMounted(() => {
  getPages()
})
watch(() => props.currentNum, () => {
  // console.log('change')
  getPages()
})

</script>
