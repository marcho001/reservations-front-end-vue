import Vue from 'vue'
import Vuex from 'vuex'
import authorizationAPI from '../api/authorization'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    currentUser: {
      id: -1,
      name: '',
      email: '',
      avatar: '',
      phone: '',
      role: '',
      RestaurantId: ''
    },
    isAuthenticated: false,
    token: ''
  },
  mutations: {
    setCurrentUser(state, currentUser) {
      state.currentUser = {
        ...state.currentUser,
        ...currentUser
      }
      state.token = localStorage.getItem('token')
      state.isAuthenticated = true
    },
    revokeAuthentication(state) {
      state.currentUser = {}
      state.isAuthenticated = false
      state.token = ''
      localStorage.removeItem('token')
    }
  },
  actions: {
    async fetchCurrentUser({ commit }) {
      try {
        const { data, statusText } = await authorizationAPI.getCurrentUser()
        if (statusText === 'error') throw new Error(data)

        const {
          id,
          name,
          email,
          avatar,
          role,
          phone,
          Restaurants
        } = data.profile

        // 先預設一個廠商只有一間餐廳
        let RestaurantId = ''
        if (Restaurants.length > 0) {
          RestaurantId = Restaurants[0].id
        }

        commit('setCurrentUser', {
          id,
          name,
          email,
          avatar,
          role,
          phone,
          RestaurantId
        })
        return true
      } catch (err) {
        console.error(err)
        commit('revokeAuthentication')
        return false
      }
    }
  },
  modules: {}
})
