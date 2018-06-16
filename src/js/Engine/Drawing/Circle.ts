import {CANVAS_HEIGHT, CANVAS_WIDTH} from '../../Config/Config';
import GeometricShape from './GeometricShape';

class Circle extends GeometricShape
{

	public radius: number;
	public speed: number;

	constructor(
		context: CanvasRenderingContext2D,
		x: number,
		y: number,
		radius: number,
		strokeStyle?: string)
	{
		super(context);

		this.pos.x = x;
		this.pos.y = y;
		this.speed = 5;
		this.radius = radius;

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
		this.ctx.arc(this.pos.x, this.pos.y, this.radius, 0, Math.PI * 2);
		this.ctx.closePath();
		this.ctx.stroke();
		this.ctx.restore();
	}

	public Update(): void
	{
		this.GetInput();
		this.CheckBounds();
		this.pos.x += this.vel.x;
		this.pos.y += this.vel.y;
		this.vel.x = 0;
		this.vel.y = 0;
	}

	public GetInput(): void
	{
		if (this.input.Up())
		{
			this.vel.y = -this.speed;
		}

		if (this.input.Right())
		{
			this.vel.x = this.speed;
		}

		if (this.input.Down())
		{
			this.vel.y = this.speed;
		}

		if (this.input.Left())
		{
			this.vel.x = -this.speed;
		}
	}

	public CheckBounds(): void
	{
		if (this.pos.y - this.radius < 0)
		{
			this.pos.y = CANVAS_HEIGHT - this.radius;
			console.log('hi');
		}
	}
}

export default Circle;
