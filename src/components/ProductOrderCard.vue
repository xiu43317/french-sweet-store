<template>
  <div class="row">
    <div class="col-md-4">
      <img
        :src="cart.product.imageUrl"
        :alt="cart.product.title"
        class="img-fluid object-fit-cover h-100"
      />
    </div>
    <div class="col-md-8 d-flex justify-content-between align-items-center my-3 my-lg-0">
      <div class="d-flex justify-content-between flex-lg-column">
        <div class="mt-3">
          <h5>{{ cart.product.title }}</h5>
          <p class="mt-3 mt-lg-0">單價：NT$ {{ cart.product.price }}</p>
          <p class="mt-lg-0 text-success" v-if="cart.final_total !== cart.total">折扣價：NT$ {{ delFloat(cart.final_total) }}</p>
          <p class="mt-lg-0" v-else>小計：NT$ {{ cart.total }}</p>
        </div>
      </div>
      <div class=" d-flex">
        <div class="input-group mb-3" style="max-width: 150px; max-height: 20px;">
            <button :disabled="addBtnState" class="fs-4 btn btn-sm btn-secondary border-0" type="button" @click="minusQty()">
              <i class="bi bi-dash-lg"></i>
            </button>
            <input
              v-model="qty"
              type="number"
              class="form-control text-center"
              placeholder="1"
              min="1"
              ref="myQty"
            />
            <button :disabled="addBtnState" class="fs-4 btn btn-sm btn-secondary border-0" type="button" @click="addQty()">
              <i class="bi bi-plus-lg"></i>
            </button>
          </div>
        <div class="ms-3 d-flex flex-column justify-content-center">
          <button type="button" class="bg-white border-0" @click="deleteItem()" :disabled="addBtnState">
            <font-awesome-icon icon="spinner" class="fa-spin" v-show="cartLoading"/>
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
          </button>
        </div>
      </div>
    </div>
  </div>
  <hr/>
</template>

<script>
import { ref, onMounted, watch } from 'vue'
import { useCartStore } from '@/stores/cart.js'
import { notify } from '@/api/toast'
import { storeToRefs } from 'pinia'
// import Swal from 'sweetalert2'
import { delFloat } from '@/api/math.js'

export default {
  props: ['cart'],
  emits: ['deleteOneItem'],
  setup (props, ctx) {
    const cartStore = useCartStore()
    const { getCart, updateCart, changeAddStatus } = cartStore
    const { addBtnState } = storeToRefs(cartStore)
    const qty = ref(props.cart.qty)
    const cartLoading = ref(false)
    const myQty = ref(null)
    let tempQty = 0
    const isRenewing = ref(false)
    const deleteItem = () => {
      ctx.emit('deleteOneItem', props.cart)
    }
    const addQty = async () => {
      changeAddStatus(true)
      qty.value += 1
      const item = {
        data: {
          product_id: props.cart.product_id,
          qty: qty.value
        }
      }
      await updateCart(props.cart.id, item)
        .then((res) => {
          notify(true, `${props.cart.product.title}已加入`)
        })
        .catch((err) => {
          notify(false, `${err.response.data.message}`)
        })
      await getCart()
      changeAddStatus(false)
    }
    const updateQty = async () => {
      changeAddStatus(true)
      const item = {
        data: {
          product_id: props.cart.product_id,
          qty: qty.value
        }
      }
      await updateCart(props.cart.id, item)
        .then(() => {
          notify(true, `${props.cart.product.title}已更新`)
        })
        .catch((err) => {
          notify(false, `${err.response.data.message}`)
        })
      await getCart()
      changeAddStatus(false)
    }
    const minusQty = async () => {
      changeAddStatus(true)
      qty.value -= 1
      if (qty.value < 1) {
        notify(false, '數量不得小於1')
        qty.value = props.cart.qty
        changeAddStatus(false)
        return
      }
      const item = {
        data: {
          product_id: props.cart.product_id,
          qty: qty.value
        }
      }
      await updateCart(props.cart.id, item)
        .then((res) => {
          notify(true, `${props.cart.product.title}已移除`)
        })
        .catch((err) => {
          notify(false, `${err.response.data.message}`)
        })
      await getCart()
      changeAddStatus(false)
    }
    onMounted(() => {
      changeAddStatus(false)
      myQty.value.addEventListener('focus', () => {
        tempQty = qty.value
      })
      myQty.value.addEventListener('blur', () => {
        if (qty.value < 1) {
          notify(false, '數量不得小於1')
          qty.value = props.cart.qty
        } else if (tempQty !== qty.value) {
          updateQty()
        }
      })
    })
    watch(() => props.cart.qty, () => {
      qty.value = props.cart.qty
    })
    return {
      qty,
      myQty,
      addQty,
      delFloat,
      minusQty,
      updateQty,
      deleteItem,
      isRenewing,
      cartLoading,
      addBtnState,
      changeAddStatus
    }
  }
}
</script>

<style scoped>
input[type="number"]::-webkit-inner-spin-button,
input[type="number"]::-webkit-outer-spin-button {
  -webkit-appearance: none;
  margin: 0;
}
</style>
