<template>
    <div class="card">
      <img
        src="https://plus.unsplash.com/premium_photo-1703690569758-cf7c3f5ac7a7?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OXx8bWFjYXJvbnxlbnwwfDB8MHx8fDA%3D"
        class="card-img-top img-fluid object-fit-cover"
        alt="..."
        style="max-height: 250px;"
      />
      <div class="card-body">
        <div class="mb-3">
        <span class="bg-success text-white py-1 px-2 rounded">馬卡龍</span>
        </div>
        <h5 class="card-title fs-4">紅絲絨馬卡龍</h5>
        <p class="card-text fs-5">
          NT$ 80
        </p>
        <a href="#" class="btn btn-outline-secondary w-100">加入購物車</a>
      </div>
    </div>
</template>
<script>
export default {
  props: ['imgUrl'],
  setup (props) {
    const sonImgUrl = props.imgUrl
    return {
      sonImgUrl
    }
  }
}
</script>
