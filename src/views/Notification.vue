<template>
  <div class="notification">
      
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
                    <li role="presentation">
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
                    <li role="presentation" class="active">
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
                                        Notification
                                    </h4>
								</div>
							</div>
						</div>
					</div>

					<div class="row">
                        <!--Noti-->
						 <div class="col-lg pb-5">
            <!-- Item-->
            <div class="cart-item d-md-flex justify-content-between"><span class="remove-item"><i class="fa fa-times"></i></span>
                <div class="px-3 my-3">
                    <a class="cart-item-product" href="#">
                        <div class="cart-item-product-thumb"><img src="../assets/Mangosteen.jpg" alt="Product"></div>
                        <div class="cart-item-product-info">
                            <h4 class="cart-item-product-title">Mangosteen Ayurveda & Wellness Resort</h4>
                            <div class="text-lg text-body font-weight-medium pb-1">Promotion Sale 50% Today!</div>
                        </div>
                    </a>
                </div>
            </div>
            <!-- Item-->
            <div class="cart-item d-md-flex justify-content-between"><span class="remove-item"><i class="fa fa-times"></i></span>
                <div class="px-3 my-3">
                    <a class="cart-item-product" href="#">
                        <div class="cart-item-product-thumb"><img src="../assets/Diamond Cliff Phuket.jpg" alt="Product"></div>
                        <div class="cart-item-product-info">
                            <h4 class="cart-item-product-title">Diamond Cliff Phuket</h4>
                            <div class="text-lg text-body font-weight-medium pb-1">Promotion Sale 50% Today!</div>
                        </div>
                    </a>
                </div>
            </div>
            <!-- Item-->
            <div class="cart-item d-md-flex justify-content-between"><span class="remove-item"><i class="fa fa-times"></i></span>
                <div class="px-3 my-3">
                    <a class="cart-item-product" href="#">
                        <div class="cart-item-product-thumb"><img src="../assets/Four Points.jpg" alt="Product"></div>
                        <div class="cart-item-product-info">
                            <h4 class="cart-item-product-title">Four Points by Sheraton Phuket Patong Beach</h4>
                            <div class="text-lg text-body font-weight-medium pb-1">Promotion Sale 50% Today!</div>
                        </div>
                    </a>
                </div>
            </div>
             <!-- Item-->
            <div class="cart-item d-md-flex justify-content-between"><span class="remove-item"><i class="fa fa-times"></i></span>
                <div class="px-3 my-3">
                    <a class="cart-item-product" href="#">
                        <div class="cart-item-product-thumb"><img src="../assets/Kalima.jpg" alt="Product"></div>
                        <div class="cart-item-product-info">
                            <h4 class="cart-item-product-title">Kalima Resort & Spa</h4>
                            <div class="text-lg text-body font-weight-medium pb-1">Promotion Sale 50% Today!</div>
                        </div>
                    </a>
                </div>
            </div>
        </div>

<!--Noti-->
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

/* Noti */

