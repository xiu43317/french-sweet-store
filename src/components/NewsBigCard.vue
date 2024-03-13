<template>
  <div class="row mb-3 position-relative zoom-in">
    <div class="col-lg-4 rounded g-0">
      <img
        class="img-fluid object-fit-cover rounded w-100"
        :src="tempArticle.imageUrl"
        alt=""
      />
    </div>
    <div
      class="col-lg-8 d-flex flex-column justify-content-center mt-2 mt-lg-0"
    >
      <h3 class="mb-3">{{ tempArticle.title }}</h3>
      <div>
        <span class="bg-warning py-1 px-3 me-1 rounded-3 fw-bold" v-for="(item, index) in tempArticle.tag" :key="index">{{ item }}</span>
        <span class="fs-8 ms-3">{{ tempArticle.create_at }}</span>
      </div>
      <h4 class="mt-3">
        <!-- <a href="#/news" class="text-decoration-none text-dark stretched-link">{{ tempArticle.description }}
        </a> -->
        <router-link :to="`/onenews/${tempArticle.id}/num/${tempArticle.num}`" class="text-decoration-none text-dark stretched-link">{{ tempArticle.description }}</router-link>
      </h4>
    </div>
  </div>
  <hr />
</template>
<style scoped>
.zoom-in:hover img{
  transform: scale(1.1);
}
.zoom-in img{
  transition: 0.5s;
}
.zoom-in .col-lg-4{
  overflow: hidden;
}
</style>
<script>
import { ref, watch } from 'vue'
export default {
  props: ['article'],
  setup (props) {
    const tempArticle = ref({
      create_at: '',
      imageUrl: '',
      title: '',
      tag: [],
      description: ''
    })
    tempArticle.value = { ...props.article }
    tempArticle.value.create_at =
    new Date(tempArticle.value.create_at * 1000).toLocaleDateString('zh-TW')
    watch(() => props.article, () => {
      console.log('trigger')
    })
    return {
      tempArticle
    }
  }
}
</script>
