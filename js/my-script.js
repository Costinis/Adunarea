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

 // Sound effect

     function playAudio(src) {
       if (device.platform == 'Android') {
        src = '/android_asset/www/sound/' + src;
       }
 
     var media = new Media(src, success, error_error);
 
     media.play();
     }
 
     function success() {
     // ignore
     }
 
     function error_error(e) {
     alert('great error');
     alert(e.message);
   }

