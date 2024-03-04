<template>
  <div class="container">
    <div class="row">
      <div class="col-md-3">
        <ul class="list-group text-center side-menu">
          <li class="list-group-item bg-secondary h4 mb-0 text-white">
            甜點列表
          </li>
          <a
            href="#"
            class="list-group-item list-group-item-action list-group-item-light h4 mb-0"
            >所有甜點</a
          >
          <a
            href="#"
            class="list-group-item list-group-item-action list-group-item-light h4 mb-0"
            >香酥可頌</a
          >
          <a
            href="#"
            class="list-group-item list-group-item-action list-group-item-light h4 mb-0"
            >瓶蓋可麗露</a
          >
          <a
            href="#"
            class="list-group-item list-group-item-action list-group-item-light h4 mb-0"
            >酥脆千層</a
          >
          <a
            href="#"
            class="list-group-item list-group-item-action list-group-item-light h4 mb-0"
            >經典馬卡龍</a
          >
        </ul>
      </div>
      <div class="col-md-9">
        <div class="row">
          <div class="col-md-4 mb-5 mt-1">
            <ProductCard />
          </div>
          <div class="col-md-4 mb-5 mt-1">
            <ProductCard />
          </div>
          <div class="col-md-4 mb-5 mt-1">
            <ProductCard />
          </div>
          <div class="col-md-4 mb-5 mt-1">
            <ProductCard />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<style>
.side-menu {
  position: sticky;
  top: 110px;
}
</style>
<script>
import { useRoute } from 'vue-router'
import ProductCard from '@/components/ProductCard.vue'
export default {
  components: { ProductCard },
  setup (props) {
    const route = useRoute()
    console.log(route.query)
    return {
    }
  }
}
</script>
