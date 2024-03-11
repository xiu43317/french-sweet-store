<template>
  <myLoading :active="isLoading"></myLoading>
  <div class="h3 text-center mt-4">訂單列表</div>
  <div class="container">
  <div class="text-end">
    <button type="button" class="btn btn-danger mt-3" @click="this.$refs.deleteAllModal.openModal()">刪除全部訂單</button>
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
    <AdminPagination
      :pages="pagination"
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
import AdminPagination from '@/components/BottomPagination.vue'

const url = import.meta.env.VITE_APP_API_URL
const path = import.meta.env.VITE_APP_API_NAME
export default {
  data () {
    return {
      orders: [],
      isLoading: false,
      tempOrder: {},
      pagination: {}
    }
  },
  methods: {
    getOrders () {
      this.isLoading = true
      this.$http
        .get(`${url}/api/${path}/admin/orders`)
        .then((res) => {
          this.orders = [...res.data.orders]
          this.pagination = { ...res.data.pagination }
          this.isLoading = false
        })
        .catch((err) => {
          console.log(err.response.data.message)
          this.isLoading = false
        })
    },
    date (time) {
      const localDate = new Date(time * 1000)
      return localDate.toLocaleDateString()
    },
    currency (num) {
      const n = parseInt(num, 10)
      return `${n.toFixed(0).replace(/./g, (c, i, a) => (i && c !== '.' && ((a.length - i) % 3 === 0) ? `, ${c}`.replace(/\s/g, '') : c))}`
    },
    openDelOrderModal (item) {
      this.tempOrder = item
      this.$refs.deleteModal.openModal()
    },
    updatePaid (item) {
      this.$http.put(`${url}/api/${path}/admin/order/${item.id}`, { data: item })
        .then((res) => {
          alert(res.data.message)
          this.$refs.orderModal.closeModal()
          this.getOrders()
        })
        .catch((err) => {
          console.log(err)
          alert(err.response.data.message)
          this.$refs.orderModal.closeModal()
        })
    },
    deleteOrder (id) {
      this.isLoading = true
      this.$http.delete(`${url}/api/${path}/admin/order/${id}`)
        .then((res) => {
          this.isLoading = false
          alert(res.data.message + '該訂單')
          this.$refs.deleteModal.hideModal()
          this.getOrders()
        })
        .catch((err) => {
          this.isLoading = false
          alert(err.response.data.message)
          this.$refs.deleteModal.hideModal()
        })
    },
    openModal (item) {
      this.tempOrder = item
      this.$refs.orderModal.openModal()
    },
    deleteAllOrders () {
      this.isLoading = true
      this.$http.delete(`${url}/api/${path}/admin/orders/all`)
        .then((res) => {
          alert(res.data.message)
          this.isLoading = false
          this.getOrders()
        })
        .catch((err) => {
          alert(err.response.data.message)
          this.isLoading = false
        })
    }
  },
  mounted () {
    this.getOrders()
  },
  components: { DeleteModal, OrderModal, DeleteAllModal, AdminPagination }
}
</script>
