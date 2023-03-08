<template>
  <button :class="buttonClass">
    {{ text }}
  </button>
</template>

<script>
export default {
  name: "ActionButton",
  props: ["text", "type"],
  computed: {
    buttonClass() {
      return { primary: this.type === "primary", secondary: this.type === "secondary" }
    }
  }
}
</script>

<style scoped>
button {
  @apply rounded border-0 px-5 py-3 font-medium;
}

.primary {
  @apply bg-brand-blue-1 text-white hover:shadow-blue;
}
.secondary {
  @apply bg-transparent text-brand-blue-2 hover:bg-brand-blue-2 hover:text-white;
}
</style>
