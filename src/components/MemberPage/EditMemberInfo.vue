<template>
  <form @submit.stop.prevent="handleSubmit" class="info m-6">
    <label class="info_item image position-relative" for="image">
      <img :src="user.avatar | unknownPerson" />
      <p class="image_icon text-center cursor-pointer">
        <font-awesome-icon :icon="solidIcon.faCameraRetro" />
      </p>
    </label>
    <input
      @change="handleChange"
      name="avatar"
      class="d-none"
      type="file"
      id="image"
    />
    <div class="info_item">
      <label for="name">名字：</label>
      <input v-model="user.name" type="text" name="name" id="name" />
    </div>
    <div class="info_item">
      <label for="phone">電話：</label>
      <input v-model="user.phone" type="tel" name="phone" id="phone" />
    </div>
    <div class="info_item">
      <label for="email">電子信箱：</label>
      <input v-model="user.email" type="email" name="email" id="email" />
    </div>
    <div class="info_item">
      <label for="password">密碼：</label>
      <input
        v-model="user.password"
        type="password"
        name="password"
        id="password"
      />
    </div>
    <div class="info_item">
      <label for="checkPassword">確認密碼：</label>
      <input
        v-model="user.checkPassword"
        type="password"
        name="checkPassword"
        id="checkPassword"
      />
    </div>
    <div class="d-flex justify-content-end">
      <button type="submit" class="info_save mt-2">
        儲存
      </button>
    </div>
  </form>
</template>
<script>
import { FontAwesomeIcon, solid } from '../../utils/icon'
import { emptyImageFilter } from '../../utils/mixin'
export default {
  props: {
    initUser: Object
  },
  components: {
    FontAwesomeIcon
  },
  data() {
    return {
      solidIcon: solid,
      user: {
        ...this.initUser,
        password: '',
        checkPassword: ''
      }
    }
  },
  methods: {
    handleChange(e) {
      const { files } = e.target
      if (files.length !== 0) {
        const imageURL = window.URL.createObjectURL(files[0])
        this.user.avatar = imageURL
      }
    },
    handleSubmit(e) {
      const form = e.target
      const formData = new FormData(form)
      this.$emit('after-edit-user', formData)
    }
  },
  watch: {
    initUser() {
      this.user = {
        ...this.user,
        ...this.initUser
      }
    }
  },
  mixins: [emptyImageFilter]
}
</script>

<style lang="scss" scoped>
@import '@/assets/css/components/MemberPage/EditMemberInfo';
</style>
