<template>
  <div class="hotel">

     <header>
       <NavbarPage />
     </header>

     
    <!--Carousel-->

    <div id="carouselExampleControls" class="carousel slide" data-bs-ride="carousel" >
  <div class="carousel-inner" style="position:inherit">
    <div class="carousel-item active">
      <img src="../assets/wat.jpg" class="d-block w-100" alt="..." style="position:inherit">
    </div>
    <div class="carousel-item">
      <img src="../assets/kho.jpg" class="d-block w-100" alt="..." style="position:inherit">
    </div>
    <div class="carousel-item">
      <img src="../assets/sea.jpg" class="d-block w-100" alt="..." style="position:inherit">
    </div>
  </div>
  <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="prev">
    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Previous</span>
  </button>
  <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="next">
    <span class="carousel-control-next-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Next</span>
  </button>
</div>

    <!--End Carousel-->

    <!--Card 20192-->
<center>
    <div class="card-20192"  >
  <div class="site-section" >
        <div class="container" >
          <div class="cta d-block d-md-flex align-items-center px-5"  >
            <div class="container">
  <div class="row row-cols-2 row-cols-lg-3">
    <div class="col-4 col-lg-2">
      <label for="exampleFormControlInput1" class="form-label">City or Hotel name</label>
  <input type="email" class="form-control" id="exampleFormControlInput1" placeholder="Search Place ...">
    </div>
    <div class="col-4 col-lg-2">
      <label for="exampleFormControlInput1" class="form-label" style="margin-left:10px;">Check-in</label>
  <input type="email" class="form-control" id="exampleFormControlInput1" placeholder="DD/MM/YY" style="margin-left:10px;" >
    </div>
    <div class="col-4 col-lg-2">
      <label for="exampleFormControlInput1" class="form-label" style="margin-left:20px;">Check-out</label>
  <input type="email" class="form-control" id="exampleFormControlInput1" placeholder="DD/MM/YY" style="margin-left:20px;">
    </div>
    <div class="col-4 col-lg-2">
      <label for="inputState" class="form-label" style="margin-left:30px;">Price Limit</label>
    <select id="inputState" class="form-select" style="margin-left:30px;">
     <option selected>฿</option>
      <option value="1">1,000</option>
      <option value="2">5,000</option>
      <option value="3">10,000</option>
    </select>
    </div>
    <div class="col-4 col-lg-2">
      <button type="button" class="btn btn-secondary"><i class="fas fa-search"></i> Search</button>
    </div>

  </div>
</div>
          </div>
        </div>
      </div>
  </div>
</center>
    <!--End Card 20192-->


<!--Promotion Hotel-->
<center>
<div class="container">
    <div class="row">
      <center>
        <div class="col-md-3 col-sm-6">
            <div class="serviceBox">
                <h3 class="title">Promotion</h3>
            </div>
        </div>
        </center>
    </div>
</div>
</center>

<!--End Promotion-->

<center>
 <div class="container">
