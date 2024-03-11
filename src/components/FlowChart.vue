<template>
  <div class="container mt-5 px-5">
    <div class="position-relative my-4 mx-auto" style="height: 30px; max-width: 900px; width: 90%;">
      <div class="progress" style="height: 1px">
        <div
          class="progress-bar"
          role="progressbar"
          :style="{width:progress+'%'}"
          aria-valuenow="50"
          aria-valuemin="0"
          aria-valuemax="100"
        ></div>
      </div>
      <div
        class="position-absolute top-0 start-0 translate-middle btn btn-sm btn-primary rounded-pill"
        style="width: 2rem; height: 2rem"
      >
        1
      </div>
      <p class="position-absolute top-100 start-0 translate-middle">填寫資料</p>
      <div
        class="position-absolute top-0 start-50 translate-middle btn btn-sm rounded-pill"
        :class="progress >= 50 ? 'btn-primary': 'btn-secondary'"
        style="width: 2rem; height: 2rem"
      >
        2
      </div>
      <p class="position-absolute top-100 start-50 translate-middle">付款資訊</p>
      <div
        class="position-absolute top-0 start-100 translate-middle btn btn-sm rounded-pill"
        :class="progress >= 100 ? 'btn-primary': 'btn-secondary'"
        style="width: 2rem; height: 2rem"
      >
        3
      </div>
      <p class="position-absolute top-100 start-100 translate-middle text-nowrap">完成訂單</p>
    </div>
  </div>
</template>
<style scoped></style>
<script>
import { ref, watch } from 'vue'

export default {
  props: ['outProgress'],
  setup (props) {
    const progress = ref(0)
    progress.value = props.outProgress
    watch(() => props.outProgress, () => {
      progress.value = props.outProgress
    })
    return {
      progress
    }
  }
}
</script>
