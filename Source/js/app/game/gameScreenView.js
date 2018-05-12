APP.game.gameScreenView = (function() {

    var self;

    function gameScreenView(){
        self = this;
        this.init();
    };

    gameScreenView.prototype.init = function(){
        addGameContainer();
    };

    var addGameContainer = function(){
        self.view = createGameContainer();
    };

    var createGameContainer = function(){
        return $('<div id="game-screen"></div>');
    };

    gameScreenView.prototype.getView = function(){
        return this.view;
    };

    gameScreenView.prototype.hide = function(){
        $(this.view).remove();
    };

    gameScreenView.prototype.show = function(){
        $("body").append(this.view);
    };

    return gameScreenView;

}());