body{
    background:#FFF;
    margin-top:40px;
}
.product-card {
  position: relative;
  max-width: 380px;
  padding-top: 12px;
  padding-bottom: 43px;
  transition: all 0.35s;
  border: 1px solid #e7e7e7;
}
.product-card .product-head {
  padding: 0 15px 8px;
}
.product-card .product-head .badge {
  margin: 0;
}
.product-card .product-thumb {
  display: block;
}
.product-card .product-thumb > img {
  display: block;
  width: 100%;
}
.product-card .product-card-body {
  padding: 0 20px;
  text-align: center;
}
.product-card .product-meta {
  display: block;
  padding: 12px 0 2px;
  transition: color 0.25s;
  color: rgba(140, 140, 140, .75);
  font-size: 12px;
  font-weight: 600;
  text-decoration: none;
}
.product-card .product-meta:hover {
  color: #8c8c8c;
}
.product-card .product-title {
  margin-bottom: 8px;
  font-size: 16px;
  font-weight: bold;
}
.product-card .product-title > a {
  transition: color 0.3s;
  color: #0B0B45;
  text-decoration: none;
}
.product-card .product-title > a:hover {
  color: #0B0B45;
}
.product-card .product-price {
  display: block;
  color: #404040;
  font-family: 'Montserrat', sans-serif;
  font-weight: normal;
}
.product-card .product-price > del {
  margin-right: 6px;
  color: rgba(140, 140, 140, .75);
}
.product-card .product-buttons-wrap {
  position: absolute;
  bottom: -20px;
  left: 0;
  width: 100%;
}
.product-card .product-buttons {
  display: table;
  margin: auto;
  background-color: #fff;
  box-shadow: 0 12px 20px 1px rgba(64, 64, 64, .11);
}
.product-card .product-button {
  display: table-cell;
  position: relative;
  width: 50px;
  height: 40px;
  border-right: 1px solid rgba(231, 231, 231, .6);
}
.product-card .product-button:last-child {
  border-right: 0;
}
.product-card .product-button > a {
  display: block;
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  transition: all 0.3s;
  color: #404040;
  font-size: 16px;
  line-height: 40px;
  text-align: center;
  text-decoration: none;
}
.product-card .product-button > a:hover {
  background-color: #0B0B45;
  color: #fff;
}
.product-card:hover {
  border-color: transparent;
  box-shadow: 0 12px 20px 1px rgba(64, 64, 64, .09);
}
.product-category-card {
  display: block;
  max-width: 400px;
  text-align: center;
  text-decoration: none !important;
}
.product-category-card .product-category-card-thumb {
  display: table;
  width: 100%;
  box-shadow: 0 12px 20px 1px rgba(64, 64, 64, .09);
}
.product-category-card .product-category-card-body {
  padding: 20px;
  padding-bottom: 28px;
}
.product-category-card .main-img, .product-category-card .thumblist {
  display: table-cell;
  padding: 15px;
  vertical-align: middle;
}
.product-category-card .main-img > img, .product-category-card .thumblist > img {
  display: block;
  width: 100%;
}
.product-category-card .main-img {
  width: 65%;
  padding-right: 10px;
}
.product-category-card .thumblist {
  width: 35%;
  padding-left: 10px;
}
.product-category-card .thumblist > img:first-child {
  margin-bottom: 6px;
}
.product-category-card .product-category-card-meta {
  display: block;
  padding-bottom: 9px;
  color: rgba(140, 140, 140, .75);
  font-size: 11px;
  font-weight: 600;
}
.product-category-card .product-category-card-title {
  margin-bottom: 0;
  transition: color 0.3s;
  color: #343b43;
  font-size: 18px;
}
.product-category-card:hover .product-category-card-title {
  color: #0B0B45;
}
.product-gallery {
  position: relative;
  padding: 45px 15px 0;
  box-shadow: 0 12px 20px 1px rgba(64, 64, 64, .09);
}
.product-gallery .gallery-item::before {
  display: none !important;
}
.product-gallery .gallery-item::after {
  box-shadow: 0 8px 24px 0 rgba(0, 0, 0, .26);
}
.product-gallery .video-player-button, .product-gallery .badge {
  position: absolute;
  z-index: 5;
}
.product-gallery .badge {
  top: 15px;
  left: 15px;
  margin-left: 0;
}
.product-gallery .video-player-button {
  top: 0;
  right: 15px;
  width: 60px;
  height: 60px;
  line-height: 60px;
}
.product-gallery .product-thumbnails {
  display: block;
  margin: 0 -15px;
  padding: 12px;
  border-top: 1px solid #e7e7e7;
  list-style: none;
  text-align: center;
}
.product-gallery .product-thumbnails > li {
  display: inline-block;
  margin: 10px 3px;
}
.product-gallery .product-thumbnails > li > a {
  display: block;
  width: 94px;
  transition: all 0.25s;
  border: 1px solid transparent;
  background-color: #fff;
  opacity: 0.75;
}
.product-gallery .product-thumbnails > li:hover > a {
  opacity: 1;
}
.product-gallery .product-thumbnails > li.active > a {
  border-color: #0B0B45;
  cursor: default;
  opacity: 1;
}
.product-meta {
  padding-bottom: 10px;
}
.product-meta > a, .product-meta > i {
  display: inline-block;
  margin-right: 5px;
  color: rgba(140, 140, 140, .75);
  vertical-align: middle;
}
.product-meta > i {
  margin-top: 2px;
}
.product-meta > a {
  transition: color 0.25s;
  font-size: 13px;
  font-weight: 600;
  text-decoration: none;
}
.product-meta > a:hover {
  color: #8c8c8c;
}
.cart-item {
  position: relative;
  margin-bottom: 30px;
  padding: 0 50px 0 10px;
  background-color: #fff;
  box-shadow: 0 12px 20px 1px rgba(64, 64, 64, .09);
}
.cart-item .cart-item-label {
  display: block;
  margin-bottom: 15px;
  color: #8c8c8c;
  font-size: 13px;
  font-weight: 600;
  text-transform: uppercase;
}
.cart-item .cart-item-product {
  display: table;
  width: 420px;
  text-decoration: none;
}
.cart-item .cart-item-product-thumb, .cart-item .cart-item-product-info {
  display: table-cell;
  vertical-align: top;
}
.cart-item .cart-item-product-thumb {
  width: 110px;
}
.cart-item .cart-item-product-thumb > img {
  display: block;
  width: 100%;
}
.cart-item .cart-item-product-info {
  padding-top: 5px;
  padding-left: 15px;
}
.cart-item .cart-item-product-info > span {
  display: block;
  margin-bottom: 2px;
  color: #404040;
  font-size: 12px;
}
.cart-item .cart-item-product-title {
  margin-bottom: 8px;
  transition: color, 0.3s;
  color: #343b43;
  font-size: 16px;
  font-weight: bold;
}
.cart-item .cart-item-product:hover .cart-item-product-title {
  color: #0B0B45;
}
.cart-item .count-input {
  display: inline-block;
  width: 85px;
}
.cart-item .remove-item {
  right: -10px !important;
}
@media (max-width: 991px) {
  .cart-item {
    padding-right: 30px;
  }
  .cart-item .cart-item-product {
    width: auto;
  }
}
@media (max-width: 768px) {
  .cart-item {
    padding-right: 10px;
    padding-bottom: 15px;
  }
  .cart-item .cart-item-product {
    display: block;
    width: 100%;
    text-align: center;
  }
  .cart-item .cart-item-product-thumb, .cart-item .cart-item-product-info {
    display: block;
  }
  .cart-item .cart-item-product-thumb {
    margin: 0 auto 10px;
  }
  .cart-item .cart-item-product-info {
    padding-left: 0;
  }
  .cart-item .cart-item-label {
    margin-bottom: 8px;
  }
}
.comparison-table {
  width: 100%;
  overflow-x: auto;
  -webkit-overflow-scrolling: touch;
  -ms-overflow-style: -ms-autohiding-scrollbar;
}
.comparison-table table {
  min-width: 750px;
  table-layout: fixed;
}
.comparison-table .comparison-item {
  position: relative;
  margin-bottom: 10px;
  padding: 13px 12px 18px;
  background-color: #fff;
  text-align: center;
  box-shadow: 0 12px 20px 1px rgba(64, 64, 64, .09);
}
.comparison-table .comparison-item .comparison-item-thumb {
  display: block;
  width: 80px;
  margin-right: auto;
  margin-bottom: 12px;
  margin-left: auto;
}
.comparison-table .comparison-item .comparison-item-thumb > img {
  display: block;
  width: 100%;
}
.comparison-table .comparison-item .comparison-item-title {
  display: block;
  margin-bottom: 14px;
  transition: color 0.25s;
  color: #404040;
  font-size: 14px;
  font-weight: 600;
  text-decoration: none;
}
.comparison-table .comparison-item .comparison-item-title:hover {
  color: #0B0B45;
}
.remove-item {
  display: block;
  position: absolute;
  top: -5px;
  right: -5px;
  width: 22px;
  height: 22px;
  padding-left: 1px;
  border-radius: 50%;
  background-color: #ff5252;
  color: #fff;
  line-height: 23px;
  text-align: center;
  box-shadow: 0 3px 12px 0 rgba(255, 82, 82, .5);
  cursor: pointer;
}
.card-wrapper {
  margin: 30px -15px;
}
@media (max-width: 576px) {
  .card-wrapper .jp-card-container {
    width: 260px !important;
  }
  .card-wrapper .jp-card {
    min-width: 250px !important;
  }
}

/* End Noti */

</style>