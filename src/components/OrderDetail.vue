<template>
  <div class="container mt-5 mb-3" style="max-width: 800px">
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
              <CartItem />
            </div>
          </div>
        </div>
      </div>
    </div>
    <table class="table my-3">
      <tbody>
        <tr>
          <th width="100">訂單標號</th>
          <td>acbjjiocwsv-56x</td>
        </tr>
        <tr>
          <th width="100">Email</th>
          <td>abc@gmail</td>
        </tr>
        <tr>
          <th>姓名</th>
          <td>王曉強</td>
        </tr>
        <tr>
          <th>收件人電話</th>
          <td>0912345678</td>
        </tr>
        <tr>
          <th>收件人地址</th>
          <td>台中市和平路</td>
        </tr>
        <tr>
          <th width="100">訂單金額</th>
          <td>NT$ 100</td>
        </tr>
        <tr>
          <th>付款狀態</th>
          <td>
            <span>尚未付款</span>
            <!-- <span v-if="!order.is_paid">尚未付款</span>
            <span v-else class="text-success">付款完成</span> -->
          </td>
        </tr>
      </tbody>
    </table>
    <button class="btn btn-lg btn-secondary w-100">確認付款</button>
  </div>
</template>
<script>
import CartItem from './CartItem.vue'
export default {
  components: { CartItem },
  setup (props) {}
}
</script>
