<template>
  <myLoading :active="isLoading"></myLoading>
  <div class="container">
    <nav style="--bs-breadcrumb-divider: '>'" aria-label="breadcrumb" class="mt-3">
      <ol class="breadcrumb">
        <li class="breadcrumb-item"><a class="link-secondary fs-5 text-decoration-none" href="#/products">產品列表</a></li>
        <li class="breadcrumb-item text-success fw-bold fs-5" aria-current="page">產品資訊</li>
      </ol>
    </nav>
    <div v-if="tempProduct">
      <div class="row">
        <div class="col-md-6">
          <img
            class="img-fluid object-fit-cover w-100 mb-2"
            :src="tempProduct.imageUrl"
            :alt="tempProduct.title"
            style="max-height: 400px"
            data-aos="zoom-in"
          />
        </div>
        <div class="col-md-6 d-flex flex-column">
          <h4 class="fs-1 fw-bold mb-3">{{ tempProduct.title }}</h4>
          <div>
            <span class="badge bg-success rounded-pill fs-6 mb-3">{{
              tempProduct.category
            }}</span>
          </div>
          <p class="fs-5 my-3">尺寸/包裝：{{ tempProduct.description }}</p>
          <div class="h4">售價：NT$ {{ tempProduct.price }} 元</div>
          <del class="fs-6 mb-3">原價：NT$ {{ tempProduct.origin_price }} 元</del>
          <div class="mb-2 mt-auto">
            <div class="input-group">
              <select
                class="form-select"
                id="inputGroupSelect02"
                v-model="myQty"
                :disabled="isSpinning"
              >
                <option default disabled>請選擇數量</option>
                <option :value="item" v-for="(item, index) in 10" :key="index">
                  {{ item }}
                </option>
              </select>
              <button
                :disabled="isSpinning"
                type="button"
                class="btn btn-success"
                @click="addToCart()"
              >
                <font-awesome-icon
                  icon="spinner"
                  class="fa-spin"
                  v-show="isSpinning"
                />
                加入購物車
              </button>
            </div>
          </div>
        </div>
        <!-- col-sm-6 end -->
      </div>
      <hr>
    </div>
    <div class="row mt-3">
        <div class="col-lg-8 col-12">
          <p class="fs-4 fw-bold">商品資訊：</p>
          <p class="fs-5"> {{ tempProduct.content }} </p>
          <br>
          <p class="fs-4 fw-bold">保存方式：</p>
          <p class="fs-5"> {{ tempProduct.presever }} </p>
        </div>
    </div>
    <hr>
    <p class="fs-2 fw-bold text-center my-5">相關商品</p>
    <div class="swiper-container position-relative">
      <div v-if="dataReady">
        <swiper
        :autoplay="false"
        :loop="products.length > 4 || windowWidth < 992 ?  true : false"
        :modules="modules"
        :slides-per-view="1"
        :breakpoints="{
          768:{
            slidesPerView: 2,
            slidesPerGroup: 1,
          },
          992:{
            slidesPerView: 4,
            slidesPerGroup: 1,
          }
        }"
        :space-between="10"
        @swiper="onSwiper"
        >
          <swiper-slide v-for="product in products"
                        :key="product.id">
            <ProductCard :product="product" @go-to-detail="goToDetail"/>
          </swiper-slide>
        </Swiper>
        <a href="#" v-if="products.length>4 || windowWidth < 992" class="position-absolute top-50 start-0" style="z-index: 100;" @click.prevent="slider.slidePrev()"><i class="bi bi-chevron-compact-left fs-1 text-dark"></i></a>
        <a href="#" v-if="products.length>4 || windowWidth < 992" class="position-absolute top-50 end-0" style="z-index: 100;" @click.prevent="slider.slideNext()"><i class="bi bi-chevron-compact-right fs-1 text-dark"></i></a>
      </div>
      <div v-else>
      <swiper
        :autoplay="true"
        :loop="true"
        :modules="modules"
        :pagination="{clickable:true}"
        :slides-per-view="1"
        :breakpoints="{
          768:{
            slidesPerView: 2,
            slidesPerGroup: 1,
          },
          992:{
            slidesPerView: 4,
            slidesPerGroup: 1,
          }
        }"
        :space-between="10"
        @swiper="onSwiper"
        >
          <swiper-slide v-for="product in 6"
                        :key="product.id">
            <ProductCard :imgUrl="product.imageUrl"
                        :title="product.title"
                        :price="product.price"
                        :category="product.category"/>
          </swiper-slide>
        </Swiper>
        <a href="#" class="position-absolute top-50 start-0" style="z-index: 100;" @click.prevent="slider.slidePrev()"><i class="bi bi-chevron-compact-left fs-1 text-dark"></i></a>
        <a href="#"  class="position-absolute top-50 end-0" style="z-index: 100;" @click.prevent="slider.slideNext()"><i class="bi bi-chevron-compact-right fs-1 text-dark"></i></a>
      </div>
    </div>
  </div>
</template>

<script setup>
import { useRoute, useRouter } from 'vue-router'
import { ref, onMounted, watch } from 'vue'
import api from '@/api/axios.js'
import { useCartStore } from '@/stores/cart'
import { storeToRefs } from 'pinia'
import { notify } from '@/api/toast.js'
import { Swiper, SwiperSlide } from 'swiper/vue'
import { Autoplay, Navigation, Pagination } from 'swiper/modules'
import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/pagination'
import ProductCard from '@/components/ProductCard.vue'

const cartStore = useCartStore()
const { createCart, updateCart, getCart } = cartStore
const { cart } = storeToRefs(cartStore)
const route = useRoute()
const router = useRouter()
const isSpinning = ref(false)
const isLoading = ref(false)
const myQty = ref(1)
const tempProduct = ref({})
const products = ref([])
const slider = ref(null)
const windowWidth = ref(window.innerWidth)
const modules = [Autoplay, Navigation, Pagination]
const dataReady = ref(false)
const goToDetail = (product) => {
  router.push(`/product/${product.id}`)
}
watch(() => route.params.id, () => {
  getProduct(route.params.id)
})
const onSwiper = (swiper) => {
  slider.value = swiper
}
const getProduct = () => {
  isLoading.value = true
  api
    .getProduct(route.params.id)
    .then((res) => {
      tempProduct.value = res.data.product
      getProducts()
    })
    .catch((err) => {
      notify(false, err.response.data.message)
      isLoading.value = false
    })
}
const getProducts = () => {
  api.getProducts(1, tempProduct.value.category)
    .then((res) => {
      products.value = res.data.products
      dataReady.value = true
      isLoading.value = false
    })
    .catch((err) => {
      notify(err.response.data.message)
    })
}
const addToCart = async () => {
  isSpinning.value = true
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
    await updateCart(cartId, item)
      .then((res) => {
        notify(true, `${tempProduct.value.title}${res.data.message}`)
        isSpinning.value = false
      })
      .catch((err) => {
        notify(false, `${err.response.data.message}`)
      })
    await getCart()
    myQty.value = 1
  } else {
    // 沒有在購物車裡面
    await createCart(item)
      .then((res) => {
        notify(true, `${tempProduct.value.title}${res.data.message}`)
        isSpinning.value = false
      })
      .catch((err) => {
        notify(false, `${err.response.data.message}`)
      })
    await getCart()
    myQty.value = 1
  }
}
onMounted(() => {
  getProduct()
  window.addEventListener('resize', () => {
    windowWidth.value = window.innerWidth
  })
})
</script>
