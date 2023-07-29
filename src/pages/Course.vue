<template>
  <!-- Hero Section -->
  <SmallHero
      title="Be A Laravel Maestro"
      route="/home"
      route_name="Home"
      current_route="/course"
      current_route_name="Course"
  />

  <!-- Laravel Courses -->
  <div class="py-3 py-lg-5">
    <div class="container py-0 py-lg-5">
      <div class="row mb-3 mb-lg-5">
        <div class="col-12 col-lg-6">
          <h2 class="fw-bold fs-60 fs-32-mx-767 m-0 text-center-mx-767"> Laravel Courses </h2>
        </div>
        <div class="col-12 col-lg-6 text-center-mx-767 d-block d-lg-flex align-items-center justify-content-lg-end justify-content-md-center">
          <p class="m-0 text-secondary text-center text-lg-end"> Enroll in our Premium Courses and unlock the full potential of Laravel development.. </p>
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

      <!-- Cards -->
      <div class="row mt-5 take-skill">
        <div class="col-12 col-sm-6 col-md-4 col-lg-3 mb-4" v-for="item in takeSkills" :key="item.id">
          <TakeYourLaravelSkills
              :image="item.image"
              :image_alt="item.image_alt"
              :title="item.title"
              :topic="item.topic"
              :user="item.user"
              :price="item.price"
              :rating="item.rating"
          />
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
        <div class="col-12 col-sm-6 col-md-4 mb-4 mb-lg-0" v-for="item in CourseCard2" :key="item.id">
          <CourseCard2
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
</template>

<script>
import SmallHero from "@/components/SmallHero";
import TakeYourLaravelSkills from "@/components/CourseCard3";
import CourseCard2 from "@/components/CourseCard2";

export default {
  name: "CoursePage",
  components: {CourseCard2, TakeYourLaravelSkills, SmallHero},

  data() {
    return {
      // Filter Options Collapse
      isIconRotated: false,

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

      // Course Card 2
      CourseCard2: [
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

      // Course Card 3
      takeSkills: [
        {
          id: 1,
          image: "image-1.jpg",
          image_alt: "course img",
          title: "Laravel Basic",
          topic: "Development",
          user: "3.1",
          price: "9,00",
          rating: "5",
        },
        {
          id: 2,
          image: "image-2.jpg",
          image_alt: "course img",
          title: "Laravel Mid Level",
          topic: "Development",
          user: "4",
          price: "11,00",
          rating: "4.7",
        },
        {
          id: 3,
          image: "image-3.jpg",
          image_alt: "course img",
          title: "Laravel Advanced",
          topic: "Development",
          user: "3.2",
          price: "21,00",
          rating: "4.5",
        },
        {
          id: 4,
          image: "image-1.jpg",
          image_alt: "course img",
          title: "Laravel Basic",
          topic: "Development",
          user: "3.1",
          price: "9,00",
          rating: "5",
        },
        {
          id: 5,
          image: "image-2.jpg",
          image_alt: "course img",
          title: "Laravel Mid Level",
          topic: "Development",
          user: "4",
          price: "11,00",
          rating: "4.7",
        },
        {
          id: 6,
          image: "image-3.jpg",
          image_alt: "course img",
          title: "Laravel Advanced",
          topic: "Development",
          user: "3.2",
          price: "21,00",
          rating: "4.5",
        },
        {
          id: 7,
          image: "image-1.jpg",
          image_alt: "course img",
          title: "Laravel Basic",
          topic: "Development",
          user: "3.1",
          price: "9,00",
          rating: "5",
        },
        {
          id: 8,
          image: "image-2.jpg",
          image_alt: "course img",
          title: "Laravel Mid Level",
          topic: "Development",
          user: "4",
          price: "11,00",
          rating: "4.7",
        },
        {
          id: 9,
          image: "image-3.jpg",
          image_alt: "course img",
          title: "Laravel Advanced",
          topic: "Development",
          user: "3.2",
          price: "21,00",
          rating: "4.5",
        },
        {
          id: 10,
          image: "image-1.jpg",
          image_alt: "course img",
          title: "Laravel Basic",
          topic: "Development",
          user: "3.1",
          price: "9,00",
          rating: "5",
        },
        {
          id: 11,
          image: "image-2.jpg",
          image_alt: "course img",
          title: "Laravel Mid Level",
          topic: "Development",
          user: "4",
          price: "11,00",
          rating: "4.7",
        },
        {
          id: 12,
          image: "image-3.jpg",
          image_alt: "course img",
          title: "Laravel Advanced",
          topic: "Development",
          user: "3.2",
          price: "21,00",
          rating: "4.5",
        }
      ]
    }
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

</style>