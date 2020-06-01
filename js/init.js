$(document).ready(function () {
  $('.sidenav').sidenav();
});


$(document).ready(function () {
  $('.parallax').parallax();
});


$(document).ready(function () {
  $('.owl-carousel').owlCarousel({
    loop: true,
    margin: 30,
    nav: true,
    autoplay: true,
    autoplayTimeout: 2000,
    autoplayHoverPause: true,
    pagination: true,
    responsive: {
      0: {
        items: 2,
        margin: 10
      },
      800: {
        items: 4
      }
    }
  });
});