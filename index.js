function cursor(){
    let cursor = document.querySelector(".cursor")
let cont = document.querySelector(".wrapper")
let all_head = document.querySelector(".prod")
let prod = document.querySelectorAll(".div")


cont.addEventListener("mousemove",(dets)=>{
gsap.to(cursor,{
    left:dets.x,top:dets.y
})
})
all_head.addEventListener("mouseenter",(dets)=>{
    gsap.to(cursor,{
        left:dets.x-90,top:dets.y-90
    })
    cursor.style.width = "80px"
    cursor.style.height = "80px"
    cursor.innerHTML = "Products"
})
all_head.addEventListener("mouseleave",()=>{
    cursor.style.width = "25px"
    cursor.style.height = "25px"
    cursor.innerHTML = ""
})
prod.forEach((item)=>{
item.addEventListener("mouseenter",(dets)=>{
    gsap.to(cursor,{
        left:dets.x-90,top:dets.y-90
    })
    cursor.style.width = "100px"
    cursor.style.height = "100px"
    cursor.style.backgroundColor = "lightpink"  
})
item.addEventListener("mouseleave",()=>{
    cursor.style.width = "25px"
    cursor.style.height = "25px"
    cursor.style.backgroundColor = "grey"  
})
})

}
cursor()

let nav_Cont = document.querySelector(".nav-cont")
let hmb = document.querySelector('.part3 .hmb')
let cl = document.querySelector(".nav-cont .close")

hmb.addEventListener("click",()=>{
    nav_Cont.style.visibility = "visible"
})
cl.addEventListener(".click",()=>{
    nav_Cont.style.visibility = "hidden"
})

function animation(){
    gsap.from("nav-cont",{
        opacity:1,duration:0.4
    })
}
animation()