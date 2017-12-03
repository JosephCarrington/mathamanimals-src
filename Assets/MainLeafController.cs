using System.Collections;
using System.Collections.Generic;
using UnityEngine;

public class MainLeafController : MonoBehaviour {

	public ParticleSystem[] particleSystems;
	public void PlayParticles(int id) {
		particleSystems [id].Play ();

	}
	// Update is called once per frame
	void Update () {
		
	}
}
