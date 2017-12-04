using System.Collections;
using System.Collections.Generic;
using UnityEngine;

[RequireComponent(typeof(Animator))]
public class TriggerAnimatorAfterTime : MonoBehaviour {

	Animator animator;
	public TimedTrigger[] triggers;

	// Use this for initialization
	void Start () {
		animator = gameObject.GetComponent<Animator> ();
		foreach (TimedTrigger trigger in triggers) {
			StartCoroutine(TriggerAfterTime(trigger.triggerName, trigger.triggerTime));
		}
	}
	
	public IEnumerator TriggerAfterTime(string triggerName, float triggerTime) {
		yield return new WaitForSeconds (triggerTime);
		animator.SetTrigger (triggerName);
	}
}

[System.Serializable]
public class TimedTrigger {
	public string triggerName;
	public float triggerTime;
}
