using System.Collections;
using System.Collections.Generic;
using UnityEngine;

public class InitializeMatchingUI : MonoBehaviour {

	void DisplayTutorialForAnimal(int animalId) {
		transform.Find ("Tutorial").gameObject.SetActive (true);
		transform.Find ("Tutorial/Card Equality Images").Find (animalId.ToString()).gameObject.SetActive (true);
	}
}
