<template>
  <div class="container text-center mh-370" v-if="!hideSearchBar">
  <h3 class="fs-2 my-5">查詢訂單</h3>
  <div class="input-group input-group-lg mt-5 mx-auto mw-500">
    <span class="input-group-text" id="basic-addon1">
        <i class="bi bi-search"></i>
    </span>
    <input
      type="text"
      class="form-control bg-white bg-opacity-50 text-dark"
      placeholder="請輸入訂單編號"
      v-model="orderId"
    />
    <button class="btn btn-outline-secondary" type="submit" @click.prevent="getOrder()">
      <i class="bi bi-arrow-right"></i>
    </button>
  </div>
  </div>
  <OrderDetail :order="order"/>
  <div class="contaner text-center">
    <button @click="redoSearch()" class="btn btn-lg btn-outline-success" v-if="hideSearchBar">重新查詢</button>
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
import OrderDetail from '@/components/OrderDetail.vue'
import { useRouter } from 'vue-router'
import api from '@/api/axios.js'
import { ref } from 'vue'

export default {
  components: { OrderDetail },
  setup (props) {
    const hideSearchBar = ref(false)
    const order = ref(null)
    const orderId = ref(null)
    const router = useRouter()
    const getOrder = () => {
      api.getOrder(orderId.value)
        .then((res) => {
          console.log(res.data)
          if (res.data.order === null) console.log('輸入錯誤')
          else {
            if (res.data.order.is_paid) {
              console.log('已付款')
              order.value = res.data.order
              hideSearchBar.value = true
            } else router.push(`/payment?id=${orderId.value}`)
          }
        })
        .catch((err) => {
          console.log(err)
        })
    }
    const redoSearch = () => {
      hideSearchBar.value = false
      order.value = null
    }
    return {
      order,
      orderId,
      getOrder,
      hideSearchBar,
      redoSearch
    }
  }
}
</script>
