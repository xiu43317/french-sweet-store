<template>
    <div class="col-12 col-lg-3 col-md-6 my-3 position-relative categlory rounded-pill"
        @click.prevent="router.push(`${sonLink}`)">
        <img :src="sonImgUrl"
             :alt="sonTitle"
             class="img-fluid object-fit-cover w-100 rounded-pill">
        <div class="position-absolute start-50 top-50 translate-middle text-center">
            <h4 class="fs-2 text-white bg">{{ sonTitle }}</h4>
        </div>
    </div>
</template>

<script>
import { useRouter } from 'vue-router'
export default {
  props: ['imgUrl', 'title', 'link'],
  setup (props) {
    const router = useRouter()
    const sonLink = props.link
    const sonImgUrl = props.imgUrl
    const sonTitle = props.title
    return {
      router,
      sonImgUrl,
      sonTitle,
      sonLink
    }
  }
}
</script>

<style scoped>
.bg{
  padding: 1px 1px;
  background-color: rgba(0, 0, 0, 0.5);
  box-shadow: 0 0 1.6em rgba(0, 0, 0, 0.16);
}
.categlory:hover img,.categlory:hover h4{
  transform: scale(1.1);
  cursor: pointer;
}
.categlory img,.categlory h4{
  transition: 0.5s;
}
.categlory{
  overflow: hidden;
}
</style>
