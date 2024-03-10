import { toast } from 'vue3-toastify'
import 'vue3-toastify/dist/index.css'

export const notify = (isSuccess, content) => {
  if (isSuccess === true) {
    toast.success(`${content}`, {
      theme: 'colored',
      autoClose: 1000
    })
  } else {
    toast.error(`${content}`, {
      theme: 'colored',
      autoClose: 1000
    })
  }
}
