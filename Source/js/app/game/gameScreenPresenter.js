APP.game.gameScreenPresenter = (function() {

    var self;

    function gameScreenPresenter(view){
        this.view = view;
        this.addGameScreen();
        this.openGameScreen();
    };

    gameScreenPresenter.prototype.addGameScreen  = function(){

		this.taskbarView    = new APP.core.taskbarView();
        this.taskbar   = new APP.core.taskbarPresenter(this.taskbarView, this.view.getView());
        
        this.vrGlassView    = new APP.core.vrGlassView(this.view.getView());
    	this.vrGlass   = new APP.core.vrGlassPresenter(this.vrGlassView, this.view.getView());

        this.farmView = new APP.game.farmView();
        this.farm = new APP.game.farmPresenter(this.farmView, this.view.getView());

    };

    gameScreenPresenter.prototype.openGameScreen = function(){
        this.view.show();
    };

    gameScreenPresenter.prototype.setupModel = function(model){
        this.taskbar.setupModel(model);
        this.farm.setupModel(model);
        this.vrGlass.setupModel(model);

        this.taskbar.addTaskbar();
        this.farm.addFarm();
        this.view.show();
    };

    return gameScreenPresenter;
    
}());



