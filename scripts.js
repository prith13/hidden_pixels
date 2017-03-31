$(document).ready(
	function(){
	$("button").click(function() {
		number = 0;
		var $askUser = prompt("How many squares do you want to fit across the screen?"); // How many squares per side of the grid
		if ($askUser != null) {
			var $num = parseInt($askUser);

		}
	
		var $num = parseInt($askUser);
		number = $num;
	for (var i=0; i<(number*number); i++) {
		$div = $("<div> </div>");
		$("#container").append($div);
		};
	

	$("#container > div").hover(
		function() {
			$(this).addClass("highlight");
		},
		function () {
			$(this).removeClass("highlight");

		}
	);

	em = 16;
	var width = 60*em / number ;
	var height = width;

	function random_color_gen() {
	return '#' + (Math.random().toString(16) + "000000").substring(2,8);
	}; 

	$("#container > div").css("width",width);
	$("#container > div").css("height",height);
	$("#container > div").css("border-color","black");		// not working
	$(".highlight").css("background-color",random_color_gen()); 	// not working
	})
});


