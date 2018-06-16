import Scene from './Scene';
import Input from '../Engine/Input';
import Circle from '../Engine/Drawing/Circle';

/**
 * @class MainMenu
 * @param {Input} input - The Input singleton to react to specfiic input options. 
 */
class MainMenu extends Scene
{	
	private input: Input;
	private c = new Circle(this.ctx!, 30, 50, 30, 'blue');

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
		this.c.Update();
	}

	public Render(): void {
		this.c.Render();
	}
}

export default MainMenu;