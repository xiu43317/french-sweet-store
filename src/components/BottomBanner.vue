<template>
  <div class="fixed-banner-wrap mt-5">
    <div class="container-fluid">
      <div class="row">
        <div class="wrap w-100">
          <hgroup class="title-box">
            <h4 class>立即訂閱享8折優惠碼</h4>
            <div class="input-group  input-group-lg mt-5 mx-auto fixed-input">
                <input v-model="email" type="email" class="form-control bg-white bg-opacity-50 text-dark" placeholder="請輸入信箱">
                <button @click="checkEmail()" class="btn btn-outline-light" type="submit"><i class="bi bi-arrow-right"></i></button>
            </div>
          </hgroup>
          <div class="bg-item" :style="bg"></div>
        </div>
      </div>
    </div>
  </div>
</template>
<style scoped>
.fixed-input{
    max-width: 400px;
}
.form-control:focus{
  border-color: white;
  box-shadow: 0 0 0 0.3rem rgba(0, 0, 0, 0.25);
}
.fixed-banner-wrap .wrap .bg-item {
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  margin: auto;
  width: 100%;
  height: 100%;
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;
  background-attachment: fixed;
  z-index: -1;
  filter: blur(1px);
}

.fixed-banner-wrap .wrap .bg-item::after{
  content: "";
    display: block;
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    margin: auto;
    width: 100%;
    height: 100%;
    background-color: #fff;
    opacity: .06;
    z-index: 0;
}

.fixed-banner-wrap .wrap{
  padding: 8rem 2rem;
    position: relative;
    text-align: center;
    color: #fff;
    text-shadow: 0 0 1em rgba(0,0,0,.16);
    overflow: hidden;
}

.fixed-banner-wrap hgroup.title-box a{
    display: inline-block;
    padding: .6em 3em;
    line-height: 1;
    background-color: rgba(2555,255,255,.2);
    box-shadow: 0 0 1.6em rgba(0,0,0,.16);
    border: 1px solid #fff;
    color: #faf9f9 !important;
    text-decoration: none;
    transition: .3s linear all;
}
</style>
<script>
import { ref } from 'vue'
import { notify } from '@/api/toast.js'
import Swal from 'sweetalert2'

export default {
  setup (props) {
    const imgUrl = 'https://images.unsplash.com/photo-1551578657-a7e74acb0135?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8Y2hvY29sYXRlfGVufDB8MHwwfHx8MA%3D%3D'
    const bg = `background-image:url(${imgUrl});`
    const email = ref(null)
    const checkEmail = () => {
      const validate = /^\w+((-\w+)|(\.\w+))*@[A-Za-z0-9]+((\.|-)[A-Za-z0-9]+)*\.[A-Za-z]+$/
      const result = validate.test(email.value)
      if (!result) notify(false, '信箱格式錯誤')
      else {
        Swal.fire({
          icon: 'info', // error\warning\info\question
          title: '訂閱優惠碼',
          text: 'newcustomer',
          showCancelButton: true,
          confirmButtonColor: 'green',
          cancelButtonColor: 'gray',
          confirmButtonText: '複製',
          confirmButton: false,
          cancelButtonText: '取消'
        }).then(async (result) => {
          if (result.isConfirmed) {
            navigator.clipboard.writeText('newcustomer')
              .then(() => {
                notify(true, '複製成功')
              })
          } else if (result.isDenied) {
            console.log('取消')
          }
        })
      }
    }
    return {
      email,
      checkEmail,
      bg
    }
  }
}
</script>
