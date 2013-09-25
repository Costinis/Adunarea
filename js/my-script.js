// JavaScript Document
$(document).ready(function(e) {   
	$('.var_r1').click(function() {
	  $('.sum0r1').hide();
	  $('.sum_r1, .check1').show();
	});
	$('.var_r2').click(function() {
	  $('.sum0r2').hide();
	  $('.sum_r2, .check2').show();
	});
	$('.var_r3').click(function() {
	  $('.sum0r3').hide();
	  $('.sum_r3, .check3').show();
	});
	$('.var_r4').click(function() {
	  $('.sum0r4').hide();
	  $('.sum_r4, .check4').show();
	});
	$('.var_r5').click(function() {
	  $('.sum0r5').hide();
	  $('.sum_r5, .check5').show();
	});
    $('.var_r6').click(function() {
	  $('.sum0r6').hide();
	  $('.sum_r6, .check6').show();
	});




    
});

$(document).ready(function(e) {   
	$('.correct1').click(function() {
	  $('.sum0r1').hide();
	  $('.sum_r1, .check1').show();
	});
	$('.correct2').click(function() {
	  $('.sum0r2').hide();
	  $('.sum_r2, .check2').show();
	});
	$('.correct3').click(function() {
	  $('.sum0r3').hide();
	  $('.sum_r3, .check3').show();
	});
	$('.correct4').click(function() {
	  $('.sum0r4').hide();
	  $('.sum_r4, .check4').show();
	});
	$('.correct5').click(function() {
	  $('.sum0r5').hide();
	  $('.sum_r5, .check5').show();
	});
    $('.correct6').click(function() {
	  $('.sum0r6').hide();
	  $('.sum_r6, .check6').show();
	});




    
});
$(document).ready(function(e) { 

 $("body").bind("swipeleft swiperight", function(evd) {
	 var page = $.mobile.activePage[0];
	 var dir = evd.type;
	 if(page.id == "page1" && dir == "swipeleft")
	  $.mobile.changePage("#page2");
	  if(page.id == "page2" && dir == "swiperight")
	   $.mobile.changePage("#page1"); 
	  if(page.id == "page2" && dir == "swipeleft")
	  $.mobile.changePage("#page3");
	  if(page.id == "page3" && dir == "swiperight")
	  $.mobile.changePage("#page2");
  });

 });
 // Sound effect
 function EvalSound(soundobj) {
  var thissound=document.getElementById(soundobj);
  thissound.play();
}