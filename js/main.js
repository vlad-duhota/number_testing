// wow anim
new WOW().init();

$(document).ready(function () {
  $('select').niceSelect();
  $('.menu-btn').click(function (e) {
    $(this).toggleClass('active');
    $('.menu').toggleClass('active');
  })
});

let options = {
  root: null,
  rootMargin: '5px',
  threshold: 0.5
}

let observer = new IntersectionObserver(function (entries, observer) {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      $('.what .animated').addClass('active')
    }
  })
}, options);
let target = document.querySelector('.what')
observer.observe(target);

$('.companies__slider').slick({
  slidesToShow: 3,
  slidesToScroll: 3,
  arrows: false,
  dots: true,
  speed: 1500,
  responsive: [
    {
      breakpoint: 992,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 3,
      }
    },
    {
      breakpoint: 768,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 2
      }
    },
    {
      breakpoint: 578,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1
      }
    }
    // You can unslick at a given breakpoint now by adding:
    // settings: "unslick"
    // instead of a settings object
  ]
});

document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
    e.preventDefault();

    document.querySelector(this.getAttribute('href')).scrollIntoView({
      behavior: 'smooth'
    });
  });
});

