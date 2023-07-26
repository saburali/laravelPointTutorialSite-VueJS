<template>
  <div class="card">
    <img :src="require(`../assets/images/${image}`)" :alt="{img_alt}" class="card-img-top px-3 pt-3 pb-0">
    <div class="card-body">
      <div class="d-flex fs-20 text-secondary mb-2">
        <span> {{ date }} </span>
        <span class="b-gray-5px rounded-circle w-18 h-18" style="margin: 7px 8px 0 8px;"></span>
        <span> {{ read_time }} </span>
      </div>
      <h5 class="card-title fs-24 fw-bold mb-3"> {{ title }} </h5>
      <router-link :to="{route}" class="btn text-decoration-none fs-16 fw-600 text-danger py-2 btn-icon-animation"> {{ btn_title }} <img class="icon" src="../assets/images/arrow-up-right.svg" alt="Arrow" /> </router-link>
    </div>
  </div>
</template>

<script>
export default {
  name: "LatestInsightsExpertise",
  props: {
    image: String,
    img_alt: String,
    date: String,
    read_time: String,
    title: String,
    route: String,
    btn_title: String,
  }
}
</script>

<style scoped>

</style>