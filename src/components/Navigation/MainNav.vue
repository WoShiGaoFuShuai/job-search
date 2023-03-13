<template>
  <header :class="['w-full', 'text-sm', headerHeightClass]">
    <div class="fixed top-0 left-0 h-16 w-full bg-white">
      <div class="mx-auto flex h-full flex-nowrap border-b border-brand-gray-1 px-8">
        <RouterLink
          :to="{ name: 'Home' }"
          class="flex h-full items-center text-xl"
        >
          {{ company }}</RouterLink
        >

        <nav class="ml-12">
          <ul class="flex h-full list-none items-center space-x-8">
            <li
              v-for="item in menuItems"
              :key="item.text"
              class="h-full"
            >
              <RouterLink
                :to="{ name: item.routerName }"
                class="flex h-full items-center py-2.5"
              >
                {{ item.text }}
              </RouterLink>
            </li>
          </ul>
        </nav>

        <div class="ml-auto flex h-full items-center">
          <ProfileImage v-if="isLoggedIn" />
          <ActionButton
            v-else
            text="Sign in"
            type="primary"
            @click="loginUser"
          />
        </div>
      </div>

      <TheSubnav v-if="isLoggedIn" />
    </div>
  </header>
</template>

<script>
import ActionButton from "@/components/Shared/ActionButton.vue"
import ProfileImage from "@/components/Navigation/ProfileImage.vue"
import TheSubnav from "@/components/Navigation/TheSubnav.vue"

export default {
  name: "MainNav",
  components: {
    ActionButton,
    ProfileImage,
    TheSubnav
  },
  data() {
    return {
      company: "Mali Careers",
      menuItems: [
        { text: "Teams", routerName: "Home" },
        { text: "Location", routerName: "Home" },
        { text: "Life at the company", routerName: "Home" },
        { text: "How we fire", routerName: "Home" },
        { text: "Students", routerName: "Home" },
        { text: "Jobs", routerName: "JobResults" }
      ],
      isLoggedIn: false
    }
  },
  computed: {
    headerHeightClass() {
      return {
        "h-16": !this.isLoggedIn,
        "h-32": this.isLoggedIn
      }
    }
  },
  methods: {
    loginUser() {
      this.isLoggedIn = true
    }
  }
}
</script>
