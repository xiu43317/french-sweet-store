<template>
    Dashboard
</template>
<script>
export default {
  mounted () {
    const url = import.meta.env.VITE_APP_API_URL
    const token = document.cookie.replace(/(?:(?:^|.*;\s*)hexToken\s*=\s*([^;]*).*$)|^.*$/, '$1')
    this.$http.defaults.headers.common.Authorization = token
    this.$http
      .post(`${url}/api/user/check`)
      .then((res) => {
        console.log(res)
      })
      .catch((error) => {
        console.dir(error)
        alert(error.response.data.message)
        this.$router.push('/login')
      })
  }
}
</script>
