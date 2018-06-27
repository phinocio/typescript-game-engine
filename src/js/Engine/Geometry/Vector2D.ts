class Vector2D
{
	private x: number;
	private y: number;

	constructor(x: number, y: number)
	{
		this.x = x;
		this.y = y;
	}

	public add(v: Vector2D): void
	{
		this.x += v.x;
		this.y += v.y;
	}

	public sub(v: Vector2D): void
	{
		this.x -= v.x;
		this.y -= v.y;
	}

	public scale(n: number): void
	{
		this.x *= n;
		this.y *= n;
	}

	// Magnitude could also be considered the hypotenuse.
	// So basically, pythagorean theorum.
	public mag(): number
	{
		return Math.sqrt((this.x * this.x) + (this.y * this.y));
	}

	public normalize(): void
	{
		const m = this.mag();
		this.x /= m;
		this.y /= m;
	}

	public setX(x: number): void
	{
		this.x = x;
	}

	public setY(y: number): void
	{
		this.y = y;
	}

	public getX(): number
	{
		return this.x;
	}

	public getY(): number
	{
		return this.y;
	}
}

export default Vector2D;
