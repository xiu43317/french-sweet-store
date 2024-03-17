<template>
  <!-- 導覽列 -->
  <nav class="navbar navbar-expand-lg navbar-light sticky-top bg-light">
    <div class="container">
      <button
        class="navbar-toggler"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#navbarNav"
        aria-controls="navbarNav"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span class="navbar-toggler-icon"></span>
      </button>
      <router-link to="/introduction" class="navbar-brand">
        <img
          src="@/assets/img/logo-removebg.png"
          height="80"
          alt="羅傑之家"
        />
      </router-link>
      <a
        class="nav-link order-md-1 position-relative"
        data-bs-toggle="offcanvas"
        href="#offcanvasExample"
        role="button"
        aria-controls="offcanvasExample"
        style="width: 40px; height: 40px;"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="40"
          height="40"
          fill="currentColor"
          class="bi bi-cart4"
          viewBox="0 0 16 16"
        >
          <path
            d="M0 2.5A.5.5 0 0 1 .5 2H2a.5.5 0 0 1 .485.379L2.89 4H14.5a.5.5 0 0 1 .485.621l-1.5 6A.5.5 0 0 1 13 11H4a.5.5 0 0 1-.485-.379L1.61 3H.5a.5.5 0 0 1-.5-.5M3.14 5l.5 2H5V5zM6 5v2h2V5zm3 0v2h2V5zm3 0v2h1.36l.5-2zm1.11 3H12v2h.61zM11 8H9v2h2zM8 8H6v2h2zM5 8H3.89l.5 2H5zm0 5a1 1 0 1 0 0 2 1 1 0 0 0 0-2m-2 1a2 2 0 1 1 4 0 2 2 0 0 1-4 0m9-1a1 1 0 1 0 0 2 1 1 0 0 0 0-2m-2 1a2 2 0 1 1 4 0 2 2 0 0 1-4 0"
          />
        </svg>
        <div class="rounded-circle bg-danger position-absolute start-100 translate-middle d-flex justify-content-center align-items-center"
             style="width: 20px; height: 20px; top: 5px;" v-show="cart.carts.length"><span class="text-white">{{ cart.carts.length }}</span></div>
      </a>
      <div class="collapse navbar-collapse" id="navbarNav">
        <ul class="navbar-nav mx-auto h4 nav-underline text-center">
          <li class="nav-item">
            <router-link to="/aboutus" class="nav-link" data-toggle>關於我們</router-link>
          </li>
          <li class="nav-item">
            <router-link to="/news" class="nav-link" data-toggle>最新消息</router-link>
          </li>
          <li class="nav-item">
            <router-link to="/products" class="nav-link" data-toggle>產品一覽</router-link>
          </li>
          <li class="nav-item">
            <router-link to="/notice" class="nav-link" data-toggle>購買須知</router-link>
          </li>
          <li class="nav-item">
            <router-link to="/orders" class="nav-link" data-toggle>訂單查詢</router-link>
          </li>
        </ul>
      </div>
    </div>
  </nav>
  <!-- 變動的內容 -->
  <router-view></router-view>
  <!-- 底部Banner -->
  <BottomBanner/>
  <div class="container-fluid py-5 bg-light h-100">
    <div class="copyright text-center fs-5" style="color: #89b0ae">
      <p>羅傑之家 所有圖片皆來自於網路</p>
      <p>Copyright © 2024 <router-link to="/admin" class="link-success">進入後台</router-link></p>
    </div>
  </div>
  <!-- 購物車側邊欄 -->
  <div
    class="offcanvas offcanvas-end"
    tabindex="-1"
    id="offcanvasExample"
    aria-labelledby="offcanvasExampleLabel"
  >
    <div class="offcanvas-header bg-light">
      <h5 class="offcanvas-title fs-3 mt-1" id="offcanvasExampleLabel">
        購物車
      </h5>
      <button
        type="button"
        class="btn-close text-reset"
        data-bs-dismiss="offcanvas"
        aria-label="Close"
      ></button>
    </div>
    <div class="offcanvas-body">
      <div class="mb-2 d-flex justify-content-end">
        <button type="button" class="btn btn-outline-success"
        @click="deleteAllItems" :disabled="clearButtoonDisable || !cart.total">
        <font-awesome-icon icon="spinner" class="fa-spin" v-show="isLoading"/>
        清空購物車
      </button>
      </div>
      <hr>
      <div class="text-center my-5" v-if="cart.total===0">
        <p class="fs-4 fw-bold">你的購物車裡沒東西喔！</p>
        <button type="button"
        data-bs-dismiss="offcanvas"
        class="btn btn-lg btn-success" @click="goToProducts()">繼續選購</button>
      </div>
      <!-- 做成元件 -->
      <CartItem v-for="item in cart.carts" :key="item.id"
      :cart="item" :isRemovable="removeItem" :isBtnDisabled="isBtnDisabled"
      @delete-item="deleteItem"/>
      <!-- 做成元件 -->
      <p class="h4 text-success" v-if="cart.final_total !== cart.total">折扣價：NT$ {{ delFloat(cart.final_total) }}</p>
      <p class="h4" v-else>總計：NT$ {{ cart.total }}</p>
      <div class="check mt-3">
        <button type="button" class="btn btn-secondary w-100 fs-4"
        data-bs-dismiss="offcanvas"
        @click="goToCheck()" :disabled="clearButtoonDisable || !cart.total">前往結帳</button>
      </div>
    </div>
  </div>
  <UpArrow/>
