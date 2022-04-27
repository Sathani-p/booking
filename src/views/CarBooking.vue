<template>
  <div class="carbooking">

      <header>
          <NavbarPage />
      </header>

      <!-- Car Booking -->
<div class="container" style="margin-top:50px;">
    <div class="row">
      <center>
        <div class="col-sm-6">
            <div class="serviceBox">
                <h3 class="title">Car Booking</h3>
                 <p class="description"> 
                    Fill in contact below
                  </p>
            </div>
        </div>
        </center>
    </div>
</div>
<!--End Car Booking -->

<!--Card-->

<div class="container" style="margin-top:50px;">
		<div class="main-body">
			<div class="row">
                <!--Card Hotel Detail-->
				<div class="col-lg-4">
					<div class="card">
						<div class="card-body">
							<div class="d-flex flex-column align-items-start text-center">
								<div class="mt-3">
									<h4 style="font-family:'Poppins',sans-serif;font-size:18px;font-weight:400;">
                                        TOYOTA VIOS (4 SEATS)
                                    </h4>
                                        <hr class="my-4">
									<p class="text-secondary mb-1" style="color: #0B0B45;">
                                        Check-in
                                    </p>
									<p class="text-muted font-size-sm">
                                        Tue, 29 Mar 2022, 10:00 - 23:59
                                    </p>
                                    <p class="text-secondary mb-1" style="color: #0B0B45;">
                                        Check-out
                                    </p>
									<p class="text-muted font-size-sm">
                                        Wed, 30 Mar 2022, 01:00 - 12:00
                                    </p>
                                    <hr class="my-4">
                                     <h6 class="card-subtitle mb-2 text-muted">Toyota Vios 

          <small class="text-muted">
            <i class="fas fa-suitcase-rolling"></i>
             2 
          </small>
          <small class="text-muted">
            <i class="fas fa-chair"></i>
             4 
          </small>
        

     </h6>
                                    <img src="../assets/Toyota_Vios.png" class="img-fluid rounded-start" alt="...">
								</div>
							</div>	
						</div>
					</div>
				</div>
                <!--End Card Hotel Detail-->

                <!--Card Detail-->
				<div class="col-lg-8">
					<div class="card">
						<div class="card-body">
                            <div class="d-flex flex-column align-items-center text-center" >
								<img src="../assets/Profile.jpg" alt="Admin" class="rounded-circle p-1 bg-dark" width="110">
								<div class="mt-3">
									<h4 style="font-family:'Poppins',sans-serif;font-size:18px;">
                                        LOGGED IN AS SATHANI DERMCHAI
                                    </h4>
									<p class="text-secondary mb-1">
                                        Sathani Dermchai (Google)
                                            <i class="fas fa-check-circle"></i>
                                    </p>
								</div>
							</div>
						</div>
					</div>

                    <h5 class="d-flex align-items-center mb-3">
                        Your Information
                    </h5>

					<div class="row">
						<div class="col-sm-12">
							<div class="card">
								<div class="card-body">
									<h5 class="d-flex align-items-center mb-3">
                                        Contact's name
                                    </h5>
                                    <div class="col-sm-9 text-secondary">
									<input type="text" class="form-control" value="Enter your name">
                                    <div id="emailHelp" class="form-text">
                                        As in Passport/Official ID Card (without title/special characters)
                                    </div>
								</div>
                                <h5 class="d-flex align-items-center mb-3">
                                        Mobile number
                                    </h5>
                                    <div class="col-sm-9 text-secondary">
									<input type="text" class="form-control" value="Enter your mobile number">
                                    <div id="emailHelp" class="form-text">
                                        e.g.: +66 93 679 3874
                                    </div>
								</div>
                                <h5 class="d-flex align-items-center mb-3">
                                        Email address
                                    </h5>
                                    <div class="col-sm-9 text-secondary">
									<input type="text" class="form-control" value="Enter your Email address">
                                    <div id="emailHelp" class="form-text">
                                        e.g.: email@example.com
                                    </div>
								</div>
                                <div class="select">
                                    <div class="container">
                                        <div class="row" >
                                            <div class="col-6" style="margin-top:10px">
                                                <div class="form-check form-check-inline">
                                                    <input class="form-check-input" type="radio" name="inlineRadioOptions" id="inlineRadio1" value="option1">
                                                    <label class="form-check-label" for="inlineRadio1">Self drive</label>
                                                </div>
                                            </div>
                                            <div class="col-6" style="margin-top:10px">
                                                <div class="form-check form-check-inline">
                                                    <input class="form-check-input" type="radio" name="inlineRadioOptions" id="inlineRadio2" value="option2">
                                                    <label class="form-check-label" for="inlineRadio2">With Driver</label>
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                </div>	
								</div>
							</div>
						</div>


                    <h5 class="d-flex align-items-center mb-3">
                        Cancellation policy
                    </h5>
                    <div class="col-sm-12">
							<div class="card">
								<div class="card-body">
									<h5 class="d-flex align-items-center mb-3">
                                        Cancellation policy
                                    </h5>
                                     <hr class="my-4">
                                     <p>
                                        This reservation is non-refundable.
                                    </p>
								</div>
							</div>
						</div>

                        <h5 class="d-flex align-items-center mb-3">
                        Total
                    </h5>
                    <div class="col-sm-12">
							<div class="card">
								<div class="card-body">
                                    <div class="container">
                                        <div class="row">
                                            <div class="col-6">
                                               <h5 class="d-flex align-items-start mb-3">
                                                    Total
                                                </h5> 
                                            </div>
                                            <div class="col-6">
                                                <h5 class="d-flex align-items-end mb-3" style="margin-left:150px;">
                                                    <i class="fas fa-angle-up"></i>THB 1,778.00
                                                </h5> 
                                            </div>
                                            </div>
                                            </div>
                                     <hr class="my-4">
                                        <div class="container">
                                        <div class="row">
                                            <div class="col-6">
                                               <p>
                                                    Toyota Vios (4 seats)
                                                </p> 
                                            </div>
                                            <div class="col-6">
                                                <p style="margin-left:150px;">
                                                    THB 889.00
                                                </p>
                                               
                                            </div>
                                            <div class="col-6">
                                               <p>
                                                Deposit
                                               </p> 
                                            </div>
                                            <div class="col-6">
                                                <p style="margin-left:150px;"> 
                                                  THB 889.00
                                                </p>
                                               
                                            </div>
                                            </div>
                                            </div>
								</div>
							</div>
						</div>
