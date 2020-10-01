<template>
  <form class="info m-6">
      <label 
        class="info_item image position-relative" 
        for="image">
        <img 
          :src="user.image | unknownPerson">
        <p class="image_icon text-center cursor-pointer">
          <font-awesome-icon :icon="solidIcon.faCameraRetro"/>
        </p>
      </label>
      <input class="d-none" type="file" id="image">
    <div class="info_item">
      <label for="name">名字：</label>
      <input type="text" id="name">
    </div>
    <div class="info_item">
      <label for="phone">電話：</label>
      <input type="tel" id="phone">
    </div>
    <div class="info_item">  
      <label for="email">電子信箱：</label>
      <input type="email" id="email">
    </div>
    <div class="info_item">  
      <label for="password">密碼：</label>
      <input type="password" id="password">
    </div>
    <div class="info_item">  
      <label for="checkPassword">確認密碼：</label>
      <input type="password" id="checkPassword">
    </div>
    <div class="d-flex justify-content-end">
      <button class="info_save mt-2">
        儲存
      </button>
    </div>
  </form>
</template>
<script>
import { FontAwesomeIcon, solid } from '../../utils/icon'
import { emptyImageFilter } from '../../utils/mixin'

export default {
  components: {
    FontAwesomeIcon
  },
  data () {
    return {
      solidIcon: solid,
      user: {
        image: ''
      }
    }
  },
  mixins: [emptyImageFilter]
}
</script>

<style lang="scss" scoped>
@import '@/assets/css/components/MemberPage/MemberInfo';
</style>
