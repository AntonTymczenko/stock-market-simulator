import Vue from 'vue'
import Vuex from 'vuex'
import stocks from './stocks'
import portfolio from './portfolio'

Vue.use(Vuex)
const loadData = ({ commit } ) => {
  Vue.http.get('data.json')
    .then(response => response.json())
    .then(data => {
      if (data) {
        const stocks = data.stocks,
          funds = data.funds,
          stockPortfolio = data.stockPortfolio
        const portfolio = {
          stockPortfolio,
          funds
        }
        commit('SET_STOCKS', stocks)
        commit('SET_PORTFOLIO', portfolio)
      }
    })
}

export default new Vuex.Store({
  actions: {
    loadData
  },
  modules: {
    stocks,
    portfolio
  }
})
