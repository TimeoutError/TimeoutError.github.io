var	canvas	= $("#mainCanvas")[0],
	app		= null;
const pdiff	= 16;

class Application
{
	constructor()
	{
		this.gl = canvas.getContext('webgl');
		
		this.gl
		.clearColor(0.0, 0.0, 0.0, 1.0);
	}
	
	mainLoop()
	{
		this.gl.clear(
		this.gl.COLOR_BUFFER_BIT
		);
	}
};

document.addEventListener('DOMContentLoaded', () => {
	$.getScript('handler.js');
	app = new Application();
	app.mainLoop();
});