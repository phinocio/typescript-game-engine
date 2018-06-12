/**
 * Class representing a Canvas.
 */
export default class Canvas 
{
	/**
	 * Create a new Canvas on init.
	 * @param {number} h - Height of the new Canvas in pixels.
	 * @param {number} w  - Width of the new Canvas in pixels.
	 */
	constructor(h, w)
	{
		this.canvas = document.createElement('canvas');
		this.canvas.height = h;
		this.canvas.width = w;
		this.context = this.canvas.getContext('2d');
	}

	/**
	 * Draw the Canvas to the DOM.
	 */
	Draw()
	{
		document.body.appendChild(this.canvas);
	}

	/**
	 * Get the context of the Canvas.
	 * @return {object} - The Canvas context.
	 */
	GetContext()
	{
		return this.context;
	}
}