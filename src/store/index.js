import Vue from 'vue'
import Vuex from 'vuex'

import axios from 'axios'
import router from '../router'

import login from './login'
import register from './register'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    debug: true,
    genders: [
      { text: 'Male', value: 'male' },
      { text: 'Female', value: 'female' },
    ],
    navigations: [
      { title: 'Home', icon: 'mdi-home', route: '/home' },
      { title: 'Profile', icon: 'mdi-account', route: '/profile' },
    ],
    requestStatus: {
      type: '',
      msg: '',
    },
  },
  getters: {
  },
  mutations: {
    clearRequestStatus(state) {
      state.requestStatus = {
        type: '',
        msg: '',
      };
    },
    setRequestStatus(state, { type, msg }) {
      state.requestStatus = {
        type: type,
        msg: msg,
      };
    },
  },
  actions: {
  },
  modules: {
    login,
    register,
  }
})
