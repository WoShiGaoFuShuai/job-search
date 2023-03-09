<template>
  <section>
    <h1>
      <span :class="actionClasses">{{ action }}</span> <br />
      for everyone!
    </h1>
    <h2>Find your next job at Mali Corp.</h2>
  </section>
</template>

<script>
export default {
  name: "TheHeadline",
  data() {
    return {
      action: "Build",
      interval: null
    }
  },
  computed: {
    actionClasses() {
      return {
        [this.action.toLocaleLowerCase()]: true
      }
    }
  },
  created() {
    this.changeAction()
    console.log(this.interval)
  },
  beforeUnmount() {
    clearInterval(this.interval)
  },

  methods: {
    changeAction() {
      const actions = ["Build", "Create", "Design", "Code"]
      this.interval = setInterval(() => {
        const currentIndex = actions.indexOf(this.action) //0
        const nextIndex = (currentIndex + 1) % 4 // 1
        this.action = actions[nextIndex]
      }, 3000)
    }
  }
}
</script>
<style scoped>
.build {
  color: #1a73e8;
}

.create {
  color: #34a853;
}

.design {
  color: #f9ab00;
}

.code {
  color: #d93025;
}
</style>
