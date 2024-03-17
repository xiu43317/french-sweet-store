import { defineStore } from 'pinia'
import { ref, computed, onMounted } from 'vue'
import { notify } from '@/api/toast.js'
import api from '@/api/axios'

export const useCartStore = defineStore('cart', () => {
  const cart = ref({ carts: [] })
  const addBtnState = ref(false)
  const isCartLoading = ref(false)
  const cartChanged = computed(() => cart.value)
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
