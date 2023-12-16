<template>
  <div>
    <v-alert
      v-if="$store.state.requestStatus.type !== ''"
      :type="$store.state.requestStatus.type"
    >{{ $store.state.requestStatus.msg }}</v-alert>
  </div>
</template>

<script>
export default {
  setup() {
    
  },
}
</script>

<style scoped>
  .v-alert {
    margin-top: 1.5rem;
    margin-bottom: 0;
  }
</style>