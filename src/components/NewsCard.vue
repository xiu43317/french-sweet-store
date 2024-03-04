<template>
    <div class="position-relative col-12 col-lg-4 my-3">
        <img :src="sonImgUrl" alt="" class="img-fluid object-fit-cover opacity-25">
        <div class="position-absolute start-50 top-50 translate-middle text-center">
            <h4 class="fs-2 fw-bold">{{ sonTitle }}</h4>
            <h5 class="fs-5 mt-3 fw-bold">{{ sonSubTitle }}</h5>
        </div>
    </div>
</template>
<style scoped>

</style>
<script>
export default {
  props: ['imgUrl', 'title', 'subTitle'],
  setup (props) {
    const sonImgUrl = props.imgUrl
    const sonTitle = props.title
    const sonSubTitle = props.subTitle
    return {
      sonImgUrl,
      sonTitle,
      sonSubTitle
    }
  }
}
</script>
