<template>
  <div class="py-5 section-light-deep navbar-space">
    <div class="container">
      <h2 class="fw-bold fs-60"> Privacy Policy </h2>

      <p> Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusantium ad amet architecto aspernatur consequuntur, cumque deserunt dignissimos dolorem doloremque ducimus earum eum ex exercitationem hic illum impedit ipsum iure iusto libero maiores minima molestiae molestias mollitia nam nihil nostrum, officiis quas quia quibusdam quisquam quos recusandae rem, rerum tempore ut vitae voluptatem! Architecto autem blanditiis consequatur deleniti, deserunt dignissimos dolorem minima neque odit pariatur. Accusantium consectetur cum eaque excepturi inventore ipsam iusto magni molestiae porro quisquam. Adipisci alias aliquam architecto aspernatur beatae cumque dolore, est fugiat fugit hic illo ipsa labore maiores minus modi molestias nesciunt nisi nulla, obcaecati officia perferendis porro quae qui quis sapiente similique unde ut veniam voluptatem voluptatum! Cum distinctio exercitationem magnam quasi sit sunt totam. Autem cum distinctio dolore dolorum fuga fugit in inventore ipsum neque nostrum quae reiciendis sit, tempora! A alias architecto aspernatur atque autem cumque debitis delectus enim exercitationem id ipsa iusto molestiae natus necessitatibus neque placeat quis rerum saepe sed soluta, ut veniam voluptatum. Accusamus alias aperiam beatae, culpa delectus deleniti doloremque, dolores, ducimus eius eligendi eos eum facilis iure laborum laudantium nesciunt obcaecati odit officia optio provident quae quas quos rerum tempora voluptatum? Blanditiis consequuntur culpa dolorem in maxime, molestiae natus officiis optio repudiandae suscipit? Minus molestiae, tempore. Aliquid dolorem error inventore magni molestias officia omnis, perferendis quis sint totam. Ab aliquam deserunt dicta dolores dolorum ea error et explicabo fuga fugiat in ipsa ipsum iste laudantium minus, molestias neque nesciunt non obcaecati odit officiis perspiciatis quam quibusdam quisquam quo quod reiciendis repudiandae sapiente totam veritatis. Ab consectetur corporis deserunt distinctio est ex expedita fuga, fugit illum quidem rerum tempore, totam voluptate. Adipisci atque blanditiis, consequuntur distinctio ea earum eius quia reiciendis sint velit veritatis voluptatum? Animi, aperiam at dolor minima minus molestias odio. A accusamus accusantium alias architecto assumenda consectetur consequatur deserunt dicta dignissimos dolor eius error eveniet facere harum incidunt ipsa ipsam iure labore laudantium magnam magni minima nobis non nostrum perferendis quasi quibusdam, rerum soluta unde vero! Nulla porro quasi voluptas. Alias atque corporis delectus ea facere hic, id necessitatibus nobis quis velit? Beatae cum cupiditate deleniti, distinctio dolor dolore dolorem dolorum eaque facilis molestiae nam nihil reiciendis unde. Accusantium aut debitis enim error facere facilis fugiat impedit incidunt iste optio perferendis possimus quasi quibusdam, recusandae similique vero voluptate! Eveniet exercitationem, laboriosam? Aliquam consequuntur earum, eveniet fuga hic nam neque nisi, possimus qui, quisquam tempora tempore totam velit veniam vitae. Animi autem enim rerum. Iste numquam pariatur placeat ratione sint velit voluptatem? Consectetur culpa cumque exercitationem fugiat harum laudantium magnam. Corporis dolorem enim in incidunt modi molestiae nemo perspiciatis. Ab aspernatur beatae blanditiis dicta distinctio doloribus earum eius enim itaque molestias nisi obcaecati odit porro ratione rem repellat sunt ut, velit! Ab accusamus corporis cupiditate debitis dicta distinctio ducimus ea, exercitationem in modi necessitatibus nihil nisi nulla numquam porro quia quisquam reiciendis rem, sed temporibus ut vitae voluptatum. Ab consectetur, consequuntur dolor dolorum eaque eos esse id nemo, nostrum nulla provident quibusdam rerum, sed sint sit tempora! </p>
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
  name: "PrivacyPolicy",
  setup() {
    const siteData = reactive({
      title: `Privacy Policy || Laravel Point`,
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