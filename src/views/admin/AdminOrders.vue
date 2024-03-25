<template>
  <myLoading :active="isLoading"></myLoading>
  <div class="h3 text-center mt-4">訂單列表</div>
  <div class="container">
  <div class="text-end">
    <button type="button" class="btn btn-danger mt-3" @click="openDelAllModal()">刪除全部訂單</button>
  </div>
    <table class="table mt-4">
      <thead>
        <tr>
          <th>購買時間</th>
          <th>Email</th>
          <th>購買款項</th>
          <th>應付金額</th>
          <th>是否付款</th>
          <th>編輯</th>
        </tr>
      </thead>
      <tbody>
        <template v-for="item in orders" :key="item.id">
          <tr v-if="orders.length">
            <td>{{ date(item.create_at) }}</td>
            <td><span v-text="item.user.email" v-if="item.user"></span></td>
            <td>
              <ul class="list-unstyled">
                <li v-for="product in item.products" :key="product.id">
                  {{ product.product.title }} 數量：{{ product.qty }}
                  {{ product.product.unit }}
                </li>
              </ul>
            </td>
            <td class="text-right">{{ currency(item.total) }}</td>
            <td>
              <div class="form-check form-switch">
                <input
                  :disabled="isToggling"
                  class="form-check-input"
                  type="checkbox"
                  :id="`paidSwitch${item.id}`"
                  v-model="item.is_paid"
                  @change="updatePaid(item)"
                />
                <label class="form-check-label" :for="`paidSwitch${item.id}`">
                  <span v-show="item.is_paid">已付款</span>
                  <span v-show="!item.is_paid">未付款</span>
                </label>
              </div>
            </td>
            <td>
              <div class="btn-group">
                <button
                  class="btn btn-outline-primary btn-sm"
                  type="button"
                  @click="openModal(item)"
                >
                  檢視
                </button>
                <button
                  class="btn btn-outline-danger btn-sm"
                  type="button"
                  @click="openDelOrderModal(item)"
                >
                  刪除
                </button>
              </div>
            </td>
          </tr>
        </template>
      </tbody>
    </table>
    <BottomPagination
      :pages="pages"
      @emit-page="getOrders"
      ref="pagination"
    />
  </div>
  <DeleteModal
  :product="tempOrder"
  @delete-item="deleteOrder"
  ref="deleteModal"
  />
  <OrderModal
  :selectedOrder="tempOrder"
  @update-paid="updatePaid"
  ref="orderModal"
  />
  <DeleteAllModal
  ref="deleteAllModal"
  @clear-all="deleteAllOrders"/>
</template>

<script>
import OrderModal from '@/modals/OrderModal.vue'
import DeleteModal from '@/modals/DeleteModal.vue'
import DeleteAllModal from '@/modals/DeleteAllModal.vue'
import BottomPagination from '@/components/BottomPagination.vue'
import { ref, onMounted } from 'vue'
import axios from 'axios'

const url = import.meta.env.VITE_APP_API_URL
const path = import.meta.env.VITE_APP_API_NAME
export default {
  components: { DeleteModal, OrderModal, DeleteAllModal, BottomPagination },
  setup () {
    const isToggling = ref(false)
    const orders = ref([])
    const isLoading = ref(false)
    const tempOrder = ref({})
    const deleteAllModal = ref(null)
    const pages = ref({})
    const deleteModal = ref(null)
    const orderModal = ref(null)
    const getOrders = (page = 1) => {
      isLoading.value = true
      axios
        .get(`${url}/api/${path}/admin/orders?page=${page}`)
        .then((res) => {
          orders.value = [...res.data.orders]
          pages.value = { ...res.data.pagination }
          isLoading.value = false
        })
        .catch((err) => {
          alert(err.response.data.message)
          isLoading.value = false
        })
    }
    const date = (time) => {
      const localDate = new Date(time * 1000)
      return localDate.toLocaleDateString()
    }
    const currency = (num) => {
      const n = parseInt(num, 10)
      return `${n.toFixed(0).replace(/./g, (c, i, a) => (i && c !== '.' && ((a.length - i) % 3 === 0) ? `, ${c}`.replace(/\s/g, '') : c))}`
    }
    const openDelOrderModal = (item) => {
      tempOrder.value = item
      deleteModal.value.openModal()
    }
    const updatePaid = (item) => {
      isToggling.value = true
      axios.put(`${url}/api/${path}/admin/order/${item.id}`, { data: item })
        .then((res) => {
          alert(res.data.message)
          orderModal.value.closeModal()
          isToggling.value = false
          getOrders()
        })
        .catch((err) => {
          alert(err.response.data.message)
          isToggling.value = false
          orderModal.value.closeModal()
        })
    }
    const deleteOrder = (id) => {
      isLoading.value = true
      axios.delete(`${url}/api/${path}/admin/order/${id}`)
        .then((res) => {
          alert(res.data.message + '該訂單')
          deleteModal.value.hideModal()
          isLoading.value = false
          getOrders()
        })
        .catch((err) => {
          alert(err.response.data.message)
          deleteModal.value.hideModal()
          isLoading.value = false
        })
    }
    const openModal = (item) => {
      tempOrder.value = item
      orderModal.value.openModal()
    }
    const deleteAllOrders = () => {
      isLoading.value = true
      axios.delete(`${url}/api/${path}/admin/orders/all`)
        .then((res) => {
          alert(res.data.message)
          deleteAllModal.value.closeModal()
          isLoading.value = false
          getOrders()
        })
        .catch((err) => {
          alert(err.response.data.message)
          deleteAllModal.value.closeModal()
          isLoading.value = false
        })
    }
    const openDelAllModal = () => {
      deleteAllModal.value.openModal()
    }
    onMounted(() => {
      getOrders()
    })
    return {
      isToggling,
      orders,
      isLoading,
      tempOrder,
      pages,
      getOrders,
      date,
      currency,
      openDelOrderModal,
      updatePaid,
      deleteOrder,
      openModal,
      deleteAllOrders,
      orderModal,
      deleteModal,
      deleteAllModal,
      openDelAllModal
    }
  }
}
</script>
