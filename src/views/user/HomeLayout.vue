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
          src="@/assets/logo-removebg.png"
          height="80"
          alt=""
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
            <router-link to="/aboutus" class="nav-link">關於我們</router-link>
          </li>
          <li class="nav-item">
            <router-link to="/news" class="nav-link">最新消息</router-link>
          </li>
          <li class="nav-item">
            <router-link to="/products" class="nav-link">產品一覽</router-link>
          </li>
          <li class="nav-item">
            <router-link to="/notice" class="nav-link">購買須知</router-link>
          </li>
          <li class="nav-item">
            <router-link to="/orders" class="nav-link">訂單查詢</router-link>
          </li>
        </ul>
      </div>
    </div>
  </nav>
  <!-- 變動的內容 -->
  <router-view></router-view>
  <!-- 底部Banner -->
  <BottomBanner/>
  <div class="container-fluid py-5 bg-light">
    <div class="copyright text-center fs-5" style="color: #89b0ae">
      <p>羅傑之家 所有圖片皆來自於網路</p>
      <p>Copyright © 2024</p>
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
        <button type="button" class="btn btn-outline-success" @click="deleteAllItems">清空購物車</button>
      </div>
      <hr>
      <!-- 做成元件 -->
      <CartItem v-for="item in cart.carts" :key="item.id" :cart="item" :isRemovable="removeItem"/>
      <!-- 做成元件 -->
      <p class="h4 text-success" v-if="cart.final_total !== cart.total">折扣價：NT$ {{ cart.final_total }}</p>
      <p class="h4" v-else>總計：NT$ {{ cart.total }}</p>
      <div class="check mt-3">
        <button type="button" class="btn btn-secondary w-100 fs-4"
        data-bs-dismiss="offcanvas"
        @click="goToCheck()">前往結帳</button>
      </div>
    </div>
  </div>
</template>
<script>
import { ref, onMounted } from 'vue'
import { useRouter } from 'vue-router'
import CartItem from '@/components/CartItem.vue'
import BottomBanner from '@/components/BottomBanner.vue'
import { useCartStore } from '@/stores/cart'
import { storeToRefs } from 'pinia'

export default {
  components: { BottomBanner, CartItem },
  setup (props) {
    const removeItem = ref(true)
    const cartStore = useCartStore()
    const { getCart, deleteAllCart } = cartStore
    const { cart } = storeToRefs(cartStore)
    const router = useRouter()
    const msg = ref('Hello World')
    const goToCheck = () => {
      router.push('/check')
    }
    const deleteAllItems = async () => {
      await deleteAllCart()
      await getCart()
    }
    onMounted(() => {
      getCart()
    })
    return {
      removeItem,
      deleteAllItems,
      deleteAllCart,
      cart,
      msg,
      goToCheck,
      getCart
    }
  }
}
</script>
