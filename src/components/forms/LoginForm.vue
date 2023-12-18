<template>
  <v-card>
    <v-card-title>PIC POST</v-card-title>
    <v-card-subtitle>Post something good.</v-card-subtitle>
    <v-form
      v-model="$store.state.login.validFormLogin"
      @submit.prevent="$store.dispatch('loginUser')"
    >
      <v-row>
        <v-col>
          <v-text-field
            label="Username"
            counter="30"
            :rules="$store.getters.formRulesLogin.username"
            v-model="$store.state.login.formDataLogin.username"
          ></v-text-field>
        </v-col>
      </v-row>
      <v-row>
        <v-col>
          <v-text-field
            type="password"
            label="Password"
            counter="30"
            :rules="$store.getters.formRulesLogin.username"
            v-model="$store.state.login.formDataLogin.password"
          ></v-text-field>
        </v-col>
      </v-row>
      <div class="form-actions">
        <v-btn
          type="submit"
          color="primary"
          large
          :loading="$store.state.login.processingLogin"
        >Log-In</v-btn>
        <v-btn
          large
          @click="navigateToRegister"
        >Register</v-btn>
      </div>
      <alert></alert>
    </v-form>
  </v-card>
</template>

<script>
import Alert from '../alerts/Alert.vue'

export default {
  setup() {
    
  },
  created() {
    this.$store.commit('clearRequestStatus');
    this.$store.commit('clearFormDataLogin');
  },
  components: {
    Alert,
  },
  methods: {
    navigateToRegister() {
      this.$router.push('/register');
    },
  }
}
</script>

<style scoped>
  .v-card {
    width: 100%;
    max-width: 24rem;
    margin: auto;
    padding: 2rem;
  }
  .v-card__title {
    justify-content: center;
  }
  .v-card__subtitle {
    text-align: center; 
  }
  .form-actions {
    margin-top: 2rem;
    display: flex;
    flex-direction: row-reverse;
    gap: 1.5rem;
  }
  .form-actions button {
    flex: 1;
  }
</style>