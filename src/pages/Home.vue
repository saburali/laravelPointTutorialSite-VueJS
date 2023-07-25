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
  </div>
</template>

<script>
import { reactive } from "vue";
import { useHead } from "@vueuse/head";
import HeroComponents from "@/components/Hero";

export default {
  name: "HomePage",
  components: {HeroComponents},
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
};
</script>

<style scoped>

</style>