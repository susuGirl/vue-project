
let env = ''
if ((/env=online/.test(window.location.href))) {
  env = 'online'
} else if ((/env=dev/.test(window.location.href))) {
  env = 'dev'
} else {
  env = 'dev' // 默认环境
}
const SERVER_URL = {
  online: { // 正式环境
    SERVER_URL1: '',
    SERVER_URL2: '',
    SERVER_URL3: ''
  },
  dev: { // 测试环境
    SERVER_URL1: '',
    SERVER_URL2: '',
    SERVER_URL3: ''
  }
}
export default SERVER_URL[env]
