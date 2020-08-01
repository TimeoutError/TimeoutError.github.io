var	gl = null,
	canvas = $("#mainCanvas")[0];
	
const pdiff = 16;
		
function resize_handler()
{
	gl.canvas.width  = window.innerWidth - pdiff;
	gl.canvas.height = window.innerHeight - pdiff; 
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