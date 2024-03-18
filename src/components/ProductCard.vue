<template>
    <div class="card h-100" @click="goToDetail()">
      <div class="position-relative bg-img">
        <img
          :src="tempProduct.imageUrl"
          class="card-img-top img-fluid object-fit-cover"
          :alt="tempProduct.title"
          style="height: 250px;"
        />
        <div class="title-bg position-absolute w-100 top-0
        d-flex justify-content-center align-items-end">
          <p class="text-white fs-3 fw-bold">查看內容</p>
        </div>
      </div>
      <div class="card-body">
        <div class="mb-3">
        <span class="bg-success text-white py-1 px-2 rounded">{{ tempProduct.category }}</span>
        </div>
        <h5 class="card-title fs-4">{{ tempProduct.title }}</h5>
        <p class="card-text fs-5">
          NT$ {{ tempProduct.price }}
        </p>
        <button class="btn btn-outline-secondary w-100" @click.stop="addToCart()" :disabled="addBtnState">
          <font-awesome-icon icon="spinner" class="fa-spin" v-show="isSpinning"/>
          加入購物車
        </button>
      </div>
    </div>
</template>

<script>
import { ref } from 'vue'
import { useCartStore } from '@/stores/cart'
import { storeToRefs } from 'pinia'
import { notify } from '@/api/toast.js'

export default {
  props: ['product'],
  setup (props, context) {
    const cartStore = useCartStore()
    const isSpinning = ref(false)
    const { getCart, updateCart, createCart, changeAddStatus } = cartStore
    const { cart, addBtnState } = storeToRefs(cartStore)
    const productModal = ref(null)
    const tempProduct = { ...props.product }
    const goToDetail = () => {
      context.emit('go-to-detail', tempProduct)
    }
    const addToCart = async () => {
      const title = tempProduct.title
      isSpinning.value = true
      changeAddStatus(true)
      const index = cart.value.carts.findIndex(item => item.product_id === tempProduct.id)
      const item = {
        data: {
          product_id: tempProduct.id,
          qty: 1
        }
      }
      // 有在購物車裡面
      if (index !== -1) {
        const newQty = cart.value.carts[index].qty + 1
        const cartId = cart.value.carts[index].id
        item.data.qty = newQty
        await updateCart(cartId, item)
          .then((res) => {
            notify(true, `${title}${res.data.message}`)
          })
          .catch((err) => {
            notify(false, err.response.data.message)
          })
        await getCart()
      } else {
        // 沒有在購物車裡面
        await createCart(item)
          .then((res) => {
            notify(true, `${title}${res.data.message}`)
          })
          .catch((err) => {
            notify(false, err.response.data.message)
          })
        await getCart()
      }
      isSpinning.value = false
      changeAddStatus(false)
    }
    return {
      isSpinning,
      cartStore,
      addToCart,
      goToDetail,
      updateCart,
      createCart,
      tempProduct,
      productModal,
      addBtnState,
      changeAddStatus,
      getCart,
      cart
    }
  }
}
</script>

<style scoped>
  .card:hover img {
    transform: scale(1.1);
  }
  .card:hover {
    cursor: pointer;
  }
  .title-bg {
    height: 250px;
    background-color:rgba(0, 0, 0, 0.5);
    z-index: -100;
  }
  .title-bg p{
    transition: 0.5s;
  }
  .card:hover .title-bg p{
    transform:translateY(-80px);
    display: block;
  }
  .card:hover .title-bg {
    z-index: 100;
  }
  .card img {
    transition: 0.5s;
  }
  .card .bg-img {
    overflow: hidden;
  }
</style>
