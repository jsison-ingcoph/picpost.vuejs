<template>
  <v-app-bar
    fixed
    dark
  >
    <v-toolbar-title>{{ currentRouteName }}</v-toolbar-title>
    <v-spacer></v-spacer>
    <v-btn icon>
      <v-icon>mdi-home</v-icon>
    </v-btn>
    <v-btn
      icon
      :color="$route.path === '/post' ? 'primary' : ''"
      @click="navigate('/post')"
    >
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
      color="red darken-1"
      @click="navigate('/')"
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
    navigate(route) {
      if (this.$route.path === route) return;
      this.$router.push(route);
    },
  },
}
</script>