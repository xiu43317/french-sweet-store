<template>
  <myLoading :active="isLoading"></myLoading>
  <div class="h3 mt-4 text-center">優惠卷新增頁面</div>
  <div class="container">
    <div class="text-end mt-4">
      <button type="button" class="btn btn-primary" @click="openModal('new')">
        建立新的優惠卷
      </button>
      <!-- 新增優惠卷Modal -->
      <CouponModal ref="couponModal"
      @update="updateCoupon"
      :isNew="isNew"
      :coupon="tempCoupon"
      />
    </div>
    <table class="table mt-4">
      <thead>
        <tr>
          <th>名稱</th>
          <th>折扣百分比</th>
          <th>到期日</th>
          <th>折扣碼</th>
          <th>是否啟用</th>
          <th>編輯</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="item in coupons" :key="item.id">
          <td>{{ item.title }}</td>
          <td>{{ item.percent }}</td>
          <td>{{ item.formatDate }}
          </td>
          <td>{{ item.code }}</td>
          <td>
            <span v-if="item.is_enabled" class="text-success">啟用</span>
            <span v-else>未啟用</span>
          </td>
          <td>
            <div class="btn-group">
              <button
                type="button"
                class="btn btn-outline-primary btn-sm"
                @click="openModal('edit',item)"
              >
                  編輯
              </button>
              <button
                type="button"
                class="btn btn-outline-danger btn-sm"
                @click="openModal('delete',item)"
              >
                刪除
              </button>
            </div>
          </td>
        </tr>
      </tbody>
    </table>
    <!-- 刪除優惠券Modal -->
    <DeleteModal
      :product="tempCoupon"
      @delete-item="deleteCoupon"
      ref="delCouponModal"
    />
    <!-- pagination -->
    <BottomPagination
      :pages="pages"
      @emit-page="getCoupons"
      ref="pagination"
    />
  </div>
</template>

<script>
import CouponModal from '@/modals/CouponModal.vue'
import DeleteModal from '@/modals/DeleteModal.vue'
import BottomPagination from '@/components/BottomPagination.vue'
import { ref, onMounted } from 'vue'
import axios from 'axios'

const url = import.meta.env.VITE_APP_API_URL
const path = import.meta.env.VITE_APP_API_NAME
export default {
  components: { CouponModal, BottomPagination, DeleteModal },
  setup () {
    const coupons = ref([])
    const pages = ref({})
    const tempCoupon = ref({})
    const isLoading = ref(false)
    const isNew = ref(false)
    const couponModal = ref(null)
    const delCouponModal = ref(null)
    const emptyCoupon = ref({
      title: '',
      is_enabled: 0,
      code: '',
      due_date: new Date() / 1000,
      percent: '',
      id: ''
    })
    const openModal = (status, coupon = {}) => {
      if (status === 'new') {
        isNew.value = true
        tempCoupon.value = { ...emptyCoupon.value }
        couponModal.value.openModal()
      } else if (status === 'delete') {
        isNew.value = false
        tempCoupon.value = coupon
        delCouponModal.value.openModal()
      } else if (status === 'edit') {
        isNew.value = false
        tempCoupon.value = { ...coupon }
        couponModal.value.openModal()
      }
    }
    const closeModal = () => {
      couponModal.value.closeModal()
      delCouponModal.value.hideModal()
    }
    const getCoupons = (page = 1) => {
      isLoading.value = true
      axios.get(`${url}/api/${path}/admin/coupons?page=${page}`)
        .then((res) => {
          coupons.value = [...res.data.coupons]
          pages.value = { ...res.data.pagination }
          coupons.value.forEach((item) => {
            const date = new Date(item.due_date * 1000).toISOString().split('T')[0]
            item.formatDate = date
          })
          isLoading.value = false
        })
        .catch((err) => {
          alert(err.message)
          isLoading.value = false
        })
    }
    const deleteCoupon = (id) => {
      axios.delete(`${url}/api/${path}/admin/coupon/${id}`)
        .then((res) => {
          alert(res.data.message)
          delCouponModal.value.hideModal()
          getCoupons()
        }).catch((err) => {
          alert(err.message)
          delCouponModal.value.hideModal()
        })
    }
    const updateCoupon = (coupon) => {
      const newCoupon = {
        title: coupon.title,
        is_enabled: coupon.is_enabled,
        percent: coupon.percent,
        due_date: coupon.due_date / 1000,
        code: coupon.code
      }
      if (isNew.value) {
        axios.post(`${url}/api/${path}/admin/coupon`, { data: newCoupon })
          .then((res) => {
            alert(res.data.message)
            closeModal()
            getCoupons()
          })
          .catch((err) => {
            console.log(err)
            alert(err.message)
          })
      } else {
        axios.put(`${url}/api/${path}/admin/coupon/${coupon.id}`, { data: newCoupon })
          .then((res) => {
            alert(res.data.message)
            closeModal()
            getCoupons()
          })
          .catch((err) => {
            alert(err.response.data.message)
          })
      }
    }
    onMounted(() => {
      getCoupons()
    })
    return {
      coupons,
      pages,
      tempCoupon,
      isLoading,
      isNew,
      emptyCoupon,
      openModal,
      couponModal,
      delCouponModal,
      closeModal,
      getCoupons,
      deleteCoupon,
      updateCoupon
    }
  }
}
</script>
