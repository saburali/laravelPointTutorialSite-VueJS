<template>
  <div class="card">
    <img :src="require(`../assets/images/${image}`)" :alt="{image_alt}" class="card-img-top">
    <div class="card-body">
      <h5 class="card-title fs-28 fs-22-mx-767 fw-bold mb-3"> {{ title }} </h5>
      <div class="d-flex justify-content-start">
        <div class="d-flex align-items-center">
          <img src="../assets/images/code-icon.png" alt="coding icon" />
          <h4 class="fs-20 fw-600 text-secondary m-0 ps-2"> {{ topic }} </h4>
        </div>
        <span class="b-gray-5px rounded-circle w-18 h-18" style="margin: 7px 20px 0"></span>
        <div class="d-flex align-items-center">
          <img class="h-18" src="../assets/images/user-solid.svg" alt="user icon" />
          <h4 class="fs-20 text-secondary m-0 ps-1"> {{ user }}K </h4>
        </div>
      </div>
      <div class="d-flex justify-content-start mt-3">
        <div class="d-flex align-items-center">
          <h4 class="fs-22 fw-bold themeColor m-0 ps-2"> $ {{ price }} </h4>
        </div>
        <div class="d-flex align-items-center ms-3">
          <img class="h-18" src="../assets/images/star-solid.svg" alt="rating icon" />
          <h4 class="fs-20 text-secondary m-0 ps-2"> {{ rating }} </h4>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "TakeYourLaravelSkills",
  props: {
    image: String,
    image_alt: String,
    title: String,
    topic: String,
    user: String,
    price: String,
    rating: String,
  }
}
</script>

<style scoped>

</style>