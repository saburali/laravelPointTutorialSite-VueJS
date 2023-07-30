<template>
  <div class="py-5 section-light-deep navbar-space">
    <div class="container">
      <h2 class="fw-bold fs-60"> Laravel Playground </h2>

      <div class="border border-opacity-50 mt-5 rounded-3 position-relative" style="min-height: 400px">
        <div class="position-absolute border border-opacity-50 top-0 bottom-0" style="left: 40px"></div>
      </div>
      <div class="d-flex justify-content-end mt-4">
        <button class="bg-dark text-white px-4 py-2 border-0">
          Run Code
        </button>
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
</template>

<script>
import { reactive } from "vue";
import { useHead } from "@vueuse/head";

export default {
  name: "PracticePage",
  setup() {
    const siteData = reactive({
      title: `Practice || Laravel Point`,
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