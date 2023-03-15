<template>
  <main class="flex-auto bg-brand-gray-2 p-8">
    <ol>
      <JobListing
        v-for="job in displayedJobs"
        :key="job.id"
        :job="job"
      />
    </ol>

    <div class="mx-auto mt-8">
      <div class="flex flex-nowrap">
        <p class="flex-grow text-sm">Page {{ currentPage }}</p>

        <div class="flex items-center justify-center">
          <RouterLink
            v-if="previousPage"
            :to="{ name: 'JobResults', query: { page: previousPage } }"
            role="link"
            class="mx-3 text-sm font-semibold text-brand-blue-1"
          >
            Previous
          </RouterLink>

          <RouterLink
            v-if="nextPage"
            :to="{ name: 'JobResults', query: { page: nextPage } }"
            role="link"
            class="mx-3 text-sm font-semibold text-brand-blue-1"
          >
            Next
          </RouterLink>
        </div>
      </div>
    </div>
  </main>
</template>

<script>
import axios from "axios"
import JobListing from "@/components/JobResults/JobListing.vue"

export default {
  name: "JobListings",
  components: { JobListing },
  data() {
    return {
      jobs: []
    }
  },
  computed: {
    currentPage() {
      return +(this.$route.query.page || "1")
    },
    previousPage() {
      const previousPage = this.currentPage - 1 // 1
      const firstPage = 1
      return previousPage < firstPage ? undefined : previousPage
    },
    nextPage() {
      const nextPage = this.currentPage + 1
      const lastPage = Math.ceil(this.jobs.length / 10)
      return nextPage <= lastPage ? nextPage : undefined
    },
    displayedJobs() {
      const pageNumber = this.currentPage
      const startNumber = (pageNumber - 1) * 10
      const endNumber = pageNumber * 10
      return this.jobs.slice(startNumber, endNumber)
    }
  },
  async mounted() {
    const baseUrl = import.meta.env.VITE_APP_API_URL
    const res = await axios.get(`${baseUrl}/jobs`)
    this.jobs = res.data
  }
}
</script>
