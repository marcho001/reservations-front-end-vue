<template>
  <div class="navbar">
    <div
      class="navbar_wrapper d-flex align-items-center justify-content-around"
    >
      <router-link
        v-for="(tab, index) in tabs"
        :key="index"
        :to="{
          name: tab.pathName,
          params: {
            id: currentUser.id,
            name: tab.paramsName
          }
        }"
        class="navbar_wrapper_item"
      >
        {{ tab.name }}
      </router-link>
    </div>
  </div>
</template>

<script>
import { mapState } from 'vuex'

export default {
  props: {
    tabs: {
      type: Array
    }
  },
  computed: {
    ...mapState(['currentUser'])
  }
}
</script>

<style lang="scss" scoped>
@import '@/assets/css/components/UserNavTab';
</style>
