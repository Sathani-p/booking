<template>
  <div class="footer">

<div class="row justify-content-center mb-0 pt-5 pb-0 row-2 px-3" style="margin-top:100px">
            <div class="col-12">
                <div class="row row-2">
                    <div class="col-sm-3 text-md-center">
                        <h5>
                            <span> 
                                <i class="fa fa-firefox text-light" aria-hidden="true"></i>
                            </span>
                            <b> <img src="../assets/Logo.png" alt="" srcset="" class="image-footer"></b>
                        </h5>
                          
                    </div>
                    <div class="col-sm-3 my-sm-0 mt-6">
                        <ul class="list-unstyled">
                            <li class="mt-0">Product</li>
                            <router-link to="/hotel" style="text-decoration:none;color:#FFF;">
                                <li>
                                    Hotels
                                </li>
                            </router-link>
                            <router-link to="/tour" style="text-decoration:none;color:#FFF;">
                                <li>
                                    Tour
                                </li>
                            </router-link>
                            <router-link to="/transport" style="text-decoration:none;color:#FFF;">
                                <li>
                                    Transports
                                </li>
                            </router-link>
                        </ul>
                    </div>
                    <div class="col-sm-3 my-sm-0 mt-6">
                        <ul class="list-unstyled">
                            <li class="mt-0">About Napat Travel</li>
                            <li>How to Book</li>
                            <router-link to="/contact" style="text-decoration:none;color:#FFF;">
                                <li>
                                    Contact us
                                </li>
                            </router-link>
                            <li>Help Center</li>
                            <li>About us</li>
                        </ul>
                    </div>
                    <div class="col-sm-3 my-sm-0 mt-6">
                        <ul class="list-unstyled">
                            <li class="mt-0">Other</li>
                            <li>Blog</li>
                            <li>Privacy Policy</li>
                            <li>Terms & Condition</li>
                            
                        </ul>
                    </div>
                </div>
            </div>
        </div>
        <div class="row justify-content-center mt-0 pt-0 row-1 mb-0 px-sm-3 px-2">
            <div class="col-12">
                <div class="row my-4 row-1 no-gutters">
                    <div class="col-sm-3 col-auto text-center"><small>&#9400;Napat Travel</small></div>
                    <div class="col-md-3 col-auto "></div>
                    <div class="col-md-3 col-auto"></div>
                    <div class="col my-auto text-md-left text-right "> 
                        <small>s6130613016@phuket.psu.ac.th 
                            <span>
                                <i class="fab fa-facebook"></i>
                            </span> 
                            <span>
                                <i class="fab fa-instagram" style="margin-left:10px;"></i>
                            </span>
                         </small> 
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

<style>
@import url('https://fonts.googleapis.com/css2?family=Poppins:wght@400;500;600;700&display=swap');
body {
     font-family: 'Poppins', sans-serif;
     height: 100% !important;
     background-color: #FFF !important;
 }


 p {
     font-size: calc(12px + (14 - 12) * ((100vw - 360px) / (1600 - 360))) !important;
     font-family: 'Poppins', sans-serif;
     display: flex;
 }



 footer {
     color: #FFF !important
 }

 li {
     margin-top: 20px;
     margin-bottom: 20px
 }


 .row-1 {
     background-color: #0B0B45 !important
 }

 .row-2 {
     background-color: #0f225b !important
 }
 .image-footer{
     width: 150px;
     height: 150px;
     float: left;
     margin-top: -60px;

 }
</style>