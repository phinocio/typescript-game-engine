import Rectangle from '../Engine/Drawing/Rectangle';
import Scene from './Scene';

/**
 * @class MainMenu
 * @param {Input} input - The Input singleton to react to specfiic input options.
 */
class MainMenu extends Scene
{
	private c = new Rectangle(this.ctx!, 50, 50, 30, 30, 'blue');

	/**
	 * @constructor
	 */
	constructor()
	{
		super('MainMenu');
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
