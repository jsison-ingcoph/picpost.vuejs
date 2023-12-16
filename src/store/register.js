import axios from 'axios';

export default {
  state: {
    registerFormData: {
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
  },
  getters: {
  },
  mutations: {
    clearRegisterFormData(state) {
      state.registerFormData = {
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
    setRegisterFormData(state, {field, value}) {
      state.registerFormData[field] = value;
    },
  },
  actions: {
    async registerUser({ state, rootState, commit }) {
      if (state.processingRegister) return;
      commit('clearRequestStatus');
      if (state.registerFormData.username.length < 4) {
        commit('setRequestStatus', {
          type: 'warning',
          msg: 'Username must be atleast 4 characters.',
        });
        return;
      }
      try {
        state.processingRegister = true;
        if (rootState.debug) console.log('Sending:', state.registerFormData);
        const response = await axios.post('http://127.0.0.1:8000/api/register', state.registerFormData);
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