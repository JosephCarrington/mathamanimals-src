#pragma strict
 
var myNum : int = 1;

private var myCurrentNum : int = 0;

var candleHandlerScript : candleHandler;
var numClickUpScript : numClickUp;

var forHowManyCandles : boolean = false;

function Start () {

}

function Update () {

	if (candleHandlerScript.currentCard.x >= myNum){
		renderer.enabled = true;
	}else{
		renderer.enabled = false;
	}
	
	myCurrentNum = candleHandlerScript.currentCard.y;
	
	
    var tm : TextMesh = gameObject.GetComponent(TextMesh);

	var title = ""; 
	var question =  "?";
		
		
	if (myCurrentNum == 0){
		tm.text = title + question;
	}
		
	if (myCurrentNum != 0 ){
		tm.text = title + myCurrentNum;
	}
	
	if (clickStick.canCelebrate == true || clickStick.canAntiCelebrate == true){
		//renderer.enabled = false;
	}
	
	if (forHowManyCandles && !clickStick.canCelebrate &&  !clickStick.AntiCelebrateShow){
		renderer.enabled = false;
	}

}