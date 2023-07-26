<template>
  <div class="gradient-bg p-4 rounded">
    <img class="img-fluid" src="../assets/images/verify-mark.svg" alt="Verify Mark" />
    <h4 class="fw-bold mt-3"> {{ title }} </h4>
    <p class="mb-0 fs-16 text-secondary min-height-118 overFollow-3dots overFollow-5line"> {{ desc }} </p>
    <router-link class="btn text-decoration-none fs-16 fw-600 text-dark py-2 btn-icon-animation" :to="{destination}"> {{ btn_name }} <img class="icon" src="../assets/images/arrow-up-right.svg" alt="Arrow" /> </router-link>
  </div>
</template>

<script>
export default {
  name: "EmpoweringLaravelDevelopers",
  props: {
    title: String,
    desc: String,
    btn_name: String,
    destination: String,
  }
}
</script>

<style scoped>

</style>