<section class=" py-5">
        <div class="container">
          <div class="row">
          </div>
          <div class="row">
            <div class="col-md-6 col-xl-4">
              <div class="image-box image-box--shadowed white-bg style-2 mb-4">
                <div class="overlay-container">
                  <router-link to="/hoteldetail">
                 <center><img src="../assets/Mangosteen.jpg" class="image-promo" alt=""> </center> 
                 <span class="product-new-label">Sale 80%</span>
                  <a href="#" class="overlay-link"></a>
                  </router-link>
                </div>
                <div class="body">
                  <h5 class="font-weight-bold my-2">Mangosteen Ayurveda & Wellness Resort</h5>
                  <p class="small" >
                    <i class="fas fa-star"></i>
                  <i class="fas fa-star"></i>
                  <i class="fas fa-star"></i>
                  <i class="fas fa-star"></i>
                  <i class="fas fa-star"></i>
                  </p>
                  <div class="row d-flex align-items-center">
                    <div class="col-6">
                      <h6 class="price">
                        THB 5,004 
                      </h6>
                    </div>
                    <div class="col-6 text-right">
                     
                     <h3 class="price-sale">
                       THB 1,010
                     </h3>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div class="col-md-6 col-xl-4">
              <div class="image-box image-box--shadowed white-bg style-2 mb-4">
                <div class="overlay-container">
                <center>  <img src="../assets/Four Points.jpg" class="image-promo" alt=""></center>
                <span class="product-new-label">Sale 60%</span>
                  <a href="#" class="overlay-link"></a>
                </div>
                <div class="body">
                  <h5 class="font-weight-bold my-2">Four Points by Sheraton Phuket Patong Beach</h5>
                  <p class="small" >
                    <i class="fas fa-star"></i>
                  <i class="fas fa-star"></i>
                  <i class="fas fa-star"></i>
                  <i class="fas fa-star"></i>
                  <i class="fas fa-star"></i>
                  </p>
                  <div class="row d-flex align-items-center">
                    <div class="col-6">
                      <h6 class="price">
                        THB 5,004 
                      </h6>
                    </div>
                    <div class="col-6 text-right">
                     
                     <h3 class="price-sale">
                       THB 1,010
                     </h3>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div class="col-md-6 col-xl-4">
              <div class="image-box image-box--shadowed white-bg style-2 mb-4">
                <div class="overlay-container">
                 <center> <img src="../assets/Diamond Cliff Phuket.jpg" class="image-promo" alt=""></center>
                 <span class="product-new-label">Sale 69%</span>
                  <a href="#" class="overlay-link"></a>
                </div>
                <div class="body">
                  <h5 class="font-weight-bold my-2">Diamond Cliff Phuket</h5>
                  <p class="small" >
                    <i class="fas fa-star"></i>
                  <i class="fas fa-star"></i>
                  <i class="fas fa-star"></i>
                  <i class="fas fa-star"></i>
                  <i class="fas fa-star"></i>
                  </p>
                  <div class="row d-flex align-items-center">
                    <div class="col-6">
                      <h6 class="price">
                        THB 5,004 
                      </h6>
                    </div>
                    <div class="col-6 text-right">
                     
                     <h3 class="price-sale">
                       THB 1,010
                     </h3>
                    </div>
                  </div>
                </div>
              </div>
            </div>
             <div class="col-md-6 col-xl-4">
              <div class="image-box image-box--shadowed white-bg style-2 mb-4">
                <div class="overlay-container">
                 <center> <img src="../assets/Nai Han.jpg" class="image-promo" alt=""></center>
                 <span class="product-new-label">Sale 56%</span>
                  <a href="#" class="overlay-link"></a>
                </div>
                <div class="body">
                  <h5 class="font-weight-bold my-2">The Nai Harn</h5>
                  <p class="small" >
                    <i class="fas fa-star"></i>
                  <i class="fas fa-star"></i>
                  <i class="fas fa-star"></i>
                  <i class="fas fa-star"></i>
                  <i class="fas fa-star"></i>
                  </p>
                  <div class="row d-flex align-items-center">
                    <div class="col-6">
                      <h6 class="price">
                        THB 10,244 
                      </h6>
                    </div>
                    <div class="col-6 text-right">
                     
                     <h3 class="price-sale">
                       THB 4,505
                     </h3>
                    </div>
                  </div>
                </div>
              </div>
            </div>
             <div class="col-md-6 col-xl-4">
              <div class="image-box image-box--shadowed white-bg style-2 mb-4">
                <div class="overlay-container">
                 <center> <img src="../assets/Kalima.jpg" class="image-promo" alt=""></center>
                 <span class="product-new-label">Sale 80%</span>
                  <a href="#" class="overlay-link"></a>
                </div>
                <div class="body">
                  <h5 class="font-weight-bold my-2">Kalima Resort & Spa</h5>
                  <p class="small" >
                    <i class="fas fa-star"></i>
                  <i class="fas fa-star"></i>
                  <i class="fas fa-star"></i>
                  <i class="fas fa-star"></i>
                  <i class="fas fa-star"></i>
                  </p>
                  <div class="row d-flex align-items-center">
                    <div class="col-6">
                      <h6 class="price">
                        THB 10,154
                      </h6>
                    </div>
                    <div class="col-6 text-right">
                     
                     <h3 class="price-sale">
                       THB 1,999
                     </h3>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div class="col-md-6 col-xl-4">
              <div class="image-box image-box--shadowed white-bg style-2 mb-4">
                <div class="overlay-container">
                 <center> <img src="../assets/royal paradise.jpg" class="image-promo" alt=""> </center>
                 <span class="product-new-label">Sale 80%</span>
                  <a href="#" class="overlay-link"></a>
                </div>
                <div class="body">
                  <h5 class="font-weight-bold my-2">The Royal Paradise Hotel & Spa</h5>
                  <p class="small" >
                    <i class="fas fa-star"></i>
                  <i class="fas fa-star"></i>
                  <i class="fas fa-star"></i>
                  <i class="fas fa-star"></i>
                  <i class="fas fa-star"></i>
                  </p>
                  <div class="row d-flex align-items-center">
                    <div class="col-6">
                      <h6 class="price">
                        THB 5,234
                      </h6>
                    </div>
                    <div class="col-6 text-right">
                     
                     <h3 class="price-sale">
                       THB 1,048
                     </h3>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
