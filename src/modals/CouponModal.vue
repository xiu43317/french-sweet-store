<template>
<div
    id="couponModal"
    ref="modal"
    class="modal fade"
    tabindex="1"
    aria-labelledby="couponModalLabel"
    aria-hidden="true"
>
  <div class="modal-dialog" role="document">
    <div class="modal-content">
      <div class="modal-header bg-secondary">
        <h5 class="modal-title text-white">
          <span v-show="isNew">新增優惠券</span>
          <span v-show="!isNew">更新優惠券</span>
        </h5>
        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
      </div>
      <div class="modal-body">
        <div class="mb-3">
            <label for="title">標題</label>
            <input type="text" class="form-control" id="title" placeholder="請輸入標題" v-model="tempCoupon.title">
        </div>
        <div class="mb-3">
            <label for="coupon_code">優惠碼</label>
            <input type="text" class="form-control" id="coupon_code"
            placeholder="請輸入優惠碼" v-model="tempCoupon.code">
        </div>
        <div class="mb-3">
            <label for="due_date">到期日</label>
            <input type="date" class="form-control" id="due_date" v-model="dueDate">
        </div>
        <div class="mb-3">
            <label for="price">折扣百分比</label>
            <input type="number" class="form-control" id="price" placeholder="請輸入折扣百分比" v-model.number="tempCoupon.percent" min="1">
        </div>
        <div class="mb-3">
          <div class="form-check">
              <input type="checkbox" class="form-check-input"
              :true-value="1"
              :false-value="0"
              v-model="tempCoupon.is_enabled">
              <label class="form-check-label" for="is_enabled">
                  是否啟用
              </label>
          </div>
        </div>
      </div>
      <div class="modal-footer">
        <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
        <button type="button" class="btn btn-primary" @click="updateCoupon()">更新優惠券</button>
      </div>
    </div>
  </div>
</div>
</template>

<script>
import { Modal } from 'bootstrap'
import { ref, onMounted, watch } from 'vue'

export default {
  props: ['coupon', 'isNew'],
  emits: ['update'],
  setup (props, ctx) {
    const couponModal = ref(null)
    const tempCoupon = ref({})
    const dueDate = ref(null)
    const isNewCoupon = ref(false)
    const modal = ref(null)
    const openModal = () => {
      couponModal.value.show()
    }
    const closeModal = () => {
      couponModal.value.hide()
    }
    const updateCoupon = () => {
      if (tempCoupon.value.percent < 1) alert('折扣百分比不得小於1')
      else ctx.emit('update', tempCoupon.value)
    }
    onMounted(() => {
      couponModal.value = new Modal(modal.value)
    })
    watch(() => props.coupon, () => {
      tempCoupon.value = { ...props.coupon }
      tempCoupon.value.due_date = tempCoupon.value.due_date * 1000
      const dateAndTime = new Date(tempCoupon.value.due_date).toISOString().split('T')
      dueDate.value = dateAndTime[0]
    })
    watch(dueDate, () => {
      tempCoupon.value.due_date = Math.floor(new Date(dueDate.value))
    })
    watch(() => props.isNew, () => {
      isNewCoupon.value = props.isNew
    })
    return {
      modal,
      couponModal,
      tempCoupon,
      dueDate,
      isNewCoupon,
      openModal,
      closeModal,
      updateCoupon
    }
  }
  /*
  data () {
    return {
      couponModal: '',
      tempCoupon: {},
      due_date: '',
      is_newCoupon: false
    }
  },
  props: ['coupon', 'isNew'],
  methods: {
    openModal () {
      this.couponModal.show()
    },
    closeModal () {
      this.couponModal.hide()
    },
    updateCoupon () {
      this.$emit('update', this.tempCoupon)
    }
  },
  mounted () {
    this.couponModal = new Modal(this.$refs.modal, {
      keyboard: false
    })
  },
  watch: {
    coupon () {
      this.tempCoupon = { ...this.coupon }
      this.tempCoupon.due_date = this.tempCoupon.due_date * 1000
      const dateAndTime = new Date(this.tempCoupon.due_date).toISOString().split('T')
      this.due_date = dateAndTime[0]
    },
    due_date () {
      this.tempCoupon.due_date = Math.floor(new Date(this.due_date))
    },
    isNew () {
      this.is_newCoupon = this.isNew
    }
  }
  */
}
</script>
