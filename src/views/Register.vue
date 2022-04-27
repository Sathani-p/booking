<template>
  <div class="register">

      <!-- Navbar-->
<header class="header">
    <nav class="navbar navbar-expand-lg navbar-light py-3">
        <div class="container">
            <!-- Navbar Brand -->
            <a href="/" class="navbar-brand">
                <img src="../assets/Logo.png" alt="logo" width="150" style="margin-top:-30px">
            </a>
        </div>
    </nav>
</header>
<!-- End Navbar-->

 <div class="container">
    <div class="row">
      <div class="col-lg-10 col-xl-9 mx-auto">
        <div class="card flex-row my-5 border-0 shadow rounded-3 overflow-hidden">
          <div class="card-img-left d-none d-md-flex">
            <!-- Background image for card set in CSS! -->
          </div>
          <div class="card-body p-4 p-sm-5">
            <h5 class="card-title text-center mb-5 fw-light fs-5">
                Register
            </h5>
            <form>

                <div class="form-group mb-3">
                    <input id="inputEmail" type="email" placeholder="Username" required="" autofocus="" class="form-control rounded-pill border-0 shadow-sm px-4">
                </div>
                <div class="form-group mb-3">
                    <input id="inputEmail" type="email" placeholder="Email address" required="" autofocus="" class="form-control rounded-pill border-0 shadow-sm px-4">
                </div>
                <hr>
                <div class="form-group mb-3">
                     <input id="inputPassword" type="password" placeholder="Password" required="" class="form-control rounded-pill border-0 shadow-sm px-4 text-primary">
                </div>
                <div class="form-group mb-3">
                     <input id="inputPassword" type="password" placeholder="Confirm Passwor" required="" class="form-control rounded-pill border-0 shadow-sm px-4 text-primary">
                </div>
              <div class="d-grid mb-2">
               <router-link to="/login">
                <button type="submit" class="btn btn-primary btn-block text-uppercase mb-2 rounded-pill shadow-sm">
                    Register
                </button>
                </router-link>
              </div>

              <a class="d-block text-center mt-2 small">
                  Have an account? 
                  <router-link to="/login" style="text-decoration: none;">
                  <span class="signin"> 
                      Sign In
                  </span>
                  </router-link>
              </a>

              <hr class="my-4">




              <div class="d-grid mb-2">
                <button type="submit" class="btn btn-danger btn-block text-uppercase mb-2 rounded-pill shadow-sm">
                    <i class="fab fa-google me-2"></i> Sign up with Google
                </button>
              </div>

              <div class="d-grid">
                  <button type="submit" class="btn btn-dark btn-block text-uppercase mb-2 rounded-pill shadow-sm">
                    <i class="fab fa-facebook-f me-2"></i> Sign up with Facebook
                </button>
              </div>

            </form>
          </div>
        </div>
      </div>
    </div>
  </div>





  </div>
</template>

<script>
export default {
    

}
</script>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Poppins:wght@400;500;600;700&display=swap');
.navbar.navbar-expand-lg.navbar-light.py-3{
    background-color: #0B0B45;
    height: 100px;
}
.card-img-left {
  width: 45%;
  /* Link to your background image using in the property below! */
  background: scroll center url('https://i.pinimg.com/736x/96/c2/70/96c2704a80f55b4189034e287bdd487f.jpg');
  background-size: cover;
}

.btn.btn-primary.btn-block.text-uppercase.mb-2.rounded-pill.shadow-sm{
    text-align: center;
    font-family: 'Poppins', sans-serif;
    font-size: 16px;
    color: #FFF;
    background-color: #0B0B45;
    border-color:#0B0B45 ;
    width: 100%;
}
.btn.btn-dark.btn-block.text-uppercase.mb-2.rounded-pill.shadow-sm{
    text-align: center;
    font-family: 'Poppins', sans-serif;
    font-size: 16px;
    color: #FFF;
    background-color: rgb(21, 21, 169);
    border-color:rgb(21, 21, 169) ;
    width: 100%
}
.btn-google {
  color: white !important;
  background-color: #ea4335;
}

.btn-facebook {
  color: white !important;
  background-color: #3b5998;
}
.card-title.text-center.mb-5.fw-light.fs-5{
    font-family: 'Poppins',sans-serif;
    font-size: 24px;
    color: #0B0B45;
    
}
.text-label{
    font-family: 'Poppins',sans-serif;
    font-size: 18px;
    color: #0B0B45;
}
.form-control.rounded-pill.border-0.shadow-sm.px-4{
    font-family: 'Poppins', sans-serif;
    font-size: 13px;
    color: #C4C4C4;
}
.signin{
    font-family: 'Poppins',sans-serif;
    font-size: 15px;
    font-weight: 500;
    color: #0B0B45;
    margin-left: 5px;
    text-decoration: none;
   
}
.d-block.text-center.mt-2.small{
    font-family: 'Poppins',sans-serif;
    font-size: 13px;
    color: #0B0B45;
    text-decoration: none;
}
</style>