<template>
  <div>
    <!-- Hero Section -->
    <SmallHero
      title="Learn Laravel Free"
      route="/home"
      route_name="Home"
      current_route="/free-tutorials"
      current_route_name="Free Tutorials"
    />
  </div>
</template>

<script>
import SmallHero from "@/components/SmallHero";
export default {
  name: "FreeTutorials",
  components: {SmallHero}
}
</script>

<style scoped>

</style>