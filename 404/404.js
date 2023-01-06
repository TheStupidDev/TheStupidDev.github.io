document.addEventListener("DOMContentLoaded", function() {

var dvd = document.getElementById('404');
dvd.style.position = 'absolute';
dvd.style.top = '0px';
dvd.style.left = '0px';
dvd.style.width = '80px';
dvd.style.height = '50px';

var dvdAnimation = function() {
  var dvdTop = parseInt(dvd.style.top);
  var dvdLeft = parseInt(dvd.style.left);
  var dvdWidth = parseInt(dvd.style.width);
  var dvdHeight = parseInt(dvd.style.height);
  var dvdXVelocity = 1;
  var dvdYVelocity = 1;
  var dvdXDirection = 1;
  var dvdYDirection = 1;
  var dvdAnimationInterval = setInterval(function() {
    dvdTop += dvdYVelocity * dvdYDirection;
    dvdLeft += dvdXVelocity * dvdXDirection;
    if (dvdTop <= 0) {
      dvdYDirection = 1;
    } else if (dvdTop + dvdHeight >= window.innerHeight) {
      dvdYDirection = -1;
    }
    if (dvdLeft <= 0) {
      dvdXDirection = 1;
    } else if (dvdLeft + dvdWidth >= window.innerWidth) {
      dvdXDirection = -1;
    }
    dvd.style.top = dvdTop + 'px';
    dvd.style.left = dvdLeft + 'px';
  }, 10);
};

var ee = document.getElementById('zone');
ee.style.position = 'absolute';
ee.style.left = '50%';
ee.style.top = '50%';
ee.style.transform = 'translate(-50%, -50%)';
dvdAnimation();
});