<template>
  <div>
    <!-- Hero Section -->
    <HeroComponents
        topTinyText="Be a Laravel Hero"
        title="Learn Laravel Confidently."
        image="hero-image.png"
        description="Unleash your potential, expand your skillset, and become a Laravel maestro. Start your journey now!"
        first_btn_name="Get Started"
        first_btn_url="#"
        second_btn_name="What is Laravelpoint?"
        second_btn_url="#"
        challenge_solve_member="2.5"
        challenge_solve_title="Challenges Solved"
        community_member="8"
        community_member_title="Community Members"
        free_tutorials_member="5"
        free_tutorials_title="Free Tutorials"
    />

    <!-- Empowering Laravel Developers -->
    <div class="py-5 section-light-deep bg-image">
      <div class="container py-0 py-lg-5">
        <div class="row">
          <div class="col-12 col-lg-6">
            <h2 class="fw-bold fs-36 m-0" id="lineBreak-text"> Empowering Laravel Developers </h2>
          </div>
          <div class="col-12 col-lg-6 d-flex align-items-end">
            <p class="m-0 text-secondary"> Join us at LaravelPoint and unlock your full potential as a Laravel developer.  </p>
          </div>
        </div>

        <!-- Cards -->
        <div class="row mt-5">
          <div class="col-12 col-sm-6 col-md-4 mb-4 mb-lg-0" v-for="item in laravelDeveloperData" :key="item.id">
            <EmpoweringLaravelDevelopers
              :title="item.title"
              :desc="item.desc"
              :btn_name="item.btn_name"
              :destination="item.destination"
            />
          </div>
        </div>
      </div>
    </div>

    <!-- Programming Challenges -->
    <div class="py-5">
      <div class="container py-0 py-lg-5">
        <h2 class="fw-bold fs-60 fs-32-mx-767 text-center"> Level Up Your Skills with <br /> Programming Challenges </h2>
        <p class="m-0 text-secondary text-center"> Get ready to embark on a thrilling journey of problem-solving and sharpen your Laravel expertise. </p>

        <div class="row mt-5 programming-challenge-card">
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

    <!-- Take Your Laravel Skills to New Heights -->
    <div class="py-5">
      <div class="container py-0 py-lg-5">
        <div class="row">
          <div class="col-12 col-lg-6">
            <h2 class="fw-bold fs-60 fs-32-mx-767 m-0"> Take Your Laravel Skills to New Heights </h2>
          </div>
          <div class="col-12 col-lg-6 d-flex align-items-center justify-content-end">
            <p class="m-0 text-secondary text-end"> Enroll in our Premium Courses and <br /> unlock the full potential of Laravel development. </p>
          </div>
        </div>

        <!-- Cards -->
        <div class="row mt-5 take-skill">
          <div class="col-12 col-sm-6 col-md-4 mb-4 mb-lg-0" v-for="item in takeSkills" :key="item.id">
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
      </div>
    </div>

    <!-- Subscribe -->
    <div class="py-5 section-light-deep">
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
                <a href="#" target="_blank" class="fs-16 text-decoration-none d-block mb-3 footer-link"> Privacy Policy </a>
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
  </div>
</template>

<script>
import { reactive } from "vue";
import { useHead } from "@vueuse/head";
import HeroComponents from "@/components/Hero";
import EmpoweringLaravelDevelopers from "@/components/EmpoweringLaravelDevelopers";
import ProgrammingChallenge from "@/components/ProgrammingChallenge";
import LatestInsightsExpertise from "@/components/LatestInsightsExpertise";
import LearnersSayAbout from "@/components/LearnersSayAbout";
import BrandsComponents from "@/components/Brands";
import TakeYourLaravelSkills from "@/components/TakeYourLaravelSkills";

export default {
  name: "HomePage",
  components: {
    TakeYourLaravelSkills,
    BrandsComponents,
    LearnersSayAbout,
    LatestInsightsExpertise, ProgrammingChallenge, EmpoweringLaravelDevelopers, HeroComponents},
  setup() {
    const siteData = reactive({
      title: `Laravel Point`,
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
      };
    });
  },
  data() {
    return {
      laravelDeveloperData: [
        {
          id: 1,
          title: "Solve Challenges",
          desc: "Lorem ipsum dolor sit amet consectetur. Posuere sapien et pellentesque morbi sed viverra leo id. Rhoncus mattis nibh orci commodo leo.",
          btn_name: "Get Started",
          destination: "/contact",
        },
        {
          id: 2,
          title: "Start Practicing",
          desc: "Lorem ipsum dolor sit amet consectetur. Posuere sapien et pellentesque morbi sed viverra leo id. Rhoncus mattis nibh orci commodo leo.",
          btn_name: "Get Started",
          destination: "/challenge",
        },
        {
          id: 3,
          title: "Watch Tutorials",
          desc: "Lorem ipsum dolor sit amet consectetur. Posuere sapien et pellentesque morbi sed viverra leo id. Rhoncus mattis nibh orci commodo leo.",
          btn_name: "Get Started",
          destination: "/home",
        },
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
      ],
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
        }
      ]
    }
  }
};
</script>

<style scoped>

</style>