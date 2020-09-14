<template>
  <div class="container">
    <section class="banner">
      <div class="banner_wrapper d-flex flex-column justify-content-center p-4">
        <div class="banner--content ml-4">
          <p class="mb-2">還在為了美食等待？</p>
          <p class="mb-2">總是有人看著菜單猶豫不決？</p>
          <br>
          <h1 class="mt-4">立即點餐訂位</h1>
          <h1>STOP WAITING !</h1>
        </div>
        
      </div>
    </section>
    <section class="step">
      <div class="step_ques">
        <p>第一次進來，該如何使用？</p>
      </div>
      <div class="step_ans">
      </div>
    </section>
    <section></section>
  </div>
</template>
<script>
</script>

<style lang="scss" scoped>
  .banner {
    background-image: url('../assets/image/homePageHeader.jpeg');
    background-position: center;
    background-size: cover;
    top: 0;
    right: 0;
    left: 0;
    right: 0;
    height: 100vh;
    @extend %font;
    &_wrapper {
      height: 100%;
      background: $mask;
      color: $white;
      p {
        font-size: 1.5rem;
      }
      h1 {
        font-size: 2rem;
      }

    }
  }

  @media screen and (min-width: 768px) {
    .banner_wrapper {
      p {
        font-size: 2rem;
      }
      h1 {
        font-size: 4rem;
      }
    }
  }
</style>
