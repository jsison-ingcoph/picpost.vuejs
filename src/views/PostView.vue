<template>
  <v-app>
    <top-navigation></top-navigation>
    <div class="view-content">
      <v-card>
        <v-card-title>Make a PIC POST</v-card-title>
        <v-form
          v-model="$store.state.post.validFormPost"
          @submit.prevent="$store.dispatch('post')"
        >
          <v-row>
            <v-col>
              <v-textarea
                label="Caption"
                rows="3"
                counter="1000"
                :rules="$store.getters.formRulesPost.caption"
                v-model="$store.state.post.formDataPost.caption"
              ></v-textarea>
            </v-col>
          </v-row>
          <v-row>
            <v-col>
              <v-file-input
                label="Image"
                prepend-icon="mdi-image"
                placeholder="Pick an image"
                accept="image/png, image/jpeg"
                :rules="$store.getters.formRulesPost.filename"
                @change="onFileChange"
              ></v-file-input>
            </v-col>
          </v-row>
          <div class="form-actions">
            <v-btn
              type="submit"
              color="primary"
              large
              :loading="$store.state.login.processingLogin"
            >Post</v-btn>
          </div>
        </v-form>
      </v-card>
    </div>
  </v-app>
</template>

<script>
import TopNavigation from '@/components/navigations/TopNavigation.vue';

export default {
  setup() {
    
  },
  created() {
    this.$store.commit('clearRequestStatus');
    this.$store.commit('clearFormDataPost');
  },
  components: {
    TopNavigation,
  },
  methods: {
    onFileChange(file) {
      this.$store.state.post.formDataPost.filename = file;
    },
  },
}
</script>

<style scoped>
  .v-app-bar {
    padding: 0 1rem;
  }
  .view-content {
    margin-top: 3.5rem;
    padding: 2rem;
  }
  .v-card {
    padding: 2rem;
  }
  .form-actions {
    margin-top: 2rem;
    display: flex;
    gap: 1.5rem;
    justify-content: end;
  }
</style>