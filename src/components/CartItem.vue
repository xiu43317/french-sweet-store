<template>
  <div>
    <div class="row">
      <img
        :src="props.cart.product.imageUrl"
        class="img-fluid object-fit-cover col-4"
        style="height: 100px"
        :alt="props.cart.product.title"
      />
      <div class="col-8 d-flex justify-content-between">
        <div class="d-flex flex-column justify-content-evenly">
          <p class="lh-sm fw-bold fs-5">{{ props.cart.product.title }}</p>
          <div class="d-flex align-items-center">
          <span>NT$ {{ props.cart.product.price }} x </span>
          <input type="number" class="form-control ms-2" min="1"
          :disabled="props.isBtnDisabled"
          v-model="myQty"
          style="width: 60px; height: 30px;"
          @change="updateItem()">
          </div>
          <span v-if="props.cart.total===props.cart.final_total">小計：NT$ {{props.cart.total}}</span>
          <span class="text-success mt-1" v-else>折扣價：NT$ {{ delFloat(props.cart.final_total) }}</span>
        </div>
        <a href="#" class="my-auto link-dark" @click.prevent="deleteItem()" v-if="props.isRemovable" :disabled="props.isBtnDisabled">
          <font-awesome-icon icon="spinner" class="fa-spin" v-show="isLoading && props.isBtnDisabled"/>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="32"
            height="32"
            fill="currentColor"
            class="bi bi-trash"
            viewBox="0 0 16 16"
          >
            <path
              d="M5.5 5.5A.5.5 0 0 1 6 6v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5m2.5 0a.5.5 0 0 1 .5.5v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5m3 .5a.5.5 0 0 0-1 0v6a.5.5 0 0 0 1 0z"
            />
            <path
              d="M14.5 3a1 1 0 0 1-1 1H13v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V4h-.5a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1H6a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1h3.5a1 1 0 0 1 1 1zM4.118 4 4 4.059V13a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1V4.059L11.882 4zM2.5 3h11V2h-11z"
            />
          </svg>
        </a>
      </div>
    </div>
    <hr />
  </div>
</template>

<script setup>
import { ref, watch } from 'vue'
import { delFloat } from '@/api/math.js'
import { notify } from '@/api/toast.js'

const props = defineProps(['cart', 'isRemovable', 'isBtnDisabled'])
const emits = defineEmits(['deleteItem', 'updateItem'])
const deleteItem = () => {
  emits('deleteItem', props.cart)
  isLoading.value = true
}
const updateItem = () => {
  if (myQty.value < 0) {
    notify(false, '數量不得小於1')
    myQty.value = props.cart.qty
  } else {
    const cart = {
      data: {
        product_id: props.cart.product.id,
        qty: myQty.value
      }
    }
    emits('updateItem', props.cart.id, cart)
  }
}
const myQty = ref(props.cart.qty)
watch(() => props.isBtnDisabled, () => {
  if (!props.isBtnDisabled) isLoading.value = false
})
watch(() => props.cart, () => {
  myQty.value = props.cart.qty
})
const isLoading = ref(false)
</script>
