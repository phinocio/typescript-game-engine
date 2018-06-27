import { CANVAS_HEIGHT, CANVAS_WIDTH } from '../../Config/Config';
import Vector2D from '../Geometry/Vector2D';
import Input from '../Input';

abstract class GeometricShape
{
	public abstract pos: Vector2D;
	public abstract vel: Vector2D;
	public abstract acc: Vector2D;

	public abstract height: number;
	public abstract width: number;

	public fillStyle: string = '#000000';
	public strokeStyle: string = '#000000';
	protected input: Input;
	protected ctx: CanvasRenderingContext2D;

	constructor(context: CanvasRenderingContext2D)
	{
		this.ctx = context;
		this.input = Input.GetInstance();
	}

	public abstract render(): void;
	public abstract update(): void;
	public abstract getInput(): void;

	protected checkBounds()
	{
		if (this.pos.getY() + this.height < 0)
		{
			this.pos.setY(CANVAS_HEIGHT + this.height);
		}

		if (this.pos.getX() - this.width > CANVAS_WIDTH)
		{
			this.pos.setX(0 - this.width);
		}

		if (this.pos.getY() - this.height > CANVAS_HEIGHT)
		{
			this.pos.setY(0 - this.height);
		}

		if (this.pos.getX() + this.width < 0)
		{
			this.pos.setX(CANVAS_WIDTH + this.width);
		}
	}
}

export default GeometricShape;
