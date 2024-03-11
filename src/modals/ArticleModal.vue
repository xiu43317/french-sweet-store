<template>
  <div
    class="modal fade"
    id="productModal"
    tabindex="-1"
    role="dialog"
    aria-labelledby="exampleModalLabel"
    aria-hidden="true"
    ref="modal"
  >
    <div class="modal-dialog modal-xl" role="document">
      <div class="modal-content border-0">
        <div class="modal-header bg-dark text-white">
          <h5 class="modal-title" id="exampleModalLabel">
            <span v-if="isNew">新增貼文</span>
            <span v-else>編輯貼文</span>
          </h5>
          <button
            type="button"
            class="btn-close"
            data-bs-dismiss="modal"
            aria-label="Close"
          ></button>
        </div>
        <div class="modal-body">
          <div class="row">
            <div class="col-sm-4">
              <div class="mb-3">
                <label for="title" class="form-label">標題</label>
                <input
                  type="text"
                  class="form-control"
                  id="title"
                  v-model="tempArticle.title"
                  placeholder="請輸入標題"
                />
              </div>
              <div class="mb-3">
                <img :src="tempArticle.imageUrl"
                     class="img-fluid object-fit-cover">
                <label for="image" class="form-label">輸入圖片網址</label>
                <input
                  type="text"
                  class="form-control"
                  id="image"
                  v-model="tempArticle.imageUrl"
                  placeholder="請輸入圖片連結"
                />
                <div class="my-3">
                  <label for="formFile" class="form-label">上傳檔案</label>
                  <input class="form-control" type="file" id="formFile" ref="formFile" @change="uploadFile()"/>
                </div>
              </div>
              <div class="mb-3">
                <label for="author" class="form-label">作者</label>
                <input
                  type="text"
                  class="form-control"
                  id="author"
                  v-model="tempArticle.author"
                  placeholder="請輸入標題"
                />
              </div>
              <div class="mb-3">
                <label for="create_at">文章建立日期</label>
                <input
                  type="date"
                  class="form-control"
                  id="create_at"
                  v-model="create_at"
                />
              </div>
            </div>
            <div class="col-sm-8">
              <label for="tag" class="form-label">標籤</label>
              <div class="row gx-1 mb-3">
                <div
                  class="col-md-2 mb-1"
                  v-for="(label, key) in tempArticle.tag"
                  :key="key"
                >
                  <div class="input-group input-group-sm">
                    <input
                      type="text"
                      class="form-control form-control"
                      id="tag"
                      v-model="tempArticle.tag[key]"
                      placeholder="請輸入標籤"
                    />
                    <button
                      type="button"
                      class="btn btn-outline-danger"
                      @click="tempArticle.tag.splice(key, 1)"
                    >
                      <i class="bi bi-x"></i>
                    </button>
                  </div>
                </div>
                <div
                  class="col-md-2 mb-1"
                  v-if="
                    tempArticle.tag[tempArticle.tag.length - 1] ||
                    !tempArticle.tag.length
                  "
                >
                  <button
                    class="btn btn-outline-primary btn-sm d-block w-100"
                    type="button"
                    @click="tempArticle.tag.push('')"
                  >
                    新增標籤
                  </button>
                </div>
              </div>
              <div class="mb-3">
                <label for="description" class="form-label">文章描述</label>
                <textarea
                  type="text"
                  class="form-control"
                  id="description"
                  v-model="tempArticle.description"
                  placeholder="請輸入文章描述"
                ></textarea>
              </div>
              <div class="mb-3">
                <ckeditor
                  :editor="editor"
                  :config="editorConfig"
                  v-model="tempArticle.content"
                ></ckeditor>
              </div>
              <div class="mb-3">
                <div class="form-check">
                  <input
                    class="form-check-input"
                    type="checkbox"
                    v-model="tempArticle.isPublic"
                    id="isPublic"
                  />
                  <label class="form-check-label" for="isPublic">
                    是否公開
                  </label>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="modal-footer">
          <button
            type="button"
            class="btn btn-outline-secondary"
            data-bs-dismiss="modal"
          >
            取消
          </button>
          <button
            type="button"
            class="btn btn-primary"
            @click="$emit('update-article', tempArticle)"
          >
            確認
          </button>
        </div>
      </div>
    </div>
  </div>
</template>
<style>
.ck-editor__editable_inline {
  min-height: 300px;
}
</style>
<script>
import ClassicEditor from '@ckeditor/ckeditor5-build-classic'
import { Modal } from 'bootstrap'
const url = import.meta.env.VITE_APP_API_URL
const path = import.meta.env.VITE_APP_API_NAME

export default {
  data () {
    return {
      create_at: 0,
      tempArticle: {
        tag: []
      },
      articleModal: '',
      editor: ClassicEditor,
      editorConfig: {
        toolbar: ['heading', 'bold', 'italic', '|', 'link']
      }
    }
  },
  props: ['article', 'isNew'],
  methods: {
    openModal () {
      this.articleModal.show()
    },
    closeModal () {
      this.articleModal.hide()
    },
    uploadFile () {
      // console.dir(this.fileInput)
      const file = this.fileInput.files[0]
      // console.log(file)
      const formData = new FormData()
      formData.append('file-to-upload', file)
      this.$http
        .post(`${url}/api/${path}/admin/upload`, formData)
        .then((res) => {
          // console.log(res.data.imageUrl)
          this.tempArticle.imageUrl = res.data.imageUrl
        })
        .catch((err) => {
          // console.dir(err)
          alert(err.response.data.message)
        })
    }
  },
  watch: {
    article () {
      this.tempArticle = {
        ...this.article,
        tag: this.article.tag || [],
        isPublic: this.article.isPublic || false
      }
      this.create_at = new Date(this.tempArticle.create_at * 1000)
        .toISOString()
        .split('T')[0]
    },
    create_at () {
      this.tempArticle.create_at = Math.floor(new Date(this.create_at) / 1000)
    }
  },
  mounted () {
    this.articleModal = new Modal(this.$refs.modal)
    this.fileInput = this.$refs.formFile
    this.fileInput.addEventListener('change', this.uploadFile)
  }
}
</script>
