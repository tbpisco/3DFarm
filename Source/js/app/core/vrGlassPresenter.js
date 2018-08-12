APP.core.vrGlassPresenter = (function() {

    var self;

    function vrGlassPresenter(view){
        this.view = view;
        window.addEventListener(APP.core.signals.GameEvents.ENABLE_VR, this.showVrGlass.bind(this), false);
    };

    vrGlassPresenter.prototype.showVrGlass = function(){
        if(this.model.getVrEnabled()){
            this.view.show();
        } else {
            this.view.hide();
        }
        
    };

    vrGlassPresenter.prototype.setupModel = function(model){
        this.model = model;
    };

    return vrGlassPresenter;
    
}());



