<template>
  <div class="payment">
      
      <header>
          <NavbarPage />
      </header>

        <!-- Payment Method -->
<div class="container" style="margin-top:50px;">
    <div class="row">
      <center>
        <div class="col-sm-6">
            <div class="serviceBox">
                <h3 class="title">Payment Method</h3>
            </div>
        </div>
        </center>
    </div>
</div>
<!--End Payment Method -->

<!-- Card Payment-->

<div class="container-fluid px-1 px-md-2 px-lg-4 py-5 mx-auto">
    <div class="row d-flex justify-content-center">
        <div class="col-xl-7 col-lg-8 col-md-9 col-sm-11">
            <div class="card border-0">
                <div class="row justify-content-center">
                    <h3 class="mb-4">Credit Card Checkout</h3>
                </div>
                <div class="row">
                    <div class="col-sm-7 border-line pb-3">
                        <div class="form-group">
                            <p class="text-muted text-sm mb-0">
                                Name on the card
                            </p> 
                            <input type="text" name="name" placeholder="Name" size="13" style="font-family:'Poppins',sans-serif">
                        </div>
                        <div class="form-group">
                            <p class="text-muted text-sm mb-0">
                                Card Number
                            </p>
                            <div class="row px-3"> 
                                <input type="text" name="card-num" placeholder="0000 0000 0000 0000" size="13" id="cr_no" minlength="19" maxlength="19"  style="font-family:'Poppins',sans-serif">
                                <p class="mb-0 ml-3"></p> 
                                <img class="image ml-1" src="https://i.imgur.com/WIAP9Ku.jpg">
                            </div>
                        </div>
                        <div class="form-group">
                            <p class="text-muted text-sm mb-0">
                                Expiry date
                            </p> 
                            <input type="text" name="exp" placeholder="MM/YY" size="6" id="exp" minlength="5" maxlength="5" style="font-family:'Poppins',sans-serif">
                        </div>
                        <div class="form-group">
                            <p class="text-muted text-sm mb-0">
                                CVV/CVC
                            </p> 
                            <input type="password" name="cvv" placeholder="000" size="1" minlength="3" maxlength="3" style="font-family:'Poppins',sans-serif">
                        </div>
                        <div class="form-group mb-0">
                            <div class="custom-control custom-checkbox custom-control-inline"> 
                                <input id="chk1" type="checkbox" name="chk" class="custom-control-input" checked> 
                                <label for="chk1" class="custom-control-label text-muted text-sm" style="font-family:'Poppins',sans-serif">
                                    save my card for future payment
                                </label> 
                                </div>
                        </div>
                    </div>
                    <div class="col-sm-5 text-sm-center justify-content-center pt-4 pb-4"> 
                        <small class="text-sm text-muted">
                            Booking Name
                        </small>
                        <h5 class="mb-5">
                            Mangosteen Ayurveda & Wellness Resort
                        </h5> 
                        <small class="text-sm text-muted">
                            Payment amount
                        </small>
                        <div class="row px-3 justify-content-sm-center">
                            <h2 class="">
                                <span class="text-md font-weight-bold mr-2">
                                    THB
                                </span>
                                <span class="text-danger">
                                    9,215.00
                                </span>
                            </h2>
                        </div> 
                        <button type="submit" class="btn btn-red text-center mt-4" style="font-family:'Poppins',sans-serif">
                            PAY
                        </button>
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>

<!--End Card Payment-->

<footer>
    <Footer />
</footer>

  </div>
</template>

<script>
import NavbarPage from '../components/NavbarPage.vue'
import Footer from '../components/Footer.vue'
export default {
    components : {
        NavbarPage,
        Footer,
    }

}
</script>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Poppins:wght@400;500;600;700&display=swap');


/* Payment Method */
.serviceBox{
    font-family: 'Poppins', sans-serif;
    text-align: center;
    padding: 28px 22px;
    position: relative;
    z-index: 1;
}
.serviceBox:before,
.serviceBox:after{
    content: '';
    height: 50%;
    width: 50%;
    border: 5px solid #0B0B45;
    border-right: none;
    border-bottom: none;
    border-radius: 50px 0 0 0;
    position: absolute;
    left: 0;
    top: 0;
    z-index: -1;
}
.serviceBox:after{
    transform: rotate(180deg);
    top: auto;
    bottom: 0;
    left: auto;
    right: 0;
}

.serviceBox .title{
    color: #0B0B45;
    font-size: 30px;
    font-weight: 600;
    line-height: 27px;
    text-transform: uppercase;
    margin: 0 0 5px;
}

@media only screen and (max-width: 990px){
    .serviceBox{ margin: 0 0 30px; }
}

/* End Payment Method */

/* Card Payment */

body {
    color: #0B0B45;
    overflow-x: hidden;
    height: 100%;
    background-color: #0B0B45;
    background-repeat: no-repeat;
    font-family: 'Poppins', sans-serif;
}

.card {
    padding: 30px 25px 35px 50px;
    border-radius: 30px;
    box-shadow: 0px 4px 8px 0px #0B0B45;
    margin-top: 50px;
    margin-bottom: 50px
}

.border-line {
    border-right: 1px solid #BDBDBD
}

.text-sm {
    font-size: 13px
}

.text-md {
    font-size: 18px
}

.image {
    width: 60px;
    height: 30px
}

::placeholder {
    color: grey;
    opacity: 1
}

:-ms-input-placeholder {
    color: grey
}

::-ms-input-placeholder {
    color: grey
}

input {
    padding: 2px 0px;
    border: none;
    border-bottom: 1px solid lightgrey;
    margin-bottom: 5px;
    margin-top: 2px;
    box-sizing: border-box;
    color: #0B0B45;
    font-size: 16px;
    letter-spacing: 1px;
    font-weight: 500
}

input:focus {
    -moz-box-shadow: none !important;
    -webkit-box-shadow: none !important;
    box-shadow: none !important;
    border-bottom: 1px solid #0B0B45;
    outline-width: 0
}

button:focus {
    -moz-box-shadow: none !important;
    -webkit-box-shadow: none !important;
    box-shadow: none !important;
    outline-width: 0
}

.btn-red {
    background-color: #0B0B45;
    color: #fff;
    padding: 8px 25px;
    border-radius: 50px;
    font-size: 18px;
    letter-spacing: 2px;
    border: 2px solid #fff;
    font-family: 'Poppins', sans-serif;
}

.btn-red:hover {
    box-shadow: 0 0 0 2px #0B0B45
}

.btn-red:focus {
    box-shadow: 0 0 0 2px #0B0B45 !important
}

.custom-checkbox .custom-control-input:checked~.custom-control-label::before {
    background-color: #0B0B45
}

@media screen and (max-width: 575px) {
    .border-line {
        border-right: none;
        border-bottom: 1px solid #EEEEEE
    }
}

/* End Card Payment */

</style>