<template>
<nav class="navbar navbar-expand-lg navbar-light bg-light">
  <router-link
    class="navbar-brand"
    :to="{ name: 'root' }">
    Stock Trader
  </router-link>
  <button
    class="navbar-toggler"
    type="button"
    data-toggle="collapse"
    data-target="#navbarSupportedContent"
    aria-controls="navbarSupportedContent"
    aria-expanded="false"
    aria-label="Toggle navigation">
    <span class="navbar-toggler-icon"></span>
  </button>

  <div class="collapse navbar-collapse" id="navbarSupportedContent">
    <ul class="navbar-nav mr-auto">
      <router-link
        class="nav-item"
        tag="li"
        :to="{ name: 'portfolio', params: {} }">
        <a class="nav-link">Portfolio</a>
      </router-link>
      <router-link
        class="nav-item"
        tag="li"
        :to="{ name: 'stocks', params: {} }">
        <a class="nav-link">Stocks</a>
      </router-link>
      <li class="nav-item"><a href="#" @click="endDay" class="nav-link">End day</a></li>
      <li class="nav-item dropdown">
        <a
          @click="isDropdownOpen = !isDropdownOpen"
          class="nav-link dropdown-toggle"
          href="#"
          id="navbarDropdown"
          role="button"
          data-toggle="dropdown"
          aria-haspopup="true"
          aria-expanded="false">
          Save & Load
        </a>
        <div class="dropdown-menu"
          :class="{show: isDropdownOpen}"
          aria-labelledby="navbarDropdown">
          <a class="dropdown-item" href="#" @click="saveData">Save</a>
          <a class="dropdown-item" href="#" @click="loadData">Load</a>
        </div>
      </li>
      <li class="nav-item">
        <strong class="navbar-text">Funds: {{ funds | currency }}</strong>
      </li>
    </ul>
  </div>
</nav>
</template>

<script>
import { mapActions } from 'vuex'
export default {
  data () {
    return {
      isDropdownOpen: false
    }
  },
  computed: {
    funds () {
      return this.$store.getters.funds
    }
  },
  methods: {
    ...mapActions({
      randomizeStocks: 'randomizeStocks',
      fetchData: 'loadData'
    }),
    endDay () {
      this.randomizeStocks()
    },
    saveData () {
      const data = {
        funds: this.$store.getters.funds,
        stockPortfolio: this.$store.getters.stockPortfolio,
        stocks: this.$store.getters.stocks
      }
      this.$http.put('data.json', data)
    },
    loadData () {
      this.fetchData()
    }
  }
}
</script>

<style scoped>
</style>
