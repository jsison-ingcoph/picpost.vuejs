<template>
  <v-card>
    <v-card-title>PIC POST</v-card-title>
    <v-card-subtitle>Create an account.</v-card-subtitle>
    <v-form @submit.prevent="$store.dispatch('registerUser')">
      <v-row>
        <v-col>
          <v-text-field
            label="Create username"
            @input="updateUsername"
            v-model="$store.state.registerFormData.username"
          ></v-text-field>
        </v-col>
      </v-row>
      <v-row>
        <v-col>
          <v-text-field
            type="password"
            label="Create password"
            @input="updatePassword"
            v-model="$store.state.registerFormData.password"
          ></v-text-field>
        </v-col>
        <v-col>
          <v-text-field
            type="password"
            label="Confirm password"
            @input="updateCPassword"
            v-model="$store.state.registerFormData.cpassword"
          ></v-text-field>
        </v-col>
      </v-row>
      <v-row>
        <v-col>
          <v-text-field
            label="Last name"
            @input="updateLastname"
            v-model="$store.state.registerFormData.lastname"
          ></v-text-field>
        </v-col>
        <v-col>
          <v-text-field
            label="First name"
            @input="updateFirstname"
            v-model="$store.state.registerFormData.firstname"
          ></v-text-field>
        </v-col>
      </v-row>
      <v-row>
        <v-col>
          <v-text-field
            label="Middle name (optional)"
            @input="updateMiddlename"
            v-model="$store.state.registerFormData.middlename"
          ></v-text-field>
        </v-col>
        <v-col>
          <v-text-field
            label="Suffix (optional)"
            @input="updateSuffix"
            v-model="$store.state.registerFormData.suffix"
          ></v-text-field>
        </v-col>
      </v-row>
      <v-row>
        <v-col>
          <v-select
            :items="$store.state.genders"
            label="Gender"
            @input="updateGender"
            v-model="$store.state.registerFormData.gender"
          ></v-select>
        </v-col>
        <v-col>
          <v-text-field
            type="date"
            label="Birthdate"
            @input="updateBirthdate"
            v-model="$store.state.registerFormData.birthdate"
          ></v-text-field>
        </v-col>
      </v-row>
      <div class="form-actions">
        <v-btn
          type="submit"
          color="primary"
          large
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
    this.$store.commit('clearRegisterFormData');
  },
  components: {
    Alert,
  },
  methods: {
    navigateToIndex() {
      this.$router.push('/');
    },
    updateUsername(value) {
      this.$store.commit('setRegisterFormData', {
        field: 'username',
        value: value,
      });
    },
    updatePassword(value) {
      this.$store.commit('setRegisterFormData', {
        field: 'password',
        value: value,
      });
    },
    updateCPassword(value) {
      this.$store.commit('setRegisterFormData', {
        field: 'cpassword',
        value: value,
      });
    },
    updateLastname(value) {
      this.$store.commit('setRegisterFormData', {
        field: 'lastname',
        value: value,
      });
    },
    updateFirstname(value) {
      this.$store.commit('setRegisterFormData', {
        field: 'firstname',
        value: value,
      });
    },
    updateMiddlename(value) {
      this.$store.commit('setRegisterFormData', {
        field: 'middlename',
        value: value,
      });
    },
    updateSuffix(value) {
      this.$store.commit('setRegisterFormData', {
        field: 'suffix',
        value: value,
      });
    },
    updateGender(value) {
      this.$store.commit('setRegisterFormData', {
        field: 'gender',
        value: value,
      });
    },
    updateBirthdate(value) {
      this.$store.commit('setRegisterFormData', {
        field: 'birthdate',
        value: value,
      });
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