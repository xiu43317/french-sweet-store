<template>
  <div class="row">
    <div class="col-4">
      <img
        :src="cart.product.imageUrl"
        alt=""
        class="img-fluid object-fit-cover"
      />
    </div>
    <div class="col-8 d-flex justify-content-between align-items-center my-3 my-lg-0">
      <div class="d-flex justify-content-between flex-lg-column">
        <div class="mt-3">
          <h5>{{ cart.product.title }}</h5>
          <p class="mt-3 mt-lg-0">單價：NT$ {{ cart.product.price }}</p>
          <p class="mt-lg-0 text-success" v-if="cart.final_total !== cart.total">折扣價：NT$ {{ cart.final_total }}</p>
          <p class="mt-lg-0" v-else>小計：NT$ {{ cart.total }}</p>
        </div>
      </div>
      <div class="input-group mb-3" style="max-width: 150px; max-height: 20px;">
          <button :disabled="isRenewing" class="fs-4 btn btn-outline-secondary border-0" type="button" @click="minusQty()">
            <i class="bi bi-dash-lg"></i>
          </button>
          <input
            v-model="qty"
            type="number"
            class="form-control text-center rounded"
            placeholder="1"
            min="1"
          />
          <button :disabled="isRenewing" class="fs-4 btn btn-outline-secondary border-0" type="button" @click="addQty()">
            <i class="bi bi-plus-lg"></i>
          </button>
        </div>
      <div class="d-flex flex-column justify-content-center">
        <a href="#" class="link-dark" @click.prevent="deleteItem()">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="32"
            height="32"
            fill="currentColor"
            class="bi bi-trash mt-2"
            viewBox="0 0 16 16"
          >
            <path
              d="M5.5 5.5A.5.5 0 0 1 6 6v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5m2.5 0a.5.5 0 0 1 .5.5v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5m3 .5a.5.5 0 0 0-1 0v6a.5.5 0 0 0 1 0z"
            />
            <path
              d="M14.5 3a1 1 0 0 1-1 1H13v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V4h-.5a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1H6a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1h3.5a1 1 0 0 1 1 1zM4.118 4 4 4.059V13a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1V4.059L11.882 4zM2.5 3h11V2h-11z"
            />
          </svg>
        </a>
      </div>
    </div>
  </div>
  <hr/>
</template>
<style scoped>
input[type="number"]::-webkit-inner-spin-button,
input[type="number"]::-webkit-outer-spin-button {
  -webkit-appearance: none;
  margin: 0;
}
</style>
<script>
import { ref, watch } from 'vue'
import { useCartStore } from '@/stores/cart.js'

export default {
  props: ['cart'],
  setup (props) {
    const cartStore = useCartStore()
    const { getCart, deleteCart, updateCart } = cartStore
    const deleteItem = async () => {
      await deleteCart(props.cart.id)
      await getCart()
    }
    const qty = ref(props.cart.qty)
    const isRenewing = ref(false)
    const addQty = async () => {
      isRenewing.value = true
      qty.value += 1
      const item = {
        data: {
          product_id: props.cart.product_id,
          qty: qty.value
        }
      }
      await updateCart(props.cart.id, item)
      await getCart()
      isRenewing.value = false
    }
    const minusQty = async () => {
      isRenewing.value = true
      qty.value -= 1
      if (qty.value === 0) qty.value = 1
      const item = {
        data: {
          product_id: props.cart.product_id,
          qty: qty.value
        }
      }
      await updateCart(props.cart.id, item)
      await getCart()
      isRenewing.value = false
    }
    watch(qty, () => {
      if (qty.value < 1) qty.value = 1
    })
    return {
      qty,
      addQty,
      minusQty,
      deleteItem,
      isRenewing
    }
  }
}
</script>
