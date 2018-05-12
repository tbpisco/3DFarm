APP.core.model.gameModel = (function() {

    var self;

    function gameModel(){

    };

    var isMobile = false;

    gameModel.prototype.getIsMobile = function(){
        return isMobile;
    };

    gameModel.prototype.setIsMobile = function(value){
        isMobile = value;
    };

    return gameModel;

}());