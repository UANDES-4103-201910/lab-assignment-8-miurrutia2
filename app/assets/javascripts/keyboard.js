$(function(){
	var $write = $('#write'),
		shift = false,
		capslock = false;
	
	$('#kcontainer div').click(function(){
		var $this = $(this),
			character = $this.html(); // If it's a lowercase letter, nothing happens to this variable
		$write.html($write.html() + character);
	});
});