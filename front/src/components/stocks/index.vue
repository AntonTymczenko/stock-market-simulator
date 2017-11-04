<template>
<div>
  <h1>Stocks - Stocks</h1>
  <div class="row">
    <stock
      v-for="stock in stocks"
      :stock=stock
      key="id"
    ></stock>
  </div>
</div>
</template>

<script>
import Stock from './Stock'
export default {
  components: {
    Stock
  },
  computed: {
    stocks() {
      return this.$store.getters.stocks
    }
  }
}
</script>

<style scoped>
</style>
