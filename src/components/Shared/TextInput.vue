<template>
  <input
    :value="modelValue"
    type="text"
    class="text-md h-full w-full border-0 pl-3 font-normal focus:outline-none"
    @input="handleInput"
  />
</template>

<script>
export default {
  name: "TextInput",
  props: {
    modelValue: {
      type: String,
      required: true
    }
  },
  emits: ["update:modelValue"],
  methods: {
    handleInput($event) {
      this.$emit("update:modelValue", $event.target.value)
    }
  }
}
</script>
