<template>
  <div class="wrapper">
    <WpHeader/>
    <router-view/>
    <WpFooter/>
  </div>
</template>

<script>

import WpHeader from './components/WpHeader.vue'
import WpFooter from './components/WpFooter.vue'
// import WpContent from './views/contentM.vue'

export default {
  components: {
    WpHeader,
    WpFooter,
  },
}
</script>

<style lang="scss">
  @import './assets/scss/_reset.scss';
  @import './assets/scss/_common.scss';
  @import './assets/scss/header.scss';
  @import './assets/scss/footer.scss';
  @import './assets/scss/modal.scss';
  
  @import './assets/scss/contentM.scss';
</style>
