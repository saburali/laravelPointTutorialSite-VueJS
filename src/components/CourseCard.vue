// CourseCard.vue
<template>
  <router-link to="/home" class="text-decoration-none">
    <div class="card mb-4">
      <img :src="require(`../assets/images/${image}`)" :alt="{img_alt}" class="m-2 rounded" />
      <div class="position-absolute gradient-bg-3 h-40 left-8 right-8 top-8 btl-round-8 btr-round-8">
      </div>
      <span class="d-inline-block position-absolute top-8 left-8 text-white pt-2 ps-2 fs-14-mx-767"> {{ length }} </span>
      <div class="card-body">
        <span class="d-inline-block themeColor danger-opacity-bg fw-600 py-1 px-3 rounded-pill fs-14-mx-767"> {{ tag }} </span>
        <h5 class="card-title mt-2 mb-0 fs-14-mx-767">{{ title }}</h5>
      </div>
    </div>
  </router-link>
</template>

<script>
export default {
  name: "CourseCard",
  props: {
    image: String,
    img_alt: String,
    title: String,
    tag: String,
    length: String,
  }
}
</script>

<style scoped>

</style>