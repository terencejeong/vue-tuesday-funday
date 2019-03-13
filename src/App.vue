<template>
  <div id="app">
    <PageHome />
    <PageVuexHome />
  </div>
</template>

<script>
import PageHome from '@/pages/PageHome'
import PageVuexHome from '@/pages/PageVuexHome'

export default {
  name: 'app',
  components: {
    PageHome,
    PageVuexHome
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
