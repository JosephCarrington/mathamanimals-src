using System.Collections;
using System.Collections.Generic;
using UnityEngine;

[RequireComponent(typeof(Animator))]
public class UIUtils : MonoBehaviour {

	// Use this for initialization
	Animator animator;
	void Start () {
		animator = gameObject.GetComponent<Animator> ();
	}
	

	public void TriggerEntryAfterTime(float afterTime) {
		StartCoroutine(TriggerAfterTime(afterTime));
	}

	IEnumerator TriggerAfterTime(float afterTime) {
		yield return new WaitForSeconds (afterTime);
		animator.SetTrigger ("Enter Scene");
	}
}
