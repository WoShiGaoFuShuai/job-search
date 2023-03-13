import { createRouter, createWebHashHistory } from "vue-router"
import HomeView from "@/views/HomeView.vue"
import JobResults from "@/views/JobResultsView.vue"
import JobView from "@/views/JobView.vue"

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
  },
  {
    path: "/jobs/results/:id",
    name: "JobListing",
    component: JobView
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
