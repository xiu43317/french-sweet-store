<template>
  <div class="container mt-5 mb-3" style="max-width: 800px" v-if="userOrder">
    <div class="mx-auto">
      <h3 class="text-center">訂單資訊</h3>
      <hr />
      <div class="accordion" id="accordionExample">
        <div class="accordion-item">
          <h2 class="accordion-header" id="headingOne">
            <button
              class="accordion-button bg-secondary text-white"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#collapseOne"
              aria-expanded="true"
              aria-controls="collapseOne"
            >
              <strong class="fs-5">商品資訊</strong>
            </button>
          </h2>
          <div
            id="collapseOne"
            class="accordion-collapse collapse show"
            aria-labelledby="headingOne"
            data-bs-parent="#accordionExample"
          >
            <div class="accordion-body">
              <CartItem :isRemovable="false" :cart="item" v-for="item in userOrder.products" :key="item.id"/>
            </div>
          </div>
        </div>
      </div>
    </div>
    <table class="table my-3">
      <tbody>
        <tr>
          <th width="100">訂單標號</th>
          <td>{{ userOrder.id }}</td>
        </tr>
        <tr>
          <th width="100">Email</th>
          <td>{{ userOrder.user.email }}</td>
        </tr>
        <tr>
          <th>姓名</th>
          <td>{{ userOrder.user.name }}</td>
        </tr>
        <tr>
          <th>收件人電話</th>
          <td>{{ userOrder.user.tel }}</td>
        </tr>
        <tr>
          <th>收件人地址</th>
          <td>{{ userOrder.user.address }}</td>
        </tr>
        <tr>
          <th width="100">訂單金額</th>
          <td>NT$ {{ delFloat(userOrder.total) }}</td>
        </tr>
        <tr>
          <th>付款狀態</th>
          <td>
            <span v-if="!userOrder.is_paid">尚未付款</span>
            <span v-else class="text-success">付款完成</span>
          </td>
        </tr>
        <tr>
          <th>備註</th>
          <td>{{ userOrder.message }}</td>
        </tr>
      </tbody>
    </table>
    <button @click="payOrder" class="btn btn-lg btn-secondary w-100" v-if="!userOrder.is_paid">確認付款</button>
  </div>
</template>
<script>
import CartItem from './CartItem.vue'
import { ref, watch } from 'vue'
import { delFloat } from '@/api/math.js'

export default {
  emits: ['payOrder'],
  components: { CartItem },
  props: ['order'],
  setup (props, ctx) {
    const removeItem = ref(false)
    const userOrder = ref(null)
    const payOrder = () => {
      ctx.emit('payOrder')
    }

    watch(() => props.order, () => {
      userOrder.value = props.order
      // console.log(userOrder.value)
    })
    return {
      removeItem,
      userOrder,
      payOrder,
      delFloat
    }
  }
}
</script>
