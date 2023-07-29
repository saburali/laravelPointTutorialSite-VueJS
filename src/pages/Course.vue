<template>
  <!-- Hero Section -->
  <SmallHero
      title="Be A Laravel Maestro"
      route="/home"
      route_name="Home"
      current_route="/course"
      current_route_name="Course"
  />
</template>

<script>
import SmallHero from "@/components/SmallHero";

export default {
  name: "CoursePage",
  components: {SmallHero},
}
</script>

<style scoped>

</style>