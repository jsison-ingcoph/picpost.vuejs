<template>
  <v-app-bar
    fixed
    color="primary"
    dark
  >
    <v-toolbar-title>{{ currentRouteName }}</v-toolbar-title>
    <v-spacer></v-spacer>
    <v-btn icon>
      <v-icon>mdi-home</v-icon>
    </v-btn>
    <v-btn icon>
      <v-icon>mdi-publish</v-icon>
    </v-btn>
    <v-btn icon>
      <v-icon>mdi-account</v-icon>
    </v-btn>
    <v-btn icon>
      <v-icon>mdi-cog</v-icon>
    </v-btn>
    <v-btn
      icon
      @click="navigateToIndex"
    >
      <v-icon>mdi-logout</v-icon>
    </v-btn>
  </v-app-bar>
</template>

<script>
export default {
  setup() {
    
  },
  computed: {
    currentRouteName() {
      return this.$route.name;
    }
  },
  methods: {
    navigateToIndex() {
      this.$router.push('/');
    },
  },
}
</script>