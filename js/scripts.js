// JavaScript Document

$(document).ready(function(){
	
			
$('#da-thumbs > li').each( function() { 
	$(this).hoverdir(); 
});


$('#da-thumbs > li > a').avgrund({
			height: 200,
			holderClass: 'custom',
			showClose: true,
			showCloseText: 'Close',
			enableStackAnimation: true,
			onBlurContainer: '.container',
			template: '<ul><li>$11.00</li><li>Contains Raw Fish</li><li>Shrip, crab stick and avocado rolled with salmon, yellowtail and tuna</li></ul>'
		});

	
});
