import appService from '../app.service.js'

const defaultState = {
  status: 'all',
  opportunities: []
}

const inBrowser = typeof window !== 'undefined'
const state = (inBrowser && window.__INITIAL_STATE__) ? window.__INITIAL_STATE__.opportunitiesModule : defaultState

const getters = {
  opportunities: state => state.opportunities
}

const actions = {
  getOpportunities (context, status) {
    return appService.getOpportunities(status).then(data => {
      context.commit('getOpportunities', { status, opportunities: data })
    })
  }
}

const mutations = {
  getOpportunities (state, response) {
    state.status = response.status
    state.opportunities = response.opportunities
  }
}

export default {
  namespaced: true,
  state,
  getters,
  actions,
  mutations
}
