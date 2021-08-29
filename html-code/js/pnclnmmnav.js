const slideshow = document.querySelector(".slideshow");
for (let i = 0; i < images.length; i++) {
  slideshow.innerHTML += ('<div class="slide" style="background-image: url(' + images[i].url + ')">' + '<div class="slide-label">' + images[i].label + '</div></div>');
}

const slides = document.querySelectorAll('.slide');
const slideCount = slides.length;
let idx = 0;



function showImg () {
  slides[idx].setAttribute('class', 'slide-active')
}

function hideImg () {
  slides[idx].setAttribute('class', 'slide')
}

function openLightbox() {
  document.getElementById('Lightbox').style.display = 'block'; 
};
    
function closeLightbox() {
  document.getElementById('Lightbox').style.display = 'none';
};

function prev () {
  hideImg();
  idx = (idx - 1 + slideCount) % slideCount;
  showImg();
}

function next () {
  hideImg();
  idx = (idx + 1) % slideCount;
  showImg();
}

window.onkeyup = function (e) {
  let key = e.keyCode ? e.keyCode : e.which;
  if (key === 37) {
    prev();
  } else if (key === 39) {
    next();
  }
  
    else if (key === 38) {
    try { window.location.replace("https://studio-cjc.com/html-code/prvctr.html"); } 
    catch(e) { window.location = "https://studio-cjc.com/html-code/prvctr.html"; };
  } else if (key === 40) {
   try { window.location.replace("https://studio-cjc.com/html-code/goya.html"); } 
   catch(e) { window.location = "https://studio-cjc.com/html-code/goya.html"; };
  } 
}



showImg();
