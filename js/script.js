$(document).ready(function(){
  $(window).scroll(function(){
    if(navigator.userAgent.match(/(iPod|iPhone|iPad|Android)/)) {
      if ($(this).scrollTop() >= 900){
        $('.skillbox').each(function(){
          $(this).find('.skill-level').animate({
            width:$(this).attr('data-percent')
          }, 4000);
        })
      }
  } else {
      if ($(this).scrollTop() >= 500){
        $('.skillbox').each(function(){
          $(this).find('.skill-level').animate({
            width:$(this).attr('data-percent')
          }, 4000);
        })
      }
  }
  })
})
