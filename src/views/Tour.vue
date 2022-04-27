<template>
  <div class="tour">

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
      <label for="exampleFormControlInput1" class="form-label">Tour Package</label>
  <input type="email" class="form-control" id="exampleFormControlInput1" placeholder="Search activities or destinations">
    </div>
    <div class="col-4 col-lg-2">
      <label for="inputState" class="form-label" style="margin-left:30px;">Your Current Location</label>
    <select id="inputState" class="form-select" style="margin-left:30px;">
      <option selected>Thailand</option>
      <option value="1">Korea</option>
      <option value="2">Japan</option>
      <option value="3">France</option>
      <option value="4">Germany</option>
      <option value="5">USA</option>
      <option value="6">Brazil</option>
      <option value="7">Australia</option>
      <option value="8">Maxico</option>
      <option value="9">Laos</option>
      <option value="10">Malaysia</option>
    </select>
    </div>
    <div class="col-4 col-lg-2">
      <label for="inputState" class="form-label" style="margin-left:30px;">Province</label>
    <select id="inputState" class="form-select" style="margin-left:30px;">
      <option selected>Phuket</option>
      <option value="1">Krabi</option>
      <option value="2">Bangkok</option>
      <option value="3">Kanchanaburi</option>
      <option value="4">Buri Ram</option>
      <option value="5">Chiang Rai</option>
      <option value="6">Surin</option>
      <option value="7">Phangnga</option>
      <option value="8">Phatchabun</option>
      <option value="9">Mae Hong Son</option>
      <option value="10">Phra Nakhon Si Ayutthaya</option>
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

    <!-- World -->
    <center>
<div class="container" style="margin-top:-20px;">
    <div class="row">
      <center>
        <div class="col-sm-6">
            <div class="serviceBox">
                <h3 class="title">World of Adventure Awaits</h3>
                 <p class="description"> From water thrills to adventures high above the clouds, 
    there are many ways to explore Thailand.</p>
            </div>
        </div>
        </center>
    </div>
</div>
</center>
<!--End World-->

<!--Button Tab-->

<div class="container" style="margin-top:60px;">
    <div class="row" style="margin-left:100px;">
        <div class="col-sm-3" >
            <a href="#" class="btn red"><span class="btn-lg" >Sightseeing</span></a>
        </div>
        <div class="col-sm-3">
            <a href="#" class="btn white"><span class="btn-lg">Nature Tour</span></a>
        </div>
        <div class="col-sm-3">
            <a href="#" class="btn white"><span class="btn-lg">Island Hopping</span></a>
        </div>
    </div>
</div>

<!--End Button Tab-->

 <!-- Card-->
        <div class="row" style="margin-top:50px;">
            <div class="col-md-3 col-sm-6">
    <div class="product-grid">
        <div class="product-image">
            <router-link to="/tourdetail">
            <a href="#" class="image">
                <img class="pic-1" src="https://i.pinimg.com/564x/39/5b/45/395b45fab219e764ca44d1b2723b0de2.jpg" > 
            </a>
            </router-link>
          <span class="product-discount-label">-50%</span>
            <ul class="product-links">
                <li><a href="#" data-tip="View"><i class="fa fa-search"></i></a></li>
            </ul>
        </div>
        <div class="product-content">
            <h3 class="title"><a href="#">Kanchanaburi: City Tour - Morning/3-Hour Tour</a></h3>
            <div class="price"><span>THB  1,850.00</span> THB 925.00/Day</div>
             <br>
        </div>
    </div>
</div>

<div class="col-md-3 col-sm-6">
    <div class="product-grid">
        <div class="product-image">
            <a href="#" class="image">
                <img class="pic-1" src="https://i.pinimg.com/564x/a3/6d/59/a36d59197ec7694c3ff5643934fe11dc.jpg" >
            </a>
            <ul class="product-links">
                <li><a href="#" data-tip="View"><i class="fa fa-search"></i></a></li>
            </ul>
        </div>
        <div class="product-content">
            <h3 class="title"><a href="#">Doi Mae Salong & Doi Tung 1-day Tour</a></h3>
            <div class="price"> THB 1,800.00</div>
            <br>
        </div>
    </div>
