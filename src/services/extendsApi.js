/* eslint-disable no-useless-constructor */
import api from './interApi'
import qs from 'qs'
import config from './config'

function _apiFn (baseUrl) { // 该方法对外不可见
  if (baseUrl === 'service2') {
    api.creatAxios1.defaults.baseURL = config.SERVER_URL2 // 改变 axios 实例的 baseURL
  } else if (baseUrl === 'service3') {
    api.creatAxios1.defaults.baseURL = config.SERVER_URL3
  } else {
    api.creatAxios1.defaults.baseURL = config.SERVER_URL1
  }
}
class axiosApi {
  constructor () {

  }

  sendGet (url, params = {}, baseUrl) { // get 请求
    if (Object.prototype.toString.call(params) === '[object Object]') {
      _apiFn(baseUrl)
      return api.creatAxios1.get(url, {params: params})
    } else {
      const error = new Error('参数错误！')
      try {
        throw error
      } catch (e) {
        // console.log(e)
      }
    }
  }

  sendPost (url, params = {}, baseUrl) { // post 请求
    if (Object.prototype.toString.call(params) === '[object Object]') {
      _apiFn(baseUrl)
      return api.creatAxios1.post(url, qs.stringify(params))
    } else {
      const error = new Error('参数错误！')
      try {
        throw error
      } catch (e) {
        // console.log(e)
      }
    }
  }

  /**
   * 并发请求，同时发送多个请求，使用栗子：src/views/infoEntry/dragCard/dragCardService.js
   * 顺序和请求发送的顺序相同
   * @param {arr: [请求1,请求2...]}
   */

  sendAll (arr) { // 并发请求
    return new Promise((resolve, reject) => {
      api.sendAll(arr).then(res => {
        return resolve(res)
      })
    })
  }
}

export default axiosApi
