using System.Collections;
using System.Collections.Generic;
using UnityEngine;
using UnityEngine.UI;
using UnityEngine.SceneManagement;

public class GameController : MonoBehaviour {

	// Use this for initialization
	public static GameController instance = null;

	public static int currentDifficulty = 1;
	public static int currentAnimal = 1;
	public static bool flipFlop = false;
	public bool paused = false;

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

	public void Unpause() {
		paused = false;
	}

	public void Pause() {
		paused = true;
	}

	IEnumerator Load(string sceneName) {
		AsyncOperation asyncLoad = SceneManager.LoadSceneAsync (sceneName);
		while (!asyncLoad.isDone) {
			yield return null;
		}
		if (sceneName == "Match" && currentDifficulty == 1) {
			Pause ();
			GameObject.Find ("Canvas").GetComponent<Canvas> ().worldCamera = gameObject.GetComponent<Camera> ();
			GameObject.Find ("Canvas").SendMessage ("DisplayTutorialForAnimal", currentAnimal);
		}
	}
}
