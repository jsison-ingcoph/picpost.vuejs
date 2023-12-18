<template>
  <v-app>
    <login-form></login-form>
  </v-app>
</template>

<script>
import LoginForm from '../components/forms/LoginForm.vue'

export default {
  setup() {
    
  },
  created() {
    this.$store.commit('clearRequestStatus');
    this.$store.commit('clearFormDataLogin');
  },
  components: {
    LoginForm,
  },
}
</script>

<style scoped>
  .v-application {
    padding: 0 2rem;
  }
</style>