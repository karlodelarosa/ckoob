import { createRouter, createWebHistory } from 'vue-router'
import SignIn from '../views/SignIn.vue'
import TheDashboard from '../views/TheDashboard.vue'
import TheReports from '../views/TheReports.vue'
import TheProjects from '../views/TheProjects.vue'
import AddProject from '../views/AddProject.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'sign_in',
      component: SignIn
    },
    {
      path: '/dashboard',
      name: 'Dashboard',
      component: TheDashboard
    },
    {
      path: '/reports',
      name: 'Reports',
      component: TheReports
    },
    {
      path: '/projects',
      name: 'Projects',
      component: TheProjects,
    },
    {
      path: '/projects/new',
      name: 'NewProject',
      component: AddProject,
    },
  ]
})

export default router
