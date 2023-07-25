<template>
  <div class="hero-section d-flex align-items-center">
    <div class="container">
      <div class="row">
        <div class="col-lg-6 d-flex align-items-center">
          <div>
            <span class="top-title position-relative fs-16"> {{ topTinyText }} </span>
            <h2 class="title fs-72 fs-50-mx-991 fw-bold" id="highlight-text">
              <span v-html="formattedTitle" class="br-title-container"></span>
            </h2>
            <p> {{ description }} </p>
            <img class="img-fluid d-lg-none" :src="require(`../assets/images/${image}`)" alt="Hero Image" />
            <div class="my-3">
              <a class="btn fs-16 fw-600 bg-dark text-white py-2" :href="first_btn_url"> {{ first_btn_name }} <i class="fa-solid fa-arrow-right ps-2"></i> </a>
              <a class="btn fs-16 fw-600 text-dark py-2" :href="second_btn_url"> {{ second_btn_name }} <i class="fa-solid fa-circle-play ps-2"></i> </a>
            </div>
            <div class="d-flex justify-content-between mt-3">
              <div class="d-flex align-items-center">
                <div class="flex-shrink-0">
                  <h2 class="m-0 fs-48 fs-22-mx-991 fw-bold"> {{ challenge_solve_member }}K </h2>
                </div>
                <div class="flex-grow-1 ms-2 fs-16 fs-12-mx-991 lh-12-mx-991 wb-w80">
                  {{ challenge_solve_title }}
                </div>
              </div>
              <div class="d-flex align-items-center">
                <div class="flex-shrink-0">
                  <h2 class="m-0 fs-48 fs-22-mx-991 fw-bold"> {{ community_member }}M </h2>
                </div>
                <div class="flex-grow-1 ms-2 fs-16 fs-12-mx-991 lh-12-mx-991 wb-w85">
                  {{ community_member_title }}
                </div>
              </div>
              <div class="d-flex align-items-center">
                <div class="flex-shrink-0">
                  <h2 class="m-0 fs-48 fs-22-mx-991 fw-bold"> {{ free_tutorials_member }}K </h2>
                </div>
                <div class="flex-grow-1 ms-2 fs-16 fs-12-mx-991 lh-12-mx-991 wb-w70">
                  {{ free_tutorials_title }}
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="col-lg-6 text-end d-none d-lg-block">
          <img class="img-fluid" :src="require(`../assets/images/${image}`)" alt="Hero Image" />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "HeroComponents",
  props: {
    topTinyText:  String,
    title:  String,
    image: String,
    description: String,
    first_btn_name: String,
    first_btn_url: String,
    second_btn_name: String,
    second_btn_url: String,
    challenge_solve_member: String,
    challenge_solve_title: String,
    community_member: String,
    community_member_title: String,
    free_tutorials_member: String,
    free_tutorials_title: String,
  },
  computed: {
    formattedTitle() {
      const words = this.title.split(" ");
      if (words.length >= 2) {
        const highlightedWords = words.map(word => {
          return `<span class="word-break">${word}</span>`;
        });
        return [ ...highlightedWords].join(" ");
      } else {
        return this.title;
      }
    },
  },
}
</script>

<style scoped>

</style>