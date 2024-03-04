<template>
  <div class="container text-center mh-370">
  <h3 class="fs-2 my-5">查詢訂單</h3>
  <div class="input-group input-group-lg mt-5 mx-auto mw-500">
    <span class="input-group-text" id="basic-addon1">
        <i class="bi bi-search"></i>
    </span>
    <input
      type="text"
      class="form-control bg-white bg-opacity-50 text-dark"
      placeholder="請輸入訂單編號"
    />
    <button class="btn btn-outline-secondary" type="submit">
      <i class="bi bi-arrow-right"></i>
    </button>
  </div>
  </div>
</template>
<style scoped>
.mh-370{
    min-height: 370px;
}
.mw-500{
    max-width: 500px;
}
.input-group-text{
    border-color: black;
}
.form-control{
    border-color: black;
}
.form-control:focus{
  border-color: white;
  box-shadow: 0 0 0 0.15rem rgba(0, 0, 0, 0.25);
}
</style>
<script>
export default {
}
</script>
