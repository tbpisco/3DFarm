APP.core.VrScreenPresenter = (function() {

    var self;

    function VrScreenPresenter(view){
        self = this;
        this.view = view; 

        window.addEventListener(APP.core.signals.GameEvents.OPEN_VR_SCREEN, this.openScreen.bind(this), false);
    }

    VrScreenPresenter.prototype.setupModel = function(_model){
        model = _model;
        this.view.setupModel(model);
    };

    VrScreenPresenter.prototype.openScreen = function(){
        this.view.addActionMode(closeScreen);
        this.view.show();
    };

    var closeScreen = function(){
        self.view.hide();
    };

    return VrScreenPresenter;

}());