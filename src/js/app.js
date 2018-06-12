'use strict';
import Canvas from './Canvas';
import Circle from './Circle';

const canvas  = new Canvas(innerHeight, innerWidth);
const ctx = canvas.GetContext();
const circ = new Circle(ctx, 200, 200, 30, 0, Math.PI * 2, 5, 1);
canvas.Draw();

function animate() {
	requestAnimationFrame(animate);
	ctx.clearRect(0, 0, innerWidth, innerHeight);
	circ.Draw();
	circ.Update();
}

animate();