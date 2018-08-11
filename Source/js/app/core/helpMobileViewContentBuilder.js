APP.core.helpMobileViewContentBuilder = (function() {

    var self;

    function helpMobileViewContentBuilder(){
        self = this;
    };

    helpMobileViewContentBuilder.prototype.build = function(){
    	var popup = new APP.core.viewContent();
    	popup.content.push( '<h2>To navigate use:</h2>');
        popup.content.push( '<ul>');
        popup.content.push( '<li><b>Rotate:</b> 1 finger + move</li>');
        popup.content.push( '<li><b>Zoom:</b> pinch </li>');
        popup.content.push( '<li><b>Pan:</b> 3 fingers + move</li>');
        popup.content.push( '</ul>');

        popup.content.push( '<h2> To build:</h2>');
        popup.content.push( '<ul>');
        popup.content.push( '<li>Use <img style="width:2em;height:2em;" src="images/trees.jpg" alt=""> button to add trees.</li>');
        popup.content.push( '<li>Use <img style="width:2em;height:2em;" src="images/terrain.jpg" alt=""> button to change tile patch.</li>');
        popup.content.push( '<li>Use <i class="fas fa-undo-alt"></i> button to rotate elements.</li>');
        popup.content.push( '<li>Use <i class="far fa-trash-alt"></i> button to remove elements.</li>');
        popup.content.push( '</ul>');

        return popup;
    };
   
    return helpMobileViewContentBuilder;

}());