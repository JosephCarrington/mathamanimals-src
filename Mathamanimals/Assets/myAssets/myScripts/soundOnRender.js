#pragma strict

var soundObj : Transform;
var previousRenderState : boolean = false;
var canDoStuff : boolean = false;
var canDoStuffCounter : float = 0;

function Start () {

}

function Update () {

	if (!canDoStuff){
		canDoStuffCounter += 1 * Time.deltaTime;
	}
	if (canDoStuffCounter > 1){
		canDoStuff = true;
	}


	if (!previousRenderState && renderer.enabled && canDoStuff){
		Instantiate(soundObj,transform.position,Quaternion.identity);
	}


	previousRenderState = renderer.enabled;
}