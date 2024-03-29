<template>
  <myLoading :active="isLoading"></myLoading>
  <div class="container">
    <div class="row">
      <div class="col-md-3">
        <ul class="list-group text-center side-menu">
          <li class="list-group-item bg-light h4 mb-0 text-dark fw-bold">
            甜點列表
          </li>
          <button
            type="button"
            @click="changeCategory('全部')"
            class="list-group-item list-group-item-action list-group-item-light h4 mb-0"
            :class="{'active':category === '全部'}"
            >所有甜點</button
          >
          <button
            type="button"
            @click="changeCategory('蛋糕')"
            class="list-group-item list-group-item-action list-group-item-light h4 mb-0"
            :class="{'active':category === '蛋糕'}"
            >特色蛋糕</button
          >
          <button
            type="button"
            @click="changeCategory('泡芙')"
            class="list-group-item list-group-item-action list-group-item-light h4 mb-0"
            :class="{'active':category === '泡芙'}"
            >閃電泡芙</button
          >
          <button
            type="button"
            @click="changeCategory('千層酥')"
            class="list-group-item list-group-item-action list-group-item-light h4 mb-0"
            :class="{'active':category === '千層酥'}"
            >酥脆千層</button
          >
          <button
            type="button"
            @click="changeCategory('馬卡龍')"
            class="list-group-item list-group-item-action list-group-item-light h4 mb-0"
            :class="{'active':category === '馬卡龍'}">
            經典馬卡龍</button>
        </ul>
      </div>
      <div class="col-md-9">
        <div class="row">
          <div class="col-md-4 mb-5 mt-1" v-for="product in products" :key="product.id">
            <ProductCard :product="product" v-if="product.is_enabled" @go-to-detail="goToDetail"
            data-aos="flip-left"/>
          </div>
        </div>
        <div class="d-flex justify-content-center">
          <BottomPagination @emit-page="getProducts" :pages="pages"/>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { useRoute, useRouter } from 'vue-router'
import { ref, onMounted } from 'vue'
import ProductCard from '@/components/ProductCard.vue'
import BottomPagination from '@/components/BottomPagination.vue'
import api from '@/api/axios'
import { notify } from '@/api/toast'

export default {
  components: { ProductCard, BottomPagination },
  setup () {
    const route = useRoute()
    const router = useRouter()
    const products = ref({})
    const pages = ref({})
    const tempProduct = ref({})
    const modal = ref(null)
    const isLoading = ref(false)
    const category = ref(route.query.category ? route.query.category : '全部')
    const changeCategory = (item) => {
      category.value = item
      if (item === '全部') getProducts(1)
      else getProducts(1, category.value)
      router.push(`/products?category=${item}`)
    }
    const getProducts = (page, category) => {
      isLoading.value = true
      api.getProducts(page, category)
        .then((res) => {
          products.value = [...res.data.products]
          pages.value = { ...res.data.pagination }
          window.scroll(0, 0)
          isLoading.value = false
        })
        .catch((err) => {
          notify(false, err.response.data.message)
          isLoading.value = false
        })
    }
    const goToDetail = (product) => {
      router.push(`/product/${product.id}`)
    }
    onMounted(() => {
      if (category.value === '全部') getProducts(1)
      else getProducts(1, category.value)
    })
    return {
      modal,
      tempProduct,
      pages,
      products,
      category,
      changeCategory,
      getProducts,
      goToDetail,
      isLoading
    }
  }
}
</script>

<style>
.side-menu {
  position: sticky;
  top: 110px;
}
</style>
