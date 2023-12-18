<template>
  <v-card>
    <v-card-title>PIC POST</v-card-title>
    <v-card-subtitle>Create an account.</v-card-subtitle>
    <v-form
      v-model="$store.state.register.validFormRegister"
      @submit.prevent="$store.dispatch('registerUser')"
    >
      <v-row>
        <v-col>
          <v-text-field
            label="Create username"
            counter="30"
            :rules="$store.getters.formRulesRegister.username"
            v-model="$store.state.register.formDataRegister.username"
          ></v-text-field>
        </v-col>
      </v-row>
      <v-row>
        <v-col>
          <v-text-field
            type="password"
            label="Create password"
            counter="30"
            :rules="$store.getters.formRulesRegister.password"
            v-model="$store.state.register.formDataRegister.password"
          ></v-text-field>
        </v-col>
        <v-col>
          <v-text-field
            type="password"
            label="Confirm password"
            counter="30"
            :rules="$store.getters.formRulesRegister.cpassword"
            v-model="$store.state.register.formDataRegister.cpassword"
          ></v-text-field>
        </v-col>
      </v-row>
      <v-row>
        <v-col>
          <v-text-field
            label="Last name"
            counter="255"
            :rules="$store.getters.formRulesRegister.lastname"
            v-model="$store.state.register.formDataRegister.lastname"
          ></v-text-field>
        </v-col>
        <v-col>
          <v-text-field
            label="First name"
            counter="255"
            :rules="$store.getters.formRulesRegister.firstname"
            v-model="$store.state.register.formDataRegister.firstname"
          ></v-text-field>
        </v-col>
      </v-row>
      <v-row>
        <v-col>
          <v-text-field
            label="Middle name (optional)"
            counter="255"
            :rules="$store.getters.formRulesRegister.middlename"
            v-model="$store.state.register.formDataRegister.middlename"
          ></v-text-field>
        </v-col>
        <v-col>
          <v-text-field
            label="Suffix (optional)"
            counter="255"
            :rules="$store.getters.formRulesRegister.suffix"
            v-model="$store.state.register.formDataRegister.suffix"
          ></v-text-field>
        </v-col>
      </v-row>
      <v-row>
        <v-col>
          <v-select
            :items="$store.state.genders"
            label="Gender"
            :rules="$store.getters.formRulesRegister.gender"
            v-model="$store.state.register.formDataRegister.gender"
          ></v-select>
        </v-col>
        <v-col>
          <v-text-field
            type="date"
            label="Birthdate"
            :rules="$store.getters.formRulesRegister.birthdate"
            v-model="$store.state.register.formDataRegister.birthdate"
          ></v-text-field>
        </v-col>
      </v-row>
      <div class="form-actions">
        <v-btn
          type="submit"
          color="primary"
          large
          :loading="$store.state.register.processingRegister"
        >Register</v-btn>
        <v-btn
          large
          @click="navigateToIndex"
        >Log-In Instead</v-btn>
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
    this.$store.commit('clearFormDataRegister');
  },
  components: {
    Alert,
  },
  methods: {
    navigateToIndex() {
      this.$router.push('/');
    },
  }
}
</script>

<style scoped>
  .v-card {
    width: 100%;
    max-width: 34rem;
    margin: 2rem auto;
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