<template>
  <div>
    <h1>Tutorials Page</h1>
  </div>
</template>

<script>
import { reactive } from "vue";
import { useHead } from "@vueuse/head";

export default {
  name: "TutorialsPage",
  setup() {
    const siteData = reactive({
      title: `Tutorials || Laravel Point`,
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