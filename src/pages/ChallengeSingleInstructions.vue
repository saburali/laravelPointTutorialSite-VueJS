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
          <h2 class="fw-bold fs-60"> Return the Next Number from the Integer Passed </h2>

          <!-- Tags -->
          <div class="d-flex justify-content-start mt-3 mb-4">
            <div class="themeBG px-3 py-1 text-white me-2 rounded fs-14"> Hard </div>
            <div class="bg-danger px-3 py-1 text-white me-2 rounded fs-14"> <i class="fas fa-coins"></i> 10 Points </div>
          </div>

          <!-- Details -->
          <p> Computers have their own language called Machine Code which tells them what to do. As you can see, it doesn’t make a lot of sense to humans!

            Each number or letter is telling the computer to change something in its memory. This could be a number or word, or a little part of a picture or video. By themselves, computers don’t know how to do anything. It is the job of the programmer to give them instructions.

            It is possible to learn Machine Code, but it would take a long time! Luckily there is an easier way to communicate with computers. </p>

          <p> Lorem ipsum dolor sit amet consectetur. Enim elementum cursus volutpat amet. Tempor lacus arcu porttitor massa. Nulla tincidunt mi id ipsum imperdiet ut ut. Vehicula augue in quis pellentesque orci vulputate in leo velit. Leo aliquam nunc arcu amet. Sollicitudin vulputate eleifend ornare lectus libero gravida. Diam cras vitae imperdiet lectus vitae varius eget erat tincidunt. Lectus sagittis mattis sit id viverra. Dictum sollicitudin vehicula ullamcorper pulvinar nisi pretium sit vitae. Enim vel lobortis neque eu sem ac ipsum sed. Faucibus lectus mauris amet enim ante sed. Non nibh dignissim risus elementum nibh.
            Facilisi tellus in sed feugiat auctor in maecenas ut. Sit amet purus et ultrices facilisis sed lorem egestas. Enim massa netus lectus laoreet dignissim. Posuere dui a mauris ac egestas ut. Nunc ut et faucibus ac. Nibh quis sit metus id amet sem ut ipsum consequat. Urna viverra faucibus tincidunt sed egestas in bibendum tempus commodo. Felis porta morbi sit enim a dui nec turpis ullamcorper.

            <br>
            <br>

            Nunc viverra eget orci fusce facilisis iaculis tristique fusce neque. Nunc lorem non fusce sed risus facilisis. Risus euismod vitae et nulla nullam interdum malesuada nulla. Neque ut morbi aliquet pulvinar tortor vitae. Congue ipsum nibh ornare aliquet justo sapien turpis tincidunt. Tellus euismod vel convallis eget amet lacus turpis lacus maecenas. Purus felis placerat tincidunt enim rhoncus et. Aliquam curabitur feugiat fames bibendum aliquam facilisis nibh.
            Non augue fames at enim feugiat dolor. Sed amet arcu quis elementum elementum nisi donec. Mauris vel pellentesque mi eu quis quis massa ultrices. Amet eget purus elit tincidunt purus. Viverra orci quis proin egestas. Pharetra porttitor sit ut volutpat. Euismod pellentesque pretium vulputate pulvinar vitae maecenas. Ac est turpis egestas tempus tellus egestas cras. Mattis lobortis iaculis maecenas montes. Dolor sed faucibus odio etiam enim sodales non. Sit in. </p>

        </div>
        <!-- Code -->
        <div class="tab-pane fade" id="pills-code" role="tabpanel" aria-labelledby="pills-code-tab" tabindex="0">
          <h2> Code </h2>
        </div>
        <!-- Resource -->
        <div class="tab-pane fade" id="pills-resource" role="tabpanel" aria-labelledby="pills-resource-tab" tabindex="0">
          <h2> Resource </h2>
        </div>
          <!-- Solutions -->
        <div class="tab-pane fade" id="pills-solutions" role="tabpanel" aria-labelledby="pills-solutions-tab" tabindex="0">
          <h2> Solutions </h2>
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
export default {
  name: "ChallengeSingleInstructions"
}
</script>

<style scoped>

</style>