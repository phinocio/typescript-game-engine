import Scene from './Scene';
import Input from '../Engine/Input';

/**
 * @class MainMenu
 */
class MainMenu extends Scene
{	
	private input: Input;
	private x: number = 50;
	private y: number = 50;
	private speed: number = 5;
	/**
	 * @constructor
	 */
	constructor()
	{
		super("MainMenu");
		this.input = Input.GetInstance();
	}

	public Update(): void
	{
		if (this.input.Up())
		{
			this.y -= this.speed;
		}

		if (this.input.Right()) {
			this.x += this.speed;
		}

		if (this.input.Down()) {
			this.y += this.speed;
		}

		if (this.input.Left()) {
			this.x -= this.speed;
		}
	}

	public Render(): void {
		this.ctx!.beginPath();
		this.ctx!.arc(this.x, this.y, 30, 0, Math.PI * 2);
		this.ctx!.stroke();
	}
}

export default MainMenu;