let k=document.getElementById("login");
let l=document.getElementById("box");
let p=document.getElementById("box2");
let a=document.getElementById("b");
let b=document.getElementById("back");
let w1=document.getElementById("wrong");
let w2=document.getElementById("wrong2");

w1.addEventListener("click",()=>{
    l.classList.add('hidden');
});
w2.addEventListener("click",()=>{
    p.classList.add('hidden');
});

k.addEventListener("click",()=>{
    l.classList.remove('hidden');
});

a.addEventListener("click",()=>{
    l.classList.add('hidden');
    p.classList.remove('hidden');
});

b.addEventListener("click",()=>{
    p.classList.add('hidden');
    l.classList.remove('hidden');
});

// otp verify
function sendOTP() {
    const mob_no = document.getElementById("mob_no");
    const otpverify = document.getElementById("otpverify");
    
}
