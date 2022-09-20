import Vue from 'vue'
import axios from 'axios'

Vue.prototype.$axios = axios

const axiosInstance  = axios.create({
    baseURL:' http://localhost:3000/'
})
export default({Vue}) => {
    Vue.prototype.$axios = axiosInstance
}
export {axiosInstance}
