<template>
  <AppNav />
  <AppHeader />
  <router-view/>
</template>

<script>
import AppHeader from './components/AppHeader.vue'
import AppNav from './components/AppNav.vue'
export default {
  name: 'App',
  components: {
    AppHeader,
    AppNav
  }
}
</script>

<style>
@import url('http://fonts.googleapis.com/css?family=Lato&subset=latin,latin-ext');
#app {
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
</style>
