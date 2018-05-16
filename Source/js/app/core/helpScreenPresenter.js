APP.core.helpScreenPresenter = (function() {

    var self;

    function helpScreenPresenter(view){
        self = this;
        this.view = view; 

        window.addEventListener(APP.core.signals.GameEvents.OPEN_HELP_SCREEN, this.openHelpScreen.bind(this), false);
    }

    helpScreenPresenter.prototype.setupModel = function(_model){
        this.model = _model;
    };

    helpScreenPresenter.prototype.openHelpScreen = function(){
        var content;
        if(this.model.getIsMobile()){
            content = new APP.core.helpMobileViewContentBuilder();
        }else {
            content = new APP.core.helpDesktopViewContentBuilder();
        }
        this.view.addHelpScreenContainer(new APP.core.viewContentBuilder().build(content));
        this.view.addActionMode(closeHelpScreen);
        this.view.show();
    };

    var closeHelpScreen = function(){
        self.view.hide();
    };

    return helpScreenPresenter;

}());