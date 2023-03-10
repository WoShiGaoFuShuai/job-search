<template>
  <form class="flex h-12 w-full items-center rounded-3xl border border-brand-gray-3">
    <font-awesome-icon
      :icon="['fas', 'search']"
      class="ml-4 mr-3"
    />

    <div class="flex h-full flex-1">
      <div class="relative flex h-full flex-1">
        <label
          class="absolute left-0 -top-8"
          for="role"
          >Role</label
        >
        <input
          id="role"
          v-model="role"
          type="text"
          class="text-md h-full w-full border-0 pr-3 font-normal focus:outline-none"
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
        <input
          id="location"
          v-model="location"
          type="text"
          class="text-md h-full w-full border-0 pl-3 font-normal focus:outline-none"
          placeholder="Los Angeles"
        />
      </div>

      <ActionButton
        type="secondary"
        text="Search"
        class="rounded-r-3xl"
      />
    </div>
  </form>
</template>

<script>
import ActionButton from "@/components/Shared/ActionButton.vue"

export default {
  name: "JobSearchForm",
  components: {
    ActionButton
  },
  data() {
    return {
      role: "",
      location: ""
    }
  }
}
</script>