</div>
</center>
<!--End Promotion Hotel-->
<!--Pagination-->


    <div class="demo">
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
<!--EXPLORE MORE TRAVEL-->
<center>
<div class="container" style="margin-top:150px">
    <div class="row">
      <center>
        <div class="col-6">
            <div class="serviceBox">
                <h3 class="title">EXPLORE MORE TRAVEL VACATION RENTALS</h3>
            </div>
        </div>
        </center>
    </div>
</div>
</center>

<!--End EXPLORE MORE TRAVEL-->

<!-- Card Explore-->
<center>
<div class="container mt-2" >
  <div class="row" style="margin-top:100px">
    <div class="col-md-3 col-sm-6">
      <div class="card card-block">
    <img src="https://i.pinimg.com/564x/6b/db/22/6bdb226345bd32db591b7a679e199bc9.jpg" alt="Photo of sunset">
        <h5 class="card-title mt-3 mb-3">Vacation Rentals</h5>

        <p class="card-text">
          1,500 Properties
        </p>

  </div>
    </div>
    <div class="col-md-3 col-sm-6">
      <div class="card card-block">
    <img src="https://i.pinimg.com/564x/d5/0d/10/d50d10e2b4bfd147103ddcbffd94fe0d.jpg" alt="Photo of sunset">
        <h5 class="card-title  mt-3 mb-3">Private Villas</h5>
        <p class="card-text">11,500 Properties</p> 
  </div>
    </div>
    <div class="col-md-3 col-sm-6">
      <div class="card card-block">
    <img src="https://i.pinimg.com/564x/4a/71/87/4a7187cb78955283b7102bfddac4201f.jpg" alt="Photo of sunset">
        <h5 class="card-title  mt-3 mb-3">Apartments</h5>
        <p class="card-text">9,804 Properties</p> 
  </div>
    </div>
    <div class="col-md-3 col-sm-6">
      <div class="card card-block">
    <img src="https://i.pinimg.com/564x/ee/d9/c8/eed9c82648641443da266766fa598294.jpg" alt="Photo of sunset">
        <h5 class="card-title  mt-3 mb-3">Bungalows</h5>
        <p class="card-text">5,000 Properties</p> 
  </div>
    </div>    
  </div>
  
</div>
</center>
<!-- End Card Explore-->
<!--TOP DESTINATIONS IN THAILAND-->
<center>
<div class="container" style="margin-top:150px">
    <div class="row">
      <center>
        <div class="col-6">
            <div class="serviceBox">
                <h3 class="title">TOP DESTINATIONS IN THAILAND</h3>
            </div>
        </div>
        </center>
    </div>
</div>
</center>

<!--End TOP DESTINATIONS IN THAILAND-->

