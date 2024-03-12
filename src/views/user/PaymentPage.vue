<template>
    <myLoading :active="isLoading"></myLoading>
    <FlowChart :outProgress="progress"/>
    <template v-if="isPaid">
      <FinishPayment/>
    </template>
    <template v-else>
      <OrderDetail :order="order" @payOrder="payOrder"/>
    </template>
</template>
<script>
import { ref, onMounted } from 'vue'
import FinishPayment from '@/components/FinishPayment.vue'
import FlowChart from '@/components/FlowChart.vue'
import OrderDetail from '@/components/OrderDetail.vue'
import { useRoute } from 'vue-router'
import api from '@/api/axios.js'
import { notify } from '@/api/toast.js'

export default {
  components: { FlowChart, OrderDetail, FinishPayment },
  setup (props) {
    const route = useRoute()
    const progress = ref(50)
    const isLoading = ref(false)
    // console.log(route.query.id)
    const isPaid = ref(false)
    const order = ref(null)
    const getOrder = (id) => {
      isLoading.value = true
      api.getOrder(id)
        .then((res) => {
          order.value = res.data.order
          // console.log(order.value)
          isLoading.value = false
          if (order.value.is_paid === true) {
            isPaid.value = true
            progress.value = 100
          }
        })
        .catch((err) => {
          // console.log(err)
          notify(err.response.data.message)
          isLoading.value = false
        })
    }
    const payOrder = () => {
      isLoading.value = true
      api.payOrder(route.query.id)
        .then((res) => {
          // console.log(res)
          isLoading.value = false
          if (res.data.success) isPaid.value = true
          progress.value = 100
          window.scrollTo(0, 0)
        })
        .catch((err) => {
          isLoading.value = false
          // console.log(err)
          notify(err.response.data.message)
        })
    }
    onMounted(() => {
      getOrder(route.query.id)
    })
    return {
      isLoading,
      order,
      getOrder,
      isPaid,
      progress,
      payOrder
    }
  }
}
</script>
