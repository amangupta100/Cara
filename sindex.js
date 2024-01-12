let nav_Cont = document.querySelector(".nav-cont")
let hmb = document.querySelector('.nav .part3 .hmb')
let cl = document.querySelector(".nav-cont .close")
let logo = document.querySelector(".logo");
hmb.addEventListener("click",()=>{
    nav_Cont.style.visibility = "visible"
    console.log("dm")
})
cl.addEventListener(".click",()=>{
    nav_Cont.style.visibility = "hidden"
})

function myfunction(){
    window.open("sproduct.html")
}
myfunction()

function cursor(){
    let cursor = document.querySelector(".cursor")
let cont = document.querySelector(".wrapper")
let prod = document.querySelectorAll(".div")

cont.addEventListener("mousemove",(dets)=>{
gsap.to(cursor,{
    left:dets.x,top:dets.y
})
})
prod.forEach((item)=>{
item.addEventListener("mouseenter",(dets)=>{
    gsap.to(cursor,{
        left:dets.x-90,top:dets.y-90
    })
    cursor.style.width = "100px"
    cursor.style.height = "100px"
    cursor.style.backgroundColor = "rgba(255, 192, 203, 0.475)"  
})
item.addEventListener("mouseleave",()=>{
    cursor.style.width = "25px"
    cursor.style.height = "25px"
    cursor.style.backgroundColor = "grey"  
})
})
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
}
cursor()

function img_Trans() {
    let main_Img = document.querySelector("#main");
    let sm_img = document.getElementsByClassName("sm_img");
  
    sm_img[0].onclick = function () {
      main_Img.src = sm_img[0].src;
    };
    sm_img[1].onclick = function () {
      main_Img.src = sm_img[1].src;
    };
  
    sm_img[2].onclick = function () {
      main_Img.src = sm_img[2].src;
    };
  
    sm_img[3].onclick = function () {
      main_Img.src = sm_img[3].src;
    };
  }
  img_Trans();