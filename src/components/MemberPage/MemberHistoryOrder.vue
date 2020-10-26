<template>
  <div class="order">
    <h1 class="text-center">我的訂單</h1>
    <div class="space-40"></div>
    <div class="category">
      <div class="category_wrapper d-flex justify-content-around">
        <router-link
          class="category_wrapper_item m-2"
          :to="{
            name: 'member',
            params: { id: userId, name: 'orders' },
            query: { type: 'coming' }
          }"
        >
          即將到來
        </router-link>
        <router-link
          class="category_wrapper_item m-2"
          :to="{
            name: 'member',
            params: { id: userId, name: 'orders' },
            query: { type: 'history' }
          }"
        >
          歷史訂單
        </router-link>
        <router-link
          class="category_wrapper_item m-2"
          :to="{
            name: 'member',
            params: { id: userId, name: 'orders' },
            query: { type: 'unpaid' }
          }"
        >
          未付款訂單
        </router-link>
      </div>
    </div>
    <hr />
    <div class="order">
      <div v-for="order in orders" :key="order.id" class="item p-2 my-4">
        <div class="item_title d-flex justify-content-between">
          <div>
            <h2 class="mb-2">
              {{ order.restaurantName }}
            </h2>
            <p>編號：hiahifhiehaisehiashef</p>
          </div>
          <p class="align-self-end">
            {{ order.status }}
          </p>
        </div>
        <hr />
        <div class="item_detail">
          <ul
            v-for="item in order.OrderItems"
            :key="item.id"
            class="bill_list_item d-flex align-items-center my-2"
          >
            <li class="name text-center m-1">{{ item.name }}</li>
            <li class="m-1">x{{ item.quantity }}</li>
            <li class="border mx-3"></li>
            <li class="m-1">$ {{ item.price }}</li>
          </ul>
          <h3 class="text-right">總計： ${{ order.totalPrice }}</h3>
        </div>
        <hr />
        <div class="item_footer d-flex justify-content-around">
          <div class="m-2">
            預約日期：<span>{{ order.date }}</span>
          </div>
          <div class="m-2">
            預約時間：<span>{{ order.time }}</span>
          </div>
          <div class="m-2">付款方式：<span>信用卡</span></div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    orders: Array,
    userId: Number
  }
}
</script>

<style lang="scss" scoped>
@import '@/assets/css/components/MemberPage/MemberHistoryOrder';
</style>
