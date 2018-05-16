(function() {
	
	jQuery.fn.xSetToggled = function(isActived) {   
	   return this.each(function() {
	       if(isActived){
	    	   $(this).addClass("active");
	       } else {
	    	   $(this).removeClass("active");
	       }
	   });
	};

	jQuery.fn.xVisible = function(visible) {   
	   return this.each(function() {
	       if(!visible){
	    	   $(this).addClass("isInvisible");
	       } else {
	    	  $(this).removeClass("isInvisible");
	       }
	   });
	};

	jQuery.fn.xIsVisible = function() {   
	    return !$(this).hasClass("isInvisible");
	};
	
	jQuery.fn.xSetEnabled = function(enabled) {
	   return this.each(function() {
	       if(!enabled){
	    	   $(this).addClass("disabled");
	       } else {
	    	  $(this).removeClass("disabled");
	       }
	   });
	}
	
	jQuery.fn.xSetLabel = function(text) {
		return this.each(function() {
			var $label = $(this).filter("label");
			if ($label.length > 0) {
				//if element has a label field nested inside, set that text
				$label.text(text);
			} else {
				//else remember for the popup hint
				$(this).attr("data-label", text);
			}
	   });
	}
	
	jQuery.fn.xSetSelected = function(selected) {
	   return this.each(function() {
	       if(selected){
	    	   $(this).addClass("selected");
	       } else {
	    	  $(this).removeClass("selected");
	       }
	   });
	}
	
	
})();