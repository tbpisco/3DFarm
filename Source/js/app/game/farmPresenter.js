APP.game.farmPresenter = (function() {

    var self;

    function farmPresenter(view){
        this.view = view;
    };

    farmPresenter.prototype.openFarm = function(){
        this.view.show();
        this.init();
    };

    farmPresenter.prototype.init = function(){ 
        

        window.addEventListener("resize", this.resizeWindow.bind(this));

        this.resizeWindow();

    };

    farmPresenter.prototype.resizeWindow = function(){
       
    };

    return farmPresenter;
    
}());



