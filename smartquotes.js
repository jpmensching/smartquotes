(function( $ ) {
  $.fn.smartQuotes = function() {
	function smartQuotes(elem){
		if (elem.length === 0){
	  		return;
	  	}

	  	var children = elem.children,
	  		count = children.length,
	  		content = elem.is('input') ? elem.value : elem.text(),
	  		contentLength = content.length,
	  		newContent = [],
	  		i,
	  		replacements = {
	  			8220: '"',
	  			8221: '"',
	  			8216: '\'',
	  			8217: '\'',
	  			8211: '-',
	  			8212: '-',
	  			8230: '...'
	  		},
	  		keys = Object.keys(replacements),
	  		keyCode;

	  	//If element has children, call recursively on each
		if(count > 0){
			for(i = 0; i < count; i++){
				smartQuotes($(children[i]));
			}
		}

		//Loop through input and find smart characters
		for(i = 0; i < contentLength; i++){
			keyCode = content.charCodeAt(i);
			if (keys.indexOf(keyCode) !== -1){
				newContent.push(replacements[keyCode]);
			}
			else {
				newContent.push(content[i]);
			}
		}

		if(elem.is('input')){
			elem.val(newContent.join(''));
		}
		else {
			elem.text(newContent.join(''));
		}
	};

	smartQuotes(this);
  };
})( jQuery );