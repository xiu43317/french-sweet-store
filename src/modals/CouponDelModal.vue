<template>
  <div
    id="delCouponModal"
    ref="delCouponModal"
    class="modal fade"
    tabindex="-1"
    aria-labelledby="delProductModalLabel"
    aria-hidden="true"
  >
    <div class="modal-dialog">
      <div class="modal-content border-0">
        <div class="modal-header bg-danger text-white">
          <h5 id="delProductModalLabel" class="modal-title">
            <span>刪除優惠券</span>
          </h5>
          <button
            type="button"
            class="btn-close"
            data-bs-dismiss="modal"
            aria-label="Close"
          ></button>
        </div>
        <div class="modal-body text-start">
          是否刪除
          <strong class="text-danger">{{ coupon.title }}</strong>
          優惠券(刪除後將無法恢復)。
        </div>
        <div class="modal-footer">
          <button
            type="button"
            class="btn btn-outline-secondary"
            @click="closeModal()"
          >
            取消
          </button>
          <button type="button" class="btn btn-danger" @click="deleteCoupon()">
            確認刪除
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { Modal } from 'bootstrap'
import { ref, onMounted } from 'vue'
export default {
  props: ['coupon'],
  emits: ['deleteCoupon'],
  setup (props, context) {
    let delModal
    const delCouponModal = ref(null)
    const openModal = () => {
      delModal.show()
    }
    const closeModal = () => {
      delModal.hide()
    }
    const deleteCoupon = () => {
      context.emit('deleteCoupon', props.coupon.id)
    }
    onMounted(() => {
      delModal = new Modal(delCouponModal.value)
    })
    return {
      openModal,
      closeModal,
      delModal,
      deleteCoupon,
      delCouponModal
    }
  }
}
</script>
