<template>
  <div class="container pt-4"> 
    <section class="restaurant wrapper">


    <!--restaurantDetal-->
    <div class="restaurant_info d-flex flex-column align-items-center justify-content-center">
      <h1 class="restaurant_info--title">龍蝦吃到吐</h1>
      <div class="restaurant_info_detail mt-2 d-flex justify-content-center align-items-center">
          <span class="restaurant_info_detail--rating mr-3 px-1">
            <font-awesome-icon :icon="icon.faStar"/>
            4.2
          </span>
          <span class="restaurant_info_detail--category mr-3 px-1">海鮮料理</span>
        <p class="restaurant_info_detail--address m-1">
        <font-awesome-icon :icon="icon.faMapMarkedAlt"/>
        台北市中山區明水路3000號
        </p>
      </div>
    </div>
    <hr>
    <br>
    <div class="restaurant_description">
      <div class="restaurant_description_section">
        <div class="restaurant_description_section--album">
          <img src="../assets/image/background.jpeg" alt="">
        </div>
        <br>
        <div class="restaurant_description_section--text">
          <p>isdjfisjfisjdifjsifs ajsif ajsidjfa sdjfa isaisjf iasaisjd fias jfis faisd jfidsjfaisd jfiasd jfiasdjfias jfai sdfjiasd fiasdjfia sdjias ifjds </p>
        </div>
      </div>
    </div>

    <br>
    <div class="restaurant_comments">
    
    <h1>評論</h1>
    <hr>
    <!--createCommentForm-->
  
    <form class="restaurant_comments_newComment" action="">
    <div class="d-flex align-items-center">
      <h3>留下評論</h3>
      <div class="restaurant_comments_newComment--rating d-flex justify-content-around">
        <label 
          class="cursor-pointer"
          v-for="num in 5" 
          :for="`${num}-star`">
          <font-awesome-icon 
            v-if="newComment.rating >= num"
            :icon="icon.faStar"/>
          <font-awesome-icon 
            v-else
            :icon="icon.farStar"/>
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
    <br>
    <br>
    <!--restaurantComments-->
    <div class="restaurant_comments_allComments scroll">
    
      <div class="restaurant_comments_allComments--item d-flex align-items-center py-3">
        <img src="../assets/logo.png" alt="">
        <div>
          <div class="user-info pl-3 mb-2 d-flex">
            <h3 class="mr-3">章魚哥</h3>
            <h3 class="rating">
              4 <font-awesome-icon :icon="icon.faStar"/>
            </h3>
          </div>
          <p class="comment pl-3">efefeefefefef</p>
        </div>
      </div>


    </div>
    </div>
    </section>
    <Footer/>
  </div>
</template>

<script>
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import { faStar, faMapMarkedAlt } from '@fortawesome/free-solid-svg-icons'
import { faStar as farStar } from '@fortawesome/free-regular-svg-icons'
import Footer from '../components/Footer'

export default {
  components: {
    FontAwesomeIcon,
    Footer
  },
  data () {
    return {
      icon: {faStar, farStar, faMapMarkedAlt},
      newComment: {
        rating:0,
        comment:''
      }
    }
  }
}
</script>

<style lang="scss">
.restaurant_info {
  &--title {
    color: $textColor;
    font-size: 2rem;
  }
  &_detail {
    flex-wrap: wrap;
    font-weight: bold;
    span {
      @extend %radius;
    }
    &--rating {
      color: darken($white, 5%);
      background: $ratingTag;
    }
    &--category {
      color: darken($white, 5%);
      background: $categoryTag;
    }
  }
}
.restaurant_comments {
  color: $textColor;
}
.restaurant_comments_newComment {
  flex-wrap: wrap;
  color: $textColor;
  &--rating {
    width: 50%;
    margin: 0 auto;
    .radio {
      display: none;
    }
    label {
      font-size: 1.5rem;
      color: $star;
    }
  }
  &--comment {
    .text {
      width: 90%;
      resize: none;
    }
    button {
      font-size: 1rem;
      @extend %radius, %shadow;
      &:hover {
        transform: scale(1.2, 1.2);
        transition: transform .2s;
      }
    }

    .submit {
      background: $buttonColor;
      color: $white;
    }
    .cancel {
      border: 1px solid darken($white, 15%);
      color: $buttonColor;
    }
  }
}


.restaurant_comments_allComments {
  height: 300px;
  &--item {
  border-bottom: 1px solid darken($white, 10%);
  img {
    @extend %shadow;
    border-radius: 50%;
    width: 60px;
    height: 60px;
  }
  .rating {
    color: $star;
  }
}
}
  
</style>
