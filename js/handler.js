var rHandler = function()
{
	canvas.width  = window.innerWidth - pdiff;
	canvas.height = window.innerHeight - pdiff; 
}

$(window)
.on('resize', rHandler)
.resize();