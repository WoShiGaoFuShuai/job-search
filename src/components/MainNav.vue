<template>
  <header :class="['w-full', 'text-sm', headerHeightClass]">
    <div class="fixed top-0 left-0 h-16 w-full bg-white">
      <div class="mx-auto flex h-full flex-nowrap border-b border-brand-gray-1 px-8">
        <a
          href="/"
          class="flex h-full items-center text-xl"
        >
          {{ company }}</a
        >

        <nav class="ml-12">
          <ul class="flex h-full list-none items-center space-x-8">
            <li
              v-for="item in menuItems"
              :key="item"
              class="h-full"
            >
              <a
                href="#"
                class="flex h-full items-center py-2.5"
              >
                {{ item }}
              </a>
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
import ActionButton from "@/components/ActionButton.vue"
import ProfileImage from "@/components/ProfileImage.vue"
import TheSubnav from "@/components/TheSubnav.vue"

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
      menuItems: ["Teams", "Location", "Life at the company", "How we fire", "Students"],
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
