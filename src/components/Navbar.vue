<template>
    <nav class="navbar navbar-expand-lg bg-white">
      <div class="container">
        <router-link to="/" class="navbar-brand">
          <img class="img-fluid" src="../assets/images/LaravelPoint.png" alt="Laravel Point Logo" />
        </router-link>
        <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent"
                aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarSupportedContent">
          <ul class="navbar-nav mx-auto mb-2 mb-lg-0 text-center">
            <li class="nav-item">
              <router-link to="/" class="nav-link fs-16 fw-600 text-uppercase" aria-current="page">Home</router-link>
            </li>
            <li class="nav-item dropdown">
              <router-link to="/" class="nav-link fs-16 fw-600 text-uppercase dropdown-toggle" role="button" data-bs-toggle="dropdown"
                           aria-expanded="false">
                Tutorials
              </router-link>
              <ul class="dropdown-menu">
                <li><router-link to="/free-tutorials" class="dropdown-item fs-16 fw-600 text-uppercase">Free Tutorials</router-link></li>
                <li><router-link to="/" class="dropdown-item fs-16 fw-600 text-uppercase">VueJS</router-link></li>
                <li><router-link to="/" class="dropdown-item fs-16 fw-600 text-uppercase">Laravel</router-link></li>
              </ul>
            </li>
            <li class="nav-item">
              <router-link to="/challenges" class="nav-link fs-16 fw-600 text-uppercase">Challenges</router-link>
            </li>
            <li class="nav-item">
              <router-link to="/course" class="nav-link fs-16 fw-600 text-uppercase">Course</router-link>
            </li>
            <li class="nav-item">
              <router-link to="/practice" class="nav-link fs-16 fw-600 text-uppercase">Practice</router-link>
            </li>
            <li class="nav-item">
              <router-link to="/contact" class="nav-link fs-16 fw-600 text-uppercase">Contact</router-link>
            </li>
          </ul>
          <button class="btn fs-16 fw-600 text-uppercase bg-dark text-white py-2 px-3 w-100-mx-991" data-bs-toggle="modal" data-bs-target="#getStarted"> Get Started </button>
        </div>
      </div>
    </nav>
</template>

<script>
export default {
  name: "NavbarComponents",
}
</script>

<style scoped>

</style>
