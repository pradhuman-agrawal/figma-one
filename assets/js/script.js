burger = document.querySelector('.burger')
navbar = document.querySelector('.navbar')
navlist = document.querySelector('.nav-list')
rightnav = document.querySelector('.rightnav')



burger.addeventlistner('click',()=>{
navbar.classList.toggle('v-class-resp');
navlist.classList.toggle('v-class-resp');
navbar.classList.toggle('h-nav-resp');
} )