APP.core.VrScreenView = (function() {

    var self;

    function VrScreenView(){
        self = this;
        this.addScreenContainer();

    };

    VrScreenView.prototype.addScreenContainer = function(){
        this.view = createScreenContainer();
        
        addTitleContainer();
        addInstructionContainer();
        addQRCode();
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

    var createScreenContainer = function(){
        return $('<div id="vr-screen"><div class="container"></div></div>');
    };

    var createTitleContainer = function(){
        return $('<h1 class="title">VR CARDBOARD</h1>');
    };

    var createInstructionContainer = function(){

        var html = '';
        html += '<p class="instruction">Scan with your smartphone to access the VR Mode.';
        html += '   </p>';
        return $(html);
    };

    var createQRCode = function(){
        return $('<div id="qr-code"></div>');    
    };

    var addQRCode = function(){
        self.qrCode = createQRCode();
        self.view.find(".container").append(self.qrCode);
        self.qrCode.qrcode({width: 256, height:256, text: window.location.href.split("?")[0] + "?vr=true"});
    };

    VrScreenView.prototype.addActionMode = function(_action){
        this.closeButton.on("click", _action);
    };

    VrScreenView.prototype.hide = function(){
        $(this.view).remove();
    };

    VrScreenView.prototype.show = function(){
        $("body").append(this.view);
    };

    return VrScreenView;

}());