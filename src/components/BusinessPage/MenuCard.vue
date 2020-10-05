<template>
  <div class="menu_item">
    <img :src="meal.image | emptyImage" />
    <div class="menu_item_body">
      <h1 class="text-center">
        eateat
      </h1>
      <p class="description text-center p-2">
        apsdofiaosdfj joi j oi ijoij oj oi oijo ioj ijoj oi oijioj ojoi o joijojojojo  jojoj o
      </p>
    </div>
    <div
      class="menu_item_footer d-flex justify-content-around align-items-center my-3"
    >
      <h3 class="mr-3">NT$ 30</h3>
      <button class="sale">販賣中</button>
      <button class="stop">停售中</button>
      
    </div>
  </div>
</template>

<script>
import { emptyImageFilter } from '../../utils/mixin'
export default {
  data () {
    return {
      meal: {
        image: ''
      }
    }
  },
  mixins: [emptyImageFilter]
}
</script>

<style lang="scss" scoped>
@import '@/assets/css/components/BusinessPage/MenuCard';
</style>
