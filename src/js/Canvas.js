export default class Canvas 
{
	constructor(h,w)
	{
		this.canvas = document.createElement('canvas');
		this.canvas.height = h;
		this.canvas.width = w;
	}

	Draw()
	{
		document.body.appendChild(this.canvas);
		console.log(this.canvas);
	}
}