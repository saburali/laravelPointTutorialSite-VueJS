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

export default {
  name: "FreeTutorials",
  components: {BrandsComponents, LearnersSayAbout, LatestInsightsExpertise, SmallHero},
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
    }
  }
}
</script>

<style scoped>

</style>