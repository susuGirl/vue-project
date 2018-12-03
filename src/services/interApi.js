import axios from 'axios'
import config from './config'

// 配置 axios，并生成实例
const creatAxios1 = axios.create({
  baseURL: config.SERVER_URL1,
  withCredentials: true
})

// 拦截器配置
creatAxios1.interceptors.request.use(configData => { // 请求拦截 在发送请求之前做些什么
  // 请求成功做的事情 configData 中包含：url、method等信息
  return configData
}, error => { // 请求失败做的事情
  return Promise.reject(error)
})

creatAxios1.interceptors.response.use(response => { // 响应拦截 对响应数据做点什么
  // 响应成功做的事情
  response.data.code = Number(response.data.code) // 将接口返回的状态值 code 处理为数字
  return response
}, error => { // 响应失败做的事情
  return Promise.reject(error)
})

function sendAll (arr) { // 顺序和请求发送的顺序相同，使用 axios.spread 分割成多个单独的响应对象
  if (Object.prototype.toString.call(arr) === '[object Array]') {
    return axios.all(arr).then(axios.spread(function (...res) { // axios.all 是axios的静态方法，不是实例上的方法
      // 请求全部都执行完成
      return Promise.resolve(res)
    }))
  } else {
    const error = new Error('参数错误！')
    try {
      throw error
    } catch (e) {
      // console.log(e)
    }
  }
}

export default {
  creatAxios1,
  sendAll
}
