<template>
  <div class="member">
    <div class="member_info d-flex align-items-center">
      <img :src="user.image | unknownPerson" />
      <div class="member_info_detail ml-6">
        <p class="my-2">會員名稱 : {{ user.name }} </p>
        <p class="my-2">電話： {{ user.phone }} </p> 
        <p class="my-2">電子信箱：{{ user.email }}</p>
      </div>
    </div>
    <div class="space-40"></div>
    <hr />
    <div class="space-40"></div>
    <div class="content d-flex flex-column">
      <div class="member_news mb-4">
        <h2 class="text-center mb-2">最新消息</h2>
        <div class="member_news_wrapper scroll">
          <router-link to="">
            <div class="item m-2 p-2">
              <div class="item_title d-flex mb-2">
                <h3>龍蝦吃到飽</h3>
                <span class="ml-2">rating</span>
                <span class="ml-2">category</span>
              </div>
              <p>
                來吃不用錢來吃不用錢 來吃不用錢 來吃不用錢
              </p>
            </div>
          </router-link>
        </div>
      </div>
      <div class="member_follow">
        <h2 class="text-center mb-2">追蹤清單</h2>
        <div class="member_follow_wrapper scroll">
          <router-link to="">
            <div class="item m-2 p-2">
              <div class="title d-flex mb-2">
                <h3>龍蝦吃到飽</h3>
                <span class="ml-2">rating</span>
                <span class="ml-2">category</span>
              </div>
              <p>地址：</p>
              <p>電話：</p>
              <p>營業時間：</p>
            </div>
          </router-link>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { emptyImageFilter } from '../../utils/mixin'
export default {
  props: {
    user: Object
  },
  mixins: [emptyImageFilter]
}
</script>

<style lang="scss" scoped>
@import '@/assets/css/components/MemberPage/MemberInfo';
</style>
