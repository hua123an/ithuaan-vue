import {createRouter, createWebHistory} from 'vue-router'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path :  "",
      component : () => import("@/views/Home/HomeView.vue")
    },
    {
      path : '/ai',
      component : () => import("@/views/AI/AIView.vue")
    },
    {
      path : '/blog',
      component : () => import("@/views/Blog/BlogView.vue")
    },
    {
      path : '/academic',
      component : () => import("@/views/Academic/AcademicView.vue")
    },
    {
      path : "/programming",
      component : () => import("@/views/Programming/ProgrammingView.vue")
    },
    {
      path : '/university',
      component : () => import("@/views/University/UniversityView.vue")
    },
    {
      path : '/resources',
      component : () => import("@/views/Resources/ResourcesView.vue")
    },
    {
      path : '/key/',
      component : () => import('@/views/Key/KeyView.vue')
    },
    {
      path : '/opensource',
      component : () => import('@/views/OpenSource/OpenSourceView.vue')
    }

  ]
})

export default router
