APP.core.helpScreenPresenter = (function() {

    var self;

    function helpScreenPresenter(view){
        self = this;
        this.view = view; 

        window.addEventListener(APP.core.signals.GameEvents.OPEN_HELP_SCREEN, this.openHelpScreen.bind(this), false);
    }

    helpScreenPresenter.prototype.setupModel = function(_model){
        model = _model;
        this.view.setupModel(model);
    };

    helpScreenPresenter.prototype.openHelpScreen = function(){
        this.view.addActionMode(closeHelpScreen);
        this.view.show();
    };

    var closeHelpScreen = function(){
        self.view.hide();
    };

    return helpScreenPresenter;

}());