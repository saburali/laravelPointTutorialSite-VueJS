<template>
  <div>
    <SmallHero
        title="Get In Touch"
        route="/home"
        route_name="Home"
        current_route="/contact"
        current_route_name="Contact"
    />

    <!-- Google Map / Location Details -->
    <div class="container">
      <div class="map" style="margin-top: -20vh;">
        <iframe src="https://www.google.com/maps/embed?pb=!1m10!1m8!1m3!1d7302.556722895113!2d90.3657!3d23.7731!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2sbd!4v1690743153642!5m2!1sen!2sbd" width="100%" height="500px" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
      </div>

      <!-- Location Details -->
      <div class="d-block d-md-flex justify-content-around text-center" style="margin-top: -6vh;">
        <a href="#" class="text-decoration-none w-200 location-item pb-4 pb-md-0 d-inline-block">
          <div class="d-flex justify-content-center">
            <div class="w-100p h-100p rounded-circle themeBG border border-4 border-white d-flex justify-content-center align-items-center">
              <img src="../assets/images/location.png" alt="img-icon"/>
            </div>
          </div>
          <h4 class="fs-20 mt-3 text-dark"> Address </h4>
          <p class="fs-18 mb-0 text-dark fs-14-mx-991"> 60-49 Road 11378 </p>
          <p class="mb-0 fs-18 text-dark fs-14-mx-991"> New York </p>
        </a>
        <a href="#" class="text-decoration-none w-200 location-item pb-4 pb-md-0 d-inline-block">
          <div class="d-flex justify-content-center">
            <div class="w-100p h-100p rounded-circle themeBG border border-4 border-white d-flex justify-content-center align-items-center">
              <img src="../assets/images/gmail-outline.png" alt="img-icon"/>
            </div>
          </div>
          <h4 class="fs-20 mt-3 text-dark"> Gmail </h4>
          <p class="fs-18 mb-0 text-dark fs-14-mx-991"> support@rabbil.com </p>
          <p class="mb-0 fs-18 text-dark fs-14-mx-991"> 09.00am - 05.00pm </p>
        </a>
        <a href="#" class="text-decoration-none w-200 location-item pb-4 pb-md-0 d-inline-block">
          <div class="d-flex justify-content-center">
            <div class="w-100p h-100p rounded-circle themeBG border border-4 border-white d-flex justify-content-center align-items-center">
              <img src="../assets/images/clock.png" alt="img-icon"/>
            </div>
          </div>
          <h4 class="fs-20 mt-3 text-dark"> Office Hours </h4>
          <p class="fs-18 mb-0 text-dark fs-14-mx-991"> Week Days: 10:00 – 22:00 </p>
          <p class="mb-0 fs-18 text-dark fs-14-mx-991"> Sunday: Close </p>
        </a>
        <a href="#" class="text-decoration-none w-200 location-item pb-4 pb-md-0 d-inline-block">
          <div class="d-flex justify-content-center">
            <div class="w-100p h-100p rounded-circle themeBG border border-4 border-white d-flex justify-content-center align-items-center">
              <img src="../assets/images/call-outline.png" alt="img-icon"/>
            </div>
          </div>
          <h4 class="fs-20 mt-3 text-dark"> Phone </h4>
          <p class="fs-18 mb-0 text-dark fs-14-mx-991"> +88 01*******9 </p>
          <p class="mb-0 fs-18 text-dark fs-14-mx-991"> Sunday: Close </p>
        </a>
      </div>
    </div>
  </div>
</template>

<script>
import { reactive } from "vue";
import { useHead } from "@vueuse/head";
import SmallHero from "@/components/SmallHero";

export default {
  name: "ContactPage",
  components: {SmallHero},
  setup() {
    const siteData = reactive({
      title: `Contact || Laravel Point`,
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
  .location-item {
    top: 0;
    position: relative;
    transition: all 0.4s ease-in-out;
  }

  .location-item:hover {
    top: -5px;
  }
</style>