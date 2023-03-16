/* Hamburger menu */


//DOM access

const menu = document.getElementById('menu');
const openBtn = document.getElementById('openbtn');
const closeBtn = document.getElementById('closebtn');


function openNav() {
    menu.style.width = '45%';
    openBtn.setAttribute('aria-expanded', true);
  }
  
  function closeNav() {
    menu.style.width = '0';
    openBtn.setAttribute('aria-expanded', false);
  }

openBtn.addEventListener('click', openNav);

closeBtn.addEventListener('click', closeNav);




/* Slideshow functions and DOM access */

let slideIndex = 1;
const dots = document.getElementsByClassName('dot');


const showSlides = (n) => {

    let slides = document.getElementsByClassName('slide-card');
    let description = document.getElementsByClassName('description');

    if (n > slides.length) {slideIndex = 1};
    if (n < 1) {slideIndex = slides.length};
    
    for (let i=0; i < slides.length; i++) {
        slides[i].style.display = 'none';
        description[i].style.display = 'none';
        dots[i].className = dots[i].className.replace(" active", "");
    }

    slides[slideIndex - 1].style.display = 'block';
    description[slideIndex - 1].style.display = 'block';
    dots[slideIndex -1].className += ' active';
}

showSlides(slideIndex);

//DOM access

const nextBtn = document.getElementById('next');
const prevBtn = document.getElementById('prev');

// Next button function and event listener

const nextSlide = (n) => { 
    showSlides(slideIndex += n);
}

nextBtn.addEventListener('click', () => nextSlide(1));
prevBtn.addEventListener('click', () => nextSlide(-1));

//Dots display functions

const currentSlide = (n) => {
    showSlides(slideIndex = n);
}










