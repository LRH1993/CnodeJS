/* eslint-disable */
import Vue from 'vue'
import Router from 'vue-router'

import MainSec from '../components/MainSec.vue'
import UserCom from '../components/UserCom.vue'
import ArticleCom from '../components/AritcleCom.vue'
import SideSec from '../components/SideSec.vue'

Vue.use(Router)


export default new Router({
  routes: [
    {
      path: '/',
      name: 'RootPath',
      components: {
        main: MainSec
      }
    },
    {
      path: '/user/:name',
      name: 'UserRoute',
      components: {
        main: UserCom
      }
    },
    {
      path: '/topic/:id',
      name: 'ArticleRoute',
      components: {
        main: ArticleCom,
        side: SideSec
      },
    }
  ]
})
