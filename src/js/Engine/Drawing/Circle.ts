import { CANVAS_HEIGHT, CANVAS_WIDTH } from '../../Config/Config';
import GeometricShape from './GeometricShape';

/**
 * @class Circle
 * @param {radius} - Radius of the Circle.
 */
class Circle extends GeometricShape
{

	public radius: number;

	/**
	 *
	 * @param {CanvasRenderingContext2D} context - The context of the current scene's canvas.
	 * @param {number} x - The X position of the Circle.
	 * @param {number} y - The Y position of the Circle.
	 * @param {number} radius - The Radius of the Circle.
	 * @param {string} strokeStyle - StrokeStyle of the Circle.
	 */
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
		super.GetInput();
		this.CheckBounds();
		this.pos.x += this.vel.x;
		this.pos.y += this.vel.y;
		this.vel.x = 0;
		this.vel.y = 0;
	}

	/**
	 * Checks if the circle is at the bounds of the canvas, overriding the parent method.
	 * @Override
	 * @returns {void}
	 */
	protected CheckBounds(): void
	{
		if (this.pos.y + this.radius < 0)
		{
			this.pos.y = CANVAS_HEIGHT + this.radius;
		}

		if (this.pos.x - this.radius > CANVAS_WIDTH)
		{
			this.pos.x = 0 - this.radius;
		}

		if (this.pos.y - this.radius > CANVAS_HEIGHT)
		{
			this.pos.y = 0 - this.radius;
		}

		if (this.pos.x + this.radius < 0)
		{
			this.pos.x = CANVAS_WIDTH + this.radius;
		}
	}
}

export default Circle;
