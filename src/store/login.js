import axios from 'axios'
import router from '../router'

export default {
  state: {
    formDataLogin: {
      username: '',
      password: '',
    },
    processingLogin: false,
    validFormLogin: false,
  },
  getters: {
    formRulesLogin: () => {
      return {
        username: [
          v => !!v || 'This is required',
          v => (v && v.length >= 4) || 'Must be at least 4 characters long',
          v => /^[a-zA-Z0-9]+$/.test(v) || 'Can only contain letters and numbers',
          v => (v.length <= 30) || 'Exceeds the character limit.',
        ],
        password: [
          v => !!v || 'This is required',
          v => (v && v.length >= 4) || 'Must be at least 4 characters long',
          v => (v.length <= 30) || 'Exceeds the character limit.',
        ],
      };
    }
  },
  mutations: {
    clearFormDataLogin(state) {
      state.formDataLogin = {
        username: '',
        password: '',
      };
    },
    setFormDataLogin(state, {field, value}) {
      state.formDataLogin[field] = value;
    },
  },
  actions: {
    async loginUser({ state, rootState, commit }) {
      if (state.processingLogin) return;
      commit('clearRequestStatus');
      if (!state.validFormLogin) {
        if (rootState.debug) console.log('Form is not valid:', state.formDataLogin);
        commit('setRequestStatus', {
          type: 'warning',
          msg: 'Please fill all required fields and check the validity.',
        });
        return;
      }
      try {
        state.processingLogin = true;
        if (rootState.debug) console.log('Sending:', state.formDataLogin);
        const response = await axios.post('http://127.0.0.1:8000/api/login', state.formDataLogin);
        state.processingLogin = false;
        if (response.status === 200) {
          localStorage.setItem('token', response.data.token);
          commit('clearRequestStatus');
          router.push('/home');
          return;
        }
        commit('setRequestStatus', {
          type: 'error',
          msg: 'Unknown client error occured.',
        });
      } catch (error) {
        if (rootState.debug) console.log('Server error:', error);
        state.processingLogin = false;
        commit('setRequestStatus', {
          type: 'error',
          msg: error.response.data.msg ? error.response.data.msg : 'Unknown server error occured.',
        });
        throw error;
      }
    },
  },
}