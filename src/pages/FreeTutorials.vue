<template>
  <div>
    <!-- Hero Section -->
    <SmallHero
      title="Learn Laravel Free"
      route="/home"
      route_name="Home"
      current_route="/free-tutorials"
      current_route_name="Free Tutorials"
    />

    <!-- Free Tutorials -->
    <div class="py-3 py-lg-5">
      <div class="container py-0 py-lg-5">
        <div class="row mb-3 mb-lg-5">
          <div class="col-12 col-lg-6">
            <h2 class="fw-bold fs-60 fs-32-mx-767 m-0 text-center-mx-767"> Free Tutorials </h2>
          </div>
          <div class="col-12 col-lg-6 text-center-mx-767 d-block d-lg-flex align-items-center justify-content-lg-end justify-content-md-center">
            <p class="m-0 text-secondary text-center text-lg-end"> Dive into our collection of free tutorials and embark on a journey
              <br> of continuous learning and growth. </p>
          </div>
        </div>

        <form action="">
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

                <div class="d-block d-lg-flex justify-content-between filter-select mt-3 mt-md-4">
                  <select class="form-select px-4 py-3" v-model="instructor" aria-label="Default select example">
                    <option v-for="instructorOption in instructorOptions" :key="instructorOption.value"
                            :value="instructorOption.value" :disabled="instructorOption.value === 1">
                      {{ instructorOption.label }}
                    </option>
                  </select>

                  <select class="form-select px-4 py-3" v-model="course" aria-label="Default select example">
                    <option v-for="courseOption in courseOptions" :key="courseOption.value" :value="courseOption.value"
                            :disabled="courseOption.value === 1">
                      {{ courseOption.label }}
                    </option>
                  </select>

                  <select class="form-select px-4 py-3" v-model="view" aria-label="Default select example">
                    <option v-for="viewOption in viewOptions" :key="viewOption.value" :value="viewOption.value"
                            :disabled="viewOption.value === 1">
                      {{ viewOption.label }}
                    </option>
                  </select>

                  <select class="form-select px-4 py-3" v-model="courseType" aria-label="Default select example">
                    <option v-for="courseTypeOption in courseTypeOptions" :key="courseTypeOption.value"
                            :value="courseTypeOption.value" :disabled="courseTypeOption.value === 1">
                      {{ courseTypeOption.label }}
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

          <!-- Course Card -->
          <div class="row mt-3 mt-lg-5">
            <div class="col-6 col-md-4 col-lg-3" v-for="course in courses" :key="course.id">
              <CourseCard
                  :image="course.image"
                  :img_alt="course.img_alt"
                  :title="course.title"
                  :tag="course.tag"
                  :length="course.length"
              />
            </div>
          </div>

          <!-- Pagination -->
          <div class="pagination-container">
            <div class="d-flex justify-content-between align-items-center">
              <p class="m-0 fs-14"> Showing 02 from 02 data </p>
              <nav aria-label="navigation">
                <ul class="pagination">
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
        </form>
      </div>
    </div>

    <!-- Latest Insights and Expertise -->
    <div class="py-5 section-light-deep">
      <div class="container py-0 py-lg-5">
        <div class="row">
          <div class="col-12 col-lg-6">
            <h2 class="fw-bold fs-60 fs-32-mx-767 m-0"> Latest Insights and Expertise </h2>
          </div>
          <div class="col-12 col-lg-6 d-flex align-items-center">
            <p class="m-0 text-secondary"> Explore our collection of informative and thought-provoking articles, written by industry experts and seasoned Laravel developers.  </p>
          </div>
        </div>

        <!-- Cards -->
        <div class="row mt-5">
          <div class="col-12 col-sm-6 col-md-4 mb-4 mb-lg-0" v-for="item in insightsExpertise" :key="item.id">
            <LatestInsightsExpertise
                :image="item.image"
                :img_alt="item.img_alt"
                :date="item.date"
                :read_time="item.read_time"
                :title="item.title"
                :route="item.route"
                :btn_title="item.btn_title"
            />
          </div>
        </div>
      </div>
    </div>

    <!-- Our Learners Say About -->
    <div class="py-5">
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
    <div class="py-5">
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

    <!-- Join Community -->
    <div class="py-5 gradient-bg-2">
      <div class="container py-0 py-lg-5 text-center">
        <h2 class="fs-60 fs-32-mx-767"> Join our community </h2>
        <p> Work smarter with this time management and not hard, join our newsletter for a better experience </p>
        <div class="col-12 col-sm-6 m-auto">
          <form action="#" class="position-relative">
            <label class="w-100">
              <input class="form-control h-50p bg-white pl-50 box-shadow-0" type="text" placeholder="Enter your email address" />
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
import SmallHero from "@/components/SmallHero";
import LatestInsightsExpertise from "@/components/LatestInsightsExpertise";
import LearnersSayAbout from "@/components/LearnersSayAbout";
import BrandsComponents from "@/components/Brands";
import CourseCard from "@/components/CourseCard";

