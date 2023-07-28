<template>
  <div class="small-hero-section d-flex justify-content-center align-items-center">
    <div class="d-block">
      <h2 class="fw-bold fs-48"> {{ title }} </h2>
      <div class="text-center">
        <router-link :to="{route}" class="fs-18 text-decoration-none text-dark-gray"> {{ route_name }} </router-link>
        <img src="../assets/images/left-arrow.png" class="px-2" alt="right arrow" />
        <router-link :to="{current_route}" class="fs-18 text-decoration-none text-dark-gray"> {{ current_route_name }} </router-link>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "SmallHero",
  props: {
    title: String,
    route: String,
    route_name: String,
    current_route: String,
    current_route_name: String,
  }
}
</script>

<style>
/* Small Hero Section */
.small-hero-section {
  height: 60vh;
  overflow: hidden;
  min-height: 350px;
  background: linear-gradient(to right, #F5EFEF, #FEADA6);
}

.small-hero-section::after {
  content: "";
  top: 0;
  right: 0;
  width: 650px;
  height: 30vh;
  z-index: 99999;
  display: block;
  position: absolute;
  background-size: contain;
  background-repeat: no-repeat;
  background-image: url("../assets/images/circle-top-right.png");
}

.small-hero-section::before {
  content: "";
  top: 0;
  left: -90px;
  width: 200px;
  height: 300px;
  z-index: 99999;
  display: block;
  position: absolute;
  transform: scale(1.5);
  background-size: contain;
  background-repeat: no-repeat;
  background-image: url("../assets/images/circle-left.png");
}

.small-hero-section a {
  letter-spacing: 1px;
  transition: 0.4s all ease-in-out;
}

.small-hero-section a:hover {
  letter-spacing: 2px;
}

/* Responsive */
@media only screen and (max-width: 1700px) {
  .small-hero-section::after {
    width: 480px;
  }
}

@media only screen and (max-width: 1400px) {
  .small-hero-section::after {
    width: 385px;
  }
}

@media only screen and (max-width: 1199px) {
  .small-hero-section::after {
    width: 320px;
  }
}

@media only screen and (max-width: 1099px) {
  .small-hero-section::after {
    width: 320px;
  }
}

@media only screen and (max-width: 475px) {
  .small-hero-section h2 {
    font-size: 32px;
  }
}
</style>