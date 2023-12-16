import axios from 'axios';

export default {
  state: {
    loginFormData: {
      username: '',
      password: '',
    },
    processingLogin: false,
  },
  getters: {
  },
  mutations: {
    clearLoginFormData(state) {
      state.loginFormData = {
        username: '',
        password: '',
      };
    },
    setLoginFormData(state, {field, value}) {
      state.loginFormData[field] = value;
    },
  },
  actions: {
    async loginUser({ state, rootState, commit }) {
      if (state.processingLogin) return;
      commit('clearRequestStatus');
      try {
        state.processingLogin = true;
        if (rootState.debug) console.log('Sending:', state.loginFormData);
        const response = await axios.post('http://127.0.0.1:8000/api/login', state.loginFormData);
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