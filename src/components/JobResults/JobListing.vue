<template>
  <li class="mb-7">
    <RouterLink
      to="jobs/results/1"
      class="mx-auto block rounded border-brand-gray-2 bg-white hover:shadow-gray"
    >
      <div class="mx-8 border-b border-brand-gray-2 pt-5 pb-2">
        <h2 class="mb-2 text-2xl">Frontend</h2>

        <div class="flex flex-row align-middle">
          <div class="mr-5">
            <span>Mali</span>
          </div>

          <div>
            <span>San Francisco, CA, USA</span>
          </div>
        </div>
      </div>

      <div class="px-8 py-4">
        <div>
          <h3 class="mt-1 mb-2">Qualifications:</h3>
          <div>
            <ul class="list-disc pl-8">
              <li>Bachelor's degree or equivalent practical experience</li>
              <li>5 years of expericence in program management</li>
              <li>
                Experience analizing data through querying database (e.g., SQL) using spreadsheet
                software, and creating statistical models
              </li>
            </ul>
          </div>
        </div>

        <div class="mt-2 text-center">
          <RouterLink
            to="/jobs/results/1"
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
  name: "JobListing"
}
</script>
