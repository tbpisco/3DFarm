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

    var objectTypeIdSelected = 0;

    gameModel.prototype.getObjectTypeIdSelected = function(){
        return objectTypeIdSelected;
    };

    gameModel.prototype.setObjectTypeIdSelected = function(value){
        objectTypeIdSelected = value;
    };

    var menuSelected = -1;

    gameModel.prototype.getMenuSelected = function(){
        return menuSelected;
    };

    gameModel.prototype.setMenuSelected = function(value){
        menuSelected = value;
    };

    return gameModel;

}());