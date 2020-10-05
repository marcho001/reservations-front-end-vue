<template>
  <form @submit.prevent.stop="handleSubmit" class="newComment">
    <div class="d-flex align-items-center">
      <h3>留下評論</h3>
      <div class="newComment_rating d-flex justify-content-around">
        <label
          class="cursor-pointer"
          v-for="num in 5"
          :key="`${num}star`"
          :for="`${num}-star`"
        >
          <font-awesome-icon v-if="rating >= num" :icon="solidIcon.faStar" />
          <font-awesome-icon v-else :icon="regularIcon.farStar" />
          <input
            class="radio"
            type="radio"
            name="rating"
            v-model="rating"
            :value="num"
            :id="`${num}-star`"
          />
        </label>
      </div>
    </div>
    <br />
    <transition name="show">
      <div v-show="rating > 0" class="newComment_comment w-100 ">
        <textarea
          v-model.trim="content"
          class="text"
          name="comment"
          rows="4"
          wrap="hard"
        ></textarea>
        <div class="d-flex">
          <button class="submit m-3 px-2" type="submit">新增</button>
          <button @click.prevent.stop="cancelComment" class="cancel m-3 px-2">
            取消
          </button>
        </div>
      </div>
    </transition>
  </form>
</template>

<script>
import { Confirm } from '../../utils/helpers'
import { FontAwesomeIcon, solid, regular } from '../../utils/icon'
export default {
  components: {
    FontAwesomeIcon
  },
  props: {
    restaurantId: {
      type: Number
    },
    currentUserId: {
      type: Number
    }
  },
  data() {
    return {
      rating: 0,
      content: '',
      solidIcon: solid,
      regularIcon: regular
    }
  },
  methods: {
    cancelComment() {
      Confirm.fire({
        title: '要取消編輯評論嗎？',
        confirmButtonText: '我要取消!',
        cancelButtonText: '不小心按錯了!'
      }).then(res => {
        if (res.isConfirmed === true) {
          this.rating = 0
          this.content = ''
        }
      })
    },
    handleSubmit() {
      this.$emit('after-create-comment', {
        RestaurantId: this.restaurantId,
        UserId: this.currentUserId,
        content: this.content,
        rating: this.rating,
        createdAt: new Date()
      })
      this.rating = 0
      this.content = ''
    }
  }
}
</script>

<style lang="scss" scoped>
@import '../../assets/css/components/RestaurantPage/CreateCommentForm';
</style>
