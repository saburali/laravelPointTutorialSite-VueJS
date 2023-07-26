<template>
  <div class="card rounded-0 p-4">
    <img :src="require(`../assets/images/${image}`)" :alt="{image_alt}" class="h-60 w-60 rounded" />
    <div class="card-body px-0">
      <p class="fs-16 double-colon"> {{ comment }} </p>
      <h5 class="card-title fs-18 fw-bold mb-0"> {{ name }} </h5>
      <p class="fs-16 mb-0 text-secondary"> {{ position }} </p>
    </div>
  </div>
</template>

<script>
export default {
  name: "LearnersSayAbout",
  props: {
    image: String,
    image_alt: String,
    comment: String,
    name: String,
    position: String,
  }
}
</script>

<style scoped>

</style>