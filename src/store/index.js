import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    loginFormData: {
      username: '',
      password: '',
    },
    navigations: [
      { title: 'Home', icon: 'mdi-home', route: '/home' },
      { title: 'Profile', icon: 'mdi-account', route: '/profile' },
    ],
    posts: [],
    processingLogin: false,
    processingRegister: false,
    requestStatus: {
      type: "",
      msg: "",
    },
  },
  getters: {
  },
  mutations: {
    setLoginFormData(state, {field, value}) {
      state.loginFormData[field] = value;
    },
    setRegisterFormData(state, {field, value}) {
      state.registerFormData[field] = value;
    },
  },
  actions: {
    async loginUser({state}) {
      state.processingLogin = true;
      state.requestStatus.type = '';
      try {
        const response = await axios.post('http://127.0.0.1:8000/api/login', state.loginFormData);
        if (response.status === 200) {
          localStorage.setItem('token', response.data.token);
          state.processingLogin = false;
          state.requestStatus.type = '';
          state.requestStatus.msg = '';
          router.push('/home');
        }
      } catch (error) {
        console.log('Failed to login:', error);
        state.processingLogin = false;
        state.requestStatus.type = 'error';
        state.requestStatus.msg = error.response.data.msg;
        throw error;
      }
    },
    async registerUser({state}) {
      state.processingRegister = true;
      state.requestStatus.type = '';
      try {
        const response = await axios.post('http://127.0.0.1:8000/api/register', state.registerFormData);
        if (response.status === 201) {
          state.processingRegister = false;
          state.requestStatus.type = 'success';
          state.requestStatus.msg = response.data.msg;
        }
      } catch (error) {
        console.log('Failed to register:', error);
        state.processingRegister = false;
        state.requestStatus.type = 'error';
        state.requestStatus.msg = error.response.data.msg;
        throw error;
      }
    },
  },
  modules: {
  }
})
