<template>
  <div class="navbar">
      <div class="navbar_wrapper d-flex align-items-center justify-content-around">
        <button
          @click="changePage('history')" 
          class="navbar_wrapper_item">我的訂單</button>
        <button 
          @click="changePage('info')"
          class="navbar_wrapper_item">修改會員資料</button>
      </div>
    </div>
</template>

<script>
export default {
  methods: {
    changePage (page) {
      this.$emit('after-change-page', page)
    }
  }
}
</script>

<style lang="scss" scoped>
@import '@/assets/css/components/MemberPage/MemberNavbar';
</style>
