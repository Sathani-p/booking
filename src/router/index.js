import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Hotel from '../views/Hotel.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'home',
    component: Home
  },
  
  {
    path: '/login',
    name: 'login',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "login" */ '../views/Login.vue')
  },
  {
    path: '/register',
    name: 'register',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "register" */ '../views/Register.vue')
  },
  {
    path: '/hotel',
    name: 'hotel',
    component: Hotel
  },
  {
    path: '/hoteldetail',
    name: 'hoteldetail',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "hoteldetail" */ '../views/HotelDetail.vue')
  },
  {
    path: '/hotelbooking',
    name: 'hotelbooking',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "hotelbooking" */ '../views/HotelBooking.vue')
  },
  {
    path: '/payment',
    name: 'payment',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "payment" */ '../views/Payment.vue')
  },
  {
    path: '/tour',
    name: 'tour',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "tour" */ '../views/Tour.vue')
  },
  {
    path: '/tourdetail',
    name: 'tourdetail',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "tourdetail" */ '../views/TourDetail.vue')
  },
  {
    path: '/transport',
    name: 'transport',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "transport" */ '../views/Transport.vue')
  },
  {
    path: '/carbooking',
    name: 'carbooking',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "carbooking" */ '../views/CarBooking.vue')
  },
  {
    path: '/information',
    name: 'information',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "information" */ '../views/Information.vue')
  },
  {
    path: '/contact',
    name: 'contact',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "contact" */ '../views/Contact.vue')
  },
  {
    path: '/myaccount',
    name: 'myaccount',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "myaccount" */ '../views/MyAccount.vue')
  },
  {
    path: '/mycard',
    name: 'mycard',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "mycard" */ '../views/MyCard.vue')
  },
  {
    path: '/mybooking',
    name: 'mybooking',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "mybooking" */ '../views/MyBooking.vue')
  },
  {
    path: '/notification',
    name: 'notification',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "notification" */ '../views/Notification.vue')
  },
  {
    path: '/purchaselist',
    name: 'purchaselist',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "purchaselist" */ '../views/PurchaseList.vue')
  },
  {
    path: '/foreign',
    name: 'foreign',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "foreign" */ '../views/Foreign.vue')
  },
  {
    path: '/tourbooking',
    name: 'tourbooking',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "tourbooking" */ '../views/TourBooking.vue')
  },
  {
    path: '/homepage',
    name: 'homepage',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "homepage" */ '../views/HomePage.vue')
  },
]

const router = new VueRouter({
  routes
})

export default router
