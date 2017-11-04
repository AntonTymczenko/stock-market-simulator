<template>
<div class="container-fluid">
  <navigation></navigation>
  <router-view></router-view>
</div>
</template>

<script>
import Navigation from '@/components/Navigation'
export default {
  components: {
    navigation: Navigation
  }
}
</script>

<style>
</style>
