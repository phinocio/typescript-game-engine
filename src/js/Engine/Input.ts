/**
 * Singleton class Input to handle input for the Engine.
 * @class Input
 * @param {Input} instance - The instance of the Singleton.
 * @param {boolean} input_up - Whether the up key is pressed.
 * @param {boolean} input_right - Whether the right key is pressed.
 * @param {boolean} input_down - Whether the down key is pressed.
 * @param {boolean} input_left - Whether the let key is pressed.
 */
class Input
{
	private static instance: Input;
	private input_up: boolean = false;
	private input_right: boolean = false;
	private input_down: boolean = false;
	private input_left: boolean = false;

	static GetInstance(): Input
	{
		if (!Input.instance) 
		{
			Input.instance = new Input();
		}
		return Input.instance;
	}

	public GetInput(): void
	{
		document.addEventListener('keydown', event => {
			switch(event.key)
			{
				case "w" || "ArrowUp":
					this.input_up = true;
					break;
				case "d" || "ArrowRight":
					this.input_right = true;
					break;
				case "s" || "ArrowDown":
					this.input_down = true;
					break;
				case "a" || "ArrowLeft":
					this.input_left = true;
					break;
			}
		
		});

		document.addEventListener('keyup', event => {
			switch (event.key) 
			{
				case "w" || "ArrowUp":
					this.input_up = false;
					break;
				case "d" || "ArrowRight":
					this.input_right = false;
					break;
				case "s" || "ArrowDown":
					this.input_down = false;
					break;
				case "a" || "ArrowLeft":
					this.input_left = false;
					break;
			}
		});
	}

	public Up(): boolean
	{
		return this.input_up;
	}

	public Right(): boolean
	{
		return this.input_right;
	}

	public Down(): boolean
	{
		return this.input_down;
	}

	public Left(): boolean
	{
		return this.input_left
	}
}

export default Input;	