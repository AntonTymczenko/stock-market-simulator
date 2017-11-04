<template>
<div>
  <h1>Portfolio</h1>
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
import { mapGetters } from 'vuex'

export default {
  components: {
    Stock
  },
  computed: {
    ...mapGetters({
      stocks: 'stockPortfolio'
    })
  }
}
</script>

<style scoped>
</style>
