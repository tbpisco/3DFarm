APP.core.taskbarView = (function() {

    var self;

    function taskbarView(){
        self = this;
        this.init();
    };

    taskbarView.prototype.init = function(){
        addTaskbarContainer();
       // addHelpButton();
        addMenuTools();
        //addMenuAll();
        addMenuTrees();
        addMenuTerrain();
        addEvents();
    };    

    var addTaskbarContainer = function(){
        self.view = createTaskbarContainer();
    };

    var createTaskbarContainer = function(){
        return $('<div class="taskbar clear"></div>');
    };

   /* var addHelpButton = function(){
        self.helpButton = createHelpButton();
        self.view.append(self.helpButton);
    };

    var createHelpButton = function(){
        return $('<a href="#" class="help button"><i class="fas fa-question-circle"></i></a>');
    };*/

    taskbarView.prototype.addMouseCursor = function(){
        this.mouseCursor = createMouseCursor();
        this.view.parent().append(this.mouseCursor);
        document.addEventListener( 'mousemove', updateCursorPosition, false );
    };

    var createMouseCursor = function(){
        var html = '';
        html += '<div class="mouse-cursor">';
        html += '    <div data-id="view-tool" class="active"><i class="fas fa-eye"></i></div>';
        html += '    <div data-id="place-tool"><i class="far fa-edit"></i></div>'; 
        html += '    <div data-id="rotate-tool"><i class="fas fa-undo-alt"></i></div>'; 
        html += '    <div data-id="remove-tool"><i class="far fa-trash-alt"></i></div>'; 
        html += '</div>';
        return $(html);
    };

    var updateCursorPosition = function(event){
        if(!self.mouseCursor)return;
        self.mouseCursor.css("top", event.clientY + "px");
        self.mouseCursor.css("left", event.clientX + "px");
    };

    var changeCursorType = function(mode){
        if(!self.mouseCursor)return;
        self.mouseCursor.find("div").removeClass("active");
        self.mouseCursor.find('div[data-id="' + mode + '"]').addClass("active");
    };

    var addMenuTools = function(){
        self.menuTools = createMenuTools();
        self.view.append(self.menuTools);
    };

    var addEvents = function(){

        self.menuTools.find("li > a").on("click", function(event){

        self.modeSelected = $(this).parent().attr("data-id");

        if(!self.modeSelected)return;

        self.menuTools.find("li").removeClass("active");
        $(this).parent().addClass("active");

        self.menuTools.removeClass("active");
        self.menuTrees.removeClass("active");
        self.menuTerrain.removeClass("active");

        self.menuTools.find(".current-tool div").removeClass("active");
        $(".mouse-cursor div").removeClass("active");

        changeCursorType(self.modeSelected);

        if(self.modeSelected == "cardboard-tool" ){

            self.menuTools.find("ul.menu-view").removeClass("active");

        } else if(self.modeSelected == "remove-tool" || self.modeSelected == "rotate-tool" ){

            self.menuTools.find("ul.menu-build").removeClass("active");
            
        }

        $('.mouse-cursor div[data-id="' + self.modeSelected + '"]').addClass("active");
        $('.current-tool div[data-id="' + self.modeSelected + '"]').addClass("active");

    });

       self.menuTools.find("a.trees-menu").on("click", function(event){
        self.menuTrees.toggleClass("active");
        if(self.menuTrees.hasClass("active")){
          self.menuTools.removeClass("active");
          self.menuTools.find("ul").toggleClass("active");
        } 
        
        if(self.menuTerrain.hasClass("active")){
            self.menuTerrain.removeClass("active");
            self.menuTools.find("ul").toggleClass("active");
        }
    });

    self.menuTools.find("a.terrain-menu").on("click", function(event){
            self.menuTerrain.toggleClass("active");
            if(self.menuTerrain.hasClass("active")){
            self.menuTools.removeClass("active");
            } 
            self.menuTools.find("ul").toggleClass("active");
            if(self.menuTrees.hasClass("active")){
                self.menuTrees.removeClass("active");
                self.menuTools.find("ul").toggleClass("active");
            }
        });
    };

    var createMenuTools = function(){

        var html = '';

        html += '<ul class="menu-mode">';
        html += '    <li><a class="trees-menu" href="#"><img src="images/trees.jpg" alt=""></a></li>';  
        html += '    <li><a class="terrain-menu" href="#"><img src="images/terrain.jpg" alt=""></a></li>';
        html += '    <li data-id="rotate-tool"><a href="#"><i class="fas fa-undo-alt"></i></a></li>'; 
        html += '    <li data-id="remove-tool"><a href="#"><i class="far fa-trash-alt"></i></a></li>';     
        html += '    <li data-id="cardboard-tool"><a href="#"><span><img class="cardboard-icon" src="images/cardboard.svg"</span></a></li>';
        html += '    <li data-id="help-button"><a href="#"><i class="fas fa-question-circle"></i></a></li>'
        html += '</ul>';

        return $(html);
    
    };  

    var addMenuTrees = function(){
        self.menuTrees = createMenuTrees();
        self.view.append(self.menuTrees);
    };

    var createMenuTrees= function(){

        var html = '';

        html += '<div class="menu trees">';
        html += '<ul>';    
        html += '    <li><a href="#" data-id=12><img src="images/pine.jpg" alt=""></a></li>';  
        html += '    <li><a href="#" data-id=13><img src="images/multipleround.jpg" alt=""></a></li>';  
        html += '    <li><a href="#" data-id=14><img src="images/round.jpg" alt=""></a></li>';  
        html += '</ul>';
        html += '</div>';

        return $(html);
    };

    var addMenuTerrain = function(){
        self.menuTerrain = createMenuTerrain();
        self.view.append(self.menuTerrain);
    };

    var createMenuTerrain= function(){

        var html = '';

        html += '<div class="menu terrain">';
        html += '<ul>';
        html += '    <li><a href="#" data-id=0><img src="images/grass1.jpg" alt=""></a></li>';
        html += '    <li><a href="#" data-id=1><img src="images/dirt1.jpg" alt=""></a></li>';
        html += '    <li><a href="#" data-id=2><img src="images/path.jpg" alt=""></a></li>';
        html += '    <li><a href="#" data-id=4><img src="images/path_1.jpg" alt=""></a></li>';
        html += '    <li><a href="#" data-id=3><img src="images/path_curva.jpg" alt=""></a></li>';
        html += '    <li><a href="#" data-id=5><img src="images/path_curva_1.jpg" alt=""></a></li>';
        html += '    <li><a href="#" data-id=7><img src="images/stone.jpg" alt=""></a></li>';
        html += '    <li><a href="#" data-id=8><img src="images/path_stone.jpg" alt=""></a></li>';
        html += '    <li><a href="#" data-id=9><img src="images/path_stone_curva.jpg" alt=""></a></li>';
        html += '    <li><a href="#" data-id=10><img src="images/path_stone_1.jpg" alt=""></a></li>';
        html += '    <li><a href="#" data-id=11><img src="images/path_stone_curva_1.jpg" alt=""></a></li>';
        html += '</ul>';
        html += '</div>';

        return $(html);
    };


    taskbarView.prototype.addActionHelp = function(_action){
        self.menuTools.find('li[data-id="help-button"] a').on("click", _action);
    };

    taskbarView.prototype.addActionVr = function(_action){
        self.menuTools.find('li[data-id="cardboard-tool"] a').on("click", _action);
    };

    taskbarView.prototype.addActionTool = function(_action){
        this.menuTrees.find("a").on("click", _action);
        this.menuTerrain.find("a").on("click", _action);
    };

    taskbarView.prototype.addActionRemove = function(_action){
        this.menuTools.find('li[data-id="remove-tool"] a').on("click", _action);
    };

    taskbarView.prototype.addActionRotate = function(_action){
        this.menuTools.find('li[data-id="rotate-tool"] a').on("click", _action);
    };

    taskbarView.prototype.addActionTrees = function(_action){
        self.menuTools.find("a.trees-menu").on("click", _action);
    };

    taskbarView.prototype.addActionTerrain = function(_action){
       self.menuTools.find("a.terrain-menu").on("click", _action);
    };

    taskbarView.prototype.setupModel = function(_model){
        
    };

    taskbarView.prototype.show = function(container){
        $(container).append(this.view);
    };

    taskbarView.prototype.hide = function(){
        $(this.view).remove();
    };

    return taskbarView;

}());