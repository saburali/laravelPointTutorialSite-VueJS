<template>
  <img class="img-fluid" :src="require(`../assets/images/${image}`)" :alt="{image_alt}" />
</template>

<script>
export default {
  name: "BrandsComponents",
  props: {
    image: String,
    image_alt: String,
  }
}
</script>

<style scoped>

</style>