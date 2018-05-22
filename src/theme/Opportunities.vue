<template>
  <div>
    <div class="search-wrapper">
      <div class="field column is-half is-offset-one-quarter">
        <div class="control">
          <input class="input is-medium" v-model="search" type="text" placeholder="Search company...">
        </div>
      </div>
    </div>
    <div class="columns">
      <div class="column is-one-third"
      v-for="opportunity in filteredOpportunities"
      v-bind:key="opportunity.id">
        <app-opportunity :link="opportunity.website">
          <h3 slot="company" v-html="opportunity.company"></h3>
          <span slot="averageInvestment">{{opportunity.averageInvestment | toCurrency}}</span>
          <span slot="totalRaised">{{opportunity.totalRaised | toCurrency}}</span>
          <span slot="tradingActive">{{opportunity.tradingActive ? 'Active' : 'Not active'}}</span>
        </app-opportunity>
      </div>
    </div>
  </div>
</template>
<script>
  import Opportunity from './Opportunity.vue'
  import { mapGetters } from 'vuex'
  const fetchInitialData = (store, route) => {
    let status = 'all'
    if (route.params.status === 'active') {
      status = 'active'
    }
    return store.dispatch('opportunitiesModule/getOpportunities', status)
  }
  export default {
    data: () => {
      return {
        search: ''
      }
    },
    asyncData (store, route) {
      return fetchInitialData(store, route)
    },
    components: {
      'app-opportunity': Opportunity
    },
    computed: {
      ...mapGetters('opportunitiesModule', ['opportunities']),
      filteredOpportunities () {
        // return this.opportunities
        return this.opportunities.filter(opp => {
          return opp.company.toLowerCase().includes(this.search.toLowerCase())
        })
      }
    },
    methods: {
      loadOpportunities () {
        fetchInitialData(this.$store, this.$route)
      }
    },
    watch: {
      '$route' (to, from) {
        this.loadOpportunities()
      }
    },
    created () {
      this.loadOpportunities()
    },
    filters: {
      capitalize: function (value) {
        if (!value) return ''
        value = value.toString()
        return value.charAt(0).toUpperCase() + value.slice(1)
      },
      toCurrency: function (value) {
        if (typeof value !== 'number') {
          return value
        }
        var formatter = new Intl.NumberFormat('en-UK', {
          style: 'currency',
          currency: 'GBP',
          minimumFractionDigits: 0
        })
        return formatter.format(value)
      }
    }
  }
</script>
