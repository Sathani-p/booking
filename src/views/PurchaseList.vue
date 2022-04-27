<template>
  <div class="purchaselist">
      
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
                    <li role="presentation">
                        <a href="#Section1" aria-controls="home" role="tab" data-toggle="tab" style="text-decoration: none;">
                            <i class="fas fa-user"></i>  My Account
                        </a>
                    </li>
                    </router-link>
                    <router-link to="/mycard" style="text-decoration: none;">
                    <li role="presentation">
                        <a href="#Section2" aria-controls="profile" role="tab" data-toggle="tab" style="text-decoration: none;">
                            <i class="fas fa-credit-card"></i> My Card
                        </a>
                    </li>
                    </router-link>
                    <router-link to="/mybooking" style="text-decoration: none;">
                    <li role="presentation" >
                        <a href="#Section3" aria-controls="messages" role="tab" data-toggle="tab" style="text-decoration: none;">
                            <i class="fas fa-book"></i> My Booking
                        </a>
                    </li>
                    </router-link>
                    <router-link to="/purchaselist" style="text-decoration: none;">
                    <li role="presentation" class="active">
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
                                        Purchase List
                                    </h4>
								</div>
							</div>
						</div>
					</div>
<!--Button Tab-->
<div class="container">
    <div class="row">
         <div class="col-sm-3">
            <a href="#" class="btn red">
                <span class="btn-sm">
                    20 Days Ago
                </span>
            </a>
        </div>
 
         <div class="col-sm-3">
            <a href="#" class="btn red">
                <span class="btn-sm">
                    Fabruary 2022
                </span>
            </a>
        </div>
 
         <div class="col-sm-3">
            <a href="#" class="btn red">
                <span class="btn-sm">
                    January 2022
                </span>
            </a>
        </div>

         <div class="col-sm-3">
            <a href="#" class="btn red">
                <span class="btn-sm">
                    December 2021
                </span>
            </a>
        </div>
    </div>
</div>
<!--End Button Tab-->

					<div class="row" style="margin-top:30px;">
                        <div class="col-sm-12">
							<div class="card">
								<div class="card-body">
                                    <!--Table-->
                                        <div class="container">
    	                                    <div class="row">
                                                <div class="col-lg-12 col-md-12 ml-auto mr-auto">
                                                    <h4 style="font-family:'Poppins',sans-serif;font-size:20px;font-weight:800;">
                                                        Purchase List
                                                    </h4>
                <div class="table-responsive">
                <table class="table">
                    <thead>
                        <tr>
                            <th class="text-center">#</th>
                            <th>Name</th>
                            <th>Type</th>
                            <th>Date</th>
                            <th class="text-right">Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td class="text-center">1</td>
                            <td>Mangosteen Ayurveda & Wellness Resort</td>
                            <td>Hotel</td>
                            <td>31/12/2021</td>
                            <td class="td-actions text-right">
                                <button type="button" class="btn btn-primary">More Details</button>
                            </td>
                        </tr>
                        <tr>
    
                            <td class="text-center">2</td>
                            <td>Four Points by Sheraton Phuket Patong Beach</td>
                            <td>Hotel</td>
                            <td>12/01/2022</td>
                            <td class="td-actions text-right">
                                <button type="button" class="btn btn-primary">More Details</button>
                            </td>
                        </tr>
                        <tr>
                            <td class="text-center">3</td>
                            <td>Diamond Cliff Phuket</td>
                            <td>Hotel</td>
                            <td>13/02/2022</td>
                            <td class="td-actions text-right">
                                <button type="button" class="btn btn-primary">More Details</button>
                            </td>
                        </tr>
                        <tr>
                            <td class="text-center">4</td>
                            <td>The Nai Harn</td>
                            <td>Hotel</td>
                            <td>14/03/2022</td>
                            <td class="td-actions text-right">
                                <button type="button" class="btn btn-primary">More Details</button>
                            </td>
                        </tr>
                        <tr>
                            <td class="text-center">5</td>
                            <td>The Royal Paradise Hotel & Spa</td>
                            <td>Hotel</td>
                            <td>15/04/2022</td>
                            <td class="td-actions text-right">
                                <button type="button" class="btn btn-primary">More Details</button>
                            </td>
                        </tr>
                    </tbody>
                </table>
                <!--Pagination-->


    <div class="demo" style="margin-top:10px;float:right;">
    <nav class="pagination-outer" aria-label="Page navigation">
        <ul class="pagination">
            <li class="page-item">
                <a href="#" class="page-link" aria-label="Previous">
                    <span aria-hidden="true">«</span>
                </a>
            </li>
            <li class="page-item active"><a class="page-link" href="#">1</a></li>
            <li class="page-item"><a class="page-link" href="#">2</a></li>
            <li class="page-item"><a class="page-link" href="#">3</a></li>
            <li class="page-item"><a class="page-link" href="#">4</a></li>
            <li class="page-item"><a class="page-link" href="#">5</a></li>
            <li class="page-item">
                <a href="#" class="page-link" aria-label="Next">
                    <span aria-hidden="true">»</span>
                </a>
            </li>
        </ul>
    </nav>
</div>


<!--End Pagination-->
                </div>
            </div>
        </div>
    </div>

                                    <!--End Table-->


                                </div>      
							</div>
						</div>
					</div>
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
/* Button Tab */

