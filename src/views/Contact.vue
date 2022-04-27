<template>
  <div class="contact">
      <header>
          <NavbarPage />
      </header>

      <!--Contact-->

<div class="bg-info contact4 overflow-hiddedn position-relative">
  <!-- Row  -->
  <div class="row no-gutters">
    <div class="container">
      <div class="col-lg-6 contact-box mb-4 mb-md-0">
        <div class="">
          <h1 class="title" style="color:#0B0B45;">Contact Us</h1>
          <form class="mt-3">
            <div class="row">
              <div class="col-lg-12" style="margin-left:20px;">
                <div class="form-group mt-2">
                  <input class="form-control text-white" type="text" placeholder="name">
                </div>
              </div>
              <div class="col-lg-12" style="margin-left:20px;">
                <div class="form-group mt-2">
                  <input class="form-control text-white" type="email" placeholder="email address">
                </div>
              </div>
              <div class="col-lg-12" style="margin-left:20px;">
                <div class="form-group mt-2">
                  <textarea class="form-control text-white" rows="3" placeholder="message"></textarea>
                </div>
              </div>
              <div class="col-lg-12 d-flex align-items-center mt-2">
                <button type="submit" class="btn btn-primary" style="margin-left:20px;"><span> Send</span></button>
                
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
    <div class="col-lg-6 right-image p-r-0">
      <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1619902.0054433027!2d-122.68851282163044!3d37.534535608111824!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x80859a6d00690021%3A0x4a501367f076adff!2sSan+Francisco%2C+CA%2C+USA!5e0!3m2!1sen!2sin!4v1507725785789"
        width="100%" height="538" frameborder="0" style="border:0" allowfullscreen data-aos="fade-left" data-aos-duration="3000"></iframe>
    </div>
  </div>
</div>

      <!--End Contact-->

<footer>
  <Footer />
</footer>

  </div>
</template>

<script>
import Footer from '@/components/Footer.vue'
import NavbarPage from '../components/NavbarPage.vue'
export default {
    components : {
        NavbarPage,
        Footer,
    }

        
}
</script>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Poppins:wght@400;500;600;700&display=swap');


/* Contact */

.contact4 {
  font-family: 'Poppins', sans-serif;
  color: #0B0B45;
  font-weight: 300;
}

.contact4 h1, .contact4 h2, .contact4 h3, .contact4 h4, .contact4 h5, .contact4 h6 {
  color: #0B0B45;
}

.contact4 .font-weight-medium {
	font-weight: 500;
}

.contact4 .form-control {
  background: transparent;
  border: 2px solid rgba(11, 11, 69, 0.5);
}

.contact4 .form-control:focus {
  border-color: #ffffff;
}

.contact4 input::-webkit-input-placeholder,
.contact4 textarea::-webkit-input-placeholder {
  color: rgba(11, 11, 69, 0.7);
}

.contact4 input:-ms-input-placeholder,
.contact4 textarea:-ms-input-placeholder {
  color: rgba(11, 11, 69, 0.7);
}

.contact4 input::placeholder,
.contact4 textarea::placeholder {
  color: rgba(11, 11, 69, 0.7);
}

.contact4 .right-image {
  position: absolute;
  right: 0;
  bottom: 0;
  top: 0;
}

.contact4.bg-info {
    background-color: #FFF !important;
}

.contact4 .text-inverse {
    color: #0B0B45 !important;
}

@media (min-width: 1024px) {
	.contact4 .contact-box {
    padding: 80px 105px 80px 0px;
	}
}

@media (max-width: 767px) {
	.contact4 .contact-box {
    padding-left: 15px;
    padding-right: 15px;
	}
}

@media (max-width: 1023px) {
	.contact4 .right-image {
			position: relative;
			bottom: -95px;
	}
}
@media only screen and (max-width: 990px){

    .contact4 .contact-box {
    margin-right:30px;
	}
}


/* End Contact */
/* Button Primary */

.btn.btn-outline-primary{
    background-color: #FFF;
    border-color: #0B0B45;
    color: #0B0B45;
    font-family: 'Poppins',sans-serif;
    font-size: 13px;
    border-radius: 20px;
}

/* End Button Primary */
</style>