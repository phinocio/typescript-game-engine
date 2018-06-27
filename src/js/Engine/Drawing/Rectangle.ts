import Vector2D from '../Geometry/Vector2D';
import GeometricShape from './GeometricShape';

class Rectangle extends GeometricShape
{

	public acc: Vector2D;
	public pos: Vector2D;
	public vel: Vector2D;

	public height: number;
	public width: number;

	constructor(
		context: CanvasRenderingContext2D,
		acc: Vector2D,
		pos: Vector2D,
		vel: Vector2D,
		width: number,
		height: number,
		strokeStyle?: string)
	{
		super(context);

		this.acc = acc;
		this.pos = pos;
		this.vel = vel;
		this.width = width;
		this.height = height;

		if (strokeStyle)
		{
			this.strokeStyle = strokeStyle;
		}
	}

	public render(): void
	{
		this.ctx.save();
		this.ctx.beginPath();
		this.ctx.strokeStyle = this.strokeStyle;
		this.ctx.rect(this.pos.getX(), this.pos.getY(), this.width, this.height);
		this.ctx.closePath();
		this.ctx.stroke();
		this.ctx.restore();
	}

	public update(): void
	{
		this.getInput();
		super.checkBounds();
		// this.pos.x += this.vel.x;
		// this.pos.y += this.vel.y;
		// this.vel.x = 0;
		// this.vel.y = 0;
	}

	public getInput(): void
	{

	}
}

export default Rectangle;
