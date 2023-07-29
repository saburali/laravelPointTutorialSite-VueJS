<template>
  <div class="card mb-4">
    <div class="card-img-top p-4 d-flex align-items-center justify-content-center">
      <h2 class="m-0 fs-60 fw-bold py-5 gradient-color"> {{ title }} </h2>
    </div>
    <div class="card-body text-center">
      <h5 class="card-title two-line-three-dots text-center fs-24 fw-bold"> {{ sub_title }} </h5>
      <p class="card-text mb-0 fs-16 text-secondary"> {{ desc }} </p>
      <router-link :to="{btn_route}" class="btn text-decoration-none fs-16 fw-600 text-danger py-2 btn-icon-animation"> {{ btn_title }} <img class="icon h-22" src="../assets/images/right-arrow.svg" alt="Arrow" /> </router-link>
    </div>
  </div>
</template>

<script>
export default {
  name: "ProgrammingChallenge",
  props: {
    title: String,
    sub_title: String,
    desc: String,
    btn_title: String,
    btn_route: String,
  }
}
</script>

<style scoped>

</style>