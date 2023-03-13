import { createRouter, createWebHashHistory } from "vue-router"
import HomeView from "@/views/HomeView.vue"
import JobResults from "@/views/JobResults.vue"

const routes = [
  {
    path: "/",
    name: "Home",
    component: HomeView
  },
  {
    path: "/jobs/results",
    name: "JobResults",
    component: JobResults
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router