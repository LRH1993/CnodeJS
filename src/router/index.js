/* eslint-disable */
import Vue from 'vue'
import Router from 'vue-router'

import MainSec from '../components/MainSec.vue'


Vue.use(Router)


export default new Router({
  routes: [
    {
      path: '/',
      name: 'RootPath',
      components: {
        main: MainSec
      }
    }
  ]
})
