const toggleButton = document.getElementsByClassName('toggle-button')[0]
const menu = document.getElementsByClassName('menu')[0]

toggleButton.addEventListener('click',()=> {
    menu.classList.toggle('active')
})

window.addEventListener('resize', () => {
    if (window.innerWidth > 1000) {
        menu.classList.remove('active');
    }
});


var slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n){
    showSlides(slideIndex += n);
}

function currentSlide(n){
    showSlides(slideIndex = n);
}

function showSlides(n){
    var i;
    var slides = document.getElementsByClassName("mySlides");
    var dots = document.getElementsByClassName("dot");
    if (n > slides.length) {slideIndex = 1}
    if (n < 1) {slideIndex = slides.length}
    for( i = 0; i < slides.length; i++){
        slides[i].style.display = "none";
    }

    for(i = 0; i < dots.length; i++){
        dots[i].className = dots[i].className.replace(" active", "");
    }
    slides[slideIndex - 1].style.display ="block";
    dots[slideIndex - 1].className += " active";
}


var autoSlideIndex = 0; 

function autoShowSlides(){
    var i;
    var slides = document.getElementsByClassName("mySlides");
    for(i = 0; i < slides.length; i++){
        slides[i].style.display ="none";
    }

    autoSlideIndex++;

    if(autoSlideIndex > slides.length){
        autoSlideIndex = 1;
    }

    slides[autoSlideIndex - 1].style.display = "block";
    setTimeout(autoShowSlides, 10000);
}

autoShowSlides();


