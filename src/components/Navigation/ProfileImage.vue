<template>
  <div>
    <img
      class="h-8 w-8 rounded-3xl object-contain"
      :src="linkImage"
      alt="User profile image"
    />
  </div>
</template>

<script>
export default {
  name: "ProfileImage",
  data() {
    return {
      linkImage:
        "https://www.pngitem.com/pimgs/m/487-4876417_link-head-png-toon-link-face-png-transparent.png"
    }
  }
}
</script>
