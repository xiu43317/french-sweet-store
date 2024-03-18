<template>
  <myLoading :active="isLoading"></myLoading>
  <div class="container">
    <nav style="--bs-breadcrumb-divider: '>'" aria-label="breadcrumb" class="mt-3">
      <ol class="breadcrumb">
        <li class="breadcrumb-item"><a class="link-secondary fs-5 text-decoration-none" href="#/products">產品列表</a></li>
        <li class="breadcrumb-item text-success fw-bold fs-5" aria-current="page">產品資訊</li>
      </ol>
    </nav>
    <div v-if="tempProduct">
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
        <div class="col-md-6 d-flex flex-column">
          <h4 class="fs-1 fw-bold mb-3">{{ tempProduct.title }}</h4>
          <div>
            <span class="badge bg-success rounded-pill fs-6 mb-3">{{
              tempProduct.category
            }}</span>
          </div>
          <p class="fs-5 my-3">尺寸/包裝：{{ tempProduct.description }}</p>
          <div class="h4">售價：NT$ {{ tempProduct.price }} 元</div>
          <del class="fs-6 mb-3">原價：NT$ {{ tempProduct.origin_price }} 元</del>
          <div class="mb-2 mt-auto">
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
                class="btn btn-success"
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
      <hr>
    </div>
    <div class="row mt-3">
        <div class="col-lg-8 col-12">
          <p class="fs-3">商品資訊：</p>
          <p class="fs-4"> {{ tempProduct.content }} </p>
          <br>
          <p class="fs-3">保存方式：</p>
          <p class="fs-4"> {{ tempProduct.presever }} </p>
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
const tempProduct = ref({})
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