<!--Card Top Thai -->
<center>
 <div class="container" style="margin-top:100px;">
    <!-- start event block -->
    <div class="row align-items-center event-block no-gutters margin-40px-bottom">
        <div class="col-lg-5 col-sm-12">
            <div class="position-relative">
                <img src="https://i.pinimg.com/564x/ee/1d/f4/ee1df4f8562d3559495977e435e2e042.jpg" alt="" class="image-topthai">
            </div>
        </div>
        <div class="col-lg-7 col-sm-12">
            <div class="padding-60px-lr md-padding-50px-lr sm-padding-30px-all xs-padding-25px-all">
                <h5 class="margin-15px-bottom md-margin-10px-bottom font-size22 md-font-size20 xs-font-size18 font-weight-500">
                  <a href="" class="text-theme-color">
                    Phuket
                  </a>
                </h5>
                <p class="text-detail">
                  It is a province in the north of Thailand, 
                  the highest level island in the country in 
                  the Andaman Sea. Traveling to Phuket in addition 
                  to boats. You can travel by car, which has only 
                  one route through Phang Nga Province. By crossing 
                  the Sarasin Bridge and the parallel bridges, namely 
                  Thao Thep Kasattri Bridge and Thao Si Sunthon Bridge 
                  to enter the province and by air, supported by Phuket 
                  International Airport
                </p>
                <a class="butn small margin-10px-top md-no-margin-top" 
                href="https://th.wikipedia.org/wiki/%E0%B8%88%E0%B8%B1%E0%B8%87%E0%B8%AB%E0%B8%A7%E0%B8%B1%E0%B8%94%E0%B8%A0%E0%B8%B9%E0%B9%80%E0%B8%81%E0%B9%87%E0%B8%95">
                Read More 
                <i class="fas fa-long-arrow-alt-right margin-10px-left"></i>
                </a>
            </div>
        </div>
    </div>
    <!-- end event block -->

    <!-- start event block -->
    <div class="row align-items-center event-block no-gutters margin-40px-bottom">
        <div class="col-lg-7 order-2 order-lg-1">
            <div class="padding-60px-lr md-padding-50px-lr sm-padding-30px-all xs-padding-25px-all">
                <h5 class="margin-15px-bottom md-margin-10px-bottom font-size22 md-font-size20 xs-font-size18 font-weight-500">
                  <a href="" class="text-theme-color">
                    Krabi
                  </a>
                </h5>
                <p class="text-detail">
                  It is a province in the south of Thailand. 
                  It is one of the famous tourist towns in the south. 
                  There are many tourist attractions such as white sand 
                  beaches, crystal clear waters, coral reefs, caves and 
                  more than 100 islands.
                </p>
                <a class="butn small margin-10px-top md-no-margin-top" 
                href="https://th.wikipedia.org/wiki/%E0%B8%88%E0%B8%B1%E0%B8%87%E0%B8%AB%E0%B8%A7%E0%B8%B1%E0%B8%94%E0%B8%81%E0%B8%A3%E0%B8%B0%E0%B8%9A%E0%B8%B5%E0%B9%88">
                Read More 
                <i class="fas fa-long-arrow-alt-right margin-10px-left"></i>
                </a>
            </div>
        </div>
        <div class="col-lg-5 order-1 order-lg-2">
            <div class="position-relative">
                <img src="https://i.pinimg.com/564x/7b/a6/3a/7ba63af7370344fa8c6e9ae3b843ff49.jpg" alt="" class="image-topthai">
            </div>
        </div>
    </div>
    <!-- end event block -->

    <!-- start event block -->
    <div class="row align-items-center event-block no-gutters margin-40px-bottom">
        <div class="col-lg-5 col-sm-12">
            <div class="position-relative">
                <img src="https://i.pinimg.com/564x/8d/3a/e8/8d3ae89397ea6658f61b963738050de2.jpg" class="image-topthai" alt="">
            </div>
        </div>
        <div class="col-lg-7 col-sm-12">
            <div class="padding-60px-lr md-padding-50px-lr sm-padding-30px-all xs-padding-25px-all">
                <h5 class="margin-15px-bottom md-margin-10px-bottom font-size22 md-font-size20 xs-font-size18 font-weight-500">
                  <a href="" class="text-theme-color">
                    Kanchanaburi
                  </a>
                </h5>
                <p class="text-detail">
                  It is a province located in the western region 
                  of Thailand. It has a total area of ​​approximately 
                  19,473 square kilometers. It is the third largest 
                  area in the country after Nakhon Ratchasima. and 
                  Chiang Mai Province and has the largest area in the 
                  west
                </p>
                <a class="butn small margin-10px-top md-no-margin-top" 
                href="https://th.wikipedia.org/wiki/%E0%B8%88%E0%B8%B1%E0%B8%87%E0%B8%AB%E0%B8%A7%E0%B8%B1%E0%B8%94%E0%B8%81%E0%B8%B2%E0%B8%8D%E0%B8%88%E0%B8%99%E0%B8%9A%E0%B8%B8%E0%B8%A3%E0%B8%B5">
                Read More 
                <i class="fas fa-long-arrow-alt-right margin-10px-left"></i>
                </a>
            </div>
        </div>
    </div>
    <!-- end event block -->

    <!-- start event block -->
    <div class="row align-items-center event-block no-gutters margin-40px-bottom">
        <div class="col-lg-7 order-2 order-lg-1">
            <div class="padding-60px-lr md-padding-50px-lr sm-padding-30px-all xs-padding-25px-all">
                <h5 class="margin-15px-bottom md-margin-10px-bottom font-size22 md-font-size20 xs-font-size18 font-weight-500">
                  <a href="" class="text-theme-color">
                    Bangkok
                  </a>
                </h5>
                <p class="text-detail">
                  It is the capital and most populous city 
                  of Thailand. It is the center of government, 
                  education, transportation. Finance, banking, 
                  commerce, communication and the country's prosperity. 
                  It is located on the Chao Phraya River Delta. The Chao 
                  Phraya River flows through and divides the city into 2 
                  sides, namely the Phra Nakhon side and the Thonburi side.
                </p>
                <a class="butn small margin-10px-top md-no-margin-top" 
                href="https://th.wikipedia.org/wiki/%E0%B8%81%E0%B8%A3%E0%B8%B8%E0%B8%87%E0%B9%80%E0%B8%97%E0%B8%9E%E0%B8%A1%E0%B8%AB%E0%B8%B2%E0%B8%99%E0%B8%84%E0%B8%A3">
                  Read More 
                  <i class="fas fa-long-arrow-alt-right margin-10px-left"></i>
                </a>
            </div>
        </div>
        <div class="col-lg-5 order-1 order-lg-2">
            <div class="position-relative">
                <img src="https://i.pinimg.com/564x/ba/ef/3f/baef3f282704cd6acc3968fa39d74831.jpg" class="image-topthai" alt="">
            </div>
        </div>
    </div>
    <!-- end event block -->

    <!-- start event block -->
    <div class="row align-items-center event-block no-gutters">
        <div class="col-lg-5 col-sm-12">
            <div class="position-relative">
                <img src="https://i.pinimg.com/564x/45/08/b1/4508b1095975351467f028217c32aa36.jpg" class="image-topthai" alt="">
            </div>
        </div>
        <div class="col-lg-7 col-sm-12">
            <div class="padding-60px-lr md-padding-50px-lr sm-padding-30px-all xs-padding-25px-all">
                <h5 class="margin-15px-bottom md-margin-10px-bottom font-size22 md-font-size20 xs-font-size18 font-weight-500">
                  <a href="" class="text-theme-color">
                    Chaing Rai
                  </a>
                </h5>
                <p class="text-detail">
                  It is a province located in the north 
                  of Thailand. Chiang Rai has a long history. 
                  It is the location of Hiran Nakorn Ngoen, 
                  Yang Chiang Saen. which was the capital before 
                  the birth of the Lanna Kingdom, with "Kham Mueang" 
                  in the local language It is unique in both art. Cultural 
                  traditions with ethnic diversity in the form of Lanna, 
                  Tai Yai, Tai Khoen, and Tai Lue from Xishuangbanna are 
                  blended together. Chiang Rai is also known as the "City
                   of Arts".
                </p>
                <a class="butn small margin-10px-top md-no-margin-top" 
                href="https://th.wikipedia.org/wiki/%E0%B8%88%E0%B8%B1%E0%B8%87%E0%B8%AB%E0%B8%A7%E0%B8%B1%E0%B8%94%E0%B9%80%E0%B8%8A%E0%B8%B5%E0%B8%A2%E0%B8%87%E0%B8%A3%E0%B8%B2%E0%B8%A2">
                  Read More 
                  <i class="fas fa-long-arrow-alt-right margin-10px-left"></i>
                </a>
            </div>
        </div>
    </div>
    <!-- end event block -->