</div>

<div class="col-md-3 col-sm-6">
    <div class="product-grid">
        <div class="product-image">
            <a href="#" class="image">
                <img class="pic-1" src="https://i.pinimg.com/564x/e8/49/98/e84998e334468c814b6124157361461c.jpg">
            </a>
            <ul class="product-links">
                <li><a href="#" data-tip="View"><i class="fa fa-search"></i></a></li>
            </ul>
        </div>
        <div class="product-content">
            <h3 class="title"><a href="#">Ayutthaya history 1 day travel</a></h3>
            <div class="price"> THB 1,010.00</div>
           <br> 
        </div>
    </div>
</div>

<div class="col-md-3 col-sm-6">
    <div class="product-grid">
        <div class="product-image">
            <a href="#" class="image">
                <img class="pic-1" src="https://i.pinimg.com/564x/18/b3/7b/18b37bac1c2ae50b0020aa0e62971795.jpg">
            </a>
            <span class="product-discount-label">-50%</span>
            <ul class="product-links">
                <li><a href="#" data-tip="View"><i class="fa fa-search"></i></a></li>
            </ul>
        </div>
        <div class="product-content">
            <h3 class="title"><a href="#">Mae Taeng Elephant Camp 1 day</a></h3>
            <div class="price"><span>THB 2,500.00</span> THB 1,250.00</div>
            <br>
        </div>
        
    </div>
</div>
        </div>
   <!--End Card-->

     <!--Pagination-->


    <div class="demo" style="margin-top:30px;">
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

   <!-- PHUKET TOURS -->

<div class="container" style="margin-top:100px;margin-left:30%">
    <div class="row">

        <div class="col-sm-6">
            <div class="serviceBox">
                <h3 class="title">CHECK-IN WITH THE BEST PHUKET TOURS</h3>
                 <p class="description"> 
                     Experience the natural beauty of Phuket with guided immersive tours.
                </p>
            </div>
        </div>
        
    </div>
</div>

<!--End PHUKET TOURS-->

<!--Button Tab-->

<div class="container" style="margin-top:60px;">
    <div class="row" style="margin-left:100px;">
        <div class="col-sm-3" >
            <a href="#" class="btn red"><span class="btn-lg" >Island Hopping</span></a>
        </div>
        <div class="col-sm-3">
            <a href="#" class="btn white"><span class="btn-lg">Private Experience</span></a>
        </div>
        <div class="col-sm-3">
            <a href="#" class="btn white"><span class="btn-lg">Other Adventures</span></a>
        </div>
    </div>
</div>

<!--End Button Tab-->

 <!-- Card-->
        <div class="row" style="margin-top:50px;margin-left:100px;">
            <div class="col-md-3 col-sm-6">
    <div class="product-grid">
        <div class="product-image">
            <a href="#" class="image">
                <img class="pic-1" src="https://i.pinimg.com/564x/56/95/3d/56953d3bc43b166c4e8b2e8d090a4348.jpg" > 
            </a>
          <span class="product-discount-label">-50%</span>
            <ul class="product-links">
                <li><a href="#" data-tip="View"><i class="fa fa-search"></i></a></li>
            </ul>
        </div>
        <div class="product-content">
            <h3 class="title"><a href="#">Racha, Coral Island and Maithon Island by Speedboat (from Phuket) - Day Tour</a></h3>
            <div class="price"><span>THB 1,600.00</span> THB 800.00</div>
            
        </div>
    </div>
</div>

<div class="col-md-3 col-sm-6" style="margin-left:20px;">
    <div class="product-grid">
        <div class="product-image">
            <a href="#" class="image">
                <img class="pic-1" src="https://i.pinimg.com/736x/6c/3d/71/6c3d71698b9076616bce6abbdd9cf2c9.jpg" >
            </a>
            <ul class="product-links">
                <li><a href="#" data-tip="View"><i class="fa fa-search"></i></a></li>
            </ul>
        </div>
        <div class="product-content">
            <h3 class="title"><a href="#">Coral Island & Raya Island - 1-day Tour</a></h3>
            <div class="price"> THB 1,600.00</div>
            <br>
        </div>
    </div>
