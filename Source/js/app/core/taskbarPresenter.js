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
        this.view.addActionTool(selectedTool);
        this.view.addActionRemove(selectedRemoveTool);
        this.view.addActionRotate(selectedRotateTool);

        this.view.addActionTrees(selectedTreesTool);
        this.view.addActionTerrain(selectedTerrainTool);              
    };

    taskbarPresenter.prototype.hide = function(){
        this.view.hide();
    };

    var openHelpScreen = function(){
    	window.dispatchEvent(window.APP.core.signals.GameEvents.openHelpEvent);
    };

    var selectedTool = function(){
        self.objectTypeIdSelected = $(this).attr("data-id");
    };

    var selectedRemoveTool = function(){
        self.objectTypeIdSelected = 15;
    };

    var selectedRotateTool = function(){
        self.objectTypeIdSelected = 16;
    };

    var selectedTreesTool = function(){
        self.objectTypeIdSelected = 12;
    };

    var selectedTerrainTool = function(){
        self.objectTypeIdSelected = 0;
    };         

    return taskbarPresenter;
    
}());