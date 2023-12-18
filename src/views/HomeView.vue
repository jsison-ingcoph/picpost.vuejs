<template>
  <v-app>
    <top-navigation></top-navigation>
    <div class="view-content">
      
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
</style>