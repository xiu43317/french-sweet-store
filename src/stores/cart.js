import { defineStore } from 'pinia'
import { ref, computed, onMounted } from 'vue'
import { notify } from '@/api/toast.js'
import api from '@/api/axios'

export const useCartStore = defineStore('cart', () => {
  // 等於option API的 state: () => { return {count:0}}
  const cart = ref({ carts: [] })
  // 購物車內加到購物車按鈕狀態
  const addBtnState = ref(false)
  // 購物車讀取狀態
  const isCartLoading = ref(false)
  // 等於option API的getters: {doubleCount: (state) => state.counter * 2}
  const cartChanged = computed(() => cart.value)
  // 等於option API的actions: { increment(){this.count ++}}
  const getCart = async () => {
    isCartLoading.value = true
    return await api.getCart()
      .then((res) => {
        notify(true, '已更新購物車')
        cart.value = res.data.data
        isCartLoading.value = false
      })
      .catch((err) => {
        notify(false, err.response.data.message)
        isCartLoading.value = false
      })
  }
  // 新增
  const createCart = async (cart) => {
    return await api.createCart(cart)
  }
  // 更新
  const updateCart = async (cartId, cart) => {
    return await api.updateCart(cartId, cart)
  }
  // 刪除單一購物車
  const deleteCart = async (cartId) => {
    return await api.deleteCart(cartId)
  }
  // 刪除全部購物車
  const deleteAllCart = async () => {
    return await api.deleteCartAll()
  }
  // 套用優惠眷
  const useCoupon = async (coupon) => {
    return await api.useCoupon(coupon)
  }
  // 改變購物車按鈕Disabled狀態
  const changeAddStatus = (status) => {
    if (status) {
      addBtnState.value = true
    } else {
      addBtnState.value = false
    }
  }
  onMounted(() => {
    getCart()
  })
  // 與composition一樣要return
  return {
    cart,
    cartChanged,
    getCart,
    createCart,
    updateCart,
    deleteCart,
    deleteAllCart,
    useCoupon,
    addBtnState,
    changeAddStatus,
    isCartLoading
  }
})
