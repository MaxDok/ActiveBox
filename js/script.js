$(document).ready(function(){
  $('.header__burger').click(function(event){
    $('.header__burger,.header__menu').toggleClass('active');
    $('body').toggleClass('lock');
  });
});

$('.phone').mask('+7 (***) ***-**-**');

new WOW().init();
  