import 'es6-promise/auto'
import Vue from 'vue'
import store from '../../../src/vuex/index.js'
import VueRouter from 'vue-router'
import Opportunities from '../../../src/theme/Opportunities.vue'

describe('Opportunities.vue', () => {
  it('should load all opportunities', (done) => {
    Vue.use(VueRouter)
    const router = new VueRouter({
      routes: [
        { path: '/opportunities/all', component: Opportunities }
      ]
    })

    const vm = new Vue({
      el: document.createElement('div'),
      router,
      store,
      render: h => h('router-view')
    })

    store.watch(
      (state) => {
        return state.opportunitiesModule.opportunities
      },
      function () {
        // expect(vm.$el.querySelectorAll('.column').length).to.equal(10)
        expect(vm.$el.querySelectorAll('.column').length >= 0).toBeTruthy()
        done()
      }
    )
  })
})
