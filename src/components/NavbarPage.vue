<template>
  <div class="navbarhome">

<nav>
    <a class="navbar-brand" href="#">
      <img src="../assets/Logo.png" alt="" width="200" height="200" style="margin-top:-20px;">
    </a>

    <ul class="nav-links" >
    
      <router-link to="/homepage"> 
        <div class="menu-item"> 
          <a>
            Home
          </a>
        </div>
      </router-link>
  <router-link to="/hotel"> 
    <div class="menu-item" style="margin-left:10px;">
        <a>
          Hotel
        </a>
    </div>
    </router-link>
    <router-link to="/tour"> 
    <div class="menu-item" style="margin-left:10px;">
        <a>
          Tour
        </a>
    </div>
    </router-link>
    <router-link to="/transport"> 
    <div class="menu-item" style="margin-left:10px;">
        <a>
          Transport
        </a>
    </div>
    </router-link>
    <router-link to="/information">
    <div class="menu-item" style="margin-left:10px;">
        <a>
          Information
        </a>
    </div>
    </router-link>
    <router-link to="/contact">
    <div class="menu-item" >
        <a>
          Contact
        </a>
    </div>
    </router-link>
      </ul>
       <!-- Right aligned nav items -->
        <ul class="nav navbar-nav navbar-right" style="margin-right:30px;">
        <router-link to="/mybooking"> 
        <li>
         <i class="fas fa-bookmark"></i>
        </li>
        </router-link>
    </ul>
     <ul class="nav navbar-nav navbar-right" style="margin-right:30px;">
        <router-link to="/notification"> 
        <li>
         <i class="fas fa-bell"></i>
        </li>
        </router-link>
    </ul>

      <b-navbar-nav class="ml-auto" style="margin-right:30px;">
        <b-nav-item-dropdown right style="color:#FFF;">
          <!-- Using 'button-content' slot -->
          <template #button-content style="color:#FFF;">
            <em style="color:#FFF;">User</em>
          </template>
          <b-dropdown-item href="#">
          <router-link to="/myaccount" style="text-decoration:none;">
            Profile
          </router-link>
          </b-dropdown-item>
          <b-dropdown-item href="#">
          <router-link to="/myaccount" style="text-decoration:none;">
            Setting
          </router-link>
          </b-dropdown-item>
    
          <b-dropdown-item href="/">Sign Out</b-dropdown-item>
         
        </b-nav-item-dropdown>
      </b-navbar-nav>

  


    <div v-on:click="openMobileNav()" id="burger">
      <div class="line1"></div>
      <div class="line2"></div>
      <div class="line3"></div>
    </div>
  </nav>

  </div>
</template>

<script>

export default {
  name: 'Navbar',
  props: ['name', 'logoImg', 'navLinks'],
  data (){
        return{
           
            Language :[
                {

                    title : 'Thai',
                    link : '',
                },
                {
                    title : 'English',
                    link : ''
                },
                {
                    title : '中文',
                    link : ''
                },
                {
                    title : '日本語',
                    link : ''
                },
            ],
            User :[
                {

                    title : 'Profile',
                    link : '/myaccount',
                },
                {
                    title : 'Edit Profile',
                    link : ''
                },
            ],

            
            
        }
    },
  methods: {
    openMobileNav() {
      const burger = document.getElementById('burger')
      const nav = document.querySelector('.nav-links')
      const navLinks = document.querySelectorAll('.nav-links li')
      // Toggle navigation on mobile
      nav.classList.toggle('nav-active')
      // Burger toggler
      burger.classList.toggle('toggle')
      // Animate navigation links
      navLinks.forEach((link, index) => {
        if (link.style.animation || link.style.webkitAnimation) {
          link.style.animation = ''
          link.style.webkitAnimation = ''
        } else {
          link.style.webkitAnimation = `navLinkFade 0.5s ease forwards ${
            index / 7
          }s`
          link.style.animation = `navLinkFade 0.5s ease forwards ${index / 7}s`
        }
      })
    },
    openDropdownNav() {
      const dropdownLink = document.querySelectorAll('.dropdown-link')
      dropdownLink.forEach((dropdown) => {
        dropdown.addEventListener('mouseover', () => {
          dropdown.children[1].style.display = 'block'
        })
        dropdown.addEventListener('mouseleave', () => {
          dropdown.children[1].style.display = 'none'
        })
      })
    },
    /* Run only on mobile
       
       This code below here will change the behavior of mobile menu links.
       when you click for once it will open the drop down & by the
       second click it will lead you to the link page if you don't
       want to go in dropdown links
    */
    countClicksOnMobileDropdown() {
      const dropdownLink = document.querySelectorAll('.dropdown-link')
      dropdownLink.forEach((dropdown) => {
        let counts = dropdown.clicks || 0
        dropdown.addEventListener('click', () => {
          counts++
          if (counts % 2 == 0) {
            window.location.href = dropdown.children[0].getAttribute('href')
          } else {
            event.preventDefault()
            dropdown.children[1].style.display = 'block'
            setTimeout(() => {
              dropdown.children[1].style.display = 'none'
            }, 5000)
          }
        })
        setTimeout(()=>{counts = 0}, 8000)
      })
    },
  },
  mounted() {
    this.openDropdownNav()
    if (window.innerWidth < 768) {
      this.countClicksOnMobileDropdown()
    }
  },
}
</script>