</div>
</center>
<!--End Card Top Thai-->

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
  },
  data() {
      return {
        rows: 100,
        currentPage: 1
      }
    }

}
</script>


<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Poppins:wght@400;500;600;700&display=swap');
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}
body{
  overflow-x: hidden;
}
.carousel.slide{
  height: 500px;
}
.d-block.w-100{
  height: 500px;

}

/* Card 20192 */


.card-20192 {
  position: relative;
  color: #fff;
  padding: 7rem 0;
  border-color: #0B0B45;
  width: auto;
  
}

.card-20192 .container {
    position: relative; 
}
.card-20192 .cta {
    border-color:#000000 ;
    box-shadow: rgba(11, 11, 69) -20px 20px;
    height: 150px;
    width: auto;
    background-color: #FFF;
    position: relative; 
    margin-top: -200px;
    border-radius: 10px ;
}

.form-label{
  color: #0B0B45;
  font-family: 'Poppins', sans-serif;
  font-size: 13px;
  font-weight: 400;
  float: left;
}
.form-control{
  color: #C4C4C4;
  font-family: 'Poppins', sans-serif;
  font-size: 13px;
  font-weight: 400;
  
}
.form-select{
  color: #C4C4C4;
  font-family: 'Poppins', sans-serif;
  font-size: 13px;
}
.btn.btn-secondary{
  color: #FFFFFF;
  background-color: #0B0B45;
  font-family: 'Poppins', sans-serif;
  font-weight: 500;
  font-size: 20px;
  width: 200px;
  height: 40px;
  border-radius: 10px;
  margin-top: 10px;
  margin-left: 50px;
  text-align: center;
}
.fas.fa-search{
  margin-right: 10px;
}

