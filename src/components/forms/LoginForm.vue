<template>
  <v-card>
    <v-card-title>PIC POST</v-card-title>
    <v-card-subtitle>Post something good.</v-card-subtitle>
    <v-form @submit.prevent="$store.dispatch('loginUser')">
      <v-row>
        <v-col>
          <v-text-field
            label="Username"
            @input="updateUsername"
            v-model="$store.state.loginFormData.username"
          ></v-text-field>
        </v-col>
      </v-row>
      <v-row>
        <v-col>
          <v-text-field
            type="password"
            label="Password"
            @input="updatePassword"
            v-model="$store.state.loginFormData.password"
          ></v-text-field>
        </v-col>
      </v-row>
      <div class="form-actions">
        <v-btn
          type="submit"
          color="primary"
          large
        >Log-In</v-btn>
        <v-btn
          large
          @click="navigateToRegister"
        >Register</v-btn>
      </div>
    </v-form>
  </v-card>
</template>

<script>
export default {
  setup() {
    
  },
  created() {
    this.$store.commit('clearRequestStatus');
  },
  methods: {
    navigateToRegister() {
      this.$router.push('/register');
    },
    updateUsername(value) {
      this.$store.commit('setLoginFormData', {
        field: 'username',
        value: value,
      });
    },
    updatePassword(value) {
      this.$store.commit('setLoginFormData', {
        field: 'password',
        value: value,
      });
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