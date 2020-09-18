<template>
  <form class="restaurant_comments_newComment" action="">
    <div class="d-flex align-items-center">
      <h3>留下評論</h3>
      <div class="restaurant_comments_newComment--rating d-flex justify-content-around">
        <label 
          class="cursor-pointer"
          v-for="num in 5" 
          :key="`${num}star`"
          :for="`${num}-star`">
          <font-awesome-icon 
            v-if="newComment.rating >= num"
            :icon="fontAwesome.faStar"/>
          <font-awesome-icon 
            v-else
            :icon="fontAwesome.farStar"/>
          <input 
            class="radio" 
            type="radio" 
            name="rating" 
            v-model="newComment.rating"
            :value="num" 
            :id="`${num}-star`">
        </label>
      </div>  
    </div>
      <br>
      <div 
        v-if="newComment.rating > 0"
        class="restaurant_comments_newComment--comment w-100 ">
        <textarea 
          v-model.trim="newComment.comment"
          class="text" 
          name="comment" 
          rows="4"
          autofocus
          wrap="hard"></textarea>
          <div class="d-flex">
            <button class="submit m-3 px-2" type="submit">新增</button>
            <button class="cancel m-3 px-2">取消</button>
          </div>
      </div>
    </form>
</template>

<script>
export default {
  props: {
    fontAwesome: {
      type: Object
    }
  },
  data () {
    return {
      newComment: {
        rating:0,
        comment:''
      }
    }
  }
}
</script>

<style lang="scss" scoped>
@import '../../assets/css/components/RestaurantPage/CreateCommentForm';
</style>
