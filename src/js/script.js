// menu

const hamburger = document.querySelector('.hamburger'),
      menu = document.querySelector('.menu'),
      closeElem = document.querySelector('.menu__close');
      closeOver = document.querySelector('.menu__overlay');
      closeLink = document.querySelector('.menu__list');

hamburger.addEventListener('click', () => {
    menu.classList.add('active');
});


closeElem.addEventListener('click', () => {
    menu.classList.remove('active');
});

closeOver.addEventListener('click', () => {
    menu.classList.remove('active');
});

closeLink.addEventListener('click', () => {
    menu.classList.remove('active');
});

//skills__progress

const counters = document.querySelectorAll('.skills__progress-counter'),
      lines = document.querySelectorAll('.skills__progress-line span');

counters.forEach( (item, i) => {
    lines[i].style.width = item.innerHTML;
});

//Smooth Scroll up

$(window).scroll(function() {
    if ($(this).scrollTop() > 800) {
        $('.pageup').fadeIn();
    } else {
        $('.pageup').fadeOut();
    }
});

$(function() {
    $("a[href=#up]").click(function() {
        const _href = $(this).attr("href");
        $("html, body").animate({scrollTop: $(_href).offset().top+"px"});
        return false;
      });
});

