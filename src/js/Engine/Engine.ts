import Scene from '../Scenes/Scene';
import Input from './Input';

/**
 * Engine class to control the game and switch between scenes.
 * @class Engine
 * @param {Scene} currentScene - Stores the canvas.
 * @param {boolean} running - Boolean value of if the game is running or not.
 */
class Engine
{
	public running: boolean;
	private currentScene!: Scene;
	private input: Input;

	/**
	 * @constructor
	 */
	constructor()
	{
		this.running = true;
		this.input = Input.GetInstance();
	}

	/**
	 * Loads a scene, destroying the current scene in the process if it exists.
	 * @param scene - The scene to load.
	 */
	public loadScene(scene: Scene): void
	{
		if (typeof this.currentScene !== 'undefined')
		{
			this.destroy(this.currentScene);
		}

		this.currentScene = scene;
		this.currentScene.drawCanvas();
	}

	public gameLoop(): void {
		if (this.running) {
			requestAnimationFrame(() => this.gameLoop());
			this.currentScene.clearCanvas();
			this.getInput();
			this.update();
			this.render();
		} else {
			this.getInput(); // If the game is paused, still check for input, do be able to unpause for example.
		}
	}

	private getInput(): void
	{
		this.input.GetInput();
	}

	private render(): void
	{
		this.currentScene.render();
	}

	private update(): void
	{
		this.currentScene.update();
	}

	/**
	 * Removes the old scene from the DOM when LoadScene() is called.
	 * @param scene - The scene to remove from the DOM.
	 */
	private destroy(scene: Scene): void
	{
		const scn = document.getElementById(scene.sceneName);
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
