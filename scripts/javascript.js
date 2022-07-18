
// galeria
let slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n) {
  showSlides(slideIndex += n);
}

function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  let i;
  let slides = document.getElementsByClassName("mySlides");
  let dots = document.getElementsByClassName("demo");
  let captionText = document.getElementById("caption");
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
  captionText.innerHTML = dots[slideIndex-1].alt;
}
// fin galeria

// inicia boton ver mas

let leerMasBtn = document.getElementById('leerMasBtn');
let hide = document.getElementById('hide');

leerMasBtn.addEventListener('click', toggle);

function toggle() {
  hide.classList.toggle('show');

  if(hide.classList.contains('show')) {
    leerMasBtn.innerHTML = 'Ver menos'
  }
  else {
    leerMasBtn.innerHTML = 'Ver más'
  }
}

// fin boton ver mas