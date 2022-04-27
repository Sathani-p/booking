<template>
  <div class="transport">

      <header>
          <NavbarPage />
      </header>

      <!--CAR RENTAL-->
<center>
<div class="container" style="margin-top:50px">
    <div class="row">
      <center>
        <div class="col-6">
            <div class="serviceBox">
                <h3 class="title">CAR RENTAL</h3>
            </div>
        </div>
        </center>
    </div>
</div>
</center>

<!--End CAR RENTAL-->

<!--Card Car  -->

<div class="container" style="margin-top:50px;">
    <div class="main-body">
          <div class="row gutters-sm">
            <div class="col-md-4 mb-3">
              <div class="card">
                <div class="card-body">
                  <div class="d-flex flex-column align-items-start text-center">
                    <div class="mt-3">
                      <h5 style="float:left;">
                          <i class="fas fa-sliders-h"></i>
                            Filter
                     </h5>
                    <br>
                <ul class="list-group list-group-flush" style="float:left;margin-top:10px">
                    <h6 class="mb-0" >
                        Tranmission
                    </h6>
                    <br>
<div class="form-check">
  <input class="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault1" checked>
  <label class="form-check-label" for="flexRadioDefault1" style="float:left;">
    All
  </label>
</div>
<div class="form-check">
  <input class="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault2" checked>
  <label class="form-check-label" for="flexRadioDefault2" style="float:left;">
    Automatic
  </label>
</div>
<div class="form-check">
  <input class="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault3" checked>
  <label class="form-check-label" for="flexRadioDefault3" style="float:left;">
    Manual
  </label>
</div>
<hr>
                    

                  <h6 class="mb-0" >
                        Passenger Capacity
                    </h6>
                    <br>
<div class="form-check">
  <input class="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault1" checked>
  <label class="form-check-label" for="flexRadioDefault1" style="float:left;">
    All
  </label>
</div>
<div class="form-check">
  <input class="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault2" checked>
  <label class="form-check-label" for="flexRadioDefault2" style="float:left;">
    4 passengers
  </label>
</div>
<div class="form-check">
  <input class="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault3" checked>
  <label class="form-check-label" for="flexRadioDefault3" style="float:left;">
    5-6 passengers
  </label>
</div>
<div class="form-check">
  <input class="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault4" checked>
  <label class="form-check-label" for="flexRadioDefault4" style="float:left;">
    > 6 passengers
  </label>
</div>
<hr>
                   <h6 class="mb-0" >
                         Price Range per Day
                    </h6>
                    <br>
                    <select class="form-select" aria-label="Default select example">
  <option selected>฿</option>
  <option value="1">1,500</option>
  <option value="2">2,500</option>
  <option value="3">3,500</option>
</select>
                </ul>
           
                    </div>
                  </div>
                </div>
              </div>
              <div class="card mt-3">
                <ul class="list-group list-group-flush">
                  <li class="list-group-item d-flex justify-content-between align-items-center flex-wrap">
                    <h5 style="float:left;">
                         <i class="fas fa-sort-amount-down"></i>
                            Sort
                     </h5>
                  </li>
                  <li class="list-group-item d-flex justify-content-between align-items-center flex-wrap">
                    <div class="form-check">
  <input class="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault2" checked>
  <label class="form-check-label" for="flexRadioDefault2" style="float:left;">
    self drive
  </label>
</div>
<div class="form-check">
  <input class="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault2" checked>
  <label class="form-check-label" for="flexRadioDefault2" style="float:left;">
    with driver
  </label>
