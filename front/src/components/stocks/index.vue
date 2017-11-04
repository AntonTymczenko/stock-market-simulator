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
  data () {
    return {
      stocks: [
        { id: 1, name: 'BMW', price: 110 },
        { id: 2, name: 'Google', price: 310 },
        { id: 3, name: 'Twitter', price: 150 },
        { id: 4, name: 'Apple', price: 210 }
      ]
    }
  },
  components: {
    Stock
  }
}
</script>

<style scoped>
</style>
