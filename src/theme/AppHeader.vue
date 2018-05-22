<template>
  <nav class="nav has-shadow">
    <div class="container">
      <router-link to="/opportunities/all" exact>
        <img src="https://use.fontawesome.com/releases/v5.0.13/svgs/solid/door-open.svg"
          alt="Vue SPA" style="width: 45px; margin-top: 12px; margin-right: 24px;" />
      </router-link>
      <router-link class="nav-item is-tab"
        to="/home">Home</router-link>
      <router-link class="nav-item is-tab"
        to="/opportunities/all">Opportunities</router-link>
      <router-link class="nav-item is-tab"
        :to="{ name: 'opportunities', params: { status: 'active' } }">Active</router-link>
      <router-link class="nav-item is-tab" to="/login">
        <span v-if="isAuthenticated">Logout</span><span v-else>Login</span>
      </router-link>
    </div>
  </nav>
</template>
<script>
  import { mapGetters } from 'vuex'
  export default {
    computed: {
      ...mapGetters(['isAuthenticated'])
    }
  }
</script>
