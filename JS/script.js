var myDataRef = new Firebase('https://colorcordination.firebaseio.com/');
var colorRef = myDataRef.child("color");
function addColor (bool) {
	var color = $("#wrapper").css("background-color").slice(4,99);
	color = color.slice(0,color.length-1);
	var r = Number(color.slice(0,color.indexOf(",")));
	color = color.slice(color.indexOf(",")+1,color.length);
	var g = Number(color.slice(1,color.indexOf(",")));
	color = color.slice(color.indexOf(",")+1,color.length);
	var b = Number(color.slice(1,color.length));
	
	if((r != NaN)&(g != NaN)&(b != NaN)){
		myDataRef.push({
			r: r,
			g: g,
			b: b,
			like:bool
		});
	}
	changeColor();
}
function changeColor(){
	var r = Math.floor(Math.random()*254);
	var g = Math.floor(Math.random()*254);
	var b = Math.floor(Math.random()*254);
	var rgb = "rgb(" + r + "," + g + "," + b + ")";
	$("#wrapper").css("background-color",rgb );
	var total = r + g + b;
	if(total > 383){
		$("body").css("color","black");
		$(".button").css("color","black");
		$(".button").hover(
			function(){
				$(this).css("color","white");
			},
			function(){
				$(this).css("color","black");	
			});
	}
	else {
		$("body").css("color","white");	
		$(".button").css("color","white");
		$(".button").hover(
			function(){
				$(this).css("color","black");
			},
			function(){
				$(this).css("color","white");	
			});
	}
}


$(document).ready(function () {
changeColor();
$(function() {
   $(window).keypress(function(e) {
       var key = e.which;
       if(key == 'y'){
       	addColor(0);
       }
       if(key == 'n'){
       	addColor(0);
       }
   });
});


$("#yes").click(function(){
	addColor(0);
	});
$("#no").click(function(){
	addColor(1);
	});
});