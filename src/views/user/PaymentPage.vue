<template>
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

export default {
  components: { FlowChart, OrderDetail, FinishPayment },
  setup (props) {
    const route = useRoute()
    const progress = ref(50)
    console.log(route.query.id)
    const isPaid = ref(false)
    const order = ref(null)
    const getOrder = (id) => {
      api.getOrder(id)
        .then((res) => {
          order.value = res.data.order
          console.log(order.value)
          if (order.value.is_paid === true) {
            isPaid.value = true
            progress.value = 100
          }
        })
        .catch((err) => {
          console.log(err)
        })
    }
    const payOrder = () => {
      api.payOrder(route.query.id)
        .then((res) => {
          console.log(res)
          if (res.data.success) isPaid.value = true
          progress.value = 100
        })
        .catch((err) => {
          console.log(err)
        })
    }
    onMounted(() => {
      getOrder(route.query.id)
    })
    return {
      order,
      getOrder,
      isPaid,
      progress,
      payOrder
    }
  }
}
</script>
