<template>
  <v-app>
    <register-form></register-form>
  </v-app>
</template>

<script>
import RegisterForm from '../components/forms/RegisterForm.vue'

export default {
  setup() {
    
  },
  components: {
    RegisterForm,
  },
}
</script>

<style scoped>
  .v-application {
    padding: 0 2rem;
  }
</style>