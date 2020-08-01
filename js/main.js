var	canvas	= $("#mainCanvas")[0],
	app = null;
const pdiff	= 16; 

class Application
{
	constructor()
	{
		this.gl = canvas.getContext('webgl');
		
		$(window)
		.on('resize', this.rHandler)
		.resize();
		
		this.gl
		.clearColor(0.0, 0.0, 0.0, 1.0);
	}
	
	rHandler()
	{
		if(! this.gl)
		return;
	
		canvas.width  = window.innerWidth - pdiff;
		canvas.height = window.innerHeight - pdiff; 
	}
	
	mainLoop()
	{
		this.gl
		.clear(gl.COLOR_BUFFER_BIT);
	}
};

app = new Application();
app.mainLoop();