#pragma strict

private var on : boolean = false;
var onObj : Transform;
var offObj : Transform;
var flipFlopExplObj : Transform;

function Start(){
	Globals.FlipFlopFun = false;
	on = false;
}


function OnMouseUp () {
	
	on = !on;
	
	if (on){
		onObj.renderer.enabled = true;
		offObj.renderer.enabled = false;
		Globals.FlipFlopFun = true;
		Instantiate(flipFlopExplObj,Vector3.zero,Quaternion.identity);
	}
	
	if (!on){
		onObj.renderer.enabled = false;
		offObj.renderer.enabled = true;
		Globals.FlipFlopFun = false;
	}
	
}