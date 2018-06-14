import Scene from "../Scenes/Scene";

/**
 * Engine class to control the game and switch between scenes.
 * @class Engine
 * @param currentScene - Stores the canvas.
 * @param running - Boolean value of if the game is running or not.
 */
class Engine
{
	private currentScene: Scene;
	public running: boolean;

	/**
	 * @constructor
	 */
	constructor()
	{
		this.running = true;
	}

	/**
	 * Loads a scene, destroying the current in in the process if it exists.
	 * @param scene - The scene to load.
	 */
	public LoadScene(scene: Scene)
	{
		if (typeof this.currentScene !== 'undefined')
		{
			this.Destroy(this.currentScene);
		}

		this.currentScene = scene;
		this.currentScene.DrawCanvas();
	}

	public Render()
	{
		this.currentScene.Render();
	}

	public Update()
	{
		this.currentScene.Update();
	}

	/**
	 * Removes the old scene from the DOM when LoadScene() is called.
	 * @param scene - The scene to remove from the DOM.
	 */
	private Destroy(scene: Scene)
	{
		let x = document.getElementById(scene.sceneName);
		x.remove();
		scene = null;
	}
}

export default Engine;