// commit API
import extendsApi from './extendsApi'

class AllServiceApi extends extendsApi {
  constructor () {
    super()
    this.demoUrl = ''
  }
  demoGet (params) {
    return this.sendGet(this.demoUrl, params).then(res => {
      return res.data
    })
  }
}

export default new AllServiceApi()
