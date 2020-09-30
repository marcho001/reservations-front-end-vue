<template>
  <div class="menu d-grid">
    <div 
      v-for="meal in meals"
      :key="meal.id"
      class="menu_item">
      <img 
        :src="meal.image | emptyImage" />
      <div class="menu_item_body">
        <h1 class="text-center">
          {{ meal.name }}
        </h1>
        <p class="description text-center px-2">
          {{ meal.description }}
        </p>
      </div>
      <div
        class="menu_item_footer d-flex justify-content-end align-items-center my-3"
      >
        <h3 class="mr-3">NT$ {{ meal.price }}</h3>
        <div class="count mx-2 d-flex">
          <button 
            @click="minusItem(meal)"
            class="count_button minus">
            -
          </button>
          <input class="count_input text-center m-0" type="number" :value="meal.count" disabled />
          <button 
            @click="addItem(meal)"
            class="count_button plus">
            +
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { emptyImageFilter } from '../../utils/mixin'
const meal = [
  {
    name: 'noodle',
    id: 2,
    description: '很油很閒很好吃的滷肉飯，真的由真得閒，有夠好吃，好好吃真好吃超級好吃的ㄑosidjfsojfsidjfsoidfjsiofjspaoisdjaosidfjasodif',
    price: 50,
    count: 0,
    image: ''
  },
  {
    name: 'rice',
    id: 1,
    description: '很油很閒很好吃的滷肉飯，真的由真得閒，有夠好吃，好好吃真好吃超級好吃的ㄑosidjfsojfsidjfsoidfjsiofjspaoisdjaosidfjasodif',
    price: 100,
    count: 0,
    image: ''
  },
  {
    name: '御飯糰',
    id: 3,
    description: '很油很閒很好吃的滷肉飯，真的由真得閒，有夠好吃，好好吃真好吃超級好吃的ㄑosidjfsojfsidjfsoidfjsiofjspaoisdjaosidfjasodif',
    price: 100,
    count: 0,
    image: ''
  }
]
export default {
  data () {
    return {
      meals: meal,
      order: []
    }
  },
  mixins: [emptyImageFilter],
  methods: {
    addItem (meal) {
        meal.count++
        this.$emit('after-add-item', {
          id: meal.id,
          name: meal.name,
          count: meal.count,
          price: meal.price
        })
    },
    minusItem (meal) {
      if (meal.count === 0) return
      meal.count--
      this.$emit('after-minus-item', {
        id: meal.id,
        name: meal.name,
        count: meal.count,
        price: meal.price
      })
    }
  }
}
</script>

<style lang="scss" scoped>
@import '@/assets/css/components/ReservationPage/MenuCard';
</style>
