APP.core.helpMobileVRViewContentBuilder = (function() {

    var self;

    function helpMobileVRViewContentBuilder(){
        self = this;
    };

    helpMobileVRViewContentBuilder.prototype.build = function(){
    	var content = new APP.core.viewContent();
    	content.content.push( '<h2> Mobile VR version</h2>');

    	/*
        In touch screen devices:
        Rotate: 1 finger
        Zoom: pinch
        Pan: 3 fingers

        To build:
        You can choose one tool in the bottom menu.
        Use the <img src="images/rotate.png" alt=""> button to rotate floors.
        Use the <img src="images/remove.png" alt=""> button to remove trees.*/
        return content;
    };
   
    return helpMobileVRViewContentBuilder;

}());