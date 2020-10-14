<template>
  <div
    @click.self="toggleEditForm"
    class="menu_form d-flex justify-content-center align-items-center position-fixed"
  >
    <form class="form p-4 scroll">
      <label class="form_item image position-relative" for="image">
        <img :src="meal.image | emptyImage" />
        <p class="image_icon text-center cursor-pointer">
          <font-awesome-icon :icon="solidIcon.faCameraRetro" />
        </p>
      </label>
      <input @change="handleChange" class="d-none" type="file" id="image" />
      <div class="form_item">
        <label for="name">餐點名稱：</label>
        <input v-model="meal.name" type="text" id="name" />
      </div>
      <div class="form_item">
        <label for="category">餐點類別：</label>
        <select class="px-1" id="category">
          <option value="" :selected="meal.MealCategoryId === ''" disabled
            >請選擇類別</option
          >
          <option
            v-for="category in mealCategory"
            :key="category.id"
            :value="category.id"
            :selected="category.id === meal.MealCategoryId"
          >
            {{ category.name }}
          </option>
        </select>
      </div>
      <div class="form_item">
        <label for="description">
          餐點描述：<br />
          {{ maxLength }}/50
        </label>
        <textarea
          v-model="meal.description"
          maxlength="50"
          class="p-2"
          id="description"
          rows="3"
        ></textarea>
      </div>
      <div class="form_item">
        <label for="price">售價：</label>
        <input v-model="meal.price" type="number" id="price" />
      </div>
      <div class="form_item">
        <label for="status"
          >是否上架：
          <input v-model="meal.isSale" type="checkbox" id="status" />
        </label>
      </div>
      <div class="d-flex justify-content-end">
        <button class="form_save mt-2">
          儲存
        </button>
      </div>
    </form>
  </div>
</template>

<script>
import { emptyImageFilter } from '../../utils/mixin'
import { FontAwesomeIcon, solid } from '../../utils/icon'

export default {
  props: {
    initMeal: Object,
    mealCategory: Array
  },
  components: {
    FontAwesomeIcon
  },
  computed: {
    maxLength() {
      const length = this.meal.description.length
      return length
    }
  },
  data() {
    return {
      solidIcon: solid,
      meal: this.initMeal
    }
  },
  mixins: [emptyImageFilter],
  methods: {
    toggleEditForm() {
      this.$emit('after-toggle-edit-form')
    },
    handleChange(e) {
      const { files } = e.target
      if (files.length !== 0) {
        const imageURL = window.URL.createObjectURL(files[0])
        this.meal.image = imageURL
      }
    }
  },
  watch: {
    initMeal() {
      this.meal = {
        ...this.meal,
        ...this.initMeal
      }
    }
  }
}
</script>

<style lang="scss" scoped>
@import '@/assets/css/components/BusinessPage/EditMenuForm';
</style>
