#pragma strict

var myNum : int = 1;
var candleHandlerScript : candleHandler;
var myNumGraphic : Transform;

function Start () {

}

function Update () {







	if (candleHandlerScript.currentCard.x >= myNum){
		renderer.enabled = true;
	}else{
		renderer.enabled = false;
	}
	
	if (candleHandlerScript.currentCard.x == myNum){
		myNumGraphic.renderer.enabled = true;
	}else{
		myNumGraphic.renderer.enabled = false;
	}
	
	if (matchWinHandler.Mode == 3){
		renderer.enabled = false;
		myNumGraphic.renderer.enabled = false;
	}
	
	
	
	

	if (clickStick.canCelebrate == true || clickStick.canAntiCelebrate == true){
		renderer.enabled = false;
		myNumGraphic.renderer.enabled = false;
	}
}