// jQuery FadeIn Section //

$(document).ready(function(){
    $(".banner h1, .banner h2, .banner a").hide();
    $(".banner a").fadeIn();
    $(".banner h2").fadeIn("slow");
    $(".banner h1").fadeIn(3000);
});


// Gallery Slider Section //

let activeSlideNumber = 1;

let visibleDotNumber = 1;

let arrowLeft = document.querySelector('.arrow-left');
let arrowRight = document.querySelector('.arrow-right');

let hideActiveSlide = () => {
    let activeElement = document.querySelector('.active');
    activeElement.classList.remove('active');
}

let showSlide = (slideNumber) => {
    hideActiveSlide();
    document.querySelector('#slide'+slideNumber).classList.add('active');
}

let changeActiveDot = (dotNumber) => {
    let visibleElement = document.querySelector('.visible');
    visibleElement.classList.remove('visible');
    document.querySelector('#dot'+dotNumber).classList.add('visible');
}

let showNextSlide = () => {
    if(activeSlideNumber === 7) {
        activeSlideNumber = 1;
    } else {
        activeSlideNumber = activeSlideNumber + 1;
    }
    showSlide(activeSlideNumber);
    changeActiveDot(activeSlideNumber);
}

let showPreviousSlide = () => {
    if(activeSlideNumber === 1) {
        activeSlideNumber = 7;
    } else {
        activeSlideNumber = activeSlideNumber - 1;
    }
    showSlide(activeSlideNumber);
    changeActiveDot(activeSlideNumber);
}

for(let i = 1; i <= 7; i++) {
    let showSlideI = () => {
        activeSlideNumber = i;
        visibleDotNumber = i;
        showSlide(i);
        changeActiveDot(i);
    }
    document.querySelector('#dot'+i).addEventListener('click', showSlideI, changeActiveDot);
}

arrowRight.addEventListener('click', showNextSlide);
arrowLeft.addEventListener('click', showPreviousSlide);



// Scrolling Section //

(function(){
    'use strict';
    
    var navSelector = '.menu';
    var linksSelector = '.menu a';
    var scrollSpeed = 30;
    
    var timer, targetPosition;
  
    function scroll() {
      var delta = targetPosition - document.documentElement.scrollTop;
      if (delta > 0) {
        document.documentElement.scrollTop += Math.min(delta, scrollSpeed);
      }
      else if (delta < 0) {
        document.documentElement.scrollTop += Math.max(delta, -scrollSpeed);
      }
      else {
        clearInterval(timer);
      }
      
      if(window.innerHeight >= document.documentElement.scrollHeight - document.documentElement.scrollTop) {
        clearInterval(timer);
      }
    };
    
    var onLinkClick = function(event){
      event.preventDefault();
      clearInterval(timer)
      
      var navHeight = document.querySelector(navSelector).offsetHeight;
      var target = document.querySelector(this.getAttribute('href'));
      if(target){
        targetPosition = Math.max(0, target.offsetTop);
        scroll();
        timer = setInterval(scroll, 1000/30);
      }
    };
    
    var links = document.querySelectorAll(linksSelector);
    
    for(var i=0; i<links.length; i++){
      links[i].addEventListener('click', onLinkClick);
    }
    
})();