$(document).ready(function() {
var box;

  function clicked(e) { 
    box = $(e.target);
    box.children().children().removeClass('hide');
  }


  $('.box').click(clicked);
     
});

  // $("#hide").click(function() {
  //   $(this).toggleClass("hide");
  //   alert('this has been clicked');
    // $(this).toggle();
  // });
