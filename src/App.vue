<template>
  <router-link to="/"> Home </router-link>
  <router-link to="/tutorials"> Tutorials </router-link>
  <router-link to="/practice"> Practice </router-link>
  <router-link to="/challenges"> Challenges </router-link>
  <router-link to="/contact"> Contact </router-link>
  <router-view></router-view>
</template>

<script>
export default {
  name: 'App',
}
</script>

<style>
/* Internal CSS */
</style>