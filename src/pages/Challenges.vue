<template>
  <div>
    <!-- Small Hero -->
    <SmallHero
      title="Level Up Your Skill"
      route="/home"
      route_name="Home"
      current_route="/challenges"
      current_route_name="Challenges"
    />

    <!-- Challenges -->
    <div class="py-3">
      <div class="container py-0 py-lg-5">
        <div class="row mb-3 mb-lg-5">
          <div class="col-12 col-lg-6">
            <h2 class="fw-bold fs-60 fs-32-mx-767 m-0 text-center-mx-767"> Challenges </h2>
          </div>
          <div class="col-12 col-lg-6 text-center-mx-767 d-block d-lg-flex align-items-center justify-content-lg-end justify-content-md-center">
            <p class="m-0 text-secondary text-center text-lg-end"> Get ready to embark on a thrilling journey of problem-solving and sharpen your Laravel expertise. </p>
          </div>
        </div>

        <div class="tutorialFilterContainer">
          <button @click="iconToggleBtn"
                  :class="['btn', 'themeBG', 'text-white', 'filter-showHide-btn', { 'icon-rotate': isIconRotated }]"
                  type="button" data-bs-toggle="collapse" data-bs-target="#FilteringCollapse" aria-expanded="false"
                  aria-controls="FilteringCollapse">
            <i class="fas fa-bars me-1"></i> Filter Options
            <i class="fas fas fa-arrow-right"></i>
          </button>

          <div class="collapse" id="FilteringCollapse">
            <div class="card card-body filter-item-body">
              <h2 class="section-title filter-title">Filter Options</h2>

              <div class="d-block d-lg-flex justify-content-start filter-select mt-3 mt-md-4">
                <select class="form-select px-4 py-3" v-model="language" aria-label="Default select example">
                  <option v-for="languageOption in languageOptions" :key="languageOption.value"
                          :value="languageOption.value" :disabled="languageOption.value === 1">
                    {{ languageOption.label }}
                  </option>
                </select>
                <select class="form-select px-4 py-3" v-model="level" aria-label="Default select example">
                  <option v-for="levelTypeOption in levelTypeOptions" :key="levelTypeOption.value" :value="levelTypeOption.value"
                          :disabled="levelTypeOption.value === 1">
                    {{ levelTypeOption.label }}
                  </option>
                </select>
                <select class="form-select px-4 py-3" v-model="date" aria-label="Default select example">
                  <option v-for="dateOption in dateOptions" :key="dateOption.value" :value="dateOption.value"
                          :disabled="dateOption.value === 1">
                    {{ dateOption.label }}
                  </option>
                </select>
              </div>
            </div>
          </div>
        </div>

        <!-- Programming Challenges -->
        <div class="pt-4 pb-0 pt-md-5 pb-md-5">
          <div class="container">
            <div class="row programming-challenge-card">
              <div class="col-12 col-sm-6 col-md-4 mb-4 mb-lg-0" v-for="item in programmingChallenges" :key="item.id">
                <ProgrammingChallenge
                    :title="item.title"
                    :sub_title="item.sub_title"
                    :desc="item.desc"
                    :btn_title="item.btn_title"
                    :btn_route="item.btn_route"
                />
              </div>
            </div>
          </div>
        </div>

        <!-- Pagination -->
        <div class="pagination-container">
          <div class="d-flex justify-content-between align-items-center">
            <p class="m-0 fs-14"> Showing 02 from 02 data </p>
            <nav aria-label="navigation">
              <ul class="pagination mt-3">
                <li class="page-item">
                  <a class="page-link themeColor fs-14-mx-767" href="#" aria-label="Previous">
                    <span aria-hidden="true">&laquo;</span>
                  </a>
                </li>
                <li class="page-item">
                  <a class="page-link themeColor fs-14-mx-767" href="#">1</a>
                </li>
                <li class="page-item active">
                  <a class="page-link themeColor fs-14-mx-767" href="#">2</a>
                </li>
                <li class="page-item">
                  <a class="page-link themeColor fs-14-mx-767" href="#">3</a>
                </li>
                <li class="page-item">
                  <a class="page-link themeColor fs-14-mx-767" href="#">4</a>
                </li>
                <li class="page-item">
                  <a class="page-link themeColor fs-14-mx-767" href="#">5</a>
                </li>
                <li class="page-item">
                  <a class="page-link themeColor fs-14-mx-767" href="#" aria-label="Next">
                    <span aria-hidden="true">&raquo;</span>
                  </a>
                </li>
              </ul>
            </nav>
          </div>
        </div>
      </div>
    </div>

    <!-- Our Learners Say About -->
    <div class="py-3">
      <div class="container my-0 my-lg-5">
        <h2 class="fw-bold fs-60 fs-32-mx-767 m-0 text-center"> Hear What Our Learners Say <br /> About LaravelPoint </h2>
        <p class="m-0 text-secondary text-center"> Don't just take our word for it – read what our learners have to say about their experiences with us. </p>

        <!-- Cards -->
        <div class="border rounded mt-5 p-4 learners-about">
          <div class="row g-0">
            <div class="col-12 col-sm-6 col-md-4 mb-4 mb-lg-0" v-for="item in learnersSayAbout" :key="item.id">
              <LearnersSayAbout
                  :image="item.image"
                  :image_alt="item.image_alt"
                  :comment="item.comment"
                  :name="item.name"
                  :position="item.position"
              />
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- Brand -->
    <div class="py-5 section-light-deep">
      <div class="container py-0 py-lg-5">
        <p class="fs-20 m-0 text-center"> Get hired by our very own recruiters </p>

        <!-- Cards -->
        <div class="row mt-3">
          <div class="col-6 col-md-3 col-lg-2" v-for="item in brands" :key="item.id">
            <BrandsComponents
                :image="item.image"
                :image_alt="item.image_alt"
            />
          </div>
        </div>
      </div>
    </div>

    <!-- Subscribe -->
    <div class="py-5 gradient-bg-2">
      <div class="container py-0 py-lg-5 text-center">
        <h2 class="fs-60 fs-32-mx-767"> Join our community </h2>
        <p> Work smarter with this time management and not hard, join our newsletter for a better experience </p>
        <div class="col-12 col-sm-6 m-auto">
          <form action="#" class="position-relative">
            <label class="w-100">
              <input class="form-control h-50p bg-white border-0 pl-50 box-shadow-0" type="text" placeholder="Enter your email address" />
              <span class="position-absolute top-9 left-17 fs-20"> @ </span>
            </label>
            <button class="btn btn-dark position-absolute w-150 right-5 top-6"> Get started now </button>
          </form>
        </div>
        <p class="m-0 pt-3"> No ads. No trails. No commitments </p>
      </div>
    </div>
  </div>
