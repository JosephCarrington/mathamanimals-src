#pragma strict

var moe : boolean = false;
var myrtle : boolean = false;

var previousPlayerTurnMode : boolean;

var leaves : Transform;

var makeEntranceLeaves : boolean = true;

function Start(){
	renderer.material.color.a = -5;
}


function Update () {

	SetAnimalVisibleMoe();
	SetAnimalVisibleMyrtle();


	if (moe && !matchWinHandler.PlayerTurn && !matchWinHandler.MatchCelebration && !matchWinHandler.BananasNumPlayerExists && matchWinHandler.Mode == 2){
		if (renderer.material.color.a < 1.2){
			renderer.material.color.a += 2 * Time.deltaTime;			
		}
		if (renderer.material.color.a > .2 && makeEntranceLeaves){
			makeEntranceLeaves = false;
			Instantiate (leaves, Vector3(transform.position.x,transform.position.y,transform.position.z - 1),Quaternion.identity);
		}
	}
	if (moe && matchWinHandler.PlayerTurn){
		if (renderer.material.color.a > -4){
			renderer.material.color.a -= 2 * Time.deltaTime;
		}
		makeEntranceLeaves = true;
	}
	
	
	
	if (myrtle && !matchWinHandler.PlayerTurn && !matchWinHandler.MatchCelebration && !matchWinHandler.BananasNumPlayerExists && matchWinHandler.Mode == 3){
		if (renderer.material.color.a < 1.2){
			renderer.material.color.a += 2 * Time.deltaTime;			
		}
		if (renderer.material.color.a > .2 && makeEntranceLeaves){
			makeEntranceLeaves = false;
			Instantiate (leaves,Vector3(transform.position.x,transform.position.y,transform.position.z - 1),Quaternion.identity);
		}
	}
	if (myrtle && matchWinHandler.PlayerTurn){
		if (renderer.material.color.a > -4){
			renderer.material.color.a -= 2 * Time.deltaTime;
		}
		makeEntranceLeaves = true;
	}
	
	
	
	if (!previousPlayerTurnMode && matchWinHandler.PlayerTurn){
		Instantiate (leaves,Vector3(transform.position.x,transform.position.y,transform.position.z - 1),Quaternion.identity);
	}
	
	
	
	previousPlayerTurnMode = matchWinHandler.PlayerTurn;

}

function SetAnimalVisibleMoe(){
	if (moe && matchWinHandler.Mode == 2){
		if (renderer.material.color.a > 0){
		matchWinHandler.AnimalVisible = true;
		}
		if (renderer.material.color.a <= 0){
			matchWinHandler.AnimalVisible = false;
		}
	
//		print(matchWinHandler.AnimalVisible);
	}
	
}

function SetAnimalVisibleMyrtle(){
	if (myrtle && matchWinHandler.Mode == 3){
		if (renderer.material.color.a > 0){
			matchWinHandler.AnimalVisible = true;
		}
		if (renderer.material.color.a <= 0){
			matchWinHandler.AnimalVisible = false;
		}
	
//		print(matchWinHandler.AnimalVisible);
	}
	
}