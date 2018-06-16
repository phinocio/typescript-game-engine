/**
 * Singleton class Input for handling input for the game.
 * @class Input
 * @param {Input} instance - The instance of the Singleton.
 * @param {Map} keyMap - Mapping of keys for if they're pressed (true) or not (false).
 */
class Input
{
	private static instance: Input;
	private keyMap: Map<string, boolean>;

	constructor()
	{
		this.keyMap = new Map<string, boolean>();
	}

	public GetInstance(): Input
	{
		if (!Input.instance)
		{
			Input.instance = new Input();
		}
		return Input.instance;
	}

	public GetInput(): void
	{
		document.addEventListener('keydown', event => this.keyMap.set(event.key, true));
		document.addEventListener('keyup',   event => this.keyMap.set(event.key, false));
	}

	public Up(): boolean
	{
		return this.keyMap.get('w') || this.keyMap.get('ArrowUp') || false;
	}

	public Right(): boolean
	{
		return this.keyMap.get('d') || this.keyMap.get('ArrowRight') || false;
	}

	public Down(): boolean
	{
		return this.keyMap.get('s') || this.keyMap.get('ArrowDown')  || false;
	}

	public Left(): boolean
	{
		return this.keyMap.get('a') || this.keyMap.get('ArrowLeft')  || false;
	}
}

export default Input;
