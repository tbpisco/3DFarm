APP.core.taskbarPresenter = (function() {

    var self;

    function taskbarPresenter(view, container){
        self = this;
        this.view = view;
        this.container = container;
   }

    taskbarPresenter.prototype.addTaskbar = function(){
    	this.view.show(this.container);
    	this.view.addActionHelp(openHelpScreen);        
    };

    taskbarPresenter.prototype.hide = function(){
        this.view.hide();
    };

    var openHelpScreen = function(){
    	window.dispatchEvent(window.APP.core.signals.GameEvents.openHelpEvent);
    };

    return taskbarPresenter;
    
}());