export default {
  name: "FreeTutorials",
  components: {CourseCard, BrandsComponents, LearnersSayAbout, LatestInsightsExpertise, SmallHero},
  data() {
    return {
      insightsExpertise: [
        {
          id: 1,
          image: "image-1.jpg",
          img_alt: "Images One",
          date: "May 15, 2023",
          read_time: "5 min read",
          title: "Mastering Laravel Routing: A Comprehensive Guide",
          route: "/tutorials",
          btn_title: "Solve Challenge",
        },
        {
          id: 2,
          image: "image-2.jpg",
          img_alt: "Images two",
          date: "Jun 17, 2023",
          read_time: "8.5 min read",
          title: "Building Scalable APIs with Laravel: Best Practices",
          route: "/home",
          btn_title: "Solve Challenge",
        },
        {
          id: 3,
          image: "image-3.jpg",
          img_alt: "Images three",
          date: "Aug 23, 2023",
          read_time: "15 min read",
          title: "Optimizing Performance in Laravel: Tips and Techniques",
          route: "/",
          btn_title: "Solve Challenge",
        }
      ],
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
      courses: [
        {
          id: 1,
          title: "Introduction to Laravel - Rabbil Hasan",
          image: "white-coding.jpg",
          img_alt: "Course Card Image",
          tag: "Laravel",
          length: "1h 12m",
        },
        {
          id: 2,
          title: "Introduction to Laravel - Rabbil Hasan",
          image: "course-card.jpg",
          img_alt: "Course Card Image",
          tag: "Laravel",
          length: "1h 12m",
        },
        {
          id: 3,
          title: "Introduction to Laravel - Rabbil Hasan",
          image: "laravel-img.png",
          img_alt: "Course Card Image",
          tag: "Laravel",
          length: "1h 12m",
        },
        {
          id: 4,
          title: "Introduction to Laravel - Rabbil Hasan",
          image: "white-coding.jpg",
          img_alt: "Course Card Image",
          tag: "Laravel",
          length: "1h 12m",
        },
        {
          id: 5,
          title: "Introduction to Laravel - Rabbil Hasan",
          image: "course-card.jpg",
          img_alt: "Course Card Image",
          tag: "Laravel",
          length: "1h 12m",
        },
        {
          id: 6,
          title: "Introduction to Laravel - Rabbil Hasan",
          image: "laravel-img.png",
          img_alt: "Course Card Image",
          tag: "Laravel",
          length: "1h 12m",
        },
        {
          id: 7,
          title: "Introduction to Laravel - Rabbil Hasan",
          image: "white-coding.jpg",
          img_alt: "Course Card Image",
          tag: "Laravel",
          length: "1h 12m",
        },
        {
          id: 8,
          title: "Introduction to Laravel - Rabbil Hasan",
          image: "course-card.jpg",
          img_alt: "Course Card Image",
          tag: "Laravel",
          length: "1h 12m",
        },
        {
          id: 9,
          title: "Introduction to Laravel - Rabbil Hasan",
          image: "laravel-img.png",
          img_alt: "Course Card Image",
          tag: "Laravel",
          length: "1h 12m",
        },
        {
          id: 10,
          title: "Introduction to Laravel - Rabbil Hasan",
          image: "white-coding.jpg",
          img_alt: "Course Card Image",
          tag: "Laravel",
          length: "1h 12m",
        },
        {
          id: 11,
          title: "Introduction to Laravel - Rabbil Hasan",
          image: "course-card.jpg",
          img_alt: "Course Card Image",
          tag: "Laravel",
          length: "1h 12m",
        },
        {
          id: 12,
          title: "Introduction to Laravel - Rabbil Hasan",
          image: "laravel-img.png",
          img_alt: "Course Card Image",
          tag: "Laravel",
          length: "1h 12m",
        },
        {
          id: 13,
          title: "Introduction to Laravel - Rabbil Hasan",
          image: "white-coding.jpg",
          img_alt: "Course Card Image",
          tag: "Laravel",
          length: "1h 12m",
        },
        {
          id: 14,
          title: "Introduction to Laravel - Rabbil Hasan",
          image: "course-card.jpg",
          img_alt: "Course Card Image",
          tag: "Laravel",
          length: "1h 12m",
        },
        {
          id: 15,
          title: "Introduction to Laravel - Rabbil Hasan",
          image: "laravel-img.png",
          img_alt: "Course Card Image",
          tag: "Laravel",
          length: "1h 12m",
        },
        {
          id: 16,
          title: "Introduction to Laravel - Rabbil Hasan",
          image: "white-coding.jpg",
          img_alt: "Course Card Image",
          tag: "Laravel",
          length: "1h 12m",
        },
        {
          id: 17,
          title: "Introduction to Laravel - Rabbil Hasan",
          image: "course-card.jpg",
          img_alt: "Course Card Image",
          tag: "Laravel",
          length: "1h 12m",
        },
        {
          id: 18,
          title: "Introduction to Laravel - Rabbil Hasan",
          image: "laravel-img.png",
          img_alt: "Course Card Image",
          tag: "Laravel",
          length: "1h 12m",
        },
        {
          id: 19,
          title: "Introduction to Laravel - Rabbil Hasan",
          image: "white-coding.jpg",
          img_alt: "Course Card Image",
          tag: "Laravel",
          length: "1h 12m",
        },
        {
          id: 20,
          title: "Introduction to Laravel - Rabbil Hasan",
          image: "course-card.jpg",
          img_alt: "Course Card Image",
          tag: "Laravel",
          length: "1h 12m",
        },
        {
          id: 21,
          title: "Introduction to Laravel - Rabbil Hasan",
          image: "laravel-img.png",
          img_alt: "Course Card Image",
          tag: "Laravel",
          length: "1h 12m",
        },
        {
          id: 22,
          title: "Introduction to Laravel - Rabbil Hasan",
          image: "white-coding.jpg",
          img_alt: "Course Card Image",
          tag: "Laravel",
          length: "1h 12m",
        },
        {
          id: 23,
          title: "Introduction to Laravel - Rabbil Hasan",
          image: "course-card.jpg",
          img_alt: "Course Card Image",
          tag: "Laravel",
          length: "1h 12m",
        },
        {
          id: 24,
          title: "Introduction to Laravel - Rabbil Hasan",
          image: "laravel-img.png",
          img_alt: "Course Card Image",
          tag: "Laravel",
          length: "1h 12m",
        },
      ],
      instructor: 1,
      course: 1,
      view: 1,
      courseType: 1,
      date: 1,
      instructorOptions: [
        { value: 1, label: "Instructor" },
        { value: 2, label: "Rabbil Hasan" },
        { value: 3, label: "Jhankar Mahbub" },
        { value: 4, label: "Hasin Hyder" },
        { value: 5, label: "Sumit" },
      ],
      courseOptions: [
        { value: 1, label: "Course" },
        { value: 2, label: "Laravel Basic" },
        { value: 3, label: "ReactJS" },
        { value: 4, label: "Vuejs" },
      ],
      viewOptions: [
        { value: 1, label: "View" },
        { value: 2, label: "Most Viewed" },
        { value: 3, label: "Mid Viewed" },
        { value: 4, label: "Low Viewed" },
      ],
      courseTypeOptions: [
        { value: 1, label: "Course Type" },
        { value: 2, label: "Free" },
        { value: 3, label: "Paid" },
      ],
      dateOptions: [
        { value: 1, label: "Date" },
        { value: 2, label: "Newest" },
        { value: 3, label: "Oldest" },
      ],

      // Filter Options Collapse
      isIconRotated: false,
    }
  },
  computed: {
    // Add a computed property to filter and sort the tutorials based on selected options
    filteredTutorials() {
      // Implement your filtering and sorting logic here
      // For example, you can filter tutorials based on the selected instructor, course, view, courseType, and date
      // Then, return the filtered tutorials
      return [];
    },
  },
  watch: {
    instructor() {
      // React to the selected instructor change
    },
    course() {
      // React to the selected course change
    },
    view() {
      // React to the selected view change
    },
    courseType() {
      // React to the selected courseType change
    },
    date() {
      // React to the selected date change
    },
  },

  methods: {
    // Filter Options Collapse
    iconToggleBtn() {
      this.isIconRotated = !this.isIconRotated;
    },
  },
}
</script>

