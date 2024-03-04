<template>
  <!-- Banner -->
  <div class="hero-image">
    <div class="hero-text">
      <h1>I am John Doe</h1>
      <p>And I'm a Photographer</p>
      <a href="#"> 關於我們 </a>
    </div>
  </div>
  <div class="container">
    <div class="mt-5 mb-4 text-center">
      <h4 class="h2">最新消息</h4>
    </div>
    <div class="row">
      <NewsCard title="情人節快樂"
                imgUrl="https://images.unsplash.com/photo-1530098403657-0d93d64d087d?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fHZhbGVudGluZXMlMjBkYXl8ZW58MHwwfDB8fHww"
                subTitle="今天是2月14日情人節，訂購本店送你情人節優惠折扣碼"/>
      <NewsCard title="情人節快樂"
                imgUrl="https://images.unsplash.com/photo-1530098403657-0d93d64d087d?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fHZhbGVudGluZXMlMjBkYXl8ZW58MHwwfDB8fHww"
                subTitle="今天是2月14日情人節，訂購本店送你情人節優惠折扣碼"/>
      <NewsCard title="情人節快樂"
                imgUrl="https://images.unsplash.com/photo-1530098403657-0d93d64d087d?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fHZhbGVudGluZXMlMjBkYXl8ZW58MHwwfDB8fHww"
                subTitle="今天是2月14日情人節，訂購本店送你情人節優惠折扣碼"/>
    </div>
  </div>

  <div class="container">
    <div class="mt-5 mb-4 text-center">
      <h4 class="h2">法式經典</h4>
    </div>
    <div class="row">
      <ClassicDessert title="香酥可頌"
        imgUrl="https://plus.unsplash.com/premium_photo-1681324092707-830e58cb3bd8?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8Y3Jvc3NhaW50fGVufDB8MHwwfHx8MA%3D%3D"/>
      <ClassicDessert title="瓶蓋可麗露"
        imgUrl="https://media.istockphoto.com/id/1447421225/photo/le-cannel%C3%A9-a-small-cake-speciality-of-bordeaux.jpg?s=612x612&w=0&k=20&c=UfuUsBtu2aeZe-7Yv4z5SQFmtwVnF67TfGlKHTvsBPY="/>
      <ClassicDessert title="酥軟千層"
        imgUrl="https://images.unsplash.com/photo-1587122569949-ae6e755c6bdc?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8bWlsbGUlMjBmZXVpbGxlfGVufDB8MHwwfHx8MA%3D%3D"/>
      <ClassicDessert title="經典馬卡龍"
        imgUrl="https://images.unsplash.com/photo-1532063997725-c04d1abf7f67?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8bWFjYXJvb258ZW58MHwwfDB8fHww"/>
    </div>
  </div>
  <div class="container">
    <div class="mt-5 mb-4 text-center">
      <h4 class="h2">熱門商品</h4>
    </div>
    <swiper
    :autoplay="true"
    :loop="true"
    :navigation="true"
    :modules="modules"
    :pagination="{ clickable: true }"
    :slides-per-view="auto"
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
    @slideChange="onSlideChange"
    >
      <swiper-slide><ProductCard imgUrl="https://images.unsplash.com/photo-1580914653908-19a80ae52b82?q=80&w=1770&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"/></swiper-slide>
      <swiper-slide><ProductCard imgUrl="https://images.unsplash.com/photo-1577859369205-6de8f02d8335?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8bWFjYXJvb24lMjBjaG9jb2xhdGV8ZW58MHwwfDB8fHww"/></swiper-slide>
      <swiper-slide><ProductCard imgUrl="https://plus.unsplash.com/premium_photo-1663040681678-2fa657630dc8?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8bWFjYXJvb24lMjBjaG9jb2xhdGV8ZW58MHwwfDB8fHww"/></swiper-slide>
      <swiper-slide><ProductCard imgUrl="https://images.unsplash.com/photo-1612195325560-9d241f1e25cc?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTV8fG1hY2Fyb29uJTIwY2hvY29sYXRlfGVufDB8MHwwfHx8MA%3D%3D"/></swiper-slide>
      <swiper-slide><ProductCard imgUrl="https://images.unsplash.com/photo-1612195325687-5e8f2b31cb15?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTF8fG1hY2Fyb29uJTIwY2hvY29sYXRlfGVufDB8MHwwfHx8MA%3D%3D"/></swiper-slide>
    </Swiper>
  </div>
</template>
<style scoped>
.hero-image {
  /* Use "linear-gradient" to add a darken background effect to the image (photographer.jpg). This will make the text easier to read */
  background-image: linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)),
    url("https://images.unsplash.com/photo-1566121933407-3c7ccdd26763?q=80&w=1773&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D");

  /* Set a specific height */
  padding: 200px 2rem;

  /* Position and center the image to scale nicely on all screens */
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  position: relative;
}
.hero-text {
  text-align: center;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  color: white;
}
.hero-text a {
  display: inline-block;
  padding: 0.6em 3em;
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
import NewsCard from '@/components/NewsCard.vue'
import ClassicDessert from '@/components/ClassicDessert.vue'
import ProductCard from '@/components/ProductCard.vue'

export default {
  components: {
    Swiper,
    SwiperSlide,
    NewsCard,
    ClassicDessert,
    ProductCard
  },
  setup () {
    const onSlideChange = (swiper) => {
      console.log('slide change', swiper.activeIndex)
    }
    return {
      onSlideChange,
      modules: [Autoplay, Navigation, Pagination]
    }
  }
}
</script>
