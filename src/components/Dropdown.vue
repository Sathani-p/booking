<template>
<div class="menu-item" @click="isOpen = !isOpen">
    <a href="#">
        {{ title }}
    </a>
    <i class="fas fa-caret-down" style="margin-top:5px;"></i>
    <transition name = "fade" appear>
    <div class="sub-menu" v-if="isOpen">
        <div v-for="(item, i) in items" :key="i" class="menu-item">
            <a :href="item.link">{{ item.title }}</a>
        </div>
    </div>
    
    </transition>
</div>
</template>

<script>
export default {
    name : 'drowdown',
    props : ['title', 'items'],
    data () {
        return{
            isOpen : false
        }
    }

}
</script>

<style >

.fas.fa-caret-down{
    color: #FFFFFF;
    width: 10px;
    margin-top: -20px;
}
nav .menu-item .sub-menu{
    position: absolute;
    background-color: #0B0B45;
    top : calc(100% + 18px);
    transform: translateX(-50%);
    width: max-content;
  
    
}
.fade-enter-active, 
.fade-leave-active {
    transition: all .2s ease-out;
}

.fade-enter,
.fade-leave-to {
    opacity: 0;
}
.fas.fa-caret-down.active,
.fas.fa-caret-down:hover{
 background-color: #FFF;
    color:#0B0B45;
    border-bottom-color: #0B0B45;
}
</style>