import { defineStore } from 'pinia'
import { ref, computed, onMounted } from 'vue'
import api from '@/api/axios'

export const useCartStore = defineStore('cart', () => {
  // 等於option API的 state: () => { return {count:0}}
  const cart = ref({ carts: [] })
  // 等於option API的getters: {doubleCount: (state) => state.counter * 2}
  const cartChanged = computed(() => cart.value)
  // 等於option API的actions: { increment(){this.count ++}}
  const getCart = async () => {
    await api.getCart()
      .then((res) => {
        cart.value = res.data.data
        console.log(cart.value)
      })
  }
  // 新增
  const createCart = async (cart) => {
    await api.createCart(cart)
  }
  // 更新
  const updateCart = async (cartId, cart) => {
    await api.updateCart(cartId, cart)
  }
  // 刪除單一購物車
  const deleteCart = async (cartId) => {
    return await api.deleteCart(cartId)
  }
  // 刪除全部購物車
  const deleteAllCart = async () => {
    await api.deleteCartAll()
  }
  // 套用優惠眷
  const useCoupon = async (coupon) => {
    await api.useCoupon(coupon)
  }
  onMounted(() => {
    getCart()
  })
  // 與composition一樣要return
  return { cart, cartChanged, getCart, createCart, updateCart, deleteCart, deleteAllCart, useCoupon }
})