</div>


        </div>
   <!--End Card-->

      <!-- Krabi is Waiting -->
<div class="container" style="margin-top:100px;margin-left:30%">
    <div class="row">

        <div class="col-sm-6">
            <div class="serviceBox">
                <h3 class="title">Krabi is Waiting</h3>
                 <p class="description"> 
                     Set sail into Krabi’s turquoise waters with professional guides.
                </p>
            </div>
        </div>

    </div>
</div>
<!--End Krabi is Waiting-->

<!--Button Tab-->

<div class="container" style="margin-top:60px;">
    <div class="row" style="margin-left:100px;">
        <div class="col-sm-3" >
            <a href="#" class="btn red"><span class="btn-lg" >Island Hopping</span></a>
        </div>
        <div class="col-sm-3">
            <a href="#" class="btn white"><span class="btn-lg">Sunset Cruise</span></a>
        </div>
    </div>
</div>

<!--End Button Tab-->

 <!-- Card-->
        <div class="row" style="margin-top:50px;margin-left:100px;">
            <div class="col-md-3 col-sm-6">
    <div class="product-grid">
        <div class="product-image">
            <a href="#" class="image">
                <img class="pic-1" src="https://i.pinimg.com/564x/be/2e/b2/be2eb22616d11e640b7558f0f16879f9.jpg" > 
            </a>
          <span class="product-discount-label">-50%</span>
            <ul class="product-links">
                <li><a href="#" data-tip="View"><i class="fa fa-search"></i></a></li>
            </ul>
        </div>
        <div class="product-content">
            <h3 class="title"><a href="#">Private Catamaran: Koh Hey(Coral Island) and Koh Maiton</a></h3>
            <div class="price"><span>THB  1,600.00</span> THB 800.00</div>
            
        </div>
    </div>
</div>

<div class="col-md-3 col-sm-6" style="margin-left:20px;">
    <div class="product-grid">
        <div class="product-image">
            <a href="#" class="image">
                <img class="pic-1" src="https://i.pinimg.com/736x/fd/f9/82/fdf982b8356f7de3f19f40ed2f0f94eb.jpg" >
            </a>
            <ul class="product-links">
                <li><a href="#" data-tip="View"><i class="fa fa-search"></i></a></li>
            </ul>
        </div>
        <div class="product-content">
            <h3 class="title"><a href="#">Private Catamaran: Koh Racha Yai and Koh Hey (Coral Island)</a></h3>
            <div class="price"> THB 1,600.00</div>
            
        </div>
    </div>
</div>

<div class="col-md-3 col-sm-6" style="margin-left:20px;">
    <div class="product-grid">
        <div class="product-image">
            <a href="#" class="image">
                <img class="pic-1" src="https://i.pinimg.com/564x/23/97/a7/2397a7096bba28e04177d53371cafd3e.jpg">
            </a>
            <ul class="product-links">
                <li><a href="#" data-tip="View"><i class="fa fa-search"></i></a></li>
            </ul>
        </div>
        <div class="product-content">
            <h3 class="title"><a href="#">Bamboo Island & Monkey Beach / Shark Point Tour – Half-Day Tour</a></h3>
            <div class="price"> THB 4,500.00</div>
           
        </div>
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
/* Wrold */
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
}

@media only screen and (max-width: 990px){
    .serviceBox{ margin: 0 0 30px; }
}

/* End Wolrd */

/* Button */

