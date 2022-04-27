<template>
  <div class="mycard">
      
      <header>
          <NavbarPage />
      </header>

      <!--Card Noti-->


<div class="container" style="margin-top:50px;">
		<div class="main-body">
			<div class="row">
                <!--Card Hotel Detail-->
				<div class="col-lg-4">
					<div class="card">
						<div class="card-body">
							<div class="d-flex flex-column align-items-center text-center">
                                    <img src="../assets/Profile.jpg" alt="Admin" class="rounded-circle p-1 bg-dark" width="110">
                                <div class="mt-3">
									<h4 style="font-family:'Poppins',sans-serif;font-size:18px;">
                                        LOGGED IN AS SATHANI DERMCHAI
                                    </h4>
									<p class="text-secondary mb-1">
                                        Sathani Dermchai (Google)
                                            <i class="fas fa-check-circle"></i>
                                    </p>
                                    <hr class="my-4"> 
								</div>
<div class="container">
    <div class="row">
        <div class="col-md-8">
            <div class="vertical-tab" role="tabpanel">
                <!-- Nav tabs -->
                <ul class="nav nav-tabs" role="tablist">
                
                    <router-link to="/myaccount" style="text-decoration: none;">
                    <li role="presentation"  >
                        <a href="#Section1" aria-controls="home" role="tab" data-toggle="tab" style="text-decoration: none;">
                            <i class="fas fa-user"></i>  My Account
                        </a>
                    </li>
                    </router-link>
                    <router-link to="/mycard" style="text-decoration: none;">
                    <li role="presentation" class="active">
                        <a href="#Section2" aria-controls="profile" role="tab" data-toggle="tab" style="text-decoration: none;">
                            <i class="fas fa-credit-card"></i> My Card
                        </a>
                    </li>
                    </router-link>
                    <router-link to="/mybooking" style="text-decoration: none;">
                    <li role="presentation">
                        <a href="#Section3" aria-controls="messages" role="tab" data-toggle="tab" style="text-decoration: none;">
                            <i class="fas fa-book"></i> My Booking
                        </a>
                    </li>
                    </router-link>
                    <router-link to="/purchaselist" style="text-decoration: none;">
                    <li role="presentation">
                        <a href="#Section4" aria-controls="profile" role="tab" data-toggle="tab" style="text-decoration: none;">
                            <i class="fas fa-clipboard-list"></i> Purchase List
                        </a>
                    </li>
                    </router-link>
                    <router-link to="/notification" style="text-decoration: none;">
                    <li role="presentation" >
                        <a href="#Section5" aria-controls="messages" role="tab" data-toggle="tab" style="text-decoration: none;">
                            <i class="fas fa-bell"></i> Notification
                        </a>
                    </li>
                    </router-link>
                    <router-link to="/" style="text-decoration: none;">
                    <li role="presentation">
                        <a href="#Section6" aria-controls="messages" role="tab" data-toggle="tab" style="text-decoration: none;">
                            <i class="fas fa-sign-out-alt"></i> Log Out
                        </a>
                    </li>
                    </router-link>
                </ul>
            </div>
        </div>
    </div>
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
                            <div class="d-flex flex-column align-items-start text-center" >
								<div class="mt-3">
									<h4 style="font-family:'Poppins',sans-serif;font-size:20px;font-weight:800;">
                                        My Card
                                    </h4>
								</div>
							</div>
						</div>
					</div>

					<!--Add Card-->

                    <div class="container mt-5 mb-3">
    <div class="row">
         <div class="col-md-4">
            <div class="card p-3 mb-2">
                <center>                 
                    <div class="icon">
                    <i class="fas fa-plus-circle"></i>
                </div>
                </center>
                <div class="mt-5">
                    <h3 class="heading">Add Card</h3>
                </div>
            </div>
        </div>
         <div class="col-md-4">
            <div class="card p-3 mb-2">
                <center>                 
                    <div class="icon">
                    <i class="fas fa-plus-circle"></i>
                </div>
                </center>
                <div class="mt-5">
                    <h3 class="heading">Add Card</h3>
                </div>
            </div>
        </div>
        <div class="col-md-4">
            <div class="card p-3 mb-2">
                <center>                 
                    <div class="icon">
                    <i class="fas fa-plus-circle"></i>
                </div>
                </center>
                <div class="mt-5">
                    <h3 class="heading">Add Card</h3>
                </div>
            </div>
        </div>
    </div>
</div>

                    <!--End Add Card-->
