using System.Collections;
using System.Collections.Generic;
using UnityEngine;
using UnityEngine.UI;

[RequireComponent(typeof(Text))]
public class FlipFlopButtonController : MonoBehaviour {

	bool flipFlop = false;
	Text flipFlopButtonText;
	public Color onColor;
	Color offColor;

	public void Start() {
		flipFlopButtonText = gameObject.GetComponent<Text> ();
		offColor = flipFlopButtonText.color;
	}
	public bool ToggleFlipFlop() {
		flipFlop = !flipFlop;
		string buttonText = "FLIP FLOP FUN: ";
		buttonText += flipFlop ? "ON" : "OFF";
		flipFlopButtonText.text = buttonText;
		flipFlopButtonText.color = flipFlop ? onColor : offColor;

		return flipFlop;
	}
}