<style>
@import url('https://fonts.googleapis.com/css2?family=Poppins:wght@400;500;600;700&display=swap');
nav {
  display: flex;
  justify-content: space-around;
  align-items: center;
  background-color: #0B0B45;
  min-height: 8vh;
  font-family: 'Poppins', sans-serif;
  height: 80px;
}
div#logo {
  letter-spacing: 5px;
  color: #FFF;
  font-weight: 800;
  font-size: 2rem;
}
ul.nav-links {
  display: flex;
  justify-content: space-between;
  width: 100%;
  line-height: 75px;
  margin-right: 20%;
  margin-top: 20px;
  font-family: 'Poppins', sans-serif;
  
}
ul.nav-links li {
  list-style: none;
}
ul.nav-links a {
  text-decoration: none;
  color: #fefefe;
  font-size: 18px;
  font-weight: 400;
  display: block;
  float: left;
  font-family: 'Poppins', sans-serif;
}
#burger {
  display: none;
  cursor: pointer;
}
#burger div {
  width: 30px;
  height: 3px;
  margin: 8px;
  background-color: #fefefe;
  transition: all 0.3s ease-in;
}

ul.dropdown-menu li:first-child {
  margin: 0 0 10px 0;
}
ul.dropdown-menu li {
  margin: 10px 0;
}
ul.dropdown-menu li:last-child {
  margin: 10px 0 0 0;
}
ul.dropdown-menu a {
  line-height: 8vh;
  padding: 5px 15px;
  background-color: #0B0B45;
  color: #FFF;
  line-height: 50px;
  font-family: 'Poppins', sans-serif;
}

.btn.btn-primary{
  background-color: #0B0B45;
  border-color:#FFF ;
  color: #FFF;
  font-family: 'Poppins', sans-serif;
  font-size: 13px;
  font-weight: 400;
  border-radius:20px ;
}
.btn.btn-primary:hover{
  background-color: #FFF;
  border-color:#FFF ;
  color: #0B0B45;
}
/* Tablet */
@media screen and (max-width: 1024px) {
  ul.nav-links {
    width: 50%;
  }
}
/* Mobile */
@media screen and (max-width: 768px) {
  ul.nav-links {
    position: absolute;
    flex-direction: column;
    width: 100%;
    height: 92vh;
    top: 8vh;
    right: 0;
    padding: 100px;
    align-items: center;
    justify-content: flex-start;
    background-color: #FFF;
    color: #0B0B45;
    opacity: 0.8;
    transform: translateX(100%);
    transition: transform 0.5s ease-in;
  }
  .btn.btn-primary{
    position:absolute;
    flex-direction: column;
    width: 100%;
    height: 92vh;
    top: 8vh;
    right: 0;
    padding: 100px;
    align-items: center;
    justify-content: flex-start;
    background-color: #FFF;
    color: #0B0B45;
    opacity: 0.8;
    transform: translateX(100%);
    transition: transform 0.5s ease-in;
  }
  .nav.navbar-nav.navbar-righ{
    position:absolute;
    flex-direction: column;
    width: 100%;
    height: 92vh;
    top: 8vh;
    right: 0;
    padding: 100px;
    align-items: center;
    justify-content: flex-start;
    background-color: #FFF;
    color: #0B0B45;
    opacity: 0.8;
    transform: translateX(100%);
    transition: transform 0.5s ease-in;
  }
  .ml-auto{
    position:absolute;
    flex-direction: column;
    width: 100%;
    height: 92vh;
    top: 8vh;
    right: 0;
    padding: 100px;
    align-items: center;
    justify-content: flex-start;
    background-color: #FFF;
    color: #0B0B45;
    opacity: 0.8;
    transform: translateX(100%);
    transition: transform 0.5s ease-in;
  }

  ul.nav-links li {
    opacity: 0;
  }
  ul.nav-links a {
    width: 100%;
  }
  div#burger {
    display: block;
  }
  ul.dropdown-menu {
    position: relative;
    top: 0;
  }
}
.nav-active {
  transform: translateX(0) !important;
}
@keyframes navLinkFade {
  from {
    opacity: 0;
    transform: translateX(-60px);
  }
  to {
    opacity: 1;
    transform: translateX(0px);
  }
}
.toggle .line1 {
  transform: rotate(-45deg) translate(-9px, 10px);
}
.toggle .line2 {
  opacity: 0;
}
.toggle .line3 {
  transform: rotate(45deg) translate(-5px, -6px);
}

/* Icon Navbar */

.fas.fa-bell{
  color: #FFF;
  cursor: pointer;
}
.fas.fa-bookmark{
color: #FFF;
  cursor: pointer;
}

/* End Icon Navbar */
</style>