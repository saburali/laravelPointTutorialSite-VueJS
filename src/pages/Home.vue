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

export default {
  name: "HomePage",
  components: {
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
      ]
    }
  }
};
</script>

<style scoped>

</style>