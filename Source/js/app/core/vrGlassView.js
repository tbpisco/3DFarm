APP.core.vrGlassView = (function() {

    var self;

    function vrGlassView(_holder){
        self = this;
        self.holder = _holder;
        this.init();
    };

    vrGlassView.prototype.init = function(){
        addContainer();
    };

    var addContainer = function(){
        self.view = createContainer();
    };

    var createContainer = function(){
        return $('<div class="vr"></div>');
    };

    vrGlassView.prototype.getView = function(){
        return this.view;
    };

    vrGlassView.prototype.hide = function(){
        $(this.view).remove();
    };

    vrGlassView.prototype.show = function(){
        $(self.holder).append(this.view);
    };

    return vrGlassView;

}());