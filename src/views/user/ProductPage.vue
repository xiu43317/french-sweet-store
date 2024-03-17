<template>
  <myLoading :active="isLoading"></myLoading>
  <div class="container">
    <nav style="--bs-breadcrumb-divider: '>'" aria-label="breadcrumb">
      <ol class="breadcrumb">
        <li class="breadcrumb-item"><a href="#/products">產品列表</a></li>
        <li class="breadcrumb-item active" aria-current="page">產品資訊</li>
      </ol>
    </nav>
    <div v-if="tempProduct">
      <h4 class="fs-3 fw-bold text-center mb-3">{{ tempProduct.title }}</h4>
      <div class="row">
        <div class="col-md-6">
          <img
            class="img-fluid object-fit-cover w-100 mb-2"
            :src="tempProduct.imageUrl"
            :alt="tempProduct.title"
            style="max-height: 400px"
            data-aos="zoom-in"
          />
        </div>
        <div class="col-md-6 d-flex flex-column justify-content-evenly">
          <div>
            <span class="badge bg-success rounded-pill fs-6 mb-3">{{
              tempProduct.category
            }}</span>
          </div>
          <p>尺寸/包裝：{{ tempProduct.description }}</p>
          <p>商品資訊：{{ tempProduct.content }}</p>
          <div class="h5">售價：NT$ {{ tempProduct.price }} 元</div>
          <del class="h6">原價：NT$ {{ tempProduct.origin_price }} 元</del>
          <div class="mt-3">
            <div class="input-group">
              <select
                class="form-select"
                id="inputGroupSelect02"
                v-model="myQty"
                :disabled="isSpinning"
              >
                <option default disabled>請選擇數量</option>
                <option :value="item" v-for="(item, index) in 10" :key="index">
                  {{ item }}
                </option>
              </select>
              <button
                :disabled="isSpinning"
                type="button"
                class="btn btn-outline-secondary"
                @click="addToCart()"
              >
                <font-awesome-icon
                  icon="spinner"
                  class="fa-spin"
                  v-show="isSpinning"
                />
                加入購物車
              </button>
            </div>
          </div>
        </div>
        <!-- col-sm-6 end -->
      </div>
    </div>
  </div>
</template>

<script setup>
import { useRoute } from 'vue-router'
import { ref, onMounted } from 'vue'
import api from '@/api/axios.js'
import { useCartStore } from '@/stores/cart'
import { storeToRefs } from 'pinia'
import { notify } from '@/api/toast.js'

const cartStore = useCartStore()
const { createCart, updateCart, getCart } = cartStore
const { cart } = storeToRefs(cartStore)
const route = useRoute()
const isSpinning = ref(false)
const isLoading = ref(false)
const myQty = ref(1)
const tempProduct = ref(null)
const getProduct = () => {
  isLoading.value = true
  api
    .getProduct(route.params.id)
    .then((res) => {
      tempProduct.value = res.data.product
      isLoading.value = false
    })
    .catch((err) => {
      notify(false, err.response.data.message)
      isLoading.value = false
    })
}
const addToCart = async () => {
  isSpinning.value = true
  const index = cart.value.carts.findIndex(item => item.product_id === tempProduct.value.id)
  const item = {
    data: {
      product_id: tempProduct.value.id,
      qty: myQty.value
    }
  }
  // 有在購物車裡面
  if (index !== -1) {
    const newQty = cart.value.carts[index].qty + myQty.value
    const cartId = cart.value.carts[index].id
    item.data.qty = newQty
    await updateCart(cartId, item)
      .then((res) => {
        notify(true, `${tempProduct.value.title}${res.data.message}`)
        isSpinning.value = false
      })
      .catch((err) => {
        notify(false, `${err.response.data.message}`)
      })
    await getCart()
    myQty.value = 1
  } else {
    // 沒有在購物車裡面
    await createCart(item)
      .then((res) => {
        notify(true, `${tempProduct.value.title}${res.data.message}`)
        isSpinning.value = false
      })
      .catch((err) => {
        notify(false, `${err.response.data.message}`)
      })
    await getCart()
    myQty.value = 1
  }
}
onMounted(() => {
  getProduct()
})
</script>
