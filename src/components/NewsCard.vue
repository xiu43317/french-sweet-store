<template>
    <div class="col-12 col-lg-4 col-md-6 my-3">
    <router-link :to="`/onenews/${oneNews.id}/num/${oneNews.num}`">
      <div class="card position-relative h-100 zoom-in">
        <div class="frame h-100">
          <img :src="oneNews.imageUrl" :alt="oneNews.title" class="img-fluid object-fit-cover opacity-25 h-100">
          <div class="position-absolute start-50 top-50 translate-middle text-center">
              <h4 class="fs-2 fw-bold">{{ oneNews.title }}</h4>
              <h5 class="fs-5 mt-3 fw-bold">{{ oneNews.description }}</h5>
          </div>
        </div>
      </div>
    </router-link>
    </div>
</template>

<script>
export default {
  props: ['news'],
  setup (props) {
    const oneNews = props.news
    return {
      oneNews
    }
  }
}
</script>

<style scoped>
.zoom-in:hover .frame{
  transform: scale(1.1);
}
.zoom-in .frame {
  transition: 0.5s;
}
.zoom-in{
  overflow: hidden;
}
</style>
