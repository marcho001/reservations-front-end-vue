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
      role: ''
    },
    isAuthenticated: false
  },
  mutations: {
    setCurrentUser(state, currentUser) {
      state.currentUser = {
        ...state.currentUser,
        ...currentUser
      }
      state.isAuthenticated = true
    }
  },
  actions: {
    async fetchCurrentUser ({ commit }) {
      try {
        const { data, statusText } = await authorizationAPI.getCurrentUser()
        if (statusText === 'error') throw new Error(data)

        const { id, name, email, avatar, role } = data.profile

        commit('setCurrentUser', {
          id, name, email, avatar, role
        })
      } catch (err) {
        console.error(err)
      }
    }
  },
  modules: {}
})
