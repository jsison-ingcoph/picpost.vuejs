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
  components: {
    LoginForm,
  },
}
</script>

<style scoped>
  .v-application {
    padding: 0 1rem;
  }
</style>