<template>
  <form
    class="flex h-12 w-full items-center rounded-3xl border border-brand-gray-3"
    @submit.prevent="searchForJobs"
  >
    <font-awesome-icon
      :icon="['fas', 'search']"
      class="ml-4 mr-3"
      alt="search icon jobsearch"
    />

    <div class="flex h-full flex-1">
      <div class="relative flex h-full flex-1">
        <label
          class="absolute left-0 -top-8"
          for="role"
          >Role</label
        >
        <TextInput
          id="role"
          v-model="role"
          placeholder="Software engineer"
        />
      </div>

      <span
        class="flex h-full items-center border-l border-r border-brand-gray-3 bg-brand-gray-2 px-3"
        >in</span
      >

      <div class="relative flex h-full flex-1">
        <label
          class="absolute left-3 -top-8"
          for="location"
          >Where</label
        >
        <TextInput
          id="location"
          v-model="location"
          placeholder="Los Angeles"
        />
      </div>
    </div>

    <ActionButton
      type="secondary"
      text="Search"
      class="rounded-r-3xl"
    />
  </form>
</template>

<script>
import ActionButton from "@/components/Shared/ActionButton.vue"
import TextInput from "@/components/Shared/TextInput.vue"

export default {
  name: "JobSearchForm",
  components: {
    ActionButton,
    TextInput
  },
  data() {
    return {
      role: "",
      location: ""
    }
  },
  methods: {
    searchForJobs() {
      this.$router.push({
        name: "JobResults",
        query: {
          role: this.role,
          location: this.location
        }
      })
    }
  }
}
</script>
