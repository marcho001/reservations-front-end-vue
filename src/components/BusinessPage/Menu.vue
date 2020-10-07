<template>
  <div>
    <button @click="toggleEditForm" class="create m-4">
      新增餐點
    </button>
    <hr />

    <div class="menu d-grid">
      <MenuCard />
    </div>

    <EditMenuForm
      @after-toggle-edit-form="afterToggleEditForm"
      v-show="editMenu"
    />
  </div>
</template>
<script>
import MenuCard from './MenuCard'
import EditMenuForm from './EditMenuForm'

export default {
  components: {
    MenuCard,
    EditMenuForm
  },
  data () {
    return {
      editMenu: false
    }
  },
  methods: {
    afterToggleEditForm() {
      this.editMenu = false
    },
    toggleEditForm() {
      this.editMenu = true
    }
  }
}
</script>
<style lang="scss" scoped>
.menu {
  grid-template-columns: repeat(auto-fill, minmax(240px, 1fr));
  grid-gap: 2rem;
}

.create {
  @include buttonStyle($buttonColor, $buttonColor, $white)
}
</style>