.btn{
    text-transform: uppercase;
    padding: 0;
}
.btn span{
    display: inline-block;
    border-radius: 0;
    position: relative;
    transition: all 0.3s ease-in-out 0s;
    font-family: 'Poppins', sans-serif;
    font-size: 18px;
    font-weight: bold;
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
    background-color: #0B0B45;
    color: #FFFFFF;
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
/* End Button */
/* Card Tour */

.product-grid{
    font-family: 'Poppins', sans-serif;
    text-align: center;
    border-radius: 15px;
    border: 1px solid #e7e7e7;
    overflow: hidden;
    transition: all 0.4s ease-out;
}
.product-grid:hover{ box-shadow: 5px 10px 30px rgba(0, 0, 0, 0.1); }
.product-grid .product-image{ position: relative; }
.product-grid .product-image a.image{ display: block; }
.product-grid .product-image img{
    width: 100%;
    height: auto;
}
.product-grid .product-discount-label{
    color: #fff;
    background: #0B0B45;
    font-size: 14px;
    font-weight: 400;
    text-transform: uppercase;
    padding: 2px 8px;
    border-radius: 5px;
    position: absolute;
    top: 12px;
    left: 12px;
    font-family: 'Poppins', sans-serif;
}
.product-grid .product-links{
    width: 145px;
    padding: 0;
    margin: 0;
    list-style: none;
    opacity: 0;
    transform: translateX(-50%) translateY(-50%);
    position: absolute;
    top: 65%;
    left: 50%;
    transition: all 0.4s ease 0s;
}
.product-grid:hover .product-links{
    opacity: 1;
    top: 50%;
}
.product-grid .product-links li{
    display: inline-block;
    margin: 0 2px;
}
.product-grid .product-links li a{
    color: #2c2c2c;
    background: #fff;
    font-size: 16px;
    line-height: 42px;
    width: 40px;
    height: 40px;
    border-radius: 50px;
    display: block;
    position: relative;
    transition: all 0.4s ease-out 0s;
    font-family: 'Poppins', sans-serif;
}
.product-grid .product-links li a:hover{
    color: #fff;
    background: #0B0B45;
    box-shadow: 1px 1px 30px 0 rgba(0, 0, 0, 0.2);
}
.product-grid .product-links li a:before,
.product-grid .product-links li a:after{
    content: attr(data-tip);
    color: #fff;
    background-color: #555;
    font-size: 12px;
    line-height: 18px;
    padding: 5px 10px;
    white-space: nowrap;
    display: none;
    transform: translateX(-50%);
    position: absolute;
    left: 50%;
    top: -40px;
    transition: all 0.3s ease 0s;
    font-family: 'Poppins', sans-serif;
}
.product-grid .product-links li a:after{
    content: '';
    height: 10px;
    width: 10px;
    padding: 0;
    transform: translateX(-50%) rotate(45deg);
    top: -18px;
    z-index: -1;
}
.product-grid .product-links li a:hover:before,
.product-grid .product-links li a:hover:after{
    display: block;
}
.product-grid .product-content{
    padding: 12px 12px 15px;
    position: relative;
}
.product-grid .rating{
    padding: 0;
    margin: 0 0 8px;
    list-style: none;
}
.product-grid .rating li{
    color: gold;
    font-size: 14px;
}
.product-grid .rating .far{ color: #808080; }
.product-grid .title{
    font-size: 18px;
    font-weight: 600;
    text-transform: uppercase;
    margin: 0 0 15px;
    text-decoration: none;
}
.product-grid .title a{
    color: #0B0B45;
    font-family: 'Poppins', sans-serif;
    font-size: 13px;
    transition: all 0.3s ease 0s;
    text-decoration: none;
}
.product-grid .title a:hover{ color: #0B0B45; }
.product-grid .price{
    color: #0B0B45;
    font-family: 'Poppins', sans-serif;
    font-size: 15px;
    font-weight: 600;
    display: block;
    transition: all 0.4s ease-in-out;
}
.product-grid .price span{
    color: #999;
    font-weight: 500;
    text-decoration: line-through;
    font-family: 'Poppins', sans-serif;
    font-size: 13px;
}
.product-grid:hover .price{ opacity: 0; }
.product-grid .add-to-cart{
    color: #fff;
    background-color: #0B0B45;
    font-size: 16px;
    font-weight: 500;
    text-transform: uppercase;
    line-height: 40px;
    width: 140px;
    height: 40px;
    border-radius: 50px;
    opacity: 0;
    transform: translateX(-50%);
    position: absolute;
    bottom: 50px;
    left: 50%;
    transition: all .4s ease-out;
}
.product-grid .add-to-cart:hover{ background-color: #2f2f2f; }
.product-grid:hover .add-to-cart{
    opacity: 1;
    bottom: 8px;
}
@media screen and (max-width:1200px){
    .product-grid{ margin: 0 0 30px; }
}

/* End Card */

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