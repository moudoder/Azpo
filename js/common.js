$(document).ready(function () {
  $(".scroll-to").on("click", function (event) {
    event.preventDefault();
    let id  = $(this).attr('href'),
    top = $(id).offset().top;
    $('body,html').animate({scrollTop: top}, 1500);
  });

  $(".phone").mask("+7 (999) 999-9999");

  $('.date-input').datetimepicker({
    timepicker:false,
    format:'d.m.Y',
    minDate: new Date(),
    scrollMonth : false,
    scrollInput : false
  });

  $('.catalog-options__more').on('click', function() {
    let options = $('.first-screen-options');
    $(options).toggleClass('options--open');
    if ($(options).hasClass('options--open')) {
      $('.catalog-options__more span').text('Свернуть фильтры');
    }
    else{
      $('.catalog-options__more span').text('Расширенный поиск');
    }
    
    return false;
  })
  



  $('.date-input').mask("99.99.9999");

  $('.sort-view').on('click', function() {
    $('.sort-view').removeClass('active');
    $(this).addClass('active');
  })
  $('.pagination-view__block').on('click', function() {
    $('.pagination-view__block').removeClass('active');
    $(this).addClass('active');
  })

  $('.catalog-director-slider').slick({
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    speed: 500,
    fade: true,
    cssEase: 'linear',
    prevArrow: $('.director-arrow--prev'),
    nextArrow: $('.director-arrow--next')
  });

  $('.single-slider-big').slick({
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    speed: 500,
    fade: true,
    cssEase: 'linear',
    prevArrow: $('.single-slider-arrow--prev a'),
    nextArrow: $('.single-slider-arrow--next a')
  });

  $('.growth-slider').slick({
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
  });


  $('.team-slider').slick({
    infinite: false,
    slidesToShow: 3,
    slidesToScroll: 1,
    arrows: true,
    dots: true,
    prevArrow: $('.team-slider-arrow--prev'),
    nextArrow: $('.team-slider-arrow--next')
  });

  $('.reviews-slider').slick({
    infinite: false,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: true,
    dots: true,
    fade: true,
    cssEase: 'linear',
    prevArrow: $('.reviews-slider-arrow--prev'),
    nextArrow: $('.reviews-slider-arrow--next')
  });

  $('input[type="range"]').rangeslider({
      polyfill : false,
  });


  $('.single-slider-nav__slide').on('click', function() {
    let element = $(this);
    let parent_arr = $(element).parent('.single-slider-nav');
    parent_arr = $(parent_arr).children('.single-slider-nav__slide');
    let count_index = $(parent_arr).index(element);
    $('.single-slider-big').slick('slickGoTo', count_index);
    return false;
  })


  $('.growth-tab').on('click', function() {
    $('.growth-tab').removeClass('active');
    $(this).addClass('active');
    let element = $(this);
    let parent_arr = $(element).parent('.growth-row__left');
    parent_arr = $(parent_arr).children('.growth-tab');
    let count_index = $(parent_arr).index(element);
    $('.growth-slider').slick('slickGoTo', count_index);
    return false;
  })

  jQuery(function($){
    $(document).mouseup( function(e){ // событие клика по веб-документу
      var div = $( ".options-item-list" ); // тут указываем ID элемента
      if ( !div.is(e.target) // если клик был не по нашему блоку
          && div.has(e.target).length === 0 ) { // и не по его дочерним элементам
          $( ".options-item-list" ).removeClass('options-list-active');
      }
    });
  });

  $('.options-item__top').on('click', function() {
    let list = $(this);
    list = $(list).children('.options-item-list');
    $(list).toggleClass('options-list-active');
  })

  $('select').selectize();
})