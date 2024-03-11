<template>
  <div class="modal fade"
       id="delAllModal"
       aria-hidden="true"
       tabindex="-1"
       ref="modal">
    <div class="modal-dialog">
      <div class="modal-content">
        <div class="modal-header bg-danger">
          <h5 class="modal-title text-light">清空訂單</h5>
          <button
            type="button"
            class="btn-close"
            data-bs-dismiss="modal"
            aria-label="Close"
          ></button>
        </div>
        <div class="modal-body">
          <p>確定清空所有訂單？</p>
        </div>
        <div class="modal-footer">
          <button
            type="button"
            class="btn btn-outline-secondary"
            data-bs-dismiss="modal"
          >
            取消
          </button>
          <button type="button" class="btn btn-danger" @click="this.$emit('clear-all')">確定刪除</button>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import { Modal } from 'bootstrap'
export default {
  data () {
    return {
      myModal: ''
    }
  },
  methods: {
    openModal () {
      this.myModal.show()
    },
    closeModal () {
      this.myModal.hide()
    }
  },
  mounted () {
    this.myModal = new Modal(this.$refs.modal)
  }
}
</script>