<!--Button-->
<div class="d-grid gap-2 d-md-flex justify-content-md-end">
  <button class="btn btn-primary me-md-2" type="button">Cancel</button>
  <button class="btn btn-primary" type="button">Save</button>
</div>
<!--Button-->
				</div>
<!--End Card Hotel Detail-->
			</div>
		</div>
	</div>


      <!--End Card Noti-->

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

/* Card Noti */


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


/* End Card Noti */
/* Tab  */
a:hover,a:focus{
    text-decoration: none;
    outline: none;
}
.vertical-tab{
    font-family: 'Poppins', sans-serif;
    display: table;
}
.vertical-tab .nav-tabs{
    display: table-cell;
    width: 28%;
    min-width: 28%;
    vertical-align: top;
    border: none;
}
.vertical-tab .nav-tabs li{
   float: none;
   vertical-align: top;
}
.vertical-tab .nav-tabs li a{
    color: #C4C4C4;
    background: #fff;
    font-size: 18px;
    font-weight: 600;
    letter-spacing: 1px;
    text-align: center;
    text-transform: uppercase;
    padding: 13px 10px 10px;
    margin: 0 9px 9px 0;
    border-radius: 0;
    border: none;
    border-bottom: 2px solid rgba(0,0,0,0.15);
    box-shadow: 0 0 5px rgba(0,0,0,0.1);
    display: block;
    overflow: hidden;
    position: relative;
    z-index: 1;
    transition: all 0.3s ease 0.1s;
}
.vertical-tab .nav-tabs li a:hover,
.vertical-tab .nav-tabs li.active a,
.vertical-tab .nav-tabs li.active a:hover{
    color: #0B0B45;
    background: #fff;
    border: none;
    border-bottom: 2px solid rgba(0,0,0,0.15);
    border-radius: 10px 0 0 0;
}
.vertical-tab .nav-tabs li a:before,
.vertical-tab .nav-tabs li a:after{
    content: '';
    background: #0B0B45;
    height: 100%;
    width: 3px;
    position: absolute;
    left: 0;
    bottom: 0;
    z-index: -1;
    transition: all 0.3s ease 0s;
}
.vertical-tab .nav-tabs li a:after{
    opacity: 0;
    left: auto;
    right: 25px;
    transition: all 0.3s ease-in 0.2s;
}
.vertical-tab .nav-tabs li a:hover:before,
.vertical-tab .nav-tabs li.active a:before,
.vertical-tab .nav-tabs li.active a:hover:before{
    width: 50%;
    opacity: 0;
}
.vertical-tab .nav-tabs li a:hover:after,
.vertical-tab .nav-tabs li.active a:after,
.vertical-tab .nav-tabs li.active a:hover:after{
    opacity: 1;
    right: 0
}
.vertical-tab .tab-content{
    color: #C4C4C4;
    background: #fff;
    font-size: 14px;
    letter-spacing: 0.5px;
    line-height: 25px;
    padding: 20px 20px 10px;
    margin-top: 10px;
    border-right: 3px solid #0B0B45;
    box-shadow: 0 0 5px rgba(0,0,0,0.1);
    display: table-cell;
    position: relative;
}
.vertical-tab .tab-content h3{
    color: #0B0B45;
    font-weight: 700;
    text-transform: uppercase;
    letter-spacing: 1px;
    margin: 0 0 7px 0;
}
@media only screen and (max-width: 479px){
    .vertical-tab .nav-tabs{
        width: 100%;
        display: block;
        border: none;
    }
    .vertical-tab .nav-tabs li a{ margin: 0 0 10px; }
    .vertical-tab .tab-content{
        padding: 25px 20px;
        display: block;
    }
    .vertical-tab .tab-content h3{ font-size: 18px; }
}
/* End Tab */



.linked{
  width: 30px;
  height: 30px;
  border-radius: 50%;
  margin-top: -5px;
}
.text-linked{
  float: right;
  margin-top: -30px;
  font-family: 'Poppins', sans-serif;
  font-size: 14px;
  color: #0B0B45;
  font-weight: bold;
}
.fas.fa-check-circle{
  color: green;
}
/* Add card */

.card {
    border: none;
    border-radius: 10px
}



.icon {
    width: 50px;
    height: 50px;
    background-color: #FFF;
    border-radius: 15px;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 39px;
     color: #0B0B45;
}


.text1 {
    font-size: 14px;
    font-weight: 600
}

.text2 {
    color: #a5aec0
}
.heading{
    text-align: center;
    color: #0B0B45;
    font-family: 'Poppins',sans-serif;
    font-size: 18px;
}


/* End Add card */
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