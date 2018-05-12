APP.game.gameScreenPresenter = (function() {

    var self;

    function gameScreenPresenter(view){
        this.view = view;
        window.addEventListener(APP.core.signals.GameEvents.OPEN_GAME_SCREEN, this.openGameScreen.bind(this), false);
    };

    gameScreenPresenter.prototype.addGameScreen  = function(){

		this.taskbarView    = new APP.core.taskbarView();
    	this.taskbar   = new APP.core.taskbarPresenter(this.taskbarView, this.view.getView());

        this.farmView = new APP.game.farmView();
        this.farm = new APP.game.farmPresenter(this.farmView, this.view.getView());

    };

    gameScreenPresenter.prototype.openGameScreen = function(){
        this.view.show();
        this.addGameScreen();
        this.init();
    };

    gameScreenPresenter.prototype.init = function(){ 
        
        this.taskbar.addTaskbar();
        //this.taskbar.setupModel(this.model);
        /*this.farm.addFarm();
        this.farm.setupModel(this.model);
        this.view.show();*/

        window.addEventListener("resize", this.resizeWindow.bind(this));

        this.resizeWindow();

    };

    gameScreenPresenter.prototype.resizeWindow = function(){
       
    };

    return gameScreenPresenter;
    
}());



