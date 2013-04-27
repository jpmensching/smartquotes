(function( $ ) {
  $.fn.smartQuotes = function() {
  	return this.find('input').keydown(function(){
  		var input=$(this);
  		setTimeout(function(){
			var value=$(input).val(); //User input
			var newString=[]; //Will contain quote-corrected input
			for(var i=0; i<value.length; i++) //Loop over user input character by character
			{
				//charCodeAt() returns ISO10646 decimal value of argument, not Unicode
				if(value.charCodeAt(i)==8220||value.charCodeAt(i)==8221) //Smart double quotes
					newString.push('"');
				else if(value.charCodeAt(i)==8216||value.charCodeAt(i)==8217) //Smart single quotes
					newString.push("'");
				else if(value.charCodeAt(i)==8211||value.charCodeAt(i)==8212) //Em-dashes
					newString.push('-');
				else if(value.charCodeAt(i)==8230) //Elipses
					newString.push('...');
				else 
					newString.push(value[i]);
			}
			newString=newString.join('');
			$(input).val(newString);
		}, 50); //JS doesn't register input immediately, needs a small delay
  	});
  };
})( jQuery );