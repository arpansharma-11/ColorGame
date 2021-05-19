var colors= generateRandomColors(6);
var squares= document.querySelectorAll(".square");
var pickedColor= pickColor();
var colorDisplay=document.getElementById("colorDisplay");
var messageDisplay = document.querySelector("#message");
var h1 = document.querySelector("#h1");
var button1 = document.getElementById("newbutton");
var easyBtn = document.querySelector("#easyBtn");
var hardBtn = document.querySelector("#hardBtn");


button1.addEventListener("click", function(){
	
	colors= generateRandomColors(6);
	for(var i=0; i<squares.length; i++){
	squares[i].style.background=colors[i];
	}
	pickedColor= pickColor();
	colorDisplay.textContent.toggle = pickedColor;
	h1.style.background="steelblue";
	messageDisplay.textContent="Play";
});


colorDisplay.textContent = pickedColor;

for(var i=0; i<squares.length; i++){
	squares[i].style.background=colors[i];

	squares[i].addEventListener("click", function(){
		var clickedColor = this.style.background;
		
		
		if (clickedColor===pickedColor) {
			messageDisplay.textContent="Correct";
			for(var i=0; i<squares.length; i++){
			squares[i].style.background=pickedColor;
			}	
			h1.style.background=pickedColor;
		}else{
			this.style.background="#232323";
			messageDisplay.textContent="Try Again";    
		}
		
	});
}
easyBtn.addEventListener("click" , function(){
	easyBtn.classList.add("selected");
	hardBtn.classList.remove("selected");

	colors= generateRandomColors(3);
	for(var i=0; i<squares.length; i++){
	squares[i].style.background=colors[i];
	}

	pickedColor= pickColor();
	colorDisplay.textContent = pickedColor;
	h1.style.background="steelblue";
	for(var i=3; i<squares.length; i++){
	squares[i].style.background="#232323";
	}
	colorDisplay.textContent = pickedColor;
});

hardBtn.addEventListener("click" , function(){
	easyBtn.classList.remove("selected");
	hardBtn.classList.add("selected");

	colors= generateRandomColors(6);
	for(var i=0; i<squares.length; i++){
	squares[i].style.background=colors[i];
	}
	pickedColor= pickColor();
	colorDisplay.textContent = pickedColor;
	h1.style.background="steelblue";
	colorDisplay.textContent = pickedColor;
});




function pickColor(){
	var random= Math.floor(Math.random() * colors.length);
	return colors[random];
}

function generateRandomColors(num){
	var arr = []
	for(var i=0; i<num; i++){
		arr.push(randomColor())
	}
	return arr;
}

function randomColor(){
	var r = Math.floor(Math.random() * 256);
	var g = Math.floor(Math.random() * 256);
	var b = Math.floor(Math.random() * 256);
	return "rgb(" + r + ", " + g + ", " + b +")";
}	


