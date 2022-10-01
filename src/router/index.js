import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/ProjectsOverview.vue'

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  { 
    path: '/projects',
    name: 'projects',
    component: () => import('../views/ProjectsOverview.vue')
  },
  { 
    path: '/projects/new',
    name: 'projects-new',
    component: () => import('../views/ProjectCreatNew.vue')
  },
  { 
    path: '/engineerings/:id',
    name: 'engineerings',
    component: () => import('../views/EngineeringsOverview.vue')
  },
  {
    path: '/engineeringTodo/:id',
    name: 'engineering-todo',
    component: () => import('../views/EngineeringTodo.vue')
  },
  {
    path: '/engineeringTodo/:id/dashboard',
    name: 'edit-engineeringTodo-dashboard',
    component: () => import('../views/editFactoryTodo.vue')
  }, 
  

]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
