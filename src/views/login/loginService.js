// commit API
import extendsApi from 'services/extendsApi'

class LoginServiceApi extends extendsApi {
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

export default new LoginServiceApi()
