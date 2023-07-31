<template>
  <!-- Footer -->
  <div class="py-5 text-center-mx-767">
    <div class="container pt-0 pt-lg-5">
      <div class="row">
        <div class="col-md-4">
          <img class="img-fluid mb-3" src="../assets/images/LaravelPoint.png" alt="site logo" />
          <p class="text-secondary fs-16 mt-3 mb-2"> Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. </p>
          <button class="btn btn-dark w-160 mb-4 mb-lg-0"> <i class="fa-brands fa-rocketchat"></i> Start Live Chat </button>
        </div>
        <div class="col-md-8">
          <div class="row">
            <div class="col-md-4">
              <h4 class="fs-16 fw-bold mb-4"> Company </h4>
              <a href="#" target="_blank" class="fs-16 text-decoration-none d-block mb-3 footer-link"> About </a>
              <a href="#" target="_blank" class="fs-16 text-decoration-none d-block mb-3 footer-link"> Features </a>
              <a href="#" target="_blank" class="fs-16 text-decoration-none d-block mb-3 footer-link"> Works </a>
              <a href="#" target="_blank" class="fs-16 text-decoration-none d-block mb-3 footer-link"> Career </a>
            </div>
            <div class="col-md-4">
              <h4 class="fs-16 fw-bold mb-4"> Help </h4>
              <a href="#" target="_blank" class="fs-16 text-decoration-none d-block mb-3 footer-link"> Customer Support </a>
              <a href="#" target="_blank" class="fs-16 text-decoration-none d-block mb-3 footer-link"> Purchase Details </a>
              <a href="#" target="_blank" class="fs-16 text-decoration-none d-block mb-3 footer-link"> Terms & Conditions </a>
              <router-link to="/PrivacyPolicy" class="fs-16 text-decoration-none d-block mb-3 footer-link"> Privacy Policy </router-link>
            </div>
            <div class="col-md-4">
              <h4 class="fs-16 fw-bold mb-4"> Resources </h4>
              <a href="#" target="_blank" class="fs-16 text-decoration-none d-block mb-3 footer-link"> Free eBooks </a>
              <a href="#" target="_blank" class="fs-16 text-decoration-none d-block mb-3 footer-link"> Development Tutorial </a>
              <a href="#" target="_blank" class="fs-16 text-decoration-none d-block mb-3 footer-link"> How to - Blog </a>
              <a href="#" target="_blank" class="fs-16 text-decoration-none d-block mb-3 footer-link"> Youtube Playlist </a>
            </div>
          </div>
        </div>
      </div>

      <hr class="my-4" />

      <div class="d-flex justify-content-between align-items-center">
        <p class="fs-16 mb-0"> © Copyright 2023, All Rights Reserved by Roney </p>
        <div class="d-flex">
          <a href="#" target="_blank" class="text-decoration-none h-30 w-30 border border-2 d-flex justify-content-center align-items-center rounded-circle fs-14 footer-icon d-inline-block ms-2">
            <img class="h-18" src="../assets/images/twitter.svg" alt="twitter" />
          </a>
          <a href="#" target="_blank" class="text-decoration-none h-30 w-30 border border-2 d-flex justify-content-center align-items-center rounded-circle fs-14 footer-icon d-inline-block ms-2">
            <img class="h-18" src="../assets/images/facebook.svg" alt="facebook" />
          </a>
          <a href="#" target="_blank" class="text-decoration-none h-30 w-30 border border-2 d-flex justify-content-center align-items-center rounded-circle fs-14 footer-icon d-inline-block ms-2">
            <img class="h-18" src="../assets/images/instagram.svg" alt="instagram" />
          </a>
          <a href="#" target="_blank" class="text-decoration-none h-30 w-30 border border-2 d-flex justify-content-center align-items-center rounded-circle fs-14 footer-icon d-inline-block ms-2">
            <img class="h-18" src="../assets/images/github.svg" alt="github" />
          </a>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "FooterComponents"
}
</script>

<style scoped>

</style>