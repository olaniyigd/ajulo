// ====================toggle=========================
let toggle = document.getElementById("toggle")
function toggler() {
    let mobileNav = document.querySelector(".mobile-nav");
    mobileNav.classList.toggle("show")
}
// ====================countdown=====================
   
var countDownDate = new Date ("feb 25, 2023 00:00:00").getTime();
var x = setInterval (function(){
  var now = new Date().getTime();
  var distance = countDownDate - now;

  var days = Math.floor(distance / (1000 * 60 * 60 *24));
  var hours = Math.floor ((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  var minutes = Math.floor ((distance % (1000 * 60 * 60)) / (1000 * 60));
  var seconds = Math.floor ((distance % (1000 * 60)) / 1000);

  document.getElementById("demo").innerHTML = days + "Days " + "   " + hours + "Hours  " + "  " + minutes + "Minutes  " + seconds + "Seconds ";

  if (distance <= 0){
    clearInterval(x);
    document.getElementById("demo").innerHTML = "Go and Vote 4 Ajulo"
  }

}, 1000);

// ===============================the testimonial==========================================
  var slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n) {
  showSlides(slideIndex += n);
}

function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  var i;
  var slides = document.getElementsByClassName("mySlides");
  var dots = document.getElementsByClassName("dot");
  if (n > slides.length) {slideIndex = 1}    
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";  
  }
  for (i = 0; i < dots.length; i++) {
      dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block";  
  dots[slideIndex-1].className += " active";
}

function next(){
  document.getElementById("proj2").style.display = "block";
  document.getElementById("proj").style.display = "none";
}
function prev(){
  document.getElementById("proj2").style.display = "none";
  document.getElementById("proj").style.display = "block";
}

