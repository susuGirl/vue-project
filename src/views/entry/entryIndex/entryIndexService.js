import extendsApi from 'services/extendsApi'

class EntryIndexApi extends extendsApi {
  constructor () {
    super()
    this.initUrl = '/20180815/prophet/infoEntry'
  }
  /**
   * 请求方式：sendGet sendPost
   * @param {url} String 第一个参数必选 api接口名称
   * @param {params} Object 第二个参数可选 api参数
   * @param {baseURL} String 第三个参数可选 URL：service2 service3
   * 请求方式：sendAll
   * @param {api} Array 并发请求的数组
   */
  init (params) {
    return this.sendGet(this.initUrl, params, 'service2').then(res => {
      return res.data
    })
  }
  test () {
    return this.sendAll([this.init()]).then(res => {
      return res
    })
  }
}

export default new EntryIndexApi()
