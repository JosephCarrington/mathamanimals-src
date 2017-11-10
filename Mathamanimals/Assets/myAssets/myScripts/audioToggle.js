#pragma strict

var soundOnMat : Material;
var soundOffMat : Material;

function Start () {

}

function Update () {

}

function OnMouseDown () {

	audioVolume.soundOn = !audioVolume.soundOn;
	audioVolume.SoundUpdate();
	
	if (audioVolume.soundOn){
		renderer.material = soundOnMat;
	}else{
		renderer.material = soundOffMat;
	}

}