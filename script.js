function home(){
  var tl = gsap.timeline();
tl.to("#img",{
   height: "85%",
   width: "90%",
   duration:1,
   delay:.8,
   borderRadius: "20px" ,
   ease: Expo.ease
})

tl.from(".r h1 span",{
  x: "-100%",
  duration: 2,
  ease: Circ.easeInOut
})
tl.from(".l h1 span",{
  x: "100%",
  duration: 2,
  ease: Circ.easeInOut
},"-=2")
tl.from(".span h1 span",{
  y: "-100%",
  duration: 1,
  ease: Circ.easeInOut
},"-=1")
tl.from(".span1 h1 span",{
  y: "100%",
  duration: 1,
  ease: Circ.easeInOut
},"-=1")
}


var menu = document.querySelector("#click");
var menu2 = document.querySelector("#click2");
var home1 = document.querySelector("#home");
var nav = document.querySelector("#nav")
var snav = document.querySelector("#snav")
var container1 = document.querySelector(".container")

menu.addEventListener('click',function(){
  home1.style.transform = 'translateX(400px) translateY(100px)';
  home1.style.borderRadius = "20px"
  nav.style.color = 'white'
  menu2.style.display = "flex"
  menu.style.display = "none"

})

menu2.addEventListener('click',function(){
  home1.style.transform = 'scale(1)';
  nav.style.color = 'black'
  menu.style.display = "flex"
  menu2.style.display = "none"
  home1.style.borderRadius = "0px"

})

function horizontalscroll(){
  gsap.registerPlugin(ScrollTrigger);

  let sections = gsap.utils.toArray(".panel");
  
  gsap.to(sections, {
    xPercent: -100 * (sections.length - 1),
    ease:"none",
    scrollTrigger: {
      trigger: ".container",
      pin: true,
      scrub: 1,
      snap: 1 / (sections.length - 1),
      end: () => "+=" + document.querySelector(".container").offsetWidth
     }
  });
}

menu.addEventListener('click',function(){
   snav.style.left = 0
})
menu2.addEventListener('click',function(){
  snav.style.left = "-100%"
})

 function swiperJs(){
  
var swiper = new Swiper(".mySwiper", {
  effect: "cube",
  grabCursor: true,
  cubeEffect: {
    shadow: true,
    slideShadows: true,
    shadowOffset: 20,
    shadowScale: 0.94,
  },
  pagination: {
    el: ".swiper-pagination",
  },
});
}



swiperJs()
horizontalscroll()
home();