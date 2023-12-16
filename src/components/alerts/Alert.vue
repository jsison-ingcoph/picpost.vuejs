<template>
  <div>
    <v-alert
      v-if="$store.state.requestStatus.type === 'success'"
      class="form-alert"
      type="success"
    >{{ $store.state.requestStatus.msg }}</v-alert>
    <v-alert
      v-if="$store.state.requestStatus.type === 'error'"
      class="form-alert"
      type="error"
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