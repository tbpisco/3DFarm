APP.core.helpScreenView = (function() {

    var self;

    function helpScreenView(){
        self = this;
        this.addHelpScreenContainer();

    };

    helpScreenView.prototype.addHelpScreenContainer = function(){
        this.view = createHelpScreenContainer();
        addTitleContainer();
        addInstructionContainer();
        addCloseButton();
    };

    var addTitleContainer = function(){
        self.titleView = createTitleContainer().appendTo(self.view.find(".container"));
    };

    var addInstructionContainer = function(){
        self.instructionView = createInstructionContainer().appendTo(self.view.find(".container"));
    };

    var addCloseButton = function(){
        self.closeButton = createCloseButton();
        self.view.find(".container").append(self.closeButton);
    };

    var createCloseButton = function(){
        return $('<button class="close-button">OK</button>');
    };

    var createHelpScreenContainer = function(){
        return $('<div id="help-screen"><div class="container"></div></div>');
    };

    var createTitleContainer = function(){
        return $('<div class="title">HELP</div>');
    };

    var createInstructionContainer = function(){

        var html = '';
        html += '<div class="instruction">';
        html += '<h1>INSTRUCTIONS</h1>';
        html += '        <h2>To Navigate:</h2>';
        html += '        <div class="block">';
        html += '           In desktop to navigate use:';
        html += '            <ul>';
        html += '                <li>Rotate: left mouse button + drag</li>';
        html += '                <li>Zoom: middle mouse button + drag</li>';
        html += '                <li>Pan: right mouse button + drag</li>';
        html += '            </ul>';
        html += '        </div>';
        html += '        <div class="block">';
        html += '            In touch screen devices:';
        html += '            <ul>';
        html += '                <li>Rotate: 1 finger</li>';
        html += '                <li>Zoom: pinch</li>';
        html += '                <li>Pan: 3 fingers</li>';
        html += '            </ul>';

        html += '        </div>';
        html += '        <h2>To build:</h2>';
        html += '        <div class="block-one">';
        html += '            <p>';
        html += '                You can choose one tool in the bottom menu. <br>';
        html += '                Use the <img src="images/rotate.png" alt=""> button to rotate floors.<br>';
        html += '                Use the <img src="images/remove.png" alt=""> button to remove trees. ';
        html += '            </p>';
        html += '        </div>';
        html += '   </div>';
        return $(html);
    };

    helpScreenView.prototype.addActionMode = function(_action){
        this.closeButton.on("click", _action);
    };

    helpScreenView.prototype.hide = function(){
        $(this.view).remove();
    };

    helpScreenView.prototype.show = function(){
        $("body").append(this.view);
    };

    return helpScreenView;

}());