<template>
<div class="col-sm-6 col-md-4">
  <div class="card mt-4">
    <div class="card-header">
      <h4 class="card-title">
        {{ stock.name }}
        <small>(price: {{ stock.price }})</small>
      </h4>
    </div>
    <div class="card-body">
      <div class="float-left">
        <input
          v-model.number="quantity"
          type="number"
          class="form-control"
          placeholder="quantity">
      </div>
      <div class="float-right">
        <button
          class="btn btn-primary"
          :class="{'btn-danger': insufficientFunds}"
          :disabled="badOrder"
          @click="buyStock">
          {{ insufficientFunds ? 'Insufficient' : 'Buy' }}
        </button>
      </div>
    </div>
  </div>
</div>
</template>

<script>
export default {
  props: ['stock'],
  data () {
    return {
      quantity: 0
    }
  },
  computed: {
    funds () {
      return this.$store.getters.funds
    },
    insufficientFunds () {
      return this.quantity * this.stock.price > this.funds
    },
    badOrder (){
      return this.quantity <= 0 ||
        !Number.isInteger(this.quantity) ||
        this.insufficientFunds
    }
  },
  methods: {
    buyStock() {
      const order = {
        stockId: this.stock.id,
        stockPrice: this.stock.price,
        quantity: this.quantity
      }
      this.$store.dispatch('buyStock', order)
      this.quantity = 0
    }
  }
}
</script>

<style scoped>
.danger {
  border: 1px solid red
}
</style>
