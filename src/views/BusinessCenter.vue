<template>
  <div class="container">
    <div class="space-40"></div>
    <div class="business_wrapper">
      <UserNavTab 
        :tabs="tabs"/>
        <div class="wrapper">

      <EditRestaurant 
        v-if="nowPage === 'restaurant'"/>
      
      <div>
      <button class="create m-4">新增餐點</button>
      <hr>

        <div class="menu d-grid">
          <div class="menu_item">
          <img :src="meal.image | emptyImage" />
          <div class="menu_item_body">
            <h1 class="text-center">
              eateat
            </h1>
            <p class="description text-center p-2">
              apsdofiaosdfj joi j oi ijoij oj oi oijo ioj ijoj oi oijioj ojoi o joijojojojo  jojoj o
            </p>
          </div>
          <div
            class="menu_item_footer d-flex justify-content-around align-items-center my-3"
          >
            <h3 class="mr-3">NT$ 30</h3>
            <button class="sale">販賣中</button>
            <button class="stop">停售中</button>
            
          </div>
        </div>

        </div>
      
      <EditMenuForm 
        @after-toggle-edit-form="afterToggleEditForm"
        v-show="editMenu"/>

      </div>


      </div>

    </div>
  </div>
</template>

<script>
import { emptyImageFilter } from '../utils/mixin'
import UserNavTab from '../components/UserNavTab'
import EditRestaurant from '../components/BusinessPage/EditRestaurant'
import EditMenuForm from '../components/BusinessPage/EditMenuForm'
export default {
  components: {
    UserNavTab,
    EditRestaurant,
    EditMenuForm
  },
  data () {
    return {
      nowPage: 'menu',
      editMenu: false,
      meal: {
        image: ''
      },
      tabs: [
        {
          name: '編輯餐廳',
          pathName: 'business',
          paramsName: 'restaurant'
        },
        {
          name: '編輯菜單',
          pathName: 'business',
          paramsName: 'menu'
        },
        {
          name: '訂位表',
          pathName: 'business',
          paramsName: 'calendar'
        }
      ]
    }
  },
  mixins: [emptyImageFilter],
  methods: {
    afterToggleEditForm () {
      this.editMenu = false
    }
  }
}
</script>

<style lang="scss" scoped>
.business_wrapper {
  display: flex;
}
.wrapper {
  height: 100vh;
  overflow: scroll;
  scroll-behavior: smooth;
}

.menu {
  grid-template-columns: repeat(auto-fill, minmax(240px, 1fr));
  grid-gap: 2rem;
  &_item {
  @extend %shadow, %radius;
  overflow: hidden;
  &_body {
    border-bottom: 1px solid $mask;   
    }
  }
}
.create {
  @include buttonStyle($buttonColor, $buttonColor, $white)
}
.sale {
  @include buttonStyle($categoryTag, $categoryTag, $white)
}
.stop {
  @include buttonStyle($mainColor, $mainColor, $white)
}



</style>