/* End Card 20192 */
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

/* Promotion Hotel */


.image-promo{
  width: 300px;
  height: 300px;
  text-align: center;
}
.product-new-label{
 color:#fff;
  background-color:#0B0B45;
  font-size:15px;
  text-transform:uppercase;
  padding:2px 7px;
  display:block;
  position:absolute;
  top:10px;
  left:20px;
}


.slick-slide.image-box {
  margin-bottom: 20px;
}

.image-box .body {
  padding: 15px;
}

.image-box .body h3 {
  margin-top: 0;
}

.image-box .body p:last-child {
  margin-bottom: 0;
}

.image-box.style-4 {
  border: none;
}

.image-box.style-3-b {
  display: block;
  margin-bottom: 40px;
}

.image-box.style-3-b .body {
  padding: 10px 0;
}

.image-box--shadowed {
  -webkit-box-shadow: 0 4px 8px rgba(0, 0, 0, 0.05);
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.05);
  -webkit-transition: all 0.25s ease-in-out;
  -o-transition: all 0.25s ease-in-out;
  transition: all 0.25s ease-in-out;
}

.image-box--shadowed:hover {
  -webkit-box-shadow: 0 8px 16px rgba(0, 0, 0, 0.08);
  box-shadow: 0 8px 16px rgba(0, 0, 0, 0.08);
}
.image-box.image-box--shadowed.white-bg.style-2.mb-4{
  height:450px;
}

/* Medium devices (tablets, laptops, smartphones 768px and up) */
@media (min-width: 768px) {
  .image-box.style-3-b .body {
    padding: 0;
  }
}

/* Medium devices (desktops, tablets less than 991px) */
@media (max-width: 991px) {
  .image-box.style-4 {
    margin-bottom: 30px;
  }
}

.white-bg {
    background-color: #ffffff;
}


.small {
text-align: center;
}



/*Images and Overlays
---------------------------------- */
.overlay-container {
  position: relative;
  display: block;
  text-align: center;
  overflow: hidden;
}