<div class="d-grid gap-2 d-md-flex justify-content-md-end">
    <router-link to="/transport"> 
        <button class="btn btn-primary me-md-2" type="button">
            Cancel
        </button>
    </router-link>
   <router-link to="/payment"> 
    <button class="btn btn-primary" type="button">
      Continue
    </button>
  </router-link>
</div>

					</div>
				</div>
            <!--End Card Hotel Detail-->

			</div>
		</div>
	</div>

<!--End Card-->

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

/* Hotel Booking */
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
.serviceBox .description{
    color: #555;
    font-size: 14px;
    line-height: 20px;
    margin: 0;
    text-align: center;
    margin-left: 130px;
}

@media only screen and (max-width: 990px){
    .serviceBox{ margin: 0 0 30px; }
    .serviceBox .description{
       margin: 0 0 30px;
       margin-left: 50px;  
    }
}

/* End Hotel Booking */

/* Card */

body{
    background: #f7f7ff;
    margin-top:20px;
}
.card {
    position: relative;
    display: flex;
    flex-direction: column;
    min-width: 0;
    word-wrap: break-word;
    background-color: #fff;
    background-clip: border-box;
    border: 0 solid transparent;
    border-radius: .25rem;
    margin-bottom: 1.5rem;
    box-shadow: 0 2px 6px 0 rgb(218 218 253 / 65%), 0 2px 6px 0 rgb(206 206 238 / 54%);
}
.me-2 {
    margin-right: .5rem!important;
}
.fas.fa-check-circle{
    color: green;
    margin-left: 5px;
    margin-top: 5px;
}
.text-secondary.mb-1{
    font-family: 'Poppins',sans-serif;
  
}
.d-flex.align-items-center.mb-3{
    font-family:'Poppins',sans-serif;
    font-size:18px;
}
.form-control{
    border-radius: 10px;
    font-family: 'Poppins',sans-serif;
    font-size: 13px;
    color: #C4C4C4;
}
.form-text{
    color: #C4C4C4;
    font-size: 10px;
    font-family: 'Poppins',sans-serif;
}
.select{
    margin-top: 20px;
    background-color: #0B0B45;
    color: #FFFFFF;
    border-radius: 10px;
    height: 50px;
    
}
.text-term{
     font-family: 'Poppins', sans-serif;
    font-size: 16px;
    
}
/* End Card */
.btn.btn-primary.me-md-2{
    background-color: red;
    border-color: red;
    color: #fff;
}
.btn.btn-primary.me-md-2:hover{
    background-color: #fff;
    border-color: #fff;
    color: #0B0B45;
}
</style>