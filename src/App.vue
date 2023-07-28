<template>
  <NavbarComponents/>
  <router-view></router-view>
  <Footer/>
</template>

<script>
import NavbarComponents from "@/components/Navbar";
import Footer from "@/components/Footer";
export default {
  name: 'App',
  components: {Footer, NavbarComponents},
}
</script>

<style>
/* Internal CSS */
</style>