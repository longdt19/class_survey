import Vue from 'vue'
import Router from 'vue-router'

import Layout from '@/components/layout'

import StudentCreation from '@/components/student/creation'
import StudentList from '@/components/student/list'

import TeacherCreation from '@/components/teacher/creation'
import TeacherList from '@/components/teacher/list'

import AllSurveys from '@/components/surveys/all_surveys'

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
          path: 'tao-moi-tai-khoan-sinh-vien',
          name: 'student-creation',
          component: StudentCreation
        },
        {
          path: 'danh-sach-sinh-vien',
          name: 'student-list',
          component: StudentList
        },
        {
          path: 'tao-moi-tai-khoan-giang-vien',
          name: 'teacher-creation',
          component: TeacherCreation
        },
        {
          path: 'danh-sach-giang-vien',
          name: 'teacher-list',
          component: TeacherList
        },
        {
          path: 'danh-sach-cac-cuoc-khao-sat',
          name: 'all-surveys',
          component: AllSurveys
        }
      ]
    }
  ]
})