.overlay-bottom,
.overlay-top {
  position: absolute;
  top: auto;
  padding: 15px;
  bottom: 0px;
  left: 0;
  right: 0px;
  background-color: rgba(30, 30, 30, 0.5);
  overflow: hidden;
  opacity: 0;
  filter: alpha(opacity=0);
  -webkit-transition: all ease-in-out 0.25s;
  -o-transition: all ease-in-out 0.25s;
  transition: all ease-in-out 0.25s;
  height: 0;
  color: #ffffff;
  -webkit-backface-visibility: hidden;
  -webkit-transform: translateZ(0) scale(1, 1);
}

.overlay-bottom.links,
.overlay-to-top.links {
  z-index: 11;
}

.overlay-to-top {
  position: absolute;
  top: auto;
  padding: 10px;
  bottom: -30px;
  left: 0;
  right: 0px;
  background-color: rgba(30, 30, 30, 0.5);
  opacity: 0;
  filter: alpha(opacity=0);
  -webkit-transition: all ease-in-out 0.25s;
  -o-transition: all ease-in-out 0.25s;
  transition: all ease-in-out 0.25s;
  color: #ffffff;
}

.overlay-top {
  top: 0;
}

.overlay-visible .overlay-bottom,
.overlay-visible .overlay-top {
  opacity: 1;
  filter: alpha(opacity=100);
  height: auto !important;
  padding-bottom: 20px;
}

.overlay-visible.overlay-container:hover .overlay-bottom:not(.links),
.overlay-visible.overlay-container:hover .overlay-top {
  opacity: 0.5;
  filter: alpha(opacity=50);
}

.overlay-top a,
.overlay-bottom a,
.overlay-to-top a,
.overlay-top a:hover,
.overlay-bottom a:hover,
.overlay-to-top a:hover {
  color: #ffffff;
  text-decoration: none;
}

.overlay-container .text {
  padding: 0 20px;
  position: relative;
}

.overlay-container .text h3,
.overlay-container .text h3 .small {
  margin-top: 0;
  color: #ffffff;
}

.overlay-container .text a:hover {
  color: #ffffff;
}

.overlay-bottom .btn,
.overlay-top .btn {
  color: #ffffff;
  border-color: #ffffff;
  margin: 0;
}

.overlay-bottom .btn:hover,
.overlay-top .btn:hover {
  color: #777777;
  background-color: #ffffff;
}

.overlay-container:hover .overlay-top,
.overlay-container:hover .overlay-bottom,
.image-box.style-2:hover .overlay-top,
.image-box.style-2:hover .overlay-bottom {
  height: 50%;
  opacity: 1;
  filter: alpha(opacity=100);
  -webkit-backface-visibility: hidden;
  -webkit-transform: translateZ(0) scale(1, 1);
}

.overlay-container:hover .overlay-to-top,
.image-box:hover .overlay-to-top {
  opacity: 1;
  filter: alpha(opacity=100);
  bottom: 0;
  -webkit-backface-visibility: hidden;
  -webkit-transform : translateZ(0) scale(1, 1);
}

.overlay-link {
  position: absolute;
  z-index: 10;
  top: 0;
  padding: 15px;
  bottom: 0px;
  left: 0;
  right: 0px;
  background-color: rgba(30, 30, 30, 0.5);
  overflow: hidden;
  opacity: 0;
  filter: alpha(opacity=0);
  -webkit-transition: all ease-in-out 0.25s;
  -o-transition: all ease-in-out 0.25s;
  transition: all ease-in-out 0.25s;
  color: #ffffff;
}

.overlay-link i {
  -webkit-transition: all 0.2s ease-in-out;
  -o-transition: all 0.2s ease-in-out;
  transition: all 0.2s ease-in-out;
  width: 80px;
  height: 80px;
  border: 1px solid #ffffff;
  -webkit-border-radius: 100%;
  -moz-border-radius: 100%;
  border-radius: 100%;
  color: #ffffff;
  position: absolute;
  top: 50%;
  left: 50%;
  margin: -40px 0 0 -40px;
  font-size: 32px;
  line-height: 80px;
}

.overlay-link i:hover {
  background-color: #ffffff;
  color: #0B0B45;
}

