<template>
  <li
    role="listitem-joblisting"
    class="mb-7"
  >
    <RouterLink
      :to="jobLink"
      class="mx-auto block rounded border-brand-gray-2 bg-white hover:shadow-gray"
    >
      <div class="mx-8 border-b border-brand-gray-2 pt-5 pb-2">
        <h2 class="mb-2 text-2xl">{{ job.title }}</h2>

        <div class="flex flex-row align-middle">
          <div class="mr-5">
            <span>{{ job.organization }}</span>
          </div>

          <div>
            <ul>
              <li
                v-for="location in job.locations"
                :key="location"
                class="mr-5 inline-block"
              >
                <span>
                  {{ location }}
                </span>
              </li>
            </ul>
          </div>
        </div>
      </div>

      <div class="px-8 py-4">
        <div>
          <h3 class="mt-1 mb-2">Qualifications:</h3>
          <div>
            <ul class="list-disc pl-8">
              <li
                v-for="qualification in job.minimumQualifications"
                :key="qualification"
              >
                {{ qualification }}
              </li>
            </ul>
          </div>
        </div>

        <div class="mt-2 text-center">
          <RouterLink
            :to="jobLink"
            class="text-brand-blue-1"
            >Expand</RouterLink
          >
        </div>
      </div>
    </RouterLink>
  </li>
</template>

<script>
export default {
  name: "JobListing",
  props: {
    job: {
      type: Object,
      required: true
    }
  },
  computed: {
    jobLink() {
      return { name: "JobListing", params: { id: this.job.id } }
    }
  }
}
</script>
