import { createRouter, createWebHistory } from "vue-router"
import { getAuth, onAuthStateChanged } from 'firebase/auth'

import LoginPage from "@/views/LoginPage.vue"
import RegisterPage from "@/views/Register.vue"
import NotFoundPage from "@/views/NotFound.vue"
import HomePage from "@/views/HomePage.vue"
import FactorialPage from '@/views/FactorialPage.vue'

const routes = [
  {
    path: "/login",
    name: "LoginPage",
    component: LoginPage,
    meta: {
      requiresAuth: false,
    }
  },
  {
    path: "/register",
    name: "RegisterPage",
    component: RegisterPage,
    meta: {
      requiresAuth: false,
    }
  },
  {
    path: "/",
    name: "HomePage",
    component: HomePage,
    meta: {
      requiresAuth: true,
    }
  },
  {
    path: "/factorial",
    name: "FactorialPage",
    component: FactorialPage,
    meta: {
      requiresAuth: true,
    }
  },
  {
    path: "/not-found",
    name: "Not Found Page",
    component: NotFoundPage,
  },
  {
    path: "/:pathMatch(.*)*",
    redirect: "/not-found",
  },
]

const router = createRouter({
  history: createWebHistory(),
  routes,
})

const getCurrentUser = () => {
  return new Promise((resolve, reject) => {
    const removeListener = onAuthStateChanged(
      getAuth(),
      (user) => {
        removeListener();
        resolve(user);
      }, 
      reject
    )
  })
}

router.beforeEach( async (to, from, next) => {
  if(to.matched.some((record) => record.meta.requiresAuth)) {
    if(await getCurrentUser) {
      next()
    } else {
      next('/login')
    }
  } else {
    next()
  }
})

export default router