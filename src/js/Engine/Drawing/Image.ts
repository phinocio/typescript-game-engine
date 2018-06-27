abstract class Image
{
	public pos = {
		x: 0,
		y: 0
	};
	public width: number;
	public height: number;
	protected src: Image;
	protected ctx: CanvasRenderingContext2D;

	constructor(
		context: CanvasRenderingContext2D,
		x: number,
		y: number,
		width: number,
		height: number,
		src: Image)
	{
		this.ctx = context;
		this.pos.x = x;
		this.pos.y = y;
		this.width = width;
		this.height = height;
		this.src = src;
	}

	public Render(): void
	{
		this.ctx.save();
		this.ctx.restore();
	}

	public Update(): void
	{

	}
}

export default Image;
