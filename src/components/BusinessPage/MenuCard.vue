<template>
  <div class="menu_item">
    <img :src="meal.image | emptyImage" />
    <div class="menu_item_body">
      <h1 class="text-center">
        {{ meal.name }}
      </h1>
      <p class="description text-center p-2">
        {{ meal.description }}
      </p>
    </div>
    <div
      class="menu_item_footer d-flex justify-content-around align-items-center p-3"
    >
      <h3 class="mr-3">NT$ {{ meal.price }}</h3>
      <button 
        @click="editMealForm" class="edit">
        編輯
      </button>
      <button 
        v-if="meal.isSale" 
        @click="patchIsSale(meal)"
        class="sale">
          販賣中
      </button>
      <button 
        v-else 
        @click="patchIsSale(meal)"
        class="stop">
          停售中
      </button>
    </div>
  </div>
</template>

<script>
import { emptyImageFilter } from '../../utils/mixin'
export default {
  props: {
    meal: Object
  },
  methods: {
    editMealForm() {
      this.$emit('after-edit-meal-form', this.meal)
    },
    patchIsSale (meal) {
      const data = {
        mealId: meal.id,
        isSale: !meal.isSale
      }
      this.$emit('after-patch-sale', data)
    }
  },
  mixins: [emptyImageFilter]
}
</script>

<style lang="scss" scoped>
@import '@/assets/css/components/BusinessPage/MenuCard';
</style>
