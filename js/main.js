$(window).scroll(function(){
  let scrollTop = $(window).scrollTop();
  
  if (scrollTop < 600) {
    $('header').fadeIn(600).css({
      'background-color': 'transparent',
      'color': '#ffffff'
    });
  } else {
    $('header').fadeIn(600).css({
      'background-color': '#000000',
      'color': '#ffffff'
    });
  }
});
$(document).ready(function(){
  $('.page2_l').slick({
    dots: false,                
    infinite: true,             
    slidesToShow: 1,            
    slidesToScroll: 1,         
    autoplay: true,            
    autoplaySpeed: 2000,                                 
    pauseOnFocus: true,         
    pauseOnHover: true,  
    arrows: false,       
    speed: 1000,      
  });
});
$(document).ready(function(){
  $('.page2_center1').slick({
    dots: false,                
    infinite: true,             
    slidesToShow: 4,
    slidesToScroll: 4,
    rows: 2,
    autoplay: true,            
    autoplaySpeed: 2000,       
    speed: 1000,  
    variableWidth: true,
    arrows: false,       
  });
})
$(document).ready(function(){
  $('.page3_center').slick({
    dots: false,                
    infinite: true,             
    slidesToShow: 3,
    slidesToScroll: 3,
    rows: 1,
    autoplay: true,            
    autoplaySpeed: 2000,       
    speed: 1000,  
    variableWidth: true,
    arrows: false,       
  });
})
$(document).ready(function(){
  $('.page4_img').slick({
    dots: false,                
    infinite: true,             
    slidesToShow: 3,
    slidesToScroll: 3,
    rows: 1,
    autoplay: true,            
    autoplaySpeed: 2000,       
    speed: 1000,  
    variableWidth: true,
    arrows: false,       
  });
})
$(document).ready(function(){
  $('.page5_img').slick({
    dots: false,                
    infinite: true,             
    slidesToShow: 4,
    slidesToScroll: 4,
    rows: 2,
    autoplay: true,            
    autoplaySpeed: 2000,       
    speed: 1000,  
    variableWidth: true,
    arrows: false,       
  });
})
$(document).ready(function(){
  $('.page7_r').slick({
    dots: false,                
    infinite: true,             
    slidesToShow: 3,
    slidesToScroll: 3,
    rows: 2,
    autoplay: true,            
    autoplaySpeed: 2000,       
    speed: 2000,  
    variableWidth: true,
    arrows: false,       
  });
});