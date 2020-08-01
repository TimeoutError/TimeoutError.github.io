var	gl = null,
	canvas = $("#mainCanvas")[0];
		
function resize_handler()
{
	gl.canvas.width  = document.body.clientWidth;
	gl.canvas.height = document.body.clientHeight; 
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