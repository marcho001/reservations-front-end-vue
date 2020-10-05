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
      <button 
        @click="toggleEditForm"
        class="create m-4">
        新增餐點</button>
      <hr>

        <div class="menu d-grid">
          <MenuCard />
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
import UserNavTab from '../components/UserNavTab'
import EditRestaurant from '../components/BusinessPage/EditRestaurant'
import EditMenuForm from '../components/BusinessPage/EditMenuForm'
import MenuCard from '../components/BusinessPage/MenuCard'
export default {
  components: {
    UserNavTab,
    EditRestaurant,
    EditMenuForm,
    MenuCard
  },
  data () {
    return {
      nowPage: 'menu',
      editMenu: false,
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
  methods: {
    afterToggleEditForm () {
      this.editMenu = false
    },
    toggleEditForm () {
      this.editMenu = true
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
}

.create {
  @include buttonStyle($buttonColor, $buttonColor, $white)
}



</style>
