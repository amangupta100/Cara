
function cursor() {
  let cursor = document.querySelector(".cursor");
  let cont = document.querySelector(".wrapper");
  let prod = document.querySelectorAll(".div");
  let logo = document.querySelector(".logo");
  let products=document.querySelector(".prod")
  let btn = document.querySelectorAll(".swiper-slide button")
  cont.addEventListener("mousemove", (dets) => {
    gsap.to(cursor, {
      left: dets.x+10,
      top: dets.y+10,
    });
  });
  btn.forEach((item) => {
    let vle = item.innerHTML
    item.addEventListener("mouseenter", () => {
      cursor.style.width = "130px";
      cursor.style.height = "130px";
      cursor.innerHTML = `${vle}`
    });
    item.addEventListener("mouseleave", () => {
      cursor.style.width = "25px";
      cursor.style.height = "25px";
      cursor.innerHTML = ""
    });
  });
  prod.forEach((item) => {
    item.addEventListener("mouseenter", (dets) => {
      gsap.to(cursor, {
        left: dets.x - 90,
        top: dets.y - 90,
      });
      cursor.style.width = "100px";
      cursor.style.height = "100px";
    });
    item.addEventListener("mouseleave", () => {
      cursor.style.width = "25px";
      cursor.style.height = "25px";
    });
  });
  logo.addEventListener("mousemove", () => {
    cursor.style.width = "80px";
    cursor.style.height = "80px";
  });
  logo.addEventListener("mouseleave", () => {
    cursor.style.width = "25px";
    cursor.style.height = "25px";
  });
  products.addEventListener("mousemove", () => {
    cursor.style.width = "85px";
    cursor.style.height = "85px";
    cursor.innerHTML = "Products"
  });
  products.addEventListener("mouseleave", () => {
    cursor.style.width = "25px";
    cursor.style.height = "25px";
    cursor.innerHTML = ""
  });
}
cursor();

let nav_Cont = document.querySelector(".nav-cont");
let hmb = document.querySelector(".nav .part3 .hmb");
let cl = document.querySelector(".nav-cont .close");

hmb.addEventListener("click", () => {
  nav_Cont.style.visibility = "visible";
  console.log("smm");
});
cl.addEventListener("click", () => {
  nav_Cont.style.visibility = "hidden";
});

function Swwiper(){
var swiper = new Swiper(".mySwiper",{
  cssMode:true,
  navigation:{
    nextEl:".swiper-button-next",
    prevEl:".swiper-button-prev"
  },
  pagination:{
   el:".swiper-pagination",
   clickable:true,
   dynamicBullets:true
  },

 
})
}
Swwiper()

function myfunction(){
  window.open("sproduct.html")
}
myfunction()




