<template>
    <FlowChart/>
    <template v-if="isPaid">
      <FinishPayment/>
    </template>
    <template v-else>
      <OrderDetail/>
    </template>
</template>
<script>
import { ref } from 'vue'
import FinishPayment from '@/components/FinishPayment.vue'
import FlowChart from '@/components/FlowChart.vue'
import OrderDetail from '@/components/OrderDetail.vue'

export default {
  components: { FlowChart, OrderDetail, FinishPayment },
  setup (props) {
    const isPaid = ref(true)
    return {
      isPaid
    }
  }
}
</script>
