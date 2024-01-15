function cursor() {
  let cursor = document.querySelector(".cursor");
  let cont = document.querySelector(".wrapper");
  let prod = document.querySelectorAll(".div");
  let logo = document.querySelector(".logo");
  let products=document.querySelector(".prod")

  cont.addEventListener("mousemove", (dets) => {
    gsap.to(cursor, {
      left: dets.x+10,
      top: dets.y+10,
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
      cursor.style.backgroundColor = "rgba(255, 192, 203, 0.475)";
    });
    item.addEventListener("mouseleave", () => {
      cursor.style.width = "25px";
      cursor.style.height = "25px";
      cursor.style.backgroundColor = "grey";
    });
  });
  logo.addEventListener("mousemove", () => {
    cursor.style.width = "80px";
    cursor.style.height = "80px";
    cursor.style.backgroundColor = "grey";
  });
  logo.addEventListener("mouseleave", () => {
    cursor.style.width = "25px";
    cursor.style.height = "25px";
    cursor.style.backgroundColor = "grey";
  });
  // products.addEventListener("mousemove", () => {
  //   cursor.style.width = "80px";
  //   cursor.style.height = "80px";
  //   cursor.style.backgroundColor = "grey";
  //   cursor.innerHTML = "Products"
  // });
  // products.addEventListener("mouseleave", () => {
  //   cursor.style.width = "25px";
  //   cursor.style.height = "25px";
  //   cursor.style.backgroundColor = "grey";
  //   cursor.innerHTML = ""
  // });
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
