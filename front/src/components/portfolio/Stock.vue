<template>
<div class="col-sm-6 col-md-4">
  <div class="card mt-4">
    <div class="card-header bg-primary text-white">
      <h4 class="card-title">
        {{ stock.name }}
        <small>(price: {{ stock.price }}
          | quantity: {{ stock.quantity }})
        </small>
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
          :class="{'btn-danger': insufficientQuantity}"
          :disabled="badOrder"
          @click="sellStock">
          {{ insufficientQuantity ? 'Insufficient' : 'Sell' }}
        </button>
      </div>
    </div>
  </div>
</div>
</template>

<script>
import { mapActions } from 'vuex'
export default {
  props: ['stock'],
  data () {
    return {
      quantity: 0
    }
  },
  computed: {
    insufficientQuantity () {
      return this.quantity > this.stock.quantity
    },
    badOrder (){
      return this.quantity <= 0 ||
        !Number.isInteger(this.quantity) ||
        this.insufficientQuantity
    }
  },
  methods: {
    ...mapActions({
      placeSellOrder: 'sellStock'
    }),
    sellStock () {
      const order = {
        stockId: this.stock.id,
        stockPrice: this.stock.price,
        quantity: this.quantity
      }
      this.placeSellOrder(order)
      this.quantity = 0
    }
  }
}
</script>

<style scoped>
</style>