</div>
</li>

                </ul>
              </div>
            </div>
            <div class="col-md-8">
              <div class="card mb-3" style="background-color:#0B0B45;">
                <div class="card-body">
                    <h5 style="float:left;color:#FFF;font-family: 'Poppins', sans-serif;">
                        Car
                    </h5>
                </div>
              </div>

              <div class="row gutters-sm">
                <div class="col-sm-6 mb-3">
                  <div class="card h-100">
                    <div class="card-body">
                        <img src="../assets/Toyota_Vios.png" class="img-fluid rounded-start" alt="...">
                         <h5 class="card-title-car">Toyota Vios or similar</h5>
        <button type="button" class="btn btn-outline-primary">Automatic</button>
        <p class="card-text" style="margin-top:10px;">
          <small class="text-muted">
            <i class="fas fa-suitcase-rolling"></i>
             2 
          </small>
          <small class="text-muted">
            <i class="fas fa-chair" style="margin-left:10px;"></i>
             4 
          </small>
        </p>
        <div class="right" style="float:right;">
              <h6 >Basic rental from</h6>
              <p style="font-family:'Mali',cursive;font-size:18px;color:red;font-weight:bold;">
                THB 889.00 
                <span style="font-family:'Mali',cursive;font-size:16px;color:#0B0B45;">/ day</span> 
              </p>
              <h6 style="margin-top:-10px;">THB 1,778.00 total</h6> 
            <router-link to="/carbooking">
              <button type="submit" class="btn btn-primary" style="float:right;">
                Continue
              </button>
            </router-link> 
            </div>
                    </div>
                  </div>
                </div>
                <div class="col-sm-6 mb-3">
                  <div class="card h-100">
                    <div class="card-body">
                       <img src="../assets/Toyota_Camry.png" class="img-fluid rounded-start" alt="...">
                         <h5 class="card-title-car">Toyota Camry or similar</h5>
        <button type="button" class="btn btn-outline-primary">Automatic</button>
        <p class="card-text" style="margin-top:10px;">
          <small class="text-muted">
            <i class="fas fa-suitcase-rolling"></i>
             2 
          </small>
          <small class="text-muted">
            <i class="fas fa-chair" style="margin-left:10px;"></i>
             4 
          </small>
        </p>
        <div class="right" style="float:right;">
              <h6 >Basic rental from</h6>
              <p style="font-family:'Mali',cursive;font-size:18px;color:red;font-weight:bold;">
                THB 889.00 
                <span style="font-family:'Mali',cursive;font-size:16px;color:#0B0B45;">/ day</span> 
              </p>
              <h6 style="margin-top:-10px;">THB 1,778.00 total</h6> 
            <router-link to="/carbooking">
              <button type="submit" class="btn btn-primary" style="float:right;">
                Continue
              </button>
            </router-link> 
            </div>
                    </div>
                  </div>
                </div>
              </div>

              <div class="row gutters-sm">
                <div class="col-sm-6 mb-3">
                  <div class="card h-100">
                    <div class="card-body">
                        <img src="../assets/Car2.png" class="img-fluid rounded-start" alt="...">
                         <h5 class="card-title-car">Nissan Terra or similar</h5>
        <button type="button" class="btn btn-outline-primary">Automatic</button>
        <p class="card-text" style="margin-top:10px;">
          <small class="text-muted">
            <i class="fas fa-suitcase-rolling"></i>
             2 
          </small>
          <small class="text-muted">
            <i class="fas fa-chair" style="margin-left:10px;"></i>
             7 
          </small>
        </p>
        <div class="right" style="float:right;">
              <h6 >Basic rental from</h6>
              <p style="font-family:'Mali',cursive;font-size:18px;color:red;font-weight:bold;">
                THB 2,159.00 
                <span style="font-family:'Mali',cursive;font-size:16px;color:#0B0B45;">/ day</span> 
              </p>
              <h6 style="margin-top:-10px;">THB 4,318.00 total</h6> 
            <router-link to="/carbooking">
              <button type="submit" class="btn btn-primary" style="float:right;">
                Continue
              </button>
            </router-link> 
            </div>
                    </div>
                  </div>
                </div>
                <div class="col-sm-6 mb-3">
                  <div class="card h-100">
                    <div class="card-body">
                       <img src="../assets/Car.png" class="img-fluid rounded-start" alt="...">
                         <h5 class="card-title-car">Nissan Almera or similar</h5>
        <button type="button" class="btn btn-outline-primary">Automatic</button>
        <p class="card-text" style="margin-top:10px;">
          <small class="text-muted">
            <i class="fas fa-suitcase-rolling"></i>
             2 
          </small>
          <small class="text-muted">
            <i class="fas fa-chair" style="margin-left:10px;"></i>
             4 
          </small>
        </p>
        <div class="right" style="float:right;">
              <h6 >Basic rental from</h6>
              <p style="font-family:'Mali',cursive;font-size:18px;color:red;font-weight:bold;">
                THB 1,234.44 
                <span style="font-family:'Mali',cursive;font-size:16px;color:#0B0B45;">/ day</span> 
              </p>
              <h6 style="margin-top:-10px;">THB 2,468.88 total</h6> 
            <router-link to="/carbooking">
              <button type="submit" class="btn btn-primary" style="float:right;">
                Continue
              </button>
            </router-link> 
            </div>
                    </div>
                  </div>
                </div>
              </div>

              <div class="row gutters-sm">
                <div class="col-sm-6 mb-3">
                  <div class="card h-100">
                    <div class="card-body">
                        <img src="../assets/Toyota_Fortuner.png" class="img-fluid rounded-start" alt="...">
                         <h5 class="card-title-car">Toyota Fortuner or similar</h5>
        <button type="button" class="btn btn-outline-primary">Automatic</button>
        <p class="card-text" style="margin-top:10px;">
          <small class="text-muted">
            <i class="fas fa-suitcase-rolling"></i>
             3 
          </small>
          <small class="text-muted">
            <i class="fas fa-chair" style="margin-left:10px;"></i>
             7 
          </small>
        </p>
        <div class="right" style="float:right;">
              <h6 >Basic rental from</h6>
              <p style="font-family:'Mali',cursive;font-size:18px;color:red;font-weight:bold;">
                THB 2,235.20 
                <span style="font-family:'Mali',cursive;font-size:16px;color:#0B0B45;">/ day</span> 
              </p>
              <h6 style="margin-top:-10px;">THB 4,470.40 total</h6> 
            <router-link to="/carbooking">
              <button type="submit" class="btn btn-primary" style="float:right;">
                Continue
              </button>
            </router-link> 
            </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
    </div>
<!--End Card Car-->

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

/* Promotion */
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

/* End Promotion */

/* Card Car */

body{
    margin-top:20px;
    color: #1a202c;
    text-align: left;
    background-color: #e2e8f0;    
}
.main-body {
    padding: 15px;
}
.card {
    box-shadow: 0 1px 3px 0 rgba(0,0,0,.1), 0 1px 2px 0 rgba(0,0,0,.06);
}

.card {
    position: relative;
    display: flex;
    flex-direction: column;
    min-width: 0;
    word-wrap: break-word;
    background-color: #fff;
    background-clip: border-box;
    border: 0 solid rgba(0,0,0,.125);
    border-radius: .25rem;
}

.card-body {
    flex: 1 1 auto;
    min-height: 1px;
    padding: 1rem;
}

.gutters-sm {
    margin-right: -8px;
    margin-left: -8px;
}

.gutters-sm>.col, .gutters-sm>[class*=col-] {
    padding-right: 8px;
    padding-left: 8px;
}
.mb-3, .my-3 {
    margin-bottom: 1rem!important;
}

.bg-gray-300 {
    background-color: #e2e8f0;
}
.h-100 {
    height: 100%!important;
}
.shadow-none {
    box-shadow: none!important;
}

/* End Card Car */

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