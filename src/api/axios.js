import axios from 'axios'
const url = import.meta.env.VITE_APP_API_URL
const path = import.meta.env.VITE_APP_API_NAME

export default {
  getFakeData: () => getFakeData(),
  getArticles: (page) => getArticles(page),
  getProducts: (page, category) => getProducts(page, category),
  getProduct: (id) => getProduct(id),
  getArticle: (id) => getArticle(id),
  getCart: () => getCart(),
  createCart: (cart) => createCart(cart),
  updateCart: (id, cart) => updateCart(id, cart),
  deleteCartAll: () => deleteCartAll(),
  deleteCart: (id) => deleteCart(id),
  useCoupon: (coupon) => useCoupon(coupon),
  sendOrder: (order) => sendOrder(order),
  getOrder: (orderId) => getOrder(orderId),
  payOrder: (orderId) => payOrder(orderId)
}

const getFakeData = () => {
  axios.get('https://jsonplaceholder.typicode.com/todos/1')
    .then((res) => {
      console.log(res)
    })
    .catch((err) => {
      console.log(err)
    })
}
const getArticles = (page = 1) => {
  return axios.get(`${url}/api/${path}/articles?page=${page}`)
}
const getProducts = (page = 0, category = '') => {
  if (page === 0 && category === '') return axios.get(`${url}/api/${path}/products/all`)
  else return axios.get(`${url}/api/${path}/products?page=${page}&category=${category}`)
}
const getProduct = (id) => {
  return axios.get(`${url}/api/${path}/product/${id}`)
}
const getArticle = (id) => {
  return axios.get(`${url}/api/${path}/article/${id}`)
}
const getCart = async () => {
  return await axios.get(`${url}/api/${path}/cart`)
    .catch((err) => {
      console.log(err)
    })
}
const createCart = async (cart) => {
  return await axios.post(`${url}/api/${path}/cart`, cart)
  // .then((res) => {
  //   console.log(res.data)
  // }).catch((err) => {
  //   console.log(err.response.message)
  // })
}
const updateCart = async (id, cart) => {
  return await axios.put(`${url}/api/${path}/cart/${id}`, cart)
  // .then((res) => {
  //   console.log(res.data)
  // }).catch((err) => {
  //   console.log(err.response.message)
  // })
}
const deleteCartAll = async () => {
  return await axios.delete(`${url}/api/${path}/carts`)
  // .then((res) => {
  //   console.log(res.data)
  // }).catch((err) => {
  //   console.log(err.response.message)
  // })
}
const deleteCart = async (id) => {
  return await axios.delete(`${url}/api/${path}/cart/${id}`)
}
const useCoupon = async (coupon) => {
  return await axios.post(`${url}/api/${path}/coupon`, coupon)
  // .then((res) => {
  //   console.log(res.data)
  // }).catch((err) => {
  //   console.log(err.response.data.message)
  // })
}
const sendOrder = async (order) => {
  return await axios.post(`${url}/api/${path}/order`, order)
}
const getOrder = async (orderId) => {
  return await axios.get(`${url}/api/${path}/order/${orderId}`)
}
const payOrder = async (orderId) => {
  return await axios.post(`${url}/api/${path}/pay/${orderId}`)
}
