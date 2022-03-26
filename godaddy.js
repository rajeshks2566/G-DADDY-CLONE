

// accordian
const faq=document.querySelectorAll(".faq");

faq.forEach(faq=>{
    faq.addEventListener("click",()=>{
        faq.classList.toggle("active");
    })
})

// number dropdown

let d=document.querySelector(".number_dropdown")
document.body.addEventListener("click",()=>{
    if(d.classList.contains('drop')){
        d.classList.toggle("drop");
    }
})
document.querySelector(".fa-solid").addEventListener("click",(e)=>{
    e.stopPropagation();
    d.classList.toggle("drop")
})


let s=document.querySelector(".signin")
document.body.addEventListener("click",()=>{
if(s.classList.contains('sign')){
    s.classList.toggle("sign");
}
})

document.querySelector(".sig").addEventListener("click",(e)=>{
    e.stopPropagation();
    s.classList.toggle("sign")
})

// domain nav dropdown
let domain=document.querySelector(".maindomain_drop")
document.body.addEventListener("click",()=>{
    if(domain.classList.contains("domain_drop")){
        domain.classList.toggle("domain_drop")
    }
})

document.querySelector(".domain").addEventListener("click",(e)=>{
    e.stopPropagation();
    domain.classList.toggle("domain_drop")
    
})


// carosal section

var btn1=document.querySelector(".left_btn");
var btn2=document.querySelector(".right_btn");
var allcard=document.querySelector(".carosuel1");

var count=0;

btn1.addEventListener("click",()=>{
    count+=10;
    if(count>0){
        count=0;
    }
    allcard.style.transform=`translate(${count}%)`;
    allcard.style.transition="all ease 0.5s"

})

btn2.addEventListener("click",()=>{
    count-=10;
    if(count<-70){
        count=-70;
    }
    allcard.style.transform=`translate(${count}%)`;
    allcard.style.transition="all ease 0.5s"
    // allcard.style.color="darkgrey"

})


// vedio section

let main=document.querySelector(".mainvideo")
let btn=document.querySelector(".icon")
let video=document.querySelector(".iframe")



btn.addEventListener("click",()=>{
    if(iframe.style.opacity==0){
        iframe.style.opacity==1
    }
    else{
        iframe.style.opacity==1
    }
})


let i=document.querySelector(".iframe")
i.style.display="none"

btn.addEventListener("click",()=>{
    if(video.style.display=="none"){
        video.style.display="block"
        video.style.display="flex"
        video.style.alignItem="center"
        video.style.justifyContent="center"
        // video.style.zindex="1"
       
    }
    else if(video.style.display=="block"){
        btn.style.opacity="0"
        

    }
    else{
        video.style.display="none"
    }
})