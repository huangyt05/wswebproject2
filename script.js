$('document').ready(function(){
	
	var hoogte = window.innerWidth;

	var cont = [];
	var i;

	var klas = 'column';
	var ide;

	for (i = 0; i < 23; i++) {
		var getal = i + 1;
		var ide = 'col-' + getal; 
		cont[i] = '<div id="' + ide + '" class="' + klas + '"><iframe class="' + ide + '"></iframe></div>';
	}

	var info = '<div id="info"></div>';

	$('body').append(cont);
	$('body').append(info);

	$('#info').append('<iframe src="memo\memo1.html=true=true"></iframe>');

	$('.column').mouseenter(function(){
		$(this).css('height', '100vh');
		$('#info').css('height', '5vh');
	});
	$('.column').mouseleave(function(){
		$(this).css('height', '5vh');
		$('#info').css('height', '100vh');
	});

	$('.column').css('width', 0.9*hoogte);
	$('#info').css('width', 0.9*hoogte);

	$('iframe').each(function(){
		
		var frameClass = $(this).attr('class');

		if (frameClass === 'col-1') {
			// Alice
			var student = ['https://huangyt05.github.io/wswebproject2/memo/memo1.html=true'];
		} else if (frameClass === 'col-2') {
			// Brent
			var student = ['https://huangyt05.github.io/wswebproject2/memo/memo2.html=true'];
		} else if (frameClass === 'col-3') {
			// Carina
			var student = ['https://docs.google.com/document/d/16D0vVJruughseDZZBTaFqpV8bVgNoZUJGIPA4uOP0OI/pub?embedded=true'];
		} else if (frameClass === 'col-4') {
			// Christophe
			var student = ['https://docs.google.com/document/d/1xGwdzCcq4E5YDMeaYuvosTF_1fwJAnKaRughWsvTM7g/pub?embedded=true'];
		} else if (frameClass === 'col-5') {
			// Cyril
			var student = ['https://docs.google.com/document/d/1LjUfOh1RXU0mzgUvO3WpQ8HW9ji7bzJ7rUtPfKFKIrI/pub?embedded=true'];
		} else if (frameClass === 'col-6') {
			// Dirk
			var student = ['https://docs.google.com/document/d/1nv_MVor9U-u_QsOHM6RBInmDbksGtQP19DnMXjT26Kw/pub?embedded=true'];
		} else if (frameClass === 'col-7') {
			// Eduardo
			var student = ['https://docs.google.com/document/d/1UjGmM_gbQXFWec1Ady5b00ABvkRQN-zz-6cETGL2VKU/pub?embedded=true'];
		} else if (frameClass === 'col-8') {
			// Elisabeth
			var student = ['https://docs.google.com/document/d/1U_FUMru_Q_pk9nwkxZ4hnsSlv6DO9HzRrQm_eKMvowY/pub?embedded=true'];
		} else if (frameClass === 'col-9') {
			// Fallon
			var student = ['https://docs.google.com/document/d/1OOLLoNt3AwYK20BabCK3zK9l6w2al1KTI-8aWFOnxMc/pub?embedded=true'];
		} else if (frameClass === 'col-10') {
			// Gustav
			var student = ['https://docs.google.com/document/d/1hzeDldz0VlGR9VkGKXCgKzldzx9CmhyZoS5-uB1m_GI/pub?embedded=true'];
		} else if (frameClass === 'col-11') {
			// Inna
			var student = ['https://docs.google.com/document/d/1a2u_Yx-EnTay-X3MrD3VpAvCyrwxg-G9ZUN3TjKUOqo/pub?embedded=true'];
		} else if (frameClass === 'col-12') {
			// Jan
			var student = ['https://docs.google.com/document/d/1s0esHvLIyP5yzeJfrOCabOzbtMocXVLZplkeCvcOSX0/pub?embedded=true'];
		} else if (frameClass === 'col-13') {
			// Leonie
			var student = ['https://docs.google.com/document/d/15_2woPS8Y_09fqMtr28ADGK30DYtuu80PWS4qu7wyns/pub?embedded=true'];
		} else if (frameClass === 'col-14') {
			// Melisa
			var student = ['https://docs.google.com/document/d/14AgoJrgAi0YVe6uycuTJaRlWiGJsFH18iVuqw7bccsM/pub?embedded=true'];
		} else if (frameClass === 'col-15') {
			// Nico
			var student = ['https://docs.google.com/document/d/1c-1ggT0utewVSXECcnF8DckNmWX_PlhGRIpupJaLbEQ/pub?embedded=true'];
		} else if (frameClass === 'col-16') {
			// Nina
			var student = ['https://docs.google.com/document/d/1eIbpFL4VOnMvWOfuyszNrCuAsi6HH5NHaf6g4MMcTOI/pub?embedded=true'];
		} else if (frameClass === 'col-17') {
			// Rodrigo
			var student = ['https://docs.google.com/document/d/1tWmmsuMmIIvC7Ev74OFCVZsgNqkRwHJ-J87vStJh8fc/pub?embedded=true'];
		} else if (frameClass === 'col-18') {
			// Sophie
			var student = ['https://docs.google.com/document/d/1InDpVelyw0jOI491EHyoXAij-y4ymLJRLXVWYwmhKYA/pub?embedded=true'];
		} else if (frameClass === 'col-19') {
			// Steinarr
			var student = ['https://docs.google.com/document/d/1cuifZ3SltWilNw1oaWYYULY5o_DBxh1GhMF4smesvz8/pub?embedded=true'];
		} else if (frameClass === 'col-20') {
			// Steven
			var student = ['https://docs.google.com/document/d/1pk9e94aClxq-6wF5qzzGg-YOmaH6UxXExWR80iSogaI/pub?embedded=true'];
		} else if (frameClass === 'col-21') {
			// Vera
			var student = ['https://docs.google.com/document/d/1o47Ko8unZyEjTGbi6UYwBDjV190DUp--qBt3VO6F_oo/pub?embedded=true'];
		} else if (frameClass === 'col-22') {
			// Victoria
			var student = ['https://docs.google.com/document/d/13-xZds1kZ59LLfNPB8G-MRO3HtW27HdWrqYxdiA5Wxc/pub?embedded=true'];
		} else if (frameClass === 'col-23') {
			// Zgjim
			var student = ['https://docs.google.com/document/d/103TDJgt6X3uJ9Gx9Z2ysdMQOZTjcr_84HfJB4Hq0zpU/pub?embedded=true'];
		}
		
		$(this).attr('src', student);
        // $(this).attr('data', page);
	});

});