import Vue from 'vue'
import Router from 'vue-router'

import Layout from '@/components/layout'
import Student from '@/components/student'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'layout',
      component: Layout,
      children: [
        {
          path: 'student',
          name: 'student',
          component: Student
        }
      ]
    }
  ]
})
