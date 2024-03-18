<template>
    <div class="container mt-5">
      <div class="row">
        <div class="col-lg-8 mx-auto">
          <div class="row fs-5">
              <strong v-if="prevPageId" class="col-md-6 mb-3 mb-md-0">
                <router-link class="text-decoration-none link-dark" :to="`/onenews/${prevPageId.id}/num/${prevPageId.num}`">
                  <i class="bi bi-chevron-double-left"></i>
                  較舊一篇：{{ prevPageId.title }}
                </router-link>
              </strong>
              <strong v-else class="col-md-6 mb-3 mb-md-0"><span>  </span></strong>
                <strong v-if="nextPageId" class="col-md-6 text-end">
                  <router-link class="text-decoration-none link-dark" :to="`/onenews/${nextPageId.id}/num/${nextPageId.num}`">
                    較新一篇：{{ nextPageId.title }}
                    <i class="bi bi-chevron-double-right"></i>
                  </router-link>
              </strong>
              <strong v-else class="col-md-6 text-end">  </strong>
          </div>
        </div>
      </div>
    </div>
</template>

<script setup>
import api from '@/api/axios'
import { ref, onMounted, watch } from 'vue'
import { notify } from '@/api/toast.js'

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
        if (!res.data.articles) prevPageId.value = ''
        else prevPageId.value = res.data.articles.filter((item) => item.num === num + 1)[0]
      })
      .catch((err) => {
        notify(err.response.data.message)
      })
    api.getArticles(num / 10)
      .then((res) => {
        const next = res.data.articles.filter((item) => item.num === num - 1)[0]
        nextPageId.value = next
      })
      .catch((err) => {
        notify(err.response.data.message)
      })
  } else if (num === 1) {
    // 全部的最後一頁
    nextPageId.value = ''
    api.getArticles(1)
      .then((res) => {
        prevPageId.value = res.data.articles.filter(item => item.num === num + 1)[0]
        // console.log('prev', prevPageId.value.id)
        // console.log('prevNum', prevPageId.value.num)
      })
      .catch((err) => {
        notify(err.response.data.message)
      })
  } else if (num % 10 === 1 && num !== 1) {
    // 此頁第一筆資料
    api.getArticles(num / 10)
      .then((res) => {
        const next = res.data.articles.filter(item => item.num === num - 1)
        nextPageId.value = next[0]
      })
    api.getArticles(num / 10 + 1)
      .then((res) => {
        if (!res.data.articles) prevPageId.value = ''
        else nextPageId.value = res.data.articles.filter(item => item.num === num + 1)[0]
      })
  } else {
    api.getArticles(num / 10 + 1)
      .then((res) => {
        nextPageId.value = res.data.articles.filter(item => item.num === num - 1)[0]
        if (!res.data.articles.filter(item => item.num === num + 1)[0]) prevPageId.value = ''
        else prevPageId.value = res.data.articles.filter(item => item.num === num + 1)[0]
      })
      .catch((err) => {
        notify(err.response.data.message)
      })
  }
}
onMounted(() => {
  getPages()
})
watch(() => props.currentNum, () => {
  getPages()
})

</script>
