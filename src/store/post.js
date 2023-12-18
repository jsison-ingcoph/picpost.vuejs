import axios from 'axios'
import router from '../router'

export default {
  state: {
    formDataPost: {
      caption: '',
      filename: null,
    },
    processingPost: false,
    validFormPost: false,
  },
  getters: {
    formRulesPost: () => {
      return {
        caption: [
          v => (v.length <= 1000) || 'Exceeds the character limit.',
        ],
        filename: [
          v => !!v || 'This is required',
        ],
      };
    }
  },
  mutations: {
    clearFormDataPost(state) {
      state.formDataPost = {
        caption: '',
        filename: null,
      };
    },
    setFormDataPost(state, {field, value}) {
      state.formDataPost[field] = value;
    },
  },
  actions: {
    async post({ state, rootState, commit }) {
      if (state.processingPost) return;
      commit('clearRequestStatus');
      if (!state.validFormPost) {
        if (rootState.debug) console.log('Form is not valid:', state.formDataPost);
        commit('setRequestStatus', {
          type: 'warning',
          msg: 'Please fill all required fields and check the validity.',
        });
        return;
      }
      try {
        state.processingPost = true;
        if (rootState.debug) console.log('Sending:', state.formDataPost);
        const response = await axios.post('http://127.0.0.1:8000/api/post', state.formDataPost);
        state.processingPost = false;
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
        state.processingPost = false;
        commit('setRequestStatus', {
          type: 'error',
          msg: error.response.data.msg ? error.response.data.msg : 'Unknown server error occured.',
        });
        throw error;
      }
    },
  },
}