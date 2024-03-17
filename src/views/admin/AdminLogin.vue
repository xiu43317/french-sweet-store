<template>
    <div class="container">
      <div class="row align-items-center vh-100">
        <div class="text-center">
          <h1 class="h3 mb-3 font-weight-normal">請先登入</h1>
          <div>
            <form class="form-signin" @submit.prevent="login">
              <div class="form-floating mb-3">
                <input
                  type="email"
                  class="form-control"
                  v-model="emailInput"
                  id="floatingInput"
                  placeholder="name@example.com"
                  required
                  autofocus
                />
                <label for="floatingInput">Email address</label>
              </div>
              <div class="form-floating">
                <input
                  type="password"
                  class="form-control"
                  v-model="pwInput"
                  id="floatingPassword"
                  placeholder="Password"
                  required
                />
                <label for="floatingPassword">Password</label>
              </div>
              <button
                class="btn btn-lg btn-primary w-100 mt-3"
                type="submit"
              >
                登入
              </button>
            </form>
          </div>
          <p class="mt-5 mb-3 text-muted">&copy; 2024~∞ - 羅傑的店</p>
          <router-link to="/">返回首頁</router-link>
        </div>
      </div>
    </div>
</template>

<script>
import axios from 'axios'
import { ref } from 'vue'
import { useRouter } from 'vue-router'

export default {
  setup () {
    const url = import.meta.env.VITE_APP_API_URL
    const emailInput = ref('')
    const pwInput = ref('')
    const router = useRouter()
    const login = () => {
      const username = emailInput.value
      const password = pwInput.value
      const user = {
        username,
        password
      }
      axios.post(`${url}/admin/signin`, user).then((res) => {
        const {
          token,
          expired
        } = res.data
        document.cookie = `hexToken=${token};expires=${new Date(expired)};`
        alert(res.data.message)
        router.push('/admin')
      }).catch((error) => {
        alert(error.response.data.message)
      })
    }
    return {
      emailInput,
      pwInput,
      login
    }
  }
/*
  data () {
    return {
      emailInput: '',
      pwInput: ''
    }
  },
  methods: {
    login () {
      const username = this.emailInput
      const password = this.pwInput
      const user = {
        username,
        password
      }
      // #2 發送 API 至遠端並登入（並儲存 Token）
      const url = import.meta.env.VITE_APP_API_URL
      axios.post(`${url}/admin/signin`, user).then((res) => {
        const {
          token,
          expired
        } = res.data
        document.cookie = `hexToken=${token};expires=${new Date(expired)};`
        alert(res.data.message)
        this.$router.push('/admin/products')
      }).catch((error) => {
        alert(error.response.data.message)
      })
    }
  }
*/
}
</script>

<style scoped>
.form-signin {
  width: 100%;
  max-width: 330px;
  padding: 15px;
  margin: auto;
}
</style>
