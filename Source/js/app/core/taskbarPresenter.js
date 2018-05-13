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

    taskbarPresenter.prototype.setupModel = function(model){
        this.model = model;
    };

    taskbarPresenter.prototype.hide = function(){
        this.view.hide();
    };

    var openHelpScreen = function(){
    	window.dispatchEvent(window.APP.core.signals.GameEvents.openHelpEvent);
    };

    var selectedTool = function(){
        self.model.setObjectTypeIdSelected($(this).attr("data-id"));
    };

    var selectedRemoveTool = function(){
        self.model.setMenuSelected(-1);
        self.model.setObjectTypeIdSelected(15);
    };

    var selectedRotateTool = function(){
        self.model.setMenuSelected(-1);
        self.model.setObjectTypeIdSelected(16);
    };

    var selectedTreesTool = function(){
        self.model.setMenuSelected(1);
        self.model.setObjectTypeIdSelected(12);
    };

    var selectedTerrainTool = function(){
        self.model.setMenuSelected(2);
        self.model.setObjectTypeIdSelected(0);
    };         

    return taskbarPresenter;
    
}());