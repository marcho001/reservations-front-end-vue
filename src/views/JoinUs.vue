<template>
  <div class="container">
    <div class="header">
      <div
        class="header_wrapper d-flex align-items-center justify-content-center"
      >
        <div class="d-flex flex-column align-items-center">
          <h1>Stop Waiting</h1>
          <p>節省人力、減少漏單</p>
          <p>縮短訂位點餐時間</p>
          <p>網頁直接訂位點餐，不需下載 APP</p>
          <p>化繁為簡，智慧管理餐廳</p>
        </div>
      </div>
    </div>
    <div class="space-80"></div>
    <div class="wrapper">
      <h1 class="text-center my-2">客人怎麼說</h1>
      <div class="space-40"></div>
      <div class="comment d-flex justify-content-between align-content-around">
        <div
          v-for="(user, index) in users"
          :key="index"
          class="comment_item w-100 d-flex align-items-center m-2"
        >
          <img class="m-2" :src="user.image" />
          <p class="comment_item_block w-75 text-center">
            "{{ user.comment }}"
          </p>
        </div>
      </div>
      <div class="space-80"></div>
      <div class="info">
        <h1 class="text-center">為什麼使用 STOP WAITING?</h1>
        <div class="space-80"></div>
        <div class="info_wrapper d-flex justify-content-around">
          <div
            class="info_wrapper_item d-flex flex-column align-items-center m-2"
          >
            <div class="icon m-3">
              <font-awesome-icon :icon="solidIcon.faUtensils" />
            </div>
            <p>預先準備，提升翻桌</p>
          </div>
          <div
            class="info_wrapper_item d-flex flex-column align-items-center m-2"
          >
            <div class="icon m-3">
              <font-awesome-icon :icon="regularIcon.farCalendarAlt" />
            </div>
            <p>智慧管理行事曆，一鍵搞定</p>
          </div>
          <div
            class="info_wrapper_item d-flex flex-column align-items-center m-2"
          >
            <div class="icon m-3">
              <font-awesome-icon :icon="regularIcon.farNewspaper" />
            </div>
            <p>推播最新消息，不絕的客源</p>
          </div>
        </div>
      </div>
    </div>
    <div class="space-40"></div>
    <Footer />
  </div>
</template>
<script>
import { FontAwesomeIcon, solid, regular } from '../utils/icon'
import Footer from '../components/Footer'
export default {
  components: {
    FontAwesomeIcon,
    Footer
  },
  data() {
    return {
      solidIcon: solid,
      regularIcon: regular,
      users: [
        {
          image:
            'https://scontent.ftpe8-3.fna.fbcdn.net/v/t1.0-9/38023158_561368880931949_2997515855505391616_n.jpg?_nc_cat=106&ccb=2&_nc_sid=09cbfe&_nc_ohc=7bJr1vfm8q4AX9zUWQ3&_nc_ht=scontent.ftpe8-3.fna&oh=e7087f8a22655c6edcd5331e42416046&oe=5FBDCF22',
          comment: '考試都考100分'
        },
        {
          image:
            'https://upload.wikimedia.org/wikipedia/commons/thumb/9/9b/Che_Guevara.jpg/235px-Che_Guevara.jpg',
          comment: '每一分鐘就過了 60 秒'
        },
        {
          image:
            'https://images.fineartamerica.com/images/artworkimages/mediumlarge/3/rick-and-morty-10-lisa-gray.jpg',
          comment: '自從用了之後，每天都忙到 12 點'
        },
        {
          image:
            'https://store.playstation.com/store/api/chihiro/00_09_000/container/US/en/999/UP0151-CUSA09971_00-AV00000000000002/1580206501000/image?w=240&h=240&bg_color=000000&opacity=100&_version=00_09_000',
          comment: '開店營運，必備良藥'
        }
      ]
    }
  }
}
</script>

<style lang="scss">
.header {
  background: url('https://images.unsplash.com/photo-1472289065668-ce650ac443d2?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1650&q=80');
  font-weight: bold;
  color: $white;
  height: 60vh;
  @extend %brandFont;
  &_wrapper {
    height: 100%;
    background: $mask;
    h1 {
      font-size: 4rem;
    }
    p {
      @extend %font;
      font-size: 1.2rem;
      margin-top: 0.5rem;
    }
  }
}
.comment {
  width: 100%;
  flex-wrap: wrap;
  color: $textColor;
  &_item {
    @extend %shadow, %radius;
    height: 100px;
    background: $background;
    border: 1px solid lighten($mask, 30%);
    font-size: 1.5rem;
    flex-grow: 1;
    img {
      border-radius: 50%;
      width: 80px;
      height: 80px;
    }
    p {
      font-style: italic;
      font-weight: bold;
      padding: 0.5rem;
    }
  }
}
.info_wrapper {
  color: $textColor;
  flex-wrap: wrap;
  .icon {
    font-size: 3rem;
    color: $mask;
  }
}
@media screen and (min-width: 768px) {
  .comment_item {
    width: 45%;
  }
}
</style>
