$(document).ready(function() {
    $(window).scroll(function() {
      if($(this).scrollTop() < $("#snow-white").height()){
         $(".navbar").removeClass("bg-dark");
      }
      else{
         $(".navbar").addClass("bg-dark");
      }
    });
  });