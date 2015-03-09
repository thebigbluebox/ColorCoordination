var myDataRef = new Firebase('https://colorcordination.firebaseio.com/');
var colorRef = myDataRef.child("color");
var firstplayed = true;
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
	changeText(r,g,b);
}

function changeText(r, g, b, first){
	
	var hexr = r.toString(16);
	var hexg = g.toString(16);
	var hexb = b.toString(16);
	var colorhex = "#" + hexr + hexg + hexb;
	//$("#colorname").stop(true,true).hide("fast");
	if(firstplayed == true){
		$("#colorname").fadeOut(1000, function(){
			$("#colorname").text(colorhex.toUpperCase()).fadeIn(500);
		});
		firstplayed = false;
	}else{
		$("#colorname").fadeOut(200, function(){
			$("#colorname").text(colorhex.toUpperCase()).fadeIn(200);
		});
	}
	//$("#colorname").stop(true,true).show("fast");
}
var shown = false;
function hideBlur() {
	if(shown == false){
		shown = true;
		$("#blurbbutton").stop(true,true).hide("fast");
		$("#blurb").stop(true,true).show("fast");
	}
	else{
		shown = false;
		$("#blurbbutton").stop(true,true).show("fast");
		$("#blurb").stop(true,true).hide("fast");	
	}
}

$(document).ready(function () {
changeColor();

$(function() {
   $("body").keypress(function(e) {
       var key = e.which;
       if(key == 121){ //y
       	addColor(0);
       }
       if(key == 110){ //n
       	addColor(1);
       }
   });
});

$("#blurbbutton").click(function(){
	hideBlur();
});

$("body").click(function(){
	if(shown == true){
	hideBlur();
}
});
$('#blurbbutton, body').on('click', function(e){
    e.stopPropagation();
});
$("#yes").click(function(){
	addColor(0);
	});
$("#no").click(function(){
	addColor(1);
	});
});