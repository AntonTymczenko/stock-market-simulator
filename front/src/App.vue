<template>
<div class="container">
  <navigation></navigation>
  <div class="row">
    <div class="col">
      <router-view></router-view>
    </div>
  </div>
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
