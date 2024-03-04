<template>
  <div class="container mt-5">
    <div class="position-relative my-4 mx-auto" style="height: 30px; max-width: 900px; width: 90%;">
      <div class="progress" style="height: 1px">
        <div
          class="progress-bar"
          role="progressbar"
          style="width: 0%"
          aria-valuenow="50"
          aria-valuemin="0"
          aria-valuemax="100"
        ></div>
      </div>
      <button
        type="button"
        class="position-absolute top-0 start-0 translate-middle btn btn-sm btn-primary rounded-pill"
        style="width: 2rem; height: 2rem"
      >
        1
      </button>
      <p class="position-absolute top-100 start-0 translate-middle">填寫資料</p>
      <button
        type="button"
        class="position-absolute top-0 start-50 translate-middle btn btn-sm btn-secondary rounded-pill"
        style="width: 2rem; height: 2rem"
      >
        2
      </button>
      <p class="position-absolute top-100 start-50 translate-middle">付款資訊</p>
      <button
        type="button"
        class="position-absolute top-0 start-100 translate-middle btn btn-sm btn-secondary rounded-pill"
        style="width: 2rem; height: 2rem"
      >
        3
      </button>
      <p class="position-absolute top-100 start-100 translate-middle text-nowrap">完成訂單</p>
    </div>
  </div>
</template>
<style scoped></style>
<script>
export default {}
</script>
