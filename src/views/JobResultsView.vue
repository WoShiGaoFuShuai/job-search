<template>
  <h3 class="text-6xl font-bold">Job Results Page</h3>
  {{ experiment }}
</template>

<script>
export default {
  name: "JobResultsView",
  computed: {
    experiment() {
      console.log(this.$route)
      return "aa"
    }
  }
}
</script>
