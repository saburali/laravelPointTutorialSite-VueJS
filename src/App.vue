<template>
  <NavbarComponents/>
  <router-view></router-view>
</template>

<script>
import NavbarComponents from "@/components/Navbar";
export default {
  name: 'App',
  components: {NavbarComponents},
}
</script>

<style>
/* Internal CSS */
</style>