.overlay-link.small i {
  width: 25px;
  height: 25px;
  margin: -12.5px 0 0 -12.5px;
  font-size: 14px;
  line-height: 25px;
}

.overlay-container:hover .overlay-link {
  height: 100%;
  opacity: 1;
  filter: alpha(opacity=100);
  -webkit-backface-visibility: hidden;
  -webkit-transform: translateZ(0) scale(1, 1);
}

/* Large devices (Large desktops 1200px and up) */
@media (min-width: 1200px) {
  .overlay-container .text {
    top: 30%;
  }
}

img {
    display: block;
    max-width: 100%;
    height: auto;
}
.fas.fa-star{
  color: gold;
}
.font-weight-bold.my-2{
  font-family: 'Poppins', sans-serif;
   color:#0B0B45;
   font-size: 18px;
   font-weight: 500;
   text-align: center;
}
.price{
   font-family: 'Poppins', sans-serif;
   color:#0B0B45;
   text-decoration: line-through;
   font-size: 13px;
   font-weight: 400;
   margin-left: -30px;
}
.price-sale{
  color:red;
  font-family: 'Poppins', sans-serif;
  font-size: 16px;
  font-weight: 400;
  margin-right: -30px;
}
/* End Promotion Hotel */


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

/* Card Explore */

img{
  height:150px;
  width:100%;
}

div [class^="col-"]{
  padding-left:5px;
  padding-right:5px;
}
.card{
  transition:0.5s;
  cursor:pointer;
}
.card-title{  
  font-size:15px;
  transition:1s;
  cursor:pointer;
  font-family: 'Poppins', sans-serif;
}
.card:hover{
  transform: scale(1.05);
  box-shadow: 10px 10px 15px rgba(0,0,0,0.3);
}
.card-text{
  height:80px; 
  font-family: 'Poppins', sans-serif; 
  font-size: 13px;
  color: #C4C4C4;
  margin-left: 100px;
}
.card-title.mt-3.mb-3{
  font-size:16px;
  color: #0B0B45;
  transition:1s;
  cursor:pointer;
  font-family: 'Poppins', sans-serif;
}

.card::before, .card::after {
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  transform: scale3d(0, 0, 1);
  transition: transform .3s ease-out 0s;
  background: rgba(255, 255, 255, 0.1);
  content: '';
  pointer-events: none;
}
.card::before {
  transform-origin: left top;
}
.card::after {
  transform-origin: right bottom;
}
.card:hover::before, .card:hover::after, .card:focus::before, .card:focus::after {
  transform: scale3d(1, 1, 1);
}

/* End Card Explore */

/* Card Top Thai */


.events-date {
    text-align: center;
    position: absolute;
    right: 30px;
    top: 30px;
    background-color: rgba(25, 47, 89, 0.9);
    color: #fff;
    padding: 12px 20px 8px 20px;
    text-transform: uppercase
}


.event-block {
    box-shadow: 0px 0px 16px 0px rgba(187, 187, 187, 0.48)
}


@media screen and (max-width: 1199px) {
    .event-date {
        padding: 10px 18px 6px 18px
    }
}

@media screen and (max-width: 575px) {
    .event-date {
        padding: 8px 15px 4px 15px
    }
    .events-date {
        padding: 10px 15px 6px 15px
    }
}

.position-relative {
    position: relative !important;
}

.margin-40px-bottom {
    margin-bottom: 40px;
}
.padding-60px-lr {
    padding-left: 60px;
    padding-right: 60px;
}

.margin-15px-bottom {
    margin-bottom: 15px;
}
.font-weight-500 {
    font-weight: 500;
}
.font-size22 {
    font-size: 22px;
}
.text-theme-color {
    color: #0B0B45;
}
.margin-10px-bottom {
    margin-bottom: 10px;
}
.margin-10px-right {
    margin-right: 10px;
}
.image-topthai{
  width: 300px;
  height: 250px;
}
.text-detail{
  font-family: 'Poppins', sans-serif;
  font-size: 13px;
  color: #C4C4C4;
}
.text-theme-color{
  font-family: 'Poppins', sans-serif;
  font-size: 18px;
  color: #0B0B45;
}
/* End Card Top Thai */
</style>
