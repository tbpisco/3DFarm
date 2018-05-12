APP.game.farmView = (function() {

    var self;

    function farmView(){
        self = this;
        this.init();
    };

    farmView.prototype.init = function(){
        addFarmContainer();
    };

    var addFarmContainer = function(){
        self.view = createFarmContainer();
    };

    var createFarmContainer = function(){
        return $('<div id="farm"></div>');
    };

    farmView.prototype.getView = function(){
        return this.view;
    };

    farmView.prototype.hide = function(){
        $(this.view).remove();
    };

    farmView.prototype.show = function(){
        $("body").append(this.view);
    };

    return farmView;

}());