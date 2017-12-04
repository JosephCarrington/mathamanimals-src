using System.Collections;
using System.Collections.Generic;
using UnityEngine;
using UnityEngine.SceneManagement;

public class GameController : MonoBehaviour {

	// Use this for initialization
	public static GameController instance = null;

	public static int currentDifficulty = 1;
	public static int currentAnimal = 1;
	public static bool flipFlop = false;

	void Awake() {
		if (instance == null) {
			instance = this;
		} else if (instance != this) {
			Destroy (gameObject);
		}

		DontDestroyOnLoad (gameObject);
	}


	public void SelectDifficulty(int d) {
		currentDifficulty = d;
	}

	public void SelectAnimal (int a) {
		currentAnimal = a;
	}

	public void ToggleFlipFlop() {
		flipFlop = !flipFlop;
	}

	public void SwitchToScene(string sceneName) {
		StartCoroutine(Load(sceneName));
	}

	IEnumerator Load(string sceneName) {
		AsyncOperation asyncLoad = SceneManager.LoadSceneAsync (sceneName);
		while (!asyncLoad.isDone) {
			yield return null;
		}
	}
}
