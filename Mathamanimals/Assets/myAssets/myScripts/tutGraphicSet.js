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

var mat1b : Material;
var mat2b : Material;
var mat3b : Material;
var mat4b : Material;
var mat5b : Material;
var mat6b : Material;
var mat7b : Material;
var mat8b : Material;
var mat9b : Material;
var mat10b : Material;

function Start () {

	
	if (matchWinHandler.WhichAnimal == 1){
		renderer.material = mat1;
	}
	
	if (matchWinHandler.WhichAnimal == 2){
		renderer.material = mat2;
	}
	
	if (matchWinHandler.WhichAnimal == 3){
		renderer.material = mat3;
	}
	
	if (matchWinHandler.WhichAnimal == 4){
		renderer.material = mat4;
	}
	
	if (matchWinHandler.WhichAnimal == 5){
		renderer.material = mat5;
	}
	
	if (matchWinHandler.WhichAnimal == 6){
		renderer.material = mat6;
	}
	
	if (matchWinHandler.WhichAnimal == 7){
		renderer.material = mat7;
	}
	
	if (matchWinHandler.WhichAnimal == 8){
		renderer.material = mat8;
	}
	
	if (matchWinHandler.WhichAnimal == 9){
		renderer.material = mat9;
	}
	
	if (matchWinHandler.WhichAnimal == 10){
		renderer.material = mat10;
	}
	
	if (Globals.FlipFlopFun){
		if (matchWinHandler.WhichAnimal == 1){
			renderer.material = mat1b;
		}
	
		if (matchWinHandler.WhichAnimal == 2){
			renderer.material = mat2b;
		}
	
		if (matchWinHandler.WhichAnimal == 3){
			renderer.material = mat3b;
		}
	
		if (matchWinHandler.WhichAnimal == 4){
			renderer.material = mat4b;
		}
	
		if (matchWinHandler.WhichAnimal == 5){
			renderer.material = mat5b;
		}
	
		if (matchWinHandler.WhichAnimal == 6){
			renderer.material = mat6b;	
		}
	
		if (matchWinHandler.WhichAnimal == 7){
			renderer.material = mat7b;
		}
	
		if (matchWinHandler.WhichAnimal == 8){
			renderer.material = mat8b;
		}
	
		if (matchWinHandler.WhichAnimal == 9){
			renderer.material = mat9b;
		}
	
		if (matchWinHandler.WhichAnimal == 10){
			renderer.material = mat10b;
		}
	}


}

