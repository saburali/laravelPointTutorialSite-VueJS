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
  </div>
</template>

<script>
import { reactive } from "vue";
import { useHead } from "@vueuse/head";
import HeroComponents from "@/components/Hero";
import EmpoweringLaravelDevelopers from "@/components/EmpoweringLaravelDevelopers";

export default {
  name: "HomePage",
  components: {EmpoweringLaravelDevelopers, HeroComponents},
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
      ]
    }
  }
};
</script>

<style scoped>

</style>