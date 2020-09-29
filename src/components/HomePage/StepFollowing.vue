<template>
  <section class="step">
    <input type="checkbox" class="d-none turn" :checked="toggle" />
    <button
      @click="toggle = !toggle"
      class="step_toggle d-flex flex-column  align-items-center py-2"
    >
      <p>第一次進來，該如何使用？</p>
    </button>
    <transition name="show">
      <div v-show="toggle" class="step_ans d-flex justify-content-around py-2">
        <div class="step_ans_wrapper">
          <h3 class="title">STEP.1</h3>
          <div class="step_ans_wrapper--item p-2 text-center">選擇餐廳</div>
        </div>
        <div class="step_ans_wrapper">
          <h3 class="title">STEP.2</h3>
          <div class="step_ans_wrapper--item p-2 text-center">
            選擇餐點及人數
          </div>
        </div>
        <div class="step_ans_wrapper">
          <h3 class="title">STEP.3</h3>
          <div class="step_ans_wrapper--item p-2 text-center">
            確認訂單，線上付款
          </div>
        </div>
        <div class="step_ans_wrapper text-center">
          <h3 class="title">STEP.4</h3>
          <div class="step_ans_wrapper--item p-2 text-center">準備用餐！</div>
        </div>
      </div>
    </transition>
  </section>
</template>

<script>
export default {
  data() {
    return {
      toggle: false
    }
  }
}
</script>

<style lang="scss" scoped>
@import '@/assets/css/components/HomePage/StepFollowing';
</style>