.btn{
    font-family: 'Poppins', sans-serif;
    padding: 0;
}
.btn span{
    display: inline-block;
    border-radius: 0;
    position: relative;
    transition: all 0.3s ease-in-out 0s;
}
.btn span:before,
.btn span:after{
    content: "";
    display: block;
    width: 16px;
    height: 16px;
    position: absolute;
    border-style: solid;
    transition: all 0.3s ease-in-out 0s;
}
.btn span:before{
    top: -6px;
    left: -6px;
    border-width: 2px 0 0 2px;
}
.btn span:after{
    bottom: -6px;
    right: -6px;
    border-width: 0 2px 2px 0;
}
.btn span:hover:before,
.btn span:hover:after{
    width: calc(100% + 12px);
    height: calc(100% + 12px);
    transform: rotateY(180deg);
}
.btn.red span,
.btn.red span:hover{
    color: #0B0B45;
    border: 2px solid #0B0B45;
}
.btn.red span:before,
.btn.red span:after,
.btn.red span:hover:before,
.btn.red span:hover:after{
    border-color: #0B0B45;
}

@media only screen and (max-width: 767px){
    .btn{ margin-bottom: 20px; }
}

/* End Button Tab */

/* Table */

a {
    color: #0B0B45 !important;
    text-decoration: none;
}

a:hover{
    color: #0B0B45 !important;
    text-decoration: none !important;
}
a:focus {
    color: #0B0B45 !important;
    text-decoration: none !important;
}
.container h3{
    font-size:20px ;
    margin-top: 20px ;
    margin-bottom: 10px ;
    font-weight: 400 ;
    color: #0B0B45 ;
    font-family: 'Poppins',sans-serif;
}
.container h4{
    font-size: 18px;
    line-height: 1.5;
    margin: 10px 0;
    font-weight: 400;
    color: #0B0B45;
    font-family: 'Poppins',sans-serif;
}


.table {
    width: 100%;
    max-width: 100%;
    margin-bottom: 16px;
    background-color: transparent;
}

.table thead tr th {
    font-size: 17px ;
    font-weight: 300;
}

.table>thead>tr>th{
    padding: 12px 8px;
    vertical-align: middle;
    border-color: #ddd;
    font-weight: 300;
    font-family: 'Poppins',sans-serif;
}

.table>tbody>tr>td{
    padding: 12px 8px;
    vertical-align: middle;
    border-color: #ddd;
    font-weight: 300;
    font-size:14px;
    color: #0B0B45;
    font-family: 'Poppins',sans-serif;
}

.table .td-actions .btn {
    margin: 0;
    padding: 5px;
}

.table .form-check {
    margin: 0;
    padding-left: 0;
}

.table .td-total {
    font-weight: 500;
    font-size: 17px;
    padding-top: 20px;
    text-align: right;
}

.table .td-price {
    font-size: 26px;
    font-weight: 300;
    margin-top: 5px;
    text-align: right;
}


/*animation*/

@keyframes checkbox-on {
  0% {
    box-shadow:
      0 0 0 10px,
      10px -10px 0 10px,
      32px 0 0 20px,
      0px 32px 0 20px,
      -5px 5px 0 10px,
      15px 2px 0 11px;
  }
  50% {
    box-shadow:
      0 0 0 10px,
      10px -10px 0 10px,
      32px 0 0 20px,
      0px 32px 0 20px,
      -5px 5px 0 10px,
      20px 2px 0 11px;
  }
  100% {
    box-shadow:
      0 0 0 10px,
      10px -10px 0 10px,
      32px 0 0 20px,
      0px 32px 0 20px,
      -5px 5px 0 10px,
      20px -12px 0 11px;
  }
}

/* End Table */
/* Pagination */

.pagination-outer{ 
  text-align: center;
  background-color: #FFF;  
}
.pagination{
    font-family: 'Poppins', sans-serif;
    display: inline-flex;
    position: relative;
}
.pagination li a.page-link{
    color: #888;
    background: transparent;
    font-size: 22px;
    font-weight: 500;
    line-height: 32px;
    height: 40px;
    width: 40px;
    padding: 0;
    margin: 0 5px;
    border: 4px dashed #777;
    border-radius: 50%;
    transition: all 0.3s ease 0s;
}
.pagination li a.page-link:hover,
.pagination li a.page-link:focus,
.pagination li.active a.page-link:hover,
.pagination li.active a.page-link{
    color: #0B0B45;
    background: transparent;
    border-color: #0B0B45;
}
.pagination li a.page-link:before{
    content: '';
    border: 4px dashed #0B0B45;
    border-radius: 50%;
    opacity: 0;
    position: absolute;
    left: -4px;
    top: -4px;
    bottom: -4px;
    right: -4px;
    transition: all 0.5s ease 0s;
}
.pagination li a.page-link:hover:before,
.pagination li a.page-link:focus:before,
.pagination li.active a.page-link:hover:before,
.pagination li.active a.page-link:before{
    opacity: 1;
    transform: rotate(67deg);
}
@media only screen and (max-width: 480px){
    .pagination{
        font-size: 0;
        display: inline-block;
    }
    .pagination li{
        display: inline-block;
        vertical-align: top;
        margin: 5px 0;
    }
}

/* End Pagination */
</style>