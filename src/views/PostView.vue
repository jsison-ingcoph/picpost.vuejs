<template>
  <v-app>
    <top-navigation></top-navigation>
    <div class="view-content">
      <v-card>
        <v-card-title>Make a PIC POST</v-card-title>
        <v-form>
          <v-row>
            <v-col>
              <v-textarea
                label="Caption"
                rows="3"
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
  components: {
    TopNavigation,
  }
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