<template>
  <!-- Modal -->
  <div class="modal fade get-started" id="getStarted" data-bs-backdrop="static" data-bs-keyboard="false" tabindex="-1" aria-labelledby="getStartedLabel" aria-hidden="true">
    <div class="modal-dialog modal-dialog-centered modal-dialog-scrollable modal-xl">
      <div class="modal-content">
        <div class="modal-body p-0">
          <div class="row g-0">
            <div class="col">
              <img class="img-fluid" src="../assets/images/get-started.png" alt="get start" />
            </div>
            <div class="col">
              <div class="p-5 h-100 position-relative">
                <!-- Close Btn -->
                <button type="button" class="text-white bg-danger p-2 border-0 position-absolute top-0 right-0" data-bs-dismiss="modal" style="
                    padding: 10px 16px !important;
                    border-bottom-left-radius: 10px;">
                  <svg xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 384 512" fill="#fff"><!--! Font Awesome Free 6.4.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2023 Fonticons, Inc. --><path d="M342.6 150.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L192 210.7 86.6 105.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L146.7 256 41.4 361.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L192 301.3 297.4 406.6c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L237.3 256 342.6 150.6z"/></svg>
                </button>

                <!-- Main Content -->
                <h2 class="text-dark fs-60 fw-bold lh-60"> Be A Laravel Maestro </h2>
                <p class="text-dark-gray"> Get ready to embark on a thrilling journey of problem-solving and sharpen your Laravel expertise. </p>

                <!-- Tab Content -->
                <ul class="nav nav-pills mb-4" id="pills-tab" role="tablist">
                  <li class="nav-item" role="presentation">
                    <button class="nav-link bg-transparent themeColor rounded-0 active" id="pills-login-tab" data-bs-toggle="pill" data-bs-target="#pills-login" type="button" role="tab" aria-controls="pills-login" aria-selected="true">Login</button>
                  </li>
                  <li class="nav-item" role="presentation">
                    <button class="nav-link bg-transparent themeColor rounded-0" id="pills-signup-tab" data-bs-toggle="pill" data-bs-target="#pills-signup" type="button" role="tab" aria-controls="pills-signup" aria-selected="false">Signup</button>
                  </li>
                </ul>
                <div class="tab-content mt-4 pt-2" id="pills-tabContent">

                  <!-- Sign In -->
                  <div class="tab-pane fade show active" id="pills-login" role="tabpanel" aria-labelledby="pills-login-tab" tabindex="0">
                    <form>
                      <div class="mb-3">
                        <input type="email" class="form-control rounded-0" placeholder="Email Address" aria-describedby="emailHelp">
                      </div>
                      <div class="mb-3 position-relative">
                        <a class="text-decoration-none show-password pointer-event"  @click="toggleShowPassword">
                          <i :class="showPassword ? 'fas fa-eye-slash' : 'fas fa-eye'"></i>
                        </a>
                        <input class="form-control rounded-0" placeholder="Password"
                           v-model="loginPassword"
                           :type="showPassword ? 'text' : 'password'">
                      </div>
                      <div class="d-flex justify-content-center justify-content-md-end">
                        <button type="submit" class="btn px-4 rounded-0">Submit</button>
                      </div>
                    </form>
                  </div>

                  <!-- Sign Up -->
                  <div class="tab-pane fade" id="pills-signup" role="tabpanel" aria-labelledby="pills-signup-tab" tabindex="0">
                    <form>
                      <div class="mb-3">
                        <input type="email" class="form-control rounded-0" placeholder="Email Address" aria-describedby="emailHelp">
                      </div>
                      <div class="mb-3">
                        <input type="text" class="form-control rounded-0" placeholder="Name">
                      </div>
                      <div class="mb-3">
                        <input type="number" class="form-control rounded-0" placeholder="Phone Number">
                      </div>
                      <div class="row g-3">
                        <div class="col">
                          <div class="mb-3 position-relative">
                            <a class="text-decoration-none show-password pointer-event"  @click="toggleShowPassword">
                              <i :class="showPassword ? 'fas fa-eye-slash' : 'fas fa-eye'"></i>
                            </a>
                            <input class="form-control rounded-0" placeholder="Password" name="password"
                             v-model="signupPassword"
                             :type="showPassword ? 'text' : 'password'">
                          </div>
                        </div>
                        <div class="col">
                          <div class="mb-3 position-relative">
                            <a class="text-decoration-none show-password pointer-event"  @click="toggleShowPassword">
                              <i :class="showPassword ? 'fas fa-eye-slash' : 'fas fa-eye'"></i>
                            </a>
                            <input class="form-control rounded-0" placeholder="Password" name="confirm-password"
                             v-model="confirmPassword"
                             :type="showPassword ? 'text' : 'password'">
                          </div>
                        </div>
                      </div>
                      <div class="d-flex justify-content-center justify-content-md-end">
                        <button type="submit" class="btn px-4 rounded-0">Submit</button>
                      </div>
                    </form>
                  </div>
                </div>

                <!--  Footer Link -->
                <div class="d-flex justify-content-center">
                  <div class="mx-auto position-absolute w-100" style="max-width: 50%; top: 90%">
                    <div class="d-flex justify-content-between">
                      <a href="#" class="text-decoration-none modal-link" target="_blank"> Google </a>
                      <a href="#" class="text-decoration-none modal-link" target="_blank"> Facebook </a>
                      <a href="#" class="text-decoration-none modal-link" target="_blank"> Twitter </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "SignIn_SignUp",
  data() {
    return {
      loginPassword: '',
      signupPassword: '',
      confirmPassword: '',
      showPassword: false,
    }
  },
  methods: {
    toggleShowPassword() {
      this.showPassword = !this.showPassword;
    },
  },
}
</script>

<style scoped>
.modal-link:hover {
  color: #2d2d2d;
}

.get-started .form-control {
  padding: 10px 15px;
  border: 1px solid #D8D8D8;
  transition: all 0.4s ease-in-out;
}

.get-started .form-control:hover {
  border: 1px solid var(--themeColor);
}

.get-started .form-control:focus {
  box-shadow: none;
}

.get-started .btn {
  color: #ffffff;
  background-color: var(--themeColor);
}

.get-started .show-password {
  position: absolute;
  top: 2px;
  right: 2px;
  color: #d8d8d8;
  padding: 9px 10px;
  background-color: #ffffff;
  transition: all 0.4s ease-in-out;
}

.get-started .show-password:hover {
  cursor: pointer;
  color: var(--themeColor);
}
</style>