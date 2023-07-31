<template>
  <div class="py-5 section-light-deep navbar-space">
    <div class="container">
      <!-- Tab Content -->
      <ul class="nav nav-pills mb-4" id="pills-tab" role="tablist">
        <li class="nav-item" role="presentation">
          <button class="nav-link bg-transparent themeColor rounded-0 active" id="pills-instructor-tab" data-bs-toggle="pill" data-bs-target="#pills-instructor" type="button" role="tab" aria-controls="pills-instructor" aria-selected="true">Instructor</button>
        </li>
        <li class="nav-item" role="presentation">
          <button class="nav-link bg-transparent themeColor rounded-0" id="pills-code-tab" data-bs-toggle="pill" data-bs-target="#pills-code" type="button" role="tab" aria-controls="pills-code" aria-selected="false">Code</button>
        </li>
        <li class="nav-item" role="presentation">
          <button class="nav-link bg-transparent themeColor rounded-0" id="pills-resource-tab" data-bs-toggle="pill" data-bs-target="#pills-resource" type="button" role="tab" aria-controls="pills-resource" aria-selected="false">Resource</button>
        </li>
        <li class="nav-item" role="presentation">
          <button class="nav-link bg-transparent themeColor rounded-0" id="pills-solutions-tab" data-bs-toggle="pill" data-bs-target="#pills-solutions" type="button" role="tab" aria-controls="pills-solutions" aria-selected="false">Solutions</button>
        </li>
      </ul>

      <div class="tab-content mt-4 pt-2" id="pills-tabContent">
        <!-- Instructor -->
        <div class="tab-pane fade show active" id="pills-instructor" role="tabpanel" aria-labelledby="pills-instructor-tab" tabindex="0">
          <h2 class="fw-bold fs-60 fs-38-mx-767 fs-32-mx-767"> Laravel Mastering with Rabbil Hasan </h2>

          <!-- Name, Update, Review -->
          <div class="d-block d-md-flex justify-content-start my-4">
            <div class="d-flex align-items-center border-end border-2 pe-4 me-4 b-0-mx-767 pe-0-mx-767 me-0-mx-767 mb-3 mb-md-0">
              <div class="flex-shrink-0">
                <img class="h-60 w-60 rounded-circle theme-border" src="../assets/images/rabbil-small.png" alt="Instructor" />
              </div>
              <div class="flex-grow-1 ms-3">
                <p class="themeColor mb-1"> Instructor </p>
                <p class="fw-bold mb-0"> Rabbil Hasan </p>
              </div>
            </div>
            <div class="d-flex align-items-center border-end border-2 pe-4 me-4  b-0-mx-767 pe-0-mx-767 me-0-mx-767 mb-3 mb-md-0">
              <div class="flex-grow-1">
                <p class="themeColor mb-1"> Last Update : </p>
                <p class="fw-bold mb-0"> 5 April, 2022 </p>
              </div>
            </div>
            <div class="d-flex align-items-center pe-4 me-4 pe-0-mx-767 me-0-mx-767 mb-3 mb-md-0">
              <div class="flex-grow-1">
                <p class="themeColor mb-1"> Reviews </p>
                <p class="mb-0">
                  <i class="fas fa-star text-warning"></i>
                  <i class="fas fa-star text-warning"></i>
                  <i class="fas fa-star text-warning"></i>
                  <i class="fas fa-star text-warning"></i>
                  <i class="fas fa-star text-warning"></i>
                  <span class="fw-bold"> (120k) </span> Reviews </p>
              </div>
            </div>
          </div>

          <!-- Enroll & Preview -->
          <div class="row mb-5">
            <div class="col-md-12 col-lg-9 mb-4 mb-lg-0">
              <img class="img-fluid" src="../assets/images/person-with-laptop.jpg" alt="Course Images" />
            </div>
            <div class="col-md-12 col-lg-3 d-flex align-items-center">
              <div class="lightDeepBG-2 rounded shadow-sm p-3 w-100">
                <h2 class="themeColor mb-3 d-flex justify-content-between">
                  <span class="d-inline-block me-2 fw-bold themeColor fs-24"> $59.USD <span class="text-decoration-line-through text-dark fs-18"> $88 usd </span></span>
                  <span class="d-inline-block themeColor danger-opacity-bg px-2 pt-2 pb-1 fs-14"> 35% Save </span>
                </h2>
                <div class="mb-3">
                  <div class="d-flex justify-content-between themeDarkColor border-bottom py-3 mb-3">
                    <span class="d-inline-block"> <i class="fas fa-signal themeColor pe-1"></i> Level </span>
                    <span class="d-inline-block"> Beginners </span>
                  </div>
                  <div class="d-flex justify-content-between themeDarkColor border-bottom pb-3 mb-3">
                    <span class="d-inline-block"> <i class="fas fa-microphone themeColor pe-1"></i> Lectures </span>
                    <span class="d-inline-block"> 200+ Classes </span>
                  </div>
                  <div class="d-flex justify-content-between themeDarkColor border-bottom pb-3 mb-3">
                    <span class="d-inline-block"> <i class="fas fa-clock themeColor pe-1"></i> Duration </span>
                    <span class="d-inline-block"> 100 Hours+ </span>
                  </div>
                  <div class="d-flex justify-content-between themeDarkColor border-bottom pb-3 mb-3">
                    <span class="d-inline-block"> <i class="fas fa-language themeColor pe-1"></i> Language </span>
                    <span class="d-inline-block"> Bangla </span>
                  </div>
                  <div class="d-flex justify-content-between themeDarkColor border-bottom pb-3 mb-3">
                    <span class="d-inline-block"> <i class="fas fa-tag themeColor pe-1"></i> Category </span>
                    <span class="d-inline-block"> Business </span>
                  </div>
                  <div class="d-flex justify-content-between themeDarkColor border-bottom pb-3 mb-3">
                    <span class="d-inline-block"> <i class="fas fa-graduation-cap themeColor pe-1"></i> Students </span>
                    <span class="d-inline-block"> 50 tudents </span>
                  </div>
                </div>
                <div class="mb-3">
                  <div class="mb-3 bodyLarge fw-bold d-flex justify-content-between">
                    Payment: <img class="img-fluid" src="data:image/png;base64,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" alt="payment-methode"> </div>
                </div>
                <button class="d-block w-100 py-2 themeBtn"> Enroll</button>
              </div>
            </div>
          </div>

          <!-- Details -->
          <p> Computers have their own language called Machine Code which tells them what to do. As you can see, it doesn’t make a lot of sense to humans!

            Each number or letter is telling the computer to change something in its memory. This could be a number or word, or a little part of a picture or video. By themselves, computers don’t know how to do anything. It is the job of the programmer to give them instructions.

            It is possible to learn Machine Code, but it would take a long time! Luckily there is an easier way to communicate with computers. </p>

          <!-- Lock / Unlock Video -->
          <div class="row">
            <div class="col-md-6 mb-3">
              <a href="#" class="text-decoration-none">
                <div class="d-flex align-items-center justify-content-between big-shadow p-4 rounded-3">
                  <div class="flex-shrink-0">
                    <div
                        class="fw-bold h-60 w-60 rounded-circle danger-opacity-bg d-flex justify-content-center align-items-center themeColor">
                      01
                    </div>
                  </div>
                  <div class="flex-grow-1 ms-3">
                    <p class="text-dark mb-0"> Class introduction </p>
                  </div>
                  <span> 04:30 <i class="fas fa-lock-open text-dark-gray ps-2"></i> </span>
                </div>
              </a>
            </div>
            <div class="col-md-6 mb-3">
              <a href="#" class="text-decoration-none">
                <div class="d-flex align-items-center justify-content-between big-shadow p-4 rounded-3">
                  <div class="flex-shrink-0">
                    <div
                        class="fw-bold h-60 w-60 rounded-circle danger-opacity-bg d-flex justify-content-center align-items-center themeColor">
                      02
                    </div>
                  </div>
                  <div class="flex-grow-1 ms-3">
                    <p class="text-dark mb-0"> Instructor introduction </p>
                  </div>
                  <span> 04:30 <i class="fas fa-lock-open text-dark-gray ps-2"></i> </span>
                </div>
              </a>
            </div>
            <div class="col-md-6 mb-3">
              <a href="#" class="text-decoration-none">
                <div class="d-flex align-items-center justify-content-between big-shadow p-4 rounded-3">
                  <div class="flex-shrink-0">
                    <div
                        class="fw-bold h-60 w-60 rounded-circle danger-opacity-bg d-flex justify-content-center align-items-center themeColor">
                      03
                    </div>
                  </div>
                  <div class="flex-grow-1 ms-3">
                    <p class="text-dark mb-0"> What is MERN </p>
                  </div>
                  <span> 04:30 <i class="fas fa-lock text-dark-gray ps-2"></i> </span>
                </div>
              </a>
            </div>
            <div class="col-md-6 mb-3">
              <a href="#" class="text-decoration-none">
                <div class="d-flex align-items-center justify-content-between big-shadow p-4 rounded-3">
                  <div class="flex-shrink-0">
                    <div
                        class="fw-bold h-60 w-60 rounded-circle danger-opacity-bg d-flex justify-content-center align-items-center themeColor">
                      04
                    </div>
                  </div>
                  <div class="flex-grow-1 ms-3">
                    <p class="text-dark mb-0"> Software </p>
                  </div>
                  <span> 04:30 <i class="fas fa-lock text-dark-gray ps-2"></i> </span>
                </div>
              </a>
            </div>
            <div class="col-md-6 mb-3">
              <a href="#" class="text-decoration-none">
                <div class="d-flex align-items-center justify-content-between big-shadow p-4 rounded-3">
                  <div class="flex-shrink-0">
                    <div
                        class="fw-bold h-60 w-60 rounded-circle danger-opacity-bg d-flex justify-content-center align-items-center themeColor">
                      05
                    </div>
                  </div>
                  <div class="flex-grow-1 ms-3">
                    <p class="text-dark mb-0"> Get Started </p>
                  </div>
                  <span> 04:30 <i class="fas fa-lock text-dark-gray ps-2"></i> </span>
                </div>
              </a>
            </div>
            <div class="col-md-6 mb-3">
              <a href="#" class="text-decoration-none">
                <div class="d-flex align-items-center justify-content-between big-shadow p-4 rounded-3">
                  <div class="flex-shrink-0">
                    <div
                        class="fw-bold h-60 w-60 rounded-circle danger-opacity-bg d-flex justify-content-center align-items-center themeColor">
                      06
                    </div>
                  </div>
                  <div class="flex-grow-1 ms-3">
                    <p class="text-dark mb-0"> Get Fiverr </p>
                  </div>
                  <span> 04:30 <i class="fas fa-lock text-dark-gray ps-2"></i> </span>
                </div>
              </a>
            </div>
          </div>
        </div>
        <!-- Code -->
        <div class="tab-pane fade" id="pills-code" role="tabpanel" aria-labelledby="pills-code-tab" tabindex="0">
          <h2 class="fw-bold fs-60"> Code </h2>
        </div>
        <!-- Resource -->
        <div class="tab-pane fade" id="pills-resource" role="tabpanel" aria-labelledby="pills-resource-tab" tabindex="0">
          <h2 class="fw-bold fs-60"> Resource </h2>
        </div>
        <!-- Solutions -->
        <div class="tab-pane fade" id="pills-solutions" role="tabpanel" aria-labelledby="pills-solutions-tab" tabindex="0">
          <h2 class="fw-bold fs-60"> Solutions </h2>
        </div>
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
  name: "CourseSingle",
  setup() {
    const siteData = reactive({
      title: `Course Single || Laravel Point`,
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
  .big-shadow {
    box-shadow: rgba(0, 0, 0, 0.1) 0 20px 25px -5px, rgba(0, 0, 0, 0.04) 0 10px 10px -5px;
  }
</style>