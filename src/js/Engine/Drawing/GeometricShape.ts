import { CANVAS_HEIGHT, CANVAS_WIDTH } from '../../Config/Config';
import Input from '../Input';

abstract class GeometricShape
{
	public pos = {
		x: 0,
		y: 0
	};

	public vel = {
		x: 0,
		y: 0
	};

	public speed: number = 0;
	public height: number = 0;
	public width: number = 0;

	protected fillStyle: string = '#000000';
	protected strokeStyle: string = '#000000';
	protected input: Input;
	protected ctx: CanvasRenderingContext2D;

	constructor(context: CanvasRenderingContext2D)
	{
		this.ctx = context;
		this.input = Input.GetInstance();
	}

	public abstract Render(): void;
	public abstract Update(): void;

	public GetInput(): void {
		if (this.input.Up()) {
			this.vel.y = -this.speed;
		}

		if (this.input.Right()) {
			this.vel.x = this.speed;
		}

		if (this.input.Down()) {
			this.vel.y = this.speed;
		}

		if (this.input.Left()) {
			this.vel.x = -this.speed;
		}
	}

	protected CheckBounds()
	{
		if (this.pos.y + this.height < 0)
		{
			this.pos.y = CANVAS_HEIGHT + this.height;
		}

		if (this.pos.x - this.width > CANVAS_WIDTH)
		{
			this.pos.x = 0 - this.width;
		}

		if (this.pos.y - this.height > CANVAS_HEIGHT)
		{
			this.pos.y = 0 - this.height;
		}

		if (this.pos.x + this.width < 0)
		{
			this.pos.x = CANVAS_WIDTH + this.width;
		}
	}
}

export default GeometricShape;
