import axios from 'axios'
import router from '../router'

export default {
  state: {
    formDataRegister: {
      username: '',
      password: '',
      cpassword: '',
      lastname: '',
      firstname: '',
      middlename: '',
      suffix: '',
      gender: '',
      birthdate: '',
    },
    processingRegister: false,
    validFormRegister: false,
  },
  getters: {
    formRulesRegister: (state) => {
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
        cpassword: [
          v => !!v || 'This is required',
          v => (v && v.length >= 4) || 'Must be at least 4 characters long',
          v => (v === state.formDataRegister.password) || 'Passwords do not match',
          v => (v.length <= 30) || 'Exceeds the character limit.',
        ],
        lastname: [
          v => !!v || 'This is required',
          v => (v.length <= 255) || 'Exceeds the character limit.',
        ],
        firstname: [
          v => !!v || 'This is required',
          v => (v.length <= 255) || 'Exceeds the character limit.',
        ],
        middlename: [
          v => (v.length <= 255) || 'Exceeds the character limit.',
        ],
        suffix: [
          v => (v.length <= 255) || 'Exceeds the character limit.',
        ],
        gender: [
          v => !!v || 'This is required',
        ],
        birthdate: [
          v => !!v || 'This is required',
        ],
      };
    },
  },
  mutations: {
    clearFormDataRegister(state) {
      state.formDataRegister = {
        username: '',
        password: '',
        cpassword: '',
        lastname: '',
        firstname: '',
        middlename: '',
        suffix: '',
        gender: '',
        birthdate: '',
      };
    },
    setFormDataRegister(state, {field, value}) {
      state.formDataRegister[field] = value;
    },
  },
  actions: {
    async registerUser({ state, rootState, commit }) {
      if (state.processingRegister) return;
      commit('clearRequestStatus');
      if (!state.validFormRegister) {
        if (rootState.debug) console.log('Form is not valid:', state.formDataRegister);
        commit('setRequestStatus', {
          type: 'warning',
          msg: 'Please fill all required fields and check the validity.',
        });
        return;
      }
      try {
        state.processingRegister = true;
        if (rootState.debug) console.log('Sending:', state.formDataRegister);
        const response = await axios.post('http://127.0.0.1:8000/api/register', state.formDataRegister);
        state.processingRegister = false;
        if (response.status === 201) {
          localStorage.setItem('token', response.data.token);
          commit('setRequestStatus', {
            type: 'success',
            msg: response.data.msg,
          });
          return;
        }
        commit('setRequestStatus', {
          type: 'error',
          msg: 'Unknown client error occured.',
        });
      } catch (error) {
        if (rootState.debug) console.log('Server error:', error);
        state.processingRegister = false;
        commit('setRequestStatus', {
          type: 'error',
          msg: error.response.data.msg ? error.response.data.msg : 'Unknown server error occured.',
        });
        throw error;
      }
    },
  },
}