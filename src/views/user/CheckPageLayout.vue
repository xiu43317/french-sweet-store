<template>
  <myLoading :active="isCartLoading"></myLoading>
  <FlowChart :outProgress="0"/>
  <div class="container my-4">
    <div class="my-5 row justify-content-center">
      <div class="col-lg-6">
        <h4 class="text-center">購物車資訊</h4>
        <div class="mt-3 text-end">
          <button type="button" class="btn btn-outline-success" @click="clearCart()" :disabled="addBtnState || !cart.total">清空購物車</button>
        </div>
        <hr />
        <div class="text-center my-5" v-if="!cart.total">
          <p class="fs-4 fw-bold">你的購物車現在沒東西喔!</p>
          <router-link to="/products" class="btn btn-lg btn-success">選購商品</router-link>
        </div>
        <ProductOrderCard v-for="item in cart.carts" :key="item.id" :cart="item"/>
        <div class="row">
          <div class="col-md-6 my-3">
            <div class="input-group my-auto">
              <input
                type="text"
                class="form-control"
                placeholder="請輸入折扣碼"
                aria-label="Recipient's username"
                aria-describedby="button-addon2"
                v-model="couponCode"
              />
              <button
                :disabled="addBtnState || !cart.total"
                class="btn btn-outline-success"
                type="button"
                id="button-addon2"
                @click="useMyCoupon()"
              >
                套用
              </button>
            </div>
          </div>
          <div class="col-md-6 my-3 d-flex flex-row-reverse align-items-center">
            <span class="fs-4 fw-bold text-success" v-if="cart.final_total !== cart.total">折扣價：NT$ {{ delFloat(cart.final_total) }}</span>
            <span class="fs-4 fw-bold" v-else>總計：NT$ {{ cart.total }}</span>
          </div>
        </div>
      </div>
      <div class="col-lg-6">
        <h4 class="text-center">訂購人資訊</h4>
        <hr />
        <v-form @submit="goToPayment()"
        class="bg-light p-3 rounded" ref="form" v-slot="{ errors }">
          <div class="mb-3">
            <label for="email" class="form-label">Email</label>
            <v-field
              id="email"
              name="email"
              type="email"
              class="form-control"
              :class="{ 'is-invalid': errors['email'] }"
              placeholder="請輸入 Email"
              rules="email|required"
              v-model="user.email"
            ></v-field>
            <error-message
              name="email"
              class="invalid-feedback"
            ></error-message>
          </div>

          <div class="mb-3">
            <label for="name" class="form-label">收件人姓名</label>
            <v-field
              id="name"
              name="姓名"
              type="text"
              class="form-control"
              :class="{ 'is-invalid': errors['姓名'] }"
              placeholder="請輸入姓名"
              rules="required"
              v-model="user.name"
            ></v-field>
            <error-message name="姓名" class="invalid-feedback"></error-message>
          </div>

          <div class="mb-3">
            <label for="tel" class="form-label">收件人電話</label>
            <v-field
              id="tel"
              name="電話"
              type="text"
              class="form-control"
              :class="{ 'is-invalid': errors['電話'] }"
              placeholder="請輸入電話"
              :rules="isPhone"
              v-model="user.tel"
            ></v-field>
            <error-message name="電話" class="invalid-feedback"></error-message>
          </div>

          <div class="mb-3">
            <label for="address" class="form-label">收件人地址</label>
            <v-field
              id="address"
              name="地址"
              type="text"
              class="form-control"
              :class="{ 'is-invalid': errors['地址'] }"
              placeholder="請輸入地址"
              rules="required"
              v-model="user.address"
            ></v-field>
            <error-message name="地址" class="invalid-feedback"></error-message>
          </div>

          <div class="mb-3">
            <label for="message" class="form-label">留言</label>
            <textarea
              id="message"
              class="form-control"
              cols="30"
              rows="10"
              v-model="message"
            ></textarea>
          </div>
          <div class="text-end">
            <button type="submit" class="btn btn-success" :disabled="addBtnState || !cart.total">
              送出訂單
            </button>
          </div>
        </v-form>
      </div>
    </div>
  </div>
</template>
<script>
import { ref, onMounted } from 'vue'
import { useRouter } from 'vue-router'
import FlowChart from '@/components/FlowChart.vue'
import ProductOrderCard from '@/components/ProductOrderCard.vue'
import { useCartStore } from '@/stores/cart.js'
import { storeToRefs } from 'pinia'
import api from '@/api/axios.js'
import { delFloat } from '@/api/math.js'
import { notify } from '@/api/toast.js'
import Swal from 'sweetalert2'

export default {
  components: { FlowChart, ProductOrderCard },
  setup (props) {
    const cartStore = useCartStore()
    const { cart, addBtnState, isCartLoading } = storeToRefs(cartStore)
    const { getCart, deleteAllCart, useCoupon, changeAddStatus } = cartStore
    const useMyCoupon = async () => {
      changeAddStatus(true)
      const coupon = {
        data: {
          code: couponCode.value
        }
      }
      await useCoupon(coupon)
        .then((res) => {
          notify(true, res.data.message)
          getCart()
        })
        .catch((err) => {
          notify(false, err.response.data.message)
        })
      changeAddStatus(false)
    }
    const clearCart = async () => {
      Swal.fire({
        icon: 'warning', // error\warning\info\question
        title: '確定刪除整個購物車？',
        text: '刪除後的資料無法恢復',
        showCancelButton: true,
        confirmButtonColor: 'red',
        cancelButtonColor: 'gray',
        confirmButtonText: '確定',
        cancelButtonText: '取消'
      }).then(async (result) => {
        if (result.isConfirmed) {
          changeAddStatus(true)
          // console.log('確認')
          await deleteAllCart()
            .then((res) => {
              notify(true, `全部${res.data.message}`)
            })
            .catch((err) => {
              console.log(err.response.data.message)
              notify(false, `${err.response.data.message}`)
            })
          await getCart()
          changeAddStatus(false)
        } else if (result.isDenied) {
          notify(false, '動作取消')
        }
      })
    }
    const router = useRouter()
    const couponCode = ref(null)
    const message = ref('')
    const goToPayment = () => {
      const data = {
        data: {
          user: user.value,
          message: message.value
        }
      }
      api.sendOrder(data)
        .then(async (res) => {
          await getCart()
          router.push(`/payment?id=${res.data.orderId}`)
        })
        .catch((err) => {
          console.log(err)
        })
    }
    const user = ref({
      email: '',
      name: '',
      address: '',
      tel: ''
    })
    const isPhone = (value) => {
      const phoneNumber = /^(09)[0-9]{8}$/
      return phoneNumber.test(value) ? true : '需要正確的電話號碼'
    }
    onMounted(() => {
      changeAddStatus(false)
    })
    return {
      cart,
      isCartLoading,
      addBtnState,
      changeAddStatus,
      cartStore,
      message,
      couponCode,
      isPhone,
      user,
      goToPayment,
      clearCart,
      useMyCoupon,
      delFloat
    }
  }
}
</script>
