import { CANVAS_HEIGHT, CANVAS_WIDTH } from '../Config/Config';

/**
 * Abstract scene class that all scenes will inherit from.
 * @class Scene
 * @param {number} height - The height of the Canvas.
 * @param {number} width - The width of the Canvas.
 * @param {string} sceneName - The name of the Scene (MainMenu/LevelOne etc).
 * @param {HTMLCanvasElement} canvas - The canvas element of the scene.
 * @param {CanvasRenderingContext2D} ctx - The context of the canvas.
 */
abstract class Scene
{
	public sceneName: string;
	protected width: number;
	protected height: number;
	protected canvas: HTMLCanvasElement;
	protected ctx: CanvasRenderingContext2D | null;

	/**
	 * @constructor
	 */
	constructor(sceneName: string)
	{
		this.height = CANVAS_HEIGHT;
		this.width = CANVAS_WIDTH;
		this.sceneName = sceneName;
		this.canvas = document.createElement('canvas');

		try {
			this.ctx = this.canvas.getContext('2d');
		} catch (error) {
			throw new TypeError('Context ctx cannot be null. From: ' + sceneName);
		}
	}

	public clearCanvas(): void
	{
		this.ctx!.clearRect(0, 0, this.width, this.height);
	}

	public drawCanvas(): void
	{
		this.canvas.id = this.sceneName;
		this.canvas.height = this.height;
		this.canvas.width = this.width;
		document.body.appendChild(this.canvas);
	}

	public abstract render(): void;
	public abstract update(): void;
}

export default Scene;
