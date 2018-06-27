import Rectangle from '../Engine/Drawing/Rectangle';
import Vector2D from '../Engine/Geometry/Vector2D';
import Scene from './Scene';

/**
 * @class MainMenu
 */
class MainMenu extends Scene
{
	private c = new Rectangle(this.ctx!, new Vector2D(0, 0), new Vector2D(0, 0), new Vector2D(0, 0), 30, 30, 'blue');

	/**
	 * @constructor
	 */
	constructor()
	{
		super('MainMenu');
	}

	public update(): void
	{
		this.c.update();
	}

	public render(): void {
		this.c.render();
	}
}

export default MainMenu;
