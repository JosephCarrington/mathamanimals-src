using System.Collections;
using System.Collections.Generic;
using UnityEngine;

public class MatchTutorialController : MonoBehaviour {

	void Unpause() {
		GameObject.Find ("Main Camera").SendMessage ("Unpause");
	}
}
