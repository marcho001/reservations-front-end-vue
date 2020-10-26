<template>
  <div class="container">
    <div class="space-40"></div>
    <div class="member_wrapper">
      <UserNavTab :tabs="tabs" />

      <div class="wrapper">
        <Spinner v-if="isLoading" />
        <transition v-else name="changePage">
          <MemberInfo v-if="nowPage === 'info'" :user="userInfo" />
          <MemberHistoryOrder
            v-else-if="nowPage === 'orders'"
            :orders="orders"
            :user-id="currentUser.id"
          />
          <EditMemberInfo
            v-else
            :init-user="currentUser"
            @after-edit-user="afterEditUser"
          />
        </transition>
      </div>
    </div>
  </div>
</template>
<script>
import MemberHistoryOrder from '../components/MemberPage/MemberHistoryOrder'
import UserNavTab from '../components/UserNavTab'
import EditMemberInfo from '../components/MemberPage/EditMemberInfo'
import MemberInfo from '../components/MemberPage/MemberInfo'
import Spinner from '../components/Spinner'
import { Toast } from '../utils/helpers'
import userAPI from '../api/userAPI'
import { mapState } from 'vuex'

export default {
  components: {
    UserNavTab,
    MemberHistoryOrder,
    EditMemberInfo,
    MemberInfo,
    Spinner
  },
  data() {
    return {
      nowPage: 'orders',
      tabs: [
        {
          name: '會員總覽',
          pathName: 'member',
          paramsName: 'info'
        },
        {
          name: '所有訂單',
          pathName: 'member',
          paramsName: 'orders'
        },
        {
          name: '修改會員資料',
          pathName: 'member',
          paramsName: 'edit'
        }
      ],
      orders: [],
      userInfo: {},
      isLoading: true
    }
  },
  computed: {
    ...mapState(['currentUser'])
  },
  methods: {
    async fetchOrders(queryType) {
      try {
        const { data, statusText } = await userAPI.getOrders({
          type: queryType
        })

        if (statusText === 'error') {
          throw new Error()
        }
        this.orders = data.orders
        this.isLoading = false
      } catch (err) {
        console.error(err)
        Toast.fire({
          icon: 'error',
          title: '無法取得訂單資料，請稍後再試！'
        })
        this.isLoading = false
      }
    },
    async afterEditUser(formData) {
      const user = await userAPI.putEditUser(formData)
      console.log(user)
    },
    async fetchUserInfo() {
      try {
        const { data, statusText } = await userAPI.getUserInfo()

        if (statusText === 'error') {
          throw new Error()
        }
        this.userInfo = {
          ...data.user
        }
        this.isLoading = false
      } catch (err) {
        console.error(err)
        Toast.fire({
          icon: 'error',
          title: '無法取得資料，請稍後再試'
        })
        this.isLoading = false
      }
    }
  },
  created() {
    this.nowPage = this.$route.params.name
    const { type = 'coming' } = this.$route.query
    this.fetchOrders(type)
    this.fetchUserInfo()
  },
  beforeRouteUpdate(to, from, next) {
    this.nowPage = to.params.name
    if (to.params.name === 'orders') {
      const { type = 'coming' } = to.query
      this.fetchOrders(type)
    } else if (to.params.name === 'info') {
      this.fetchUserInfo()
    }
    next()
  }
}
</script>

<style lang="scss" scoped>
@import '@/assets/css/pages/Member';
</style>
