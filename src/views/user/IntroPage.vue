<template>
  <myLoading :active="isLoading"></myLoading>
  <!-- Banner -->
  <div class="container-fluid">
    <div class="hero-image" data-aos="zoom-in">
      <div class="hero-text">
        <h1>歡迎光臨羅傑之家</h1>
        <p class="fs-4">我們提供法國道地的經典甜點</p>
        <router-link to="/aboutUs" class="rounded fs-5">關於我們</router-link>
      </div>
    </div>
  </div>
  <div class="container">
    <div class="mt-5 mb-4 text-center">
      <h4 class="h2">最新消息</h4>
    </div>
    <div class="row">
      <template v-for="(article,index) in articles" :key="article.id">
        <template v-if="index<3 && article.isPublic">
          <NewsCard :news="article" data-aos="fade-up" data-aos-duration="1000" data-aos-once="false"/>
        </template>
      </template>
    </div>
  </div>

  <div class="container">
    <div class="mt-5 mb-4 text-center">
      <h4 class="h2">法式經典</h4>
    </div>
    <div class="row">
      <ClassicDessert title="閃電泡芙"
        data-aos="fade-right" data-aos-duration="1000" data-aos-once="false"
        link="/products?category=泡芙"
        imgUrl="https://images.unsplash.com/photo-1508438943662-234d663bbfaa?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTJ8fCVDMyVBOWNsYWlyfGVufDB8MHwwfHx8MA%3D%3D"/>
      <ClassicDessert title="特色蛋糕"
        data-aos="fade-up" data-aos-duration="1000" data-aos-once="false"
        link="/products?category=蛋糕"
        imgUrl="https://media.istockphoto.com/id/1414484361/photo/delicious-fresh-fondant-with-hot-chocolate-and-mint-on-black-table-closeup.jpg?s=612x612&w=0&k=20&c=z7Ti0zZ_UIn09Xg4v3uQiKLk-VsOKomg5UbkQJNiEBE="/>
      <ClassicDessert title="酥軟千層"
        data-aos="fade-down" data-aos-duration="1000" data-aos-once="false"
        link="/products?category=千層酥"
        imgUrl="https://images.unsplash.com/photo-1587122569949-ae6e755c6bdc?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8bWlsbGUlMjBmZXVpbGxlfGVufDB8MHwwfHx8MA%3D%3D"/>
      <ClassicDessert title="經典馬卡龍"
        data-aos="fade-left" data-aos-duration="1000" data-aos-once="false"
        link="/products?category=馬卡龍"
        imgUrl="https://images.unsplash.com/photo-1532063997725-c04d1abf7f67?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8bWFjYXJvb258ZW58MHwwfDB8fHww"/>
    </div>
  </div>
  <div class="container position-relative">
    <div class="mt-5 mb-4 text-center">
      <h4 class="h2">五星推薦</h4>
    </div>
    <div class="swiper-container">
      <div v-if="dataReady">
        <swiper
        :autoplay="true"
        :loop="true"
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
          <swiper-slide v-for="product in hotProducts"
                        :key="product.id">
            <ProductCard :product="product" @go-to-detail="goToDetail"
            data-aos="fade-up" data-aos-duration="1000" data-aos-once="false"/>
          </swiper-slide>
        </Swiper>
        <a href="#" class="position-absolute top-50 start-0" style="z-index: 100;" @click.prevent="slider.slidePrev()"><i class="bi bi-chevron-compact-left fs-1 text-dark"></i></a>
        <a href="#"  class="position-absolute top-50 end-0" style="z-index: 100;" @click.prevent="slider.slideNext()"><i class="bi bi-chevron-compact-right fs-1 text-dark"></i></a>
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
<ProductDetailModal ref="modal" :product="tempProduct"/>
</template>
<style scoped>
.hero-image {
  background-image: linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)),
    url(https://images.unsplash.com/photo-1597905733802-7bec89b471b6?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fGZyZW5jaCUyMGRlc3NlcnR8ZW58MHwwfDB8fHww);
  padding: 200px 2rem;
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  position: relative;
}
.hero-text {
  text-align: center;
  position: absolute;
  width: 100%;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  color: white;
}
.hero-text a {
  display: inline-block;
  padding: 0.6em 1em;
  line-height: 1;
  background-color: rgba(2555, 255, 255, 0.2);
  box-shadow: 0 0 1.6em rgba(0, 0, 0, 0.16);
  border: 1px solid #fff;
  color: #faf9f9 !important;
  transition: 0.3s linear all;
  text-decoration: none;
}
.hero-text a:hover{
  background-color: rgba(2555, 255, 255, 0.5);
}
</style>
<script>
// Import Swiper Vue.js components
import { Swiper, SwiperSlide } from 'swiper/vue'

// Import Swiper styles
import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/pagination'
// Import custom Styles
// import './style.css'

// import required modules
import { Autoplay, Navigation, Pagination } from 'swiper/modules'
import { ref, onMounted } from 'vue'
import { useRouter } from 'vue-router'
import NewsCard from '@/components/NewsCard.vue'
import ClassicDessert from '@/components/ClassicDessert.vue'
import ProductCard from '@/components/ProductCard.vue'
import api from '../../api/axios'
import ProductDetailModal from '@/modals/ProductDetailModal.vue'

export default {
  components: {
    Swiper,
    SwiperSlide,
    NewsCard,
    ClassicDessert,
    ProductCard,
    ProductDetailModal
  },
  setup () {
    const isLoading = ref(false)
    const dataReady = ref(false)
    const slider = ref(null)
    const router = useRouter()
    const onSwiper = (swiper) => {
      slider.value = swiper
    }
    const articles = ref(null)
    const products = ref(null)
    const tempProduct = ref({})
    const hotProducts = ref(null)
    const modal = ref(null)
    const getArticles = (page) => {
      api.getArticles(page)
        .then((res) => {
          articles.value = [...res.data.articles]
          // console.log(articles.value)
        })
        .catch((err) => {
          console.log(err.response.message)
        })
    }
    const getProducts = (page) => {
      isLoading.value = true
      api.getProducts(page)
        .then((res) => {
          // console.log(res.data.products)
          products.value = [...res.data.products]
          // console.log(products.value)
          hotProducts.value = [...products.value.filter((item) => item.stars > 4)]
          dataReady.value = true
          isLoading.value = false
        })
        .catch((err) => {
          console.log(err.response.data.message)
          isLoading.value = false
        })
    }
    const goToDetail = (product) => {
      router.push(`/product/${product.id}`)
      // setTimeout(() => {
      //   modal.value.openModal()
      // }, 500)
    }
    onMounted(() => {
      getArticles(1)
      getProducts()
    })
    return {
      isLoading,
      modal,
      tempProduct,
      dataReady,
      hotProducts,
      products,
      articles,
      onSwiper,
      slider,
      goToDetail,
      modules: [Autoplay, Navigation, Pagination]
    }
  }
}
</script>
