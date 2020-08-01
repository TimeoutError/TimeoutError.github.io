var	gl = null,
	canvas = $("#mainCanvas");
		
function resize_handler()
{
	canvas.width  = window.innerHeight;
	canvas.height = window.innerWidth; 
}

window.onload = function()
{
	gl = canvas.getContext('webgl');
	alert(`GL object: ${gl}`);
	document.addEventListener('resize', resize_handler);
	
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