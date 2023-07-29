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
  </div>
</template>

<script>
import { reactive } from "vue";
import { useHead } from "@vueuse/head";
import SmallHero from "@/components/SmallHero";

export default {
  name: "ChallengePage",
  components: {SmallHero},
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
      };
    });
  },
};
</script>

<style scoped>

</style>