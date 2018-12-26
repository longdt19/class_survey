import Vue from 'vue'
import Router from 'vue-router'

import Layout from '@/components/layout'

import StudentCreation from '@/components/student/creation'
import StudentList from '@/components/student/list'

import TeacherCreation from '@/components/teacher/creation'
import TeacherList from '@/components/teacher/list'

import AllSurveys from '@/components/surveys/all_surveys'

import Login from '@/components/login'

import CourseLayout from '@/components/courses'
import Course from '@/components/courses/course'
import AllCoursesLayout from '@/components/courses/all'

import ManageSurvey from '@/components/surveys/manage'

import Setting from '@/components/courses/all/setting'
import MyCourses from '@/components/courses/all/mycourses'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/dang-nhap',
      name: 'login',
      component: Login
    },
    {
      path: '/quan-tri',
      name: 'admin-layout',
      component: Layout,
      redirect: '/quan-tri/danh-sach-cac-cuoc-khao-sat',
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
        },
        {
          path: 'quan-ly-phieu-khao-sat',
          name: 'manage-surveys',
          component: ManageSurvey
        }
      ]
    },
    {
      path: '/',
      name: 'layout',
      component: CourseLayout,
      redirect: '/danh-sach-lop-mon-hoc',
      children: [
        {
          path: '',
          name: 'all-courses',
          component: AllCoursesLayout,
          redirect: '/cac-mon-hoc-cua-toi',
          children: [
            {
              path: '/thong-tin-tai-khoan',
              name: 'info-user',
              component: Setting
            },
            {
              path: '/cac-mon-hoc-cua-toi',
              name: 'my-courses',
              component: MyCourses
            }
          ]
        },
        {
          path: 'mon-hoc/:id',
          name: 'course',
          component: Course
        }
      ]
    }
  ]
})
