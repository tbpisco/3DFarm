APP.core.helpScreenView = (function() {

    var self;

    function helpScreenView(){
        self = this;
    };

    helpScreenView.prototype.addHelpScreenContainer = function(content){
        this.view = createHelpScreenContainer();
        this.innerView = createHelpScreenInnerContainer().appendTo(this.view);
        addTitleContainer();
        addInstructionContainer(content);
        addCloseButton();
    };

    var addTitleContainer = function(){
        self.titleView = createTitleContainer().appendTo(self.innerView);
    };

    var addInstructionContainer = function(content){
        self.instructionView = createInstructionContainer(content).appendTo(self.innerView);
    };

    var addCloseButton = function(){
        self.closeButton = createCloseButton();
        self.innerView.append(self.closeButton);
    };

    var createCloseButton = function(){
        return $('<button class="close-button">OK</button>');
    };

    var createHelpScreenContainer = function(){
        return $('<div id="help-screen"></div>');
    };

    var createHelpScreenInnerContainer = function(){
        return $('<div class="inner-container"></div>');
    };

    var createTitleContainer = function(){
        return $('<div class="title">HELP</div>');
    };

    var createInstructionContainer = function(content){
        var html = '';
        return $(content);
    };

    helpScreenView.prototype.addActionMode = function(_action){
        this.closeButton.on("click", _action);
        $(this.view).on("click", _action);
    };

    helpScreenView.prototype.hide = function(){
        $(this.view).remove();
    };

    helpScreenView.prototype.show = function(){
        $("body").append(this.view);
    };

    return helpScreenView;

}());