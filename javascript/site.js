$(document).ready(function() {
	var pageDateText = $(".page-date")[0].innerText.trim().replace(/\//g,'.');	
	if(Date.now() < Date.parse($(".page-date")[0].innerText.trim())) {
		$(".page-date")[0].innerText = 'Nächster Termin am ' + pageDateText;
	} else {
		$(".page-date")[0].innerText = 'Termin am ' + pageDateText; 
	}
})