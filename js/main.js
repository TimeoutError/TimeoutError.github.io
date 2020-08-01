var	gl = null,
	canvas = $("#mainCanvas")[0];
	
const pdiff = 4;
		
function resize_handler()
{
	gl.canvas.width  = window.innerHeight - pdiff;
	gl.canvas.height = window.innerWidth - pdiff; 
}

window.onload = function()
{
	gl = canvas.getContext('webgl');
	
	$(window)
	.on('resize', resize_handler)
	.resize();
	
	if(gl)
	{
		gl.clearColor(1.0, 1.0, 0.0, 1.0);
		gl.clear(gl.COLOR_BUFFER_BIT);
	}
	else
	{
		// Browser doesn't support WebGL.
	}
	
};