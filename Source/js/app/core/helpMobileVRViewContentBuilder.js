APP.core.helpMobileVRViewContentBuilder = (function() {

    var self;

    function helpMobileVRViewContentBuilder(){
        self = this;
    };

    helpMobileVRViewContentBuilder.prototype.build = function(){
    	var popup = new APP.core.viewContent();
        popup.content.push( '<p>');
        popup.content.push( 'To navigate use a virtual reality headset.<br><br>');
        popup.content.push( 'To return to the view mode click on <img style="width:2em;height:2em;" src="images/cardboard.svg" alt=""> button.');
        popup.content.push( '</p>');
        return popup;
    };
   
    return helpMobileVRViewContentBuilder;

}());