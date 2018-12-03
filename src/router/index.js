import Vue from 'vue'
import Router from 'vue-router'
import entry from 'views/entry'
import entryIndex from 'views/entry/entryIndex'
import entryOtherPage from 'views/entry/entryOtherPage'
import secondPage from 'views/secondPage'
import login from 'views/login'

Vue.use(Router)

const router = new Router({
  routes: [
    {
      path: '/',
      redirect: '/entry/entryIndex' // 路由重定向
    },
    {
      path: '/entry',
      name: 'entry',
      component: entry,
      children: [
        {
          path: 'entryIndex',
          name: 'entryIndex',
          component: entryIndex,
          meta: { // 路由元信息
            checkLogin: false,
            title: '首页'
          }
        },
        {
          path: 'entryOtherPage',
          name: 'entryOtherPage',
          component: entryOtherPage,
          meta: {
            checkLogin: false, // checkLogin：判断该路由页面是否需要登录验证
            title: '子页面'
          }
        }
      ]
    },
    {
      path: '/secondPage',
      name: 'secondPage',
      component: secondPage,
      meta: {
        checkLogin: true,
        title: ''
      }
    },
    {
      path: '/login',
      name: 'login',
      component: login,
      meta: {
        checkLogin: false,
        title: '登录'
      }
    }
    // {
    //   path: '*', // 错误路由  即对于所有的（*代表所有）错误页面
    //   redirect: '/'
    // }
  ]
})

router.beforeEach((to, from, next) => {
  // to: Route: 即将要进入的目标 路由对象
  // from: Route: 当前导航正要离开的路由
  // next: Function: 一定要调用该方法来 resolve 这个钩子。执行效果依赖 next 方法的调用参数。
  document.title = to.meta.title || 'project title' // 动态设置页面 title
  const logined = true // 代表 是否是已登录状态
  if (to.matched.length === 0) { // 如果未匹配到路由
    from.name ? next({ name: from.name }) : next('/') // 如果上级也未匹配到路由则跳转默认页面，如果上级能匹配到则跳转上级路由
  } else {
    if (to.matched.some(record => record.meta.checkLogin) && !logined) { // 跳转到需要验证登录状态的页面 && 未登录
      next({ name: 'login' }) // 重定向到 login 页面
    } else {
      next()
    }
  }
})
export default router
