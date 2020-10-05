<template>
  <div class="reservation">
    <NavBar />
    <div class="space-40"></div>
    <main>
      <router-view />
    </main>
  </div>
</template>

<script>
import NavBar from './components/NavBar'

export default {
  components: {
    NavBar
  }
}
</script>

<style lang="scss">
@import './assets/css/_reset.scss';
.reservation {
  height: 100%;
  main {
    height: 100%;
  }
}
</style>