<style scoped>
  .filter-select .form-select {
    margin: 0 10px;
  }

  .filter-select .form-select:first-child {
    margin-left: 0;
  }

  .filter-select .form-select:last-child {
    margin-right: 0;
  }

  .pagination .page-item.active .page-link {
    border-color: var(--themeColor) !important;
    background-color: var(--themeColor) !important;
  }

  /* Filter Options Collapse */
  .tutorialFilterContainer .filter-showHide-btn {
    width: 100%;
    margin-top: 0;
    display: block;
    font-size: 14px;
    text-align: start;
    position: relative;
    border-radius: 8px;
    padding: 14px 26px 8px 16px;
  }

  .tutorialFilterContainer .filter-showHide-btn:focus {
    box-shadow: none !important;
  }

  .tutorialFilterContainer .filter-showHide-btn .fa-arrow-right {
    top: 15px;
    right: 15px;
    font-size: 14px;
    position: absolute;
    transform: rotate(90deg);
    transition: 0.4s all ease-in-out;
  }

  .tutorialFilterContainer .filter-showHide-btn.icon-rotate .fa-arrow-right {
    transform: rotate(270deg);
    transition: 0.4s all ease-in-out;
  }

  .tutorialFilterContainer .filter-item-body {
    border: 0 !important;
    padding: 0 !important;
  }

  .tutorialFilterContainer .filter-title {
    display: none;
  }

  .tutorialFilterContainer .collapse:not(.show) {
    display: none !important;
  }

  @media only screen and (min-width: 576px) {
    .tutorialFilterContainer .filter-showHide-btn {
      display: none;
    }

    .tutorialFilterContainer .collapse:not(.show) {
      display: block !important;
    }
  }

  @media only screen and (max-width: 575px) {
    .filter-select .form-select {
      margin: 10px 0 !important;
    }
  }
</style>