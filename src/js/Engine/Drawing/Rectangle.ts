import GeometricShape from './GeometricShape';

class Rectangle extends GeometricShape
{
	constructor(
		context: CanvasRenderingContext2D,
		x: number,
		y: number,
		width: number,
		height: number,
		strokeStyle?: string)
	{
		super(context);

		this.pos.x = x;
		this.pos.y = y;
		this.speed = 5;
		this.width = width;
		this.height = height;

		if (strokeStyle)
		{
			this.strokeStyle = strokeStyle;
		}
	}

	public Render(): void
	{
		this.ctx.save();
		this.ctx.beginPath();
		this.ctx.strokeStyle = this.strokeStyle;
		this.ctx.rect(this.pos.x, this.pos.y, this.width, this.height);
		this.ctx.closePath();
		this.ctx.stroke();
		this.ctx.restore();
	}

	public Update(): void
	{
		super.GetInput();
		super.CheckBounds();
		this.pos.x += this.vel.x;
		this.pos.y += this.vel.y;
		this.vel.x = 0;
		this.vel.y = 0;
	}
}

export default Rectangle;
