<template>
    <div 
    class="menu_item">
      <img :src="meal.image | emptyImage" />
      <div class="menu_item_body">
        <h2 class="text-center mb-2">
          {{ meal.name }}
        </h2>
        <p class="description text-center m-2">
          {{ meal.description }}
          jiajosdfoov oaisjdvoi aoisdjv oaisjdv o asvjdosdi vaiodja  iasjdvoid vjasiov d
        </p>
      </div>
      <div
        class="menu_item_footer d-flex justify-content-end align-items-center p-2"
      >
        <h3 class="mr-3">NT$ {{ meal.price }}</h3>
        <div class="count mx-2 d-flex">
          <button @click="minusItem(meal)" class="count_button minus">
            -
          </button>
          <input
            class="count_input text-center m-0"
            type="number"
            :value="meal.quantity"
            disabled
          />
          <button @click="addItem(meal)" class="count_button plus">
            +
          </button>
        </div>
      </div>
    </div>
</template>

<script>
import { emptyImageFilter } from '../../utils/mixin'

export default {
  props: {
    meal: {
      type: Object,
      required: true
    }
  },
  mixins: [emptyImageFilter],
  methods: {
    addItem(meal) {
      meal.quantity++
      this.$emit('after-add-item', {
        id: meal.id,
        name: meal.name,
        quantity: meal.quantity,
        price: meal.price
      })
    },
    minusItem(meal) {
      if (meal.quantity === 0) return
      meal.quantity--
      this.$emit('after-minus-item', {
        id: meal.id,
        name: meal.name,
        quantity: meal.quantity,
        price: meal.price
      })
    }
  }
}
</script>

<style lang="scss" scoped>
@import '@/assets/css/components/ReservationPage/MenuCard';
</style>
