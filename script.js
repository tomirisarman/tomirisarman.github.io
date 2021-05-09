function myFunction() {
var x = document.getElementById("myTopnav");
if (x.className === "topnav") {
  x.className += " responsive";
} else {
  x.className = "topnav"; //D7263D
}
}

$(document).ready(function(){

  $(window).scroll(function(){
    if(navigator.userAgent.match(/(iPod|iPhone|iPad|Android)/)) {
      if ($(this).scrollTop() >= 1300){
        $('.skillbox').each(function(){
          $(this).find('.skill-level').animate({
            width:$(this).attr('data-percent')
          }, 4000);
        })
      }
  } else {
      if ($(this).scrollTop() >= 1000){
        $('.skillbox').each(function(){
          $(this).find('.skill-level').animate({
            width:$(this).attr('data-percent')
          }, 4000);
        })
      }
  }
  })

})

var flkty = new Flickity( '.slide-box', {
  cellAlign: 'left',
  contain: true,
  wrapAround: true,
  prevNextButtons: false,
  autoPlay: 5000
});
