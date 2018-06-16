import Input from '../Input';

abstract class GeometricShape
{

	protected ctx: CanvasRenderingContext2D;
	protected input: Input;

	public pos = {
		x: 0,
		y: 0
	}

	public vel = {
		x: 0,
		y: 0
	}

	constructor(context: CanvasRenderingContext2D)
	{
		this.ctx = context;
		this.input = Input.GetInstance();
	}

	protected fillStyle: string   = '#000000';
	protected strokeStyle: string = '#000000';

	abstract Render(): void;
	abstract Update(): void;
	abstract CheckBounds(): void;
	abstract MoveUp(): void;
	abstract MoveRight(): void;
	abstract MoveDown(): void;
	abstract MoveLeft(): void;
}

export default GeometricShape;