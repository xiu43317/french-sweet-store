<template>
  <myLoading :active="isLoading"></myLoading>
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

<script>
import OrderDetail from '@/components/OrderDetail.vue'
import { useRouter, useRoute } from 'vue-router'
import api from '@/api/axios.js'
import { ref } from 'vue'
import { notify } from '@/api/toast.js'

export default {
  components: { OrderDetail },
  setup () {
    const route = useRoute()
    const hideSearchBar = ref(false)
    const order = ref(null)
    const orderId = ref(route.query.id || null)
    const router = useRouter()
    const isLoading = ref(false)
    const getOrder = () => {
      isLoading.value = true
      api.getOrder(orderId.value)
        .then((res) => {
          if (res.data.order === null) notify(false, '沒有此訂單喔')
          else {
            if (res.data.order.is_paid) {
              order.value = res.data.order
              hideSearchBar.value = true
            } else router.push(`/payment?id=${orderId.value}`)
          }
          isLoading.value = false
        })
        .catch((err) => {
          notify(false, err.response.data.message)
          isLoading.value = false
        })
    }
    const redoSearch = () => {
      hideSearchBar.value = false
      order.value = null
      orderId.value = null
      window.scrollTo(0, 0)
    }
    return {
      order,
      orderId,
      getOrder,
      hideSearchBar,
      redoSearch,
      isLoading
    }
  }
}
</script>

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
