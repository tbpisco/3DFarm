APP.core.helpDesktopViewContentBuilder = (function() {

    var self;

    function helpDesktopViewContentBuilder(){
        self = this;
    };

    helpDesktopViewContentBuilder.prototype.build = function(){
    	var content = new APP.core.viewContent();
    	content.content.push( '<h2>Desktop version</h2>');

    	/*
        In desktop to navigate use:
        Rotate: left mouse button + drag
        Zoom: middle mouse button + drag
        Pan: right mouse button + drag
        
        To build:
        You can choose one tool in the bottom menu.
        Use the <img src="images/rotate.png" alt=""> button to rotate floors.
        Use the <img src="images/remove.png" alt=""> button to remove trees.*/
        return content;
    };
   
    return helpDesktopViewContentBuilder;

}());