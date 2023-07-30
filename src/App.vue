<template>
  <NavbarComponents/>
  <router-view></router-view>
  <Footer/>

  <!-- Sign In / Sign Up || Modal -->
  <SignIn_SignUp/>
</template>

<script>
import NavbarComponents from "@/components/Navbar";
import Footer from "@/components/Footer";
import SignIn_SignUp from "@/components/SignIn_SignUp";
export default {
  name: 'App',
  components: {SignIn_SignUp, Footer, NavbarComponents},
}
</script>

<style>
/* Internal CSS */
</style>