</template>

<script>
import { reactive } from "vue";
import { useHead } from "@vueuse/head";
import SmallHero from "@/components/SmallHero";
import ProgrammingChallenge from "@/components/ProgrammingChallenge";
import LearnersSayAbout from "@/components/LearnersSayAbout";
import BrandsComponents from "@/components/Brands";

export default {
  name: "ChallengePage",
  components: {BrandsComponents, LearnersSayAbout, ProgrammingChallenge, SmallHero},
  setup() {
    const siteData = reactive({
      title: `Challenge || Laravel Point`,
      description: `This is basically a tutorial site. Where Laravel language will be taught. And it's being built... with ViewJS.`,
      icon: ``,
    });

    useHead(() => {
      return {
        title: siteData.title,
        meta: [
          {
            name: `description`,
            content: siteData.description,
          },
        ],
        link: [
          {
            rel: `icon`,
            type: `image/png`,
            href: siteData.icon,
          },
        ],
      }
    });
  },
  data() {
    return {
      language: 1,
      level: 1,
      date: 1,
      languageOptions: [
        { value: 1, label: "Language" },
        { value: 2, label: "Javascript" },
        { value: 3, label: "ReactJS" },
        { value: 4, label: "VueJS" },
        { value: 5, label: "NextJS" },
      ],
      levelTypeOptions: [
        { value: 1, label: "Level Type" },
        { value: 2, label: "Easy" },
        { value: 3, label: "Medium" },
        { value: 4, label: "Hard" },
        { value: 5, label: "Advance" },
      ],
      dateOptions: [
        { value: 1, label: "Date" },
        { value: 2, label: "Newest" },
        { value: 3, label: "Oldest" },
      ],

      programmingChallenges: [
        {
          id: 1,
          title: "Easy",
          sub_title: "Return the Next Number from the Integer Passed",
          desc: "Lorem ipsum dolor sit amet consectetur. Interdum platea sodales semper venenatis quam scelerisque tincidunt.",
          btn_title: "Solve Challenge",
          btn_route: "/contact",
        },
        {
          id: 2,
          title: "Medium",
          sub_title: "Return the sum of Two Numbers",
          desc: "Lorem ipsum dolor sit amet consectetur. Interdum platea sodales semper venenatis quam scelerisque tincidunt.",
          btn_title: "Solve Challenge",
          btn_route: "/contact",
        },
        {
          id: 3,
          title: "Hard",
          sub_title: "Find The Perimeter of A Rectangle",
          desc: "Lorem ipsum dolor sit amet consectetur. Interdum platea sodales semper venenatis quam scelerisque tincidunt.",
          btn_title: "Solve Challenge",
          btn_route: "/contact",
        },
        {
          id: 4,
          title: "Medium",
          sub_title: "Return the sum of Two Numbers",
          desc: "Lorem ipsum dolor sit amet consectetur. Interdum platea sodales semper venenatis quam scelerisque tincidunt.",
          btn_title: "Solve Challenge",
          btn_route: "/contact",
        },
        {
          id: 5,
          title: "Easy",
          sub_title: "Return the Next Number from the Integer Passed",
          desc: "Lorem ipsum dolor sit amet consectetur. Interdum platea sodales semper venenatis quam scelerisque tincidunt.",
          btn_title: "Solve Challenge",
          btn_route: "/contact",
        },
        {
          id: 6,
          title: "Easy",
          sub_title: "Return the Next Number from the Integer Passed",
          desc: "Lorem ipsum dolor sit amet consectetur. Interdum platea sodales semper venenatis quam scelerisque tincidunt.",
          btn_title: "Solve Challenge",
          btn_route: "/contact",
        },
        {
          id: 7,
          title: "Medium",
          sub_title: "Return the sum of Two Numbers",
          desc: "Lorem ipsum dolor sit amet consectetur. Interdum platea sodales semper venenatis quam scelerisque tincidunt.",
          btn_title: "Solve Challenge",
          btn_route: "/contact",
        },
        {
          id: 8,
          title: "Hard",
          sub_title: "Find The Perimeter of A Rectangle",
          desc: "Lorem ipsum dolor sit amet consectetur. Interdum platea sodales semper venenatis quam scelerisque tincidunt.",
          btn_title: "Solve Challenge",
          btn_route: "/contact",
        },
        {
          id: 9,
          title: "Medium",
          sub_title: "Return the sum of Two Numbers",
          desc: "Lorem ipsum dolor sit amet consectetur. Interdum platea sodales semper venenatis quam scelerisque tincidunt.",
          btn_title: "Solve Challenge",
          btn_route: "/contact",
        },
        {
          id: 10,
          title: "Easy",
          sub_title: "Return the Next Number from the Integer Passed",
          desc: "Lorem ipsum dolor sit amet consectetur. Interdum platea sodales semper venenatis quam scelerisque tincidunt.",
          btn_title: "Solve Challenge",
          btn_route: "/contact",
        },
      ],

      // About Say
      learnersSayAbout: [
        {
          id: 1,
          image: "learners-1.jpg",
          image_alt: "learners 1",
          comment: "The easiest and most accurate way to track time across teams and finish the projects. Timely's automatic.",
          name: "Roney Khan",
          position: "UX Designer",
        },
        {
          id: 2,
          image: "learners-2.jpg",
          image_alt: "learners 2",
          comment: "The easiest and most accurate way to track time across teams and finish the projects. Timely's automatic.",
          name: "Abeyan Roy",
          position: "Frontend Designer",
        },
        {
          id: 3,
          image: "learners-3.jpg",
          image_alt: "learners 3",
          comment: "The easiest and most accurate way to track time across teams and finish the projects. Timely's automatic.",
          name: "Jasie D Costa",
          position: "Content Writer",
        }
      ],
      // Brand
      brands: [
        {
          id: 1,
          image: "brand-1.png",
          image_alt: "brand image",
        },
        {
          id: 2,
          image: "brand-2.png",
          image_alt: "brand image",
        },
        {
          id: 3,
          image: "brand-3.png",
          image_alt: "brand image",
        },
        {
          id: 4,
          image: "brand-4.png",
          image_alt: "brand image",
        },
        {
          id: 5,
          image: "brand-5.png",
          image_alt: "brand image",
        },
        {
          id: 6,
          image: "brand-6.png",
          image_alt: "brand image",
        }
      ],

      // Filter Options Collapse
      isIconRotated: false,
    }
  },
  methods: {
    // Filter Options Collapse
    iconToggleBtn() {
      this.isIconRotated = !this.isIconRotated;
    },
  },
};
</script>

<style scoped>

</style>