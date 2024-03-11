<template>
  <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
    <div class="container-fluid">
      <router-link to="/admin/products" class="navbar-brand">後臺系統</router-link>
      <button
        class="navbar-toggler"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#navbarNavAltMarkup"
        aria-controls="navbarNavAltMarkup"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
        <div class="navbar-nav">
          <router-link to="/admin/products" class="nav-link">產品列表</router-link>
          <router-link to="/admin/coupons" class="nav-link">優惠券</router-link>
          <router-link to="/admin/orders" class="nav-link">訂單</router-link>
          <router-link to="/admin/articles" class="nav-link">新增文章</router-link>
          <a class="nav-link" href="#" @click.prevent="signOut()">登出</a>
        </div>
        <div class="navbar-nav ms-auto">
          <router-link to="/" class="nav-link">回前台</router-link>
        </div>
      </div>
    </div>
  </nav>
  <router-view v-if="checkSuccess"></router-view>
</template>
<script>
const url = import.meta.env.VITE_APP_API_URL
export default {
  data () {
    return {
      checkSuccess: false
    }
  },
  methods: {
    checkLogin () {
      const token = document.cookie.replace(/(?:(?:^|.*;\s*)hexToken\s*=\s*([^;]*).*$)|^.*$/, '$1')
      this.$http.defaults.headers.common.Authorization = token
      this.$http
        .post(`${url}/api/user/check`)
        .then((res) => {
          this.checkSuccess = true
        })
        .catch((error) => {
          console.dir(error)
          alert(error.response.data.message)
          this.$router.push('/login')
        })
    },
    signOut () {
      document.cookie = 'hexToken=;expires=;'
      alert('已登出')
      this.$router.push('/login')
    }
  },
  mounted () {
    this.checkLogin()
  }
}
</script>
