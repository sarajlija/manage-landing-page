
//SLIDEr SCROL//

let testimonials = document.getElementById('testimonials');
let control1 = document.getElementById('control1');
let control2 = document.getElementById('control2');
let control3 = document.getElementById('control3');
let control4 = document.getElementById('control4');

control1.onclick = function () {
    testimonials.style.transform = "translateX(-330px)";
    control1.classList.add("active");
    control2.classList.remove("active");
    control3.classList.remove("active");
    control4.classList.remove("active");
}
control2.onclick = function () {
    testimonials.style.transform = "translateX(0)";
    control1.classList.remove("active");
    control2.classList.add("active");
    control3.classList.remove("active");
    control4.classList.remove("active");
}
control3.onclick=function(){
    testimonials.style.transform = "translateX(330px)";
    control1.classList.remove("active");
    control2.classList.remove("active");
    control3.classList.add("active");
    control4.classList.remove("active");
}
control4.onclick = function () {
    testimonials.style.transform = "translateX(660px)";
    control1.classList.remove("active");
    control2.classList.remove("active");
    control3.classList.remove("active");
    control4.classList.add("active");
}


//GRABING SLIDEr //////////////////////////////////////////////////

const slider = document.querySelector('#testimonials');
let isDown = false, startX, scrollLeft;

function handleDown(e) {
    isDown = true;
    slider.classList.add('active-grab');
    startX = e.pageX - slider.offsetLeft;
    scrollLeft = slider.scrollLeft;
}

function handleLeave() {
    isDown = false;
    slider.classList.remove('active-grab');
}

function handleUp() {
    isDown = false;
    slider.classList.remove('active-grab');
}
slider.addEventListener('mousedown', handleDown);
slider.addEventListener('mouseleave', handleLeave);
slider.addEventListener('mouseup', handleUp);
//slider.addEventListener('mousemove', handleMove);

//VALIDATE EMAIL//////////////////////////////////////////////////
let form = document.querySelector('form')
let button = document.querySelector('#button')
button.addEventListener('click', validateemail)
function validateemail(e) {
   e.preventDefault()
    let x = document.myform.email.value;
    let atposition = x.indexOf("@");
    let dotposition = x.lastIndexOf(".");

    if (atposition < 1 || dotposition < atposition + 2 || dotposition + 2 >= x.length) {

        
        document.querySelector(".error__desktop").innerHTML = "Please provide a valid email address";
        document.querySelector(".error__desktop").style.color = "rgb(255 52 52)";
        document.querySelector("#email").style.border = "2px solid rgb(255 52 52)";
        document.querySelector("#button").style.border = "2px solid rgb(255 52 52)";
             

    }
    else {
                
         document.querySelector(".error__desktop").innerHTML = "Thank you, your email is valid";
         document.querySelector(".error__desktop").style.color = "rgb(33 195 243)";
         document.querySelector("#email").style.border = "2px solid transparent";
         document.querySelector("#button").style.border = "2px solid transparent";
        }

}
//MOBILE TOGGLE MENY ///////////////////////////////////////////////////////////////////

    const navbar_mobile = document.querySelector(".navbar__mobile")
    const mobileHam = document.querySelector(".mobile__ham")
    const menuLinks = document.querySelectorAll(".menuLink")
    const xIcon = document.querySelector(".xIcon")
    const menuIcon = document.querySelector(".menuIcon")
    const navMobile = document.querySelector(".nav-mobile")
    const body = document.querySelector("body")
    

        mobileHam.addEventListener("click", toggleMenu)
    function toggleMenu() {
    if (navbar_mobile.classList.contains("showMenu")) {
        navbar_mobile.classList.remove("showMenu");
        xIcon.style.display = "none";
        menuIcon.style.display = "block";
        body.style.background = "";
    } else {
        navbar_mobile.classList.add("showMenu");
        xIcon.style.display = "block";
        menuIcon.style.display = "none";
        body.style.background = "linear-gradient(180deg ,white, grey)";
        
    }
}