import Input from './Input';
import Scene from '../Scenes/Scene';

/**
 * Engine class to control the game and switch between scenes.
 * @class Engine
 * @param {Scene} currentScene - Stores the canvas.
 * @param {boolean} running - Boolean value of if the game is running or not.
 */
class Engine
{
	private currentScene!: Scene;
	private input: Input;
	public running: boolean;

	/**
	 * @constructor
	 */
	constructor()
	{
		this.running = true;
		this.input = Input.GetInstance	();
		console.log();
	}

	/**
	 * Loads a scene, destroying the current scene in the process if it exists.
	 * @param scene - The scene to load.
	 */
	public LoadScene(scene: Scene): void
	{
		if (typeof this.currentScene !== 'undefined')
		{
			this.Destroy(this.currentScene);
		}

		this.currentScene = scene;
		this.currentScene.DrawCanvas();
	}

	private Input(): void
	{
		this.input.GetInput();
	}

	private Render(): void
	{
		this.currentScene.Render();
	}

	private Update(): void
	{
		this.currentScene.Update();
	}

	public GameLoop(): void
	{
		if (this.running)
		{
			requestAnimationFrame(() => this.GameLoop());
			this.currentScene.ClearCanvas();
			this.Input();
			this.Update();
			this.Render();
		} else {
			this.Input(); // If the game is paused, still check for input.
		}
	}

	/**
	 * Removes the old scene from the DOM when LoadScene() is called.
	 * @param scene - The scene to remove from the DOM.
	 */
	private Destroy(scene: Scene): void
	{
		let scn = document.getElementById(scene.sceneName);
		if (scn !== null)
		{
			scn.remove();
		} 
		else 
		{
			// *Shouldn't* happen, but just in case...
			throw new TypeError('Variable scn cannot be null! From: ' + scene.sceneName);
		}
	}
}

export default Engine;