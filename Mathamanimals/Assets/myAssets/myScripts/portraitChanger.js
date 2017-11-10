#pragma strict

var mat1 : Material;
var mat2 : Material;
var mat3 : Material;
var mat4 : Material;
var mat5 : Material;
var mat6 : Material;
var mat7 : Material;
var mat8 : Material;
var mat9 : Material;
var mat10 : Material;

var candleHandlerScript : candleHandler;


function Update () {

	if (candleHandlerScript.currentCard.y == 1){
		renderer.material = mat1;
	}
	if (candleHandlerScript.currentCard.y == 2){
		renderer.material = mat2;
	}
	if (candleHandlerScript.currentCard.y == 3){
		renderer.material = mat3;
	}
	if (candleHandlerScript.currentCard.y == 4){
		renderer.material = mat4;
	}
	if (candleHandlerScript.currentCard.y == 5){
		renderer.material = mat5;
	}
	if (candleHandlerScript.currentCard.y == 6){
		renderer.material = mat6;
	}
	if (candleHandlerScript.currentCard.y == 7){
		renderer.material = mat7;
	}
	if (candleHandlerScript.currentCard.y == 8){
		renderer.material = mat8;
	}
	if (candleHandlerScript.currentCard.y == 9){
		renderer.material = mat9;
	}
	if (candleHandlerScript.currentCard.y == 10){
		renderer.material = mat10;
	}

}