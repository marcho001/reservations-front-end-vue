<template>
  <div
    class="bill d-flex flex-column justify-content-around align-items-center"
  >
    <h1 v-if="orders.length === 0" class="mt-4">
      尚未加入餐點...
    </h1>
    <div v-else class="bill_list scroll my-2 p-2">
      <ul
        v-for="order in orders"
        :key="order.id"
        class="bill_list_item d-flex align-items-center
      my-2"
      >
        <li class="name text-center m-1">
          {{ order.name }}
        </li>
        <li class="m-1">x {{ order.quantity }}</li>
        <li class="border mx-3"></li>
        <li class="m-1">NT$ {{ order.price }}</li>
      </ul>
    </div>
    <div class="w-100">
      <div class="total m-1  pt-4 d-flex justify-content-end">
        <h2 class="mr-4 align-self-center">Total:</h2>
        <h1>NT $ {{ totalPrice }}</h1>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    orders: {
      type: Array
    },
    totalPrice: {
      type: Number
    }
  }
}
</script>

<style lang="scss">
@import '@/assets/css/components/ReservationPage/CartBill';
</style>
