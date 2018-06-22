import GeometricShape from './GeometricShape';

class Line extends GeometricShape
{
	public origin = {
		x: 0,
		y: 0
	};

	public dest = {
		x: 0,
		y: 0
	};

	constructor(
		context: CanvasRenderingContext2D,
		origin: {x: number, y: number},
		dest: { x: number, y: number },
		strokeStyle?: string)
	{
		super(context);
		this.origin = origin;
		this.dest = dest;

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
		this.ctx.moveTo(this.origin.x, this.origin.y);
		this.ctx.lineTo(this.dest.x, this.dest.y);
		this.ctx.stroke();
		this.ctx.restore();
	}

	public Update(): void
	{
		super.GetInput();
		super.CheckBounds();
		// this.pos.x += this.vel.x;
		// this.pos.y += this.vel.y;
		// this.vel.x = 0;
		// this.vel.y = 0;
	}
}

export default Line;
