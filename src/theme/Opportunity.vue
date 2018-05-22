<template>
  <div class="card">
    <div class="card-content">
      <slot name="company"></slot>      
      <nav class="level">
        <div class="level-item has-text-centered">
          <div>
            <p class="heading">Investment</p>
            <p class="title"><slot name="averageInvestment"></slot></p>
          </div>
        </div>
        <div class="level-item has-text-centered">
          <div>
            <p class="heading">Total raised</p>
            <p class="title"><slot name="totalRaised"></slot></p>
          </div>
        </div>
        <div class="level-item has-text-centered">
          <div>
            <p class="heading">Status</p>
            <p><slot name="tradingActive"></slot></p>
          </div>
        </div>
      </nav>
    </div>
    <footer class="card-footer">
      <a class="card-footer-item" :href="link"
      target="_blank">Website</a>
    </footer>
  </div>
</template>
<script>
  export default {
    props: ['link']
  }
</script>
<style scoped>
  .card{
    padding-bottom: 40px;
    height:100%;
  }
  footer{
    position: absolute;
    bottom: 0;
    width: 100%;
    left: 0;
  }
</style>
