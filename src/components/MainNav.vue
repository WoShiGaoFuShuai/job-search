<template>
  <header class="w-full text-sm">
    <div class="fixed top-0 left-0 h-16 w-full bg-white">
      <div class="border-brand-gray-1 mx-auto flex h-full flex-nowrap border-b px-8">
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
      </div>
    </div>
  </header>
</template>

<script>
export default {
  name: "MainNav",
  data() {
    return {
      company: "Mali Careers",
      menuItems: ["Teams", "Location", "Life at the company", "How we fire", "Students"]
    }
  }
}
</script>
