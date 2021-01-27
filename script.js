$('document').ready(function(){
	
	var hoogte = window.innerWidth;

	var cont = [];
	var i;

	var klas = 'column';
	var clas = 'image';
	var ide;

	for (i = 0; i < 12; i++) {
		var getal = i + 1;
		var ide = 'col-' + getal; 
		cont[i] = '<div id="' + ide + '" class="' + klas + '"><iframe class="' + ide + '"></iframe></div>';
	}
	
	for (i = 13; i < 23; i++) {
		var getal = i + 1;
		var ide = 'col-' + getal; 
		cont[i] = '<div id="' + ide + '" class="' + clas + '"><iframe class="' + ide + '"></iframe></div>';
	}
	var info = '<div id="info"></div>';
	var expand = '<div id="expand"></div>';

	$('body').append(cont);
	$('body').append(info);

	$('#info').append('<iframe src="memo/memo1.html"></iframe>');
	$('#info').append('<iframe src="img/IMG_0145.PNG"></iframe>');

	$('.column').mouseenter(function(){
		$(this).css('height', '50vh');
		$('#info').css('height', '5vh');
		$('.image').css('transform', 'translate(0, 0)');
		$('#expand').css('transform', 'translate(120px, 0)');
	});
	$('.column').mouseleave(function(){
		$(this).css('height', '5vh');
		$('#info').css('height', '50vh');
		$('.image').css('transform', 'translate(0, 0)');
		$('#expand').css('transform', 'translate(120px, 0)');
	});

	// $('.image').mouseenter(function(){
	// 	$(this).css('left', '20vw');
	// 	$('#expand').css('right', '20vw');
	// 	$(this).css('transform', 'translate(0, 0)');
	// 	$('#expand').css('transform', 'translate(120px, 0)');
	// });
	// $('.image').mouseleave(function(){
	// 	$(this).css('right', '20vw');
	// 	$('#expand').css('left', '20vw');
	// 	$(this).css('height', '50vh');
	// 	$('#expand').css('height', '5vh');
	// });
	$('.column').css('width', 0.5*hoogte);
	$('#info').css('width', 0.5*hoogte);

	$('iframe').each(function(){
		
		var frameClass = $(this).attr('class');

		if (frameClass === 'col-1') {
			var student = ['memo/memo1.html'];
		} else if (frameClass === 'col-2') {
			var student = ['memo/memo2.html'];
		} else if (frameClass === 'col-3') {
			var student = ['memo/memo3.html'];
		} else if (frameClass === 'col-4') {
			var student = ['memo/memo4.html'];
		} else if (frameClass === 'col-5') {
			var student = ['memo/memo5.html'];
		} else if (frameClass === 'col-6') {
			var student = ['memo/memo6.html'];
		} else if (frameClass === 'col-7') {
			var student = ['memo/memo7.html'];
		} else if (frameClass === 'col-8') {
			var student = ['memo/memo8.html'];
		} else if (frameClass === 'col-9') {
			var student = ['memo/memo9.html'];
		} else if (frameClass === 'col-10') {
			var student = ['memo/memo10.html'];
		} else if (frameClass === 'col-11') {
			var student = ['memo/memo11.html'];
		} else if (frameClass === 'col-12') {
			var student = ['img/IMG_0145.PNG'];
		} else if (frameClass === 'col-13') {
			var student = ['img/IMG_0163.JPEG'];
		} else if (frameClass === 'col-14') {
			var student = ['img/IMG_0176.JPG'];
		} else if (frameClass === 'col-15') {
			var student = ['img/IMG_0177.JPG'];
		} else if (frameClass === 'col-16') {
			var student = ['img/IMG_0178.JPG'];
		} else if (frameClass === 'col-17') {
			var student = ['img/IMG_4713.JPEG'];
		} else if (frameClass === 'col-18') {
			var student = ['img/IMG_4715.JPG'];
		} else if (frameClass === 'col-19') {
			var student = ['img/IMG_4725.JPG'];
		} else if (frameClass === 'col-20') {
			var student = ['img/IMG_4729.JPEG'];
		} else if (frameClass === 'col-21') {
			var student = ['img/IMG_4757.JPEG'];
		} else if (frameClass === 'col-22') {
			var student = ['img/IMG_4790.JPG'];
		} else if (frameClass === 'col-23') {
			var student = ['img/IMG_4835.JPEG'];
		}
		for(i = 0; i < 23; i++){
			if(cont>12){
				$('body').append(image);
				$('body').append(expand);
				$(this).attr('position', 'static');
				$(this).attr('left', '20vw');
			}
		}
		$(this).attr('src', student);
        // $(this).attr('data', page);
	});

});