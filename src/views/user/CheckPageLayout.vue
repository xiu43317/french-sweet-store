<template>
  <FlowChart />
  <div class="container my-4">
    <div class="my-5 row justify-content-center">
      <div class="col-lg-6">
        <h4 class="text-center">購物車資訊</h4>
        <hr />
        <ProductOrderCard />
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
                class="btn btn-outline-success"
                type="button"
                id="button-addon2"
              >
                套用
              </button>
            </div>
          </div>
          <div class="col-md-6 my-3 d-flex flex-row-reverse align-items-center">
            <span class="fs-4 fw-bold">總計：NT$ 400</span>
          </div>
        </div>
      </div>
      <div class="col-lg-6">
        <h4 class="text-center">訂購人資訊</h4>
        <hr />
        <v-form @submit="goToPayment()" class="bg-light p-3 rounded" ref="form" v-slot="{ errors }">
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
            <button type="submit" class="btn btn-success" :disabled="isSending">
              <font-awesome-icon
                icon="spinner"
                class="fa-spin"
                v-show="isSending"
              />
              送出訂單
            </button>
          </div>
        </v-form>
      </div>
    </div>
  </div>
</template>
<script>
import { ref } from 'vue'
import { useRouter } from 'vue-router'
import FlowChart from '@/components/FlowChart.vue'
import ProductOrderCard from '@/components/ProductOrderCard.vue'
export default {
  components: { FlowChart, ProductOrderCard },
  setup (props) {
    const router = useRouter()
    const goToPayment = () => {
      router.push('/payment')
    }
    const user = ref({
      email: '',
      name: '',
      address: '',
      tel: ''
    })
    const onSubmit = () => {
      console.log('sned')
    }
    const isPhone = (value) => {
      const phoneNumber = /^(09)[0-9]{8}$/
      return phoneNumber.test(value) ? true : '需要正確的電話號碼'
    }
    return {
      onSubmit,
      isPhone,
      user,
      goToPayment
    }
  }
}
</script>
