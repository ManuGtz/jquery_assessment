$(document).ready(function(){
	
	var numClicks = 0;


	$(".newdiv").on("click", function(){
		numClicks++;
		var $myNewDiv = $("<div class = 'generatedDiv'>" + "Line # " + numClicks + 
			"<br>" + "<button type = 'button' class='color'>" + "Change Color" + "</button>" + "  " +  
			"<button type = 'button' class = 'remove'>" + "Remove" + "</button>" + "</div>" + "<br/>"
			);
	
		$(".sectionclass").append($myNewDiv);
		
// console.log(numClicks);


	$(".color").on("click",  function(){

		 $("div").addClass("colorButton");

	});


	$(".remove").on("click", function(){
		$(this).closest("div").remove();

});
	});	

// 	$(document).on("click", ".color", function(){

// console.log("hello");
// 		$("div").last().addClass(".colorButton");

// 	});






});