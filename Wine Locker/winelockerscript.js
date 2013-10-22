$(document).ready(function(event){ 
$('.recommondation-close').on('click', function(event){
  $('.recommondation-warning').hide(1000);

});


$('.recommendedwine').show
	$('.closefirst').click(function(){
	$('.firstrecommended').hide(500);
	$('.closedfirst').show(500);

});

$('.recommendedwine').show
	$('.closesecond').click(function(){
	$('.secondrecommended').hide(500);
	$('.closedsecond').show(500);

});



  $("#star1,#star2,#star3,#star4,#star5").click(function(){
    $(".RateWine").hide(500);
    $('.ratequestions').show(500);
  });

    $("#SaveAnswers").click(function(){
   		$(".Ratequestions").hide(500);
   		$('.RateWine').hide(500);
    	$(".ratingreview").show(500);

});


    $('.expandedwish').hide();
    $('.seemorewishes').click(function(){
    $('.expandedwish').toggle(500);
	

 });

    $('.expandedgift').hide();
    $('.seemoregifts').click(function(){
    $('.expandedgift').toggle(500);
	

 });


 //  $('.firstpurchased').click(function (){
 //      $('.mainwine').toggle($('.firstpurchased'));
 // });

 //  $('.firstpurchased').click(function (){
 //      $('.firstpurchased').replaceWith($('.mainwine'));
      
 // });
});