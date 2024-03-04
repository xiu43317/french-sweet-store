<template>
    <div class="col-12 col-lg-3 col-md-6 my-3 position-relative">
        <img :src="sonImgUrl"
             class="img-fluid rounded-pill object-fit-cover w-100">
        <div class="position-absolute start-50 top-50 translate-middle text-center">
            <h4 class="fs-2 text-white bg">{{ sonTitle }}</h4>
        </div>
    </div>
</template>
<style>
.bg{
  padding: 1px 1px;
  background-color: rgba(0, 0, 0, 0.5);
  box-shadow: 0 0 1.6em rgba(0, 0, 0, 0.16);
}
</style>
<script>
export default {
  props: ['imgUrl', 'title'],
  setup (props) {
    const sonImgUrl = props.imgUrl
    const sonTitle = props.title
    return {
      sonImgUrl,
      sonTitle
    }
  }
}
</script>
