import {CANVAS_HEIGHT, CANVAS_WIDTH} from '../Config';

/**
 * Abstract scene class that all scenes will inherit from.
 * @class Scene 
 * @param height - The height of the Canvas.
 * @param width - The width of the Canvas.
 * @param sceneName - The name of the Scene (MainMenu/LevelOne etc).
 */
abstract class Scene
{
	protected height: number;
	protected width: number;
	readonly sceneName: string;

	/**
	 * @constructor
	 */
	constructor(sceneName: string)
	{
		this.height = CANVAS_HEIGHT;
		this.width = CANVAS_WIDTH;
		this.sceneName = sceneName;
	}

	public DrawCanvas(): void
	{
		let canvas = document.createElement('canvas');
		canvas.id = this.sceneName;
		canvas.height = this.height;
		canvas.width = this.width;
		document.body.appendChild(canvas);
	}

	abstract Render(): void;
	abstract Update(): void;
}

export default Scene;