</template>

<script>
import { ref, onMounted } from 'vue'
import { Collapse } from 'bootstrap'
import { useRouter } from 'vue-router'
import CartItem from '@/components/CartItem.vue'
import BottomBanner from '@/components/BottomBanner.vue'
import { useCartStore } from '@/stores/cart'
import { storeToRefs } from 'pinia'
import Swal from 'sweetalert2'
import UpArrow from '@/components/UpArrow.vue'
import { notify } from '@/api/toast.js'
import { delFloat } from '@/api/math.js'

export default {
  components: { BottomBanner, CartItem, UpArrow },
  setup () {
    const removeItem = ref(true)
    const cartStore = useCartStore()
    const isLoading = ref(false)
    const clearButtoonDisable = ref(false)
    const { getCart, deleteAllCart, deleteCart } = cartStore
    const { cart } = storeToRefs(cartStore)
    const router = useRouter()
    const isBtnDisabled = ref(false)
    const goToCheck = () => {
      router.push('/check')
    }
    const goToProducts = () => {
      router.push('/products')
    }
    const deleteAllItems = () => {
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
          await deleteAllCart()
            .then((res) => {
              Swal.fire({
                title: '刪除成功',
                text: `全部${res.data.message}`,
                icon: 'success'
              })
            })
            .catch((err) => {
              Swal.fire({
                title: '刪除失敗',
                text: `${err.response.data.message}`,
                icon: 'error'
              })
            })
          isLoading.value = true
          clearButtoonDisable.value = true
          await getCart()
          isLoading.value = false
          clearButtoonDisable.value = false
        } else if (result.isDenied) {
          notify(false, '動作取消')
        }
      })
    }
    const deleteItem = async (cart) => {
      Swal.fire({
        icon: 'warning', // error\warning\info\question
        title: `確定刪除${cart.product.title}`,
        text: '刪除後的資料無法恢復',
        showCancelButton: true,
        confirmButtonColor: 'red',
        cancelButtonColor: 'gray',
        confirmButtonText: '確定',
        cancelButtonText: '取消'
      }).then(async (result) => {
        if (result.isConfirmed) {
          clearButtoonDisable.value = true
          isBtnDisabled.value = true
          await deleteCart(cart.id)
            .then((res) => {
              Swal.fire({
                title: '刪除成功',
                text: `${cart.product.title}${res.data.message}`,
                icon: 'success'
              })
            })
            .catch((err) => {
              Swal.fire({
                title: '刪除失敗',
                text: `${err.response.data.message}`,
                icon: 'error'
              })
            })
          await getCart()
          isBtnDisabled.value = false
          clearButtoonDisable.value = false
        } else if (result.isDenied) {
          notify(false, '動作取消')
        }
      })
    }
    onMounted(() => {
      const dataToggle = document.querySelectorAll('[data-toggle]')
      const menuToggle = document.getElementById('navbarNav')
      const bsCollapse = new Collapse(menuToggle, {
        toggle: false
      })

      dataToggle.forEach((item) => {
        item.addEventListener('click', () => {
          bsCollapse.toggle()
        })
      })
    })
    return {
      isBtnDisabled,
      clearButtoonDisable,
      removeItem,
      goToProducts,
      deleteAllItems,
      deleteAllCart,
      deleteCart,
      deleteItem,
      cart,
      goToCheck,
      getCart,
      isLoading,
      delFloat
    }
  }
}
</script>
