<template>Job View for {{ currentJobId }}</template>

<script>
export default {
  name: "JobView",
  computed: {
    currentJobId() {
      return this.$route.params.id
    }
  }
}
</script>
