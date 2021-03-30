$('document').ready(function(){
	
	var hoogte = window.innerWidth;

	var cont = [];
	var i;

	var klas = 'column';
	var clas = 'image';
	var ide;
	var count = 1;

	
	for (i = 0; i < 11; i++) {
		var getal = i + 1;
		var ide = 'col-' + getal; 
		cont[i] = '<div id="' + ide + '" class="' + klas + '"><iframe class="' + ide + '"></iframe></div>';

	}
	
	for (i = 11; i < 22; i++) {
		var getal = i + 1;
		var ide = 'col-' + getal; 
		cont[i] = '<div id="' + ide + '" class="' + clas + '"><iframe class="' + ide + '"></iframe></div>';
	}
	var info = '<div id="info"></div>';
	var expand = '<div id="expand"></div>';
	var container = '<div id="container"></div>';
	var containerTwo = '<div id="containerTwo"></div>';
	$('body').append(info);
	
	$('body').append(container);
	$('body').append(containerTwo);
	
	for (i = 11; i < 22; i++) {
		$('#container').append(cont[i]);
	}
	for (i = 0; i < 11; i++) {
		$('#containerTwo').append(cont[i]);
	}
	//$('#info').append('<iframe src="memo/memo1.html"></iframe>');
	//$('#info').append('<iframe src="img/IMG_0145.PNG"></iframe>');
	$('#container').css('display', 'flex');
	$('#container').css('width', '100vw');
	$('#container').css('position', 'absolute');
	$('#container').css('flex-direction', 'column');
	$('#container').css('justify-content', 'center');
	$('#containerTwo').css('z-index', '1');
	$('#container').css('z-index', '0');
	$('#containerTwo').css('display', 'flex');
	$('#containerTwo').css('width', '100vw');
	$('#containerTwo').css('position', 'absolute');
	$('#containerTwo').css('flex-direction', 'column');
	$('#containerTwo').css('justify-content', 'center');

	$('.column').mouseenter(function(){
		$(this).css('height', '50vh');
		$('#info').css('height', '5vh');
		$(this).css('transform', 'translate(-25vh, -50px)');
		$('info').css('transform', 'translate(0, 0)');
		for(i=0;i<22;i++){
			var idid = 'col-'+i;
			if(this.id == idid){
				count=i;
				count+=11;
				var imageId = 'col-'+ count;
				$('#'+imageId+'').each(function(){
					$(this).css('height', '50vh');
					$('#expand').css('height', '5vh');
					$(this).css('transform', 'translate(25vh, 0)');
					$('#expand').css('transform', 'translate(0, 0)');
				});
				;
			}
		}
	});
	$('.column').mouseleave(function(){
		$(this).css('height', '5vh');
		$('#info').css('height', '50vh');
		$(this).css('transform', 'translate(0, 0)');
		$('info').css('transform', 'translate(-25vh, -50px)');
		for(i=0;i<23;i++){
			var idid = 'col-'+i;
			if(this.id == idid){
				count=i;
				count+=11;
				var imageId = 'col-'+ count;
				$('#'+imageId+'').each(function(){
					$(this).css('height', '5vh');
					$('#expand').css('height', '50vh');
					$(this).css('transform', 'translate(0, 0)');
					$('#expand').css('transform', 'translate(25vh, 0)');
				});
				;
			}
		}
	});
	// $('.image').each(function(){
	// 	$(this).css('height', '50vh');
	// 	$('#expand').css('height', '5vh');
	// 	$(this).css('transform', 'translate(25vh, 0)');
	// 	$('#expand').css('transform', 'translate(0, 0)');
	// });
	// $('.image').each(function(){
	// 	$(this).css('height', '5vh');
	// 	$('#expand').css('height', '50vh');
	// 	$(this).css('transform', 'translate(0, 0)');
	// 	$('#expand').css('transform', 'translate(25vh, 0)');
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
		for(i = 0; i < 22; i++){
			if(cont>11){
				$('body').append(image);
				$('body').append(expand);
			}
		}
		$(this).attr('src', student);
		// $(this).attr('data', page);
	});

});