// var result="";
// var slidess=[section1, section2, section3];
// for (var i=0; i< slidess.length; i++){
// 	var result=slidess[i];

// }
$(document).ready(function(){

		$('#square3').click(function(evt){
      // $(this).addClass('.active');
      // $('.active3').css('backgroundColor','white');
		evt.preventDefault();
		firstsquare=$(this).attr('firstsquare');
		secondsquare=$(this).attr('secondsquare');
		thirdsquare=$(this).attr('thirdsquare');

		$('#'+firstsquare ).css('display', 'none');
		$('#'+secondsquare ).css('display', 'none');
		$('#'+thirdsquare ).fadeIn();

	}),
	$('#square1').click(function(){
     // $('.active1').css('backgroundColor','white');
		
		firstsquare=$(this).attr('firstsquare');
		secondsquare=$(this).attr('secondsquare');
		thirdsquare=$(this).attr('thirdsquare');

		$('#'+firstsquare ).fadeIn();
		$('#'+secondsquare ).css('display', 'none');
		$('#'+thirdsquare ).css('display', 'none');
	}),
	$('#square2').click(function(){
    // $('.active2').css('backgroundColor','white');
		firstsquare=$(this).attr('firstsquare');
		secondsquare=$(this).attr('secondsquare');
		thirdsquare=$(this).attr('thirdsquare');

		$('#'+firstsquare ).css('display', 'none');
		$('#'+secondsquare ).fadeIn();
		$('#'+thirdsquare ).css('display', 'none');
	});



	$('#menu-mob').on('click', function(){
			$('#mobile-menu').slideToggle(300);
		});
	$('.mainme').on('click', function(){
			$('#mobile-menu').fadeOut();
		})


	

})

