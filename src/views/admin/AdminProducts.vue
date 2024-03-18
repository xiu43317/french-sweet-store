<template>
  <myLoading :active="isLoading"></myLoading>
  <div class="h3 text-center mt-4">後台產品列表</div>
  <div class="container">
    <div class="text-end mt-4">
      <button type="button" class="btn btn-primary" @click="openModal('new')">
        建立新的產品
      </button>
    </div>
    <table class="table mt-4">
      <thead>
        <tr>
          <th width="120">分類</th>
          <th>產品名稱</th>
          <th width="150">商品推薦</th>
          <th width="120">原價</th>
          <th width="120">售價</th>
          <th width="100">是否啟用</th>
          <th width="120">編輯</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="item in products" :key="item.id">
          <td>{{ item.category }}</td>
          <td>{{ item.title }}</td>
          <td>
            <span v-for="(star, index) in 5" :key="index">
              <span v-if="index + 1 <= item.stars">
                <font-awesome-icon icon="fas fa-star" />
              </span>
              <span v-else>
                <i class="far fa-star"></i>
              </span>
            </span>
          </td>
          <td class="text-end">{{ item.origin_price }}</td>
          <td class="text-end">{{ item.price }}</td>
          <td>
            <span v-if="item.is_enabled" class="text-success">啟用</span>
            <span v-else>未啟用</span>
          </td>
          <td>
            <div class="btn-group">
              <button
                type="button"
                class="btn btn-outline-primary btn-sm"
                @click="openModal('edit', item)"
              >
                編輯
              </button>
              <button
                type="button"
                class="btn btn-outline-danger btn-sm"
                @click="openModal('delete', item)"
              >
                刪除
              </button>
            </div>
          </td>
        </tr>
      </tbody>
    </table>
    <!-- openModal -->
    <EditProduct
      :is-new="isNew"
      :temp-product="tempProduct"
      :current-page="currentPage"
      @get-products="getProducts"
      ref="productModal"
    />
    <!-- deleteModal -->
    <DeleteProduct
      :product="tempProduct"
      @delete-item="deleteProduct"
      ref="delProductModal"
    />
    <!-- pagination -->
    <BottomPagination
      :pages="pages"
      @emit-page="getProducts"
      ref="pagination"
    />
  </div>
</template>

<script>
import EditProduct from '@/modals/Editmodal.vue'
import DeleteProduct from '@/modals/DeleteModal.vue'
import BottomPagination from '@/components/BottomPagination.vue'
import { ref, onMounted } from 'vue'
import axios from 'axios'

const url = import.meta.env.VITE_APP_API_URL
const path = import.meta.env.VITE_APP_API_NAME
export default {
  components: { EditProduct, DeleteProduct, BottomPagination },
  setup (props) {
    const tempProduct = ref({
      imagesUrl: []
    })
    const products = ref([])
    const isNew = ref(true)
    const pages = ref({})
    const productModal = ref(null)
    const delProductModal = ref(null)
    const isLoading = ref(false)
    const currentPage = ref(1)
    const getProducts = (page = 1) => {
      isLoading.value = true
      axios
        .get(`${url}/api/${path}/admin/products?page=${page}`)
        .then((res) => {
          // console.log(res.data.products);
          products.value = res.data.products
          pages.value = res.data.pagination
          currentPage.value = page
          isLoading.value = false
        })
        .catch((error) => {
          console.dir(error)
          isLoading.value = false
        })
    }
    const openModal = (status, item = {}) => {
      if (status === 'new') {
        tempProduct.value = {
          imagesUrl: []
        }
        isNew.value = true
        setTimeout(() => {
          productModal.value.openModal()
        }, 500)
      } else if (status === 'edit') {
        tempProduct.value = { ...item }
        if (!tempProduct.value.imagesUrl) {
          tempProduct.value.imagesUrl = []
        }
        isNew.value = false
        setTimeout(() => {
          productModal.value.openModal()
        }, 500)
      } else if (status === 'delete') {
        tempProduct.value = item
        setTimeout(() => {
          delProductModal.value.openModal()
        }, 500)
      }
    }
    const deleteProduct = (id) => {
      axios
        .delete(`${url}/api/${path}/admin/product/${id}`)
        .then((res) => {
          alert(res.data.message)
          delProductModal.value.hideModal()
          getProducts(currentPage.value)
        })
        .catch((error) => {
          alert(error.response.data.message)
          delProductModal.value.hideModal()
        })
    }
    onMounted(() => {
      getProducts()
    })
    return {
      products,
      isNew,
      pages,
      tempProduct,
      productModal,
      delProductModal,
      isLoading,
      currentPage,
      getProducts,
      openModal,
      deleteProduct
    }
  }
}
</script>
