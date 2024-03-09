<template>
  <div
    class="modal fade"
    id="productModal"
    tabindex="-1"
    role="dialog"
    aria-labelledby="exampleModalLabel"
    aria-hidden="true"
    ref="modal"
  >
    <div class="modal-dialog modal-xl" role="document">
      <div class="modal-content border-0">
        <div class="modal-header bg-secondary text-white">
          <h5 class="modal-title" id="exampleModalLabel">
            <span>{{ tempProduct.title }}</span>
          </h5>
          <button
            type="button"
            class="btn-close"
            data-bs-dismiss="modal"
            aria-label="Close"
          ></button>
        </div>
        <div class="modal-body">
          <div class="row">
            <div class="col-md-6">
              <img
                class="img-fluid object-fit-cover w-100 mb-2"
                :src="tempProduct.imageUrl"
                alt=""
                style="max-height: 400px"
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
                  <select class="form-select" id="inputGroupSelect02" v-model="myQty">
                    <option default disabled>請選擇數量</option>
                    <option :value="item" v-for="(item,index) in 10" :key="index">{{ item }}</option>
                  </select>
                  <button type="button" class="btn btn-outline-secondary" @click="addToCart()">
                    加入購物車
                  </button>
                </div>
              </div>
            </div>
            <!-- col-sm-6 end -->
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import { Modal } from 'bootstrap'
import { ref, onMounted } from 'vue'
import { useCartStore } from '@/stores/cart'
import { storeToRefs } from 'pinia'

export default {
  props: ['product'],
  setup (props) {
    const cartStore = useCartStore()
    const { createCart, updateCart, getCart } = cartStore
    const { cart } = storeToRefs(cartStore)
    let myModal
    const myQty = ref(1)
    const modal = ref(null)
    const tempProduct = ref({})
    const openModal = () => {
      tempProduct.value = props.product
      myModal.show()
    }
    const closeModal = () => {
      myModal.hide()
    }
    const addToCart = async () => {
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
        console.log(item.data.qty)
        await updateCart(cartId, item)
        await getCart()
        myQty.value = 1
      } else {
        // 沒有在購物車裡面
        await createCart(item)
        await getCart()
        myQty.value = 1
      }
      closeModal()
    }
    onMounted(() => {
      myModal = new Modal(modal.value)
      modal.value.addEventListener('hidden.bs.modal', () => {
        myQty.value = 1
      })
    })
    return {
      myQty,
      tempProduct,
      modal,
      myModal,
      openModal,
      closeModal,
      createCart,
      updateCart,
      addToCart,
      getCart
    }
  }
}
</script>
