<template>
  <div class="login">

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

      <div class="container-fluid">
    <div class="row no-gutter">
        <!-- The image half -->
        <div class="col-md-6 d-none d-md-flex bg-image"></div>


        <!-- The content half -->
        <div class="col-md-6 bg-light">
            <div class="login d-flex align-items-center py-5">

                <!-- Demo content-->
                <div class="container">
                    <div class="row">
                        <div class="col-lg-10 col-xl-7 mx-auto">
                            <h3 class="display-4">Napat Travel</h3>
                            <p class="text-muted mb-4">Sign in your account</p>
                            <form>
                                <div class="form-group mb-3">
                                    <input id="inputEmail" type="email" placeholder="Email address" required="" autofocus="" class="form-control rounded-pill border-0 shadow-sm px-4">
                                </div>
                                <div class="form-group mb-3">
                                    <input id="inputPassword" type="password" placeholder="Password" required="" class="form-control rounded-pill border-0 shadow-sm px-4 text-primary">
                                </div>
                                <div class="custom-control custom-checkbox mb-3">
                                    <input id="customCheck1" type="checkbox" checked class="custom-control-input">
                                    <label for="customCheck1" class="custom-control-label">Remember password</label>
                                </div>
                                <center>
                                    <router-link to="/homepage">
                                <button type="submit" class="btn btn-primary btn-block text-uppercase mb-2 rounded-pill shadow-sm">
                                    Sign in
                                </button>
                                    </router-link>
                                
                                    <div class="row justify-content-center my-2"> 
                                        <a>
                                            <small class="text-muted">
                                                Forgot Password?
                                            </small>
                                        </a> 
                                    </div>
                                </center>
                                <div class="bottom text-center mb-5" style="margin-top:20px">
                                     <p  class="sm-text mx-auto mb-3" >
                                         Don't have an account?
                                        <router-link to="/register" style="text-decoration:none;">
                                            <span class="create"> 
                                                Create new
                                            </span>
                                        </router-link>
                                     </p>
                                </div>
                            </form>
                        </div>
                    </div>
                </div><!-- End -->

            </div>
        </div><!-- End -->

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
/*Login */
.login,
.image {
  min-height: 100vh;
}

.bg-image {
  background-image: url('https://i.pinimg.com/564x/ba/ef/3f/baef3f282704cd6acc3968fa39d74831.jpg');
  background-size: cover;
  background-position: center center;
}
.display-4{
    font-family: 'Poppins', sans-serif;
    font-size: 30px;
    color: #0B0B45;
}
.text-muted.mb-4{
    font-family: 'Poppins', sans-serif;
    font-size: 18px;
    color: #C4C4C4;
}
.form-control.rounded-pill.border-0.shadow-sm.px-4{
    font-family: 'Poppins', sans-serif;
    font-size: 13px;
    color: #C4C4C4;
}
.custom-control-label{
    font-family: 'Poppins', sans-serif;
    font-size: 13px;
    color: #0B0B45;
    margin-left: 10px;
}
.btn.btn-primary.btn-block.text-uppercase.mb-2.rounded-pill.shadow-sm{
    text-align: center;
    font-family: 'Poppins', sans-serif;
    font-size: 16px;
    color: #FFF;
    background-color: #0B0B45;
    border-color:#0B0B45 ;
    width: 200px;
}
.text-regis{
    font-family: 'Poppins',sans-serif;
    font-size: 13px;
    color: #0B0B45;
    background-color: #FFF;
    color: #0B0B45;   
    margin-left: 20px;;
}
.sm-text.mx-auto.mb-3{
    font-family: 'Poppins',sans-serif;
    font-size: 13px;
    margin-top: 10px;

}
.create{
    font-family: 'Poppins',sans-serif;
    font-size: 15px;
    font-weight: 500;
    color: #0B0B45;
    margin-left: 5px;
   
}
/*End Login */
</style>