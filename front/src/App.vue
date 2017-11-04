<template>
<div class="container">
  <navigation></navigation>
  <router-view></router-view>
</div>
</template>

<script>
import Navigation from '@/components/Navigation'
export default {
  components: {
    navigation: Navigation
  },
  created () {
    this.$store.dispatch('initStocks')
  }
}
</script>

<style>
</style>
