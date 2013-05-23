// JavaScript Document

$(document).ready(function(){
	//$('.nav li:first').html('<img src="img/logo.png" />');
	
	$('.carousel').carousel({
  interval: 3000
})

$('#myTab a').click(function (e) {
  e.preventDefault();
  $(this).tab('show');
})
	
});
