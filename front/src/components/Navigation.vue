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
      <li class="nav-item"><a href="#" class="nav-link">End day</a></li>
      <li class="nav-item dropdown">
        <a class="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
          Save & Load
        </a>
        <div class="dropdown-menu" aria-labelledby="navbarDropdown">
          <a class="dropdown-item" href="#">Save</a>
          <a class="dropdown-item" href="#">Load</a>
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
export default {
  computed: {
    funds () {
      return this.$store.getters.funds
    }
  }
}
</script>

<style scoped>
</style>
