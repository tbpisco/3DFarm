APP.core.taskbarView = (function() {

    var self;

    function taskbarView(){
        self = this;
        this.init();
    };

    taskbarView.prototype.init = function(){
        addTaskbarContainer();
        addHelpButton();
        addMenuTools();
        addMenuAll();
        addMenuTrees();
        addMenuTerrain();
    };    

    var addTaskbarContainer = function(){
        self.view = createTaskbarContainer();
    };

    var createTaskbarContainer = function(){
        return $('<div class="taskbar clear"></div>');
    };

    var addHelpButton = function(){
        self.helpButton = createHelpButton();
        self.view.append(self.helpButton);
    };

    var createHelpButton = function(){
        return $('<span class="button help"><a href="#" class="help"><img src="images/help.png" alt=""></a></span>');
    };

    var addMenuTools = function(){
        self.menuTools = createMenuTools();
        self.view.append(self.menuTools);
    };

    var createMenuTools = function(){

        var html = '';

        html += '<div class="menu tools"><div class="current-tool">';
        html += '    <div data-id="view-tool" class="active"><i class="fas fa-eye"></i></div>';
        html += '    <div data-id="place-tool"><i class="fas fa-plus"></i></div>';
        html += '    <div data-id="rotate-tool"><i class="fas fa-undo-alt"></i></div>';
        html += '    <div data-id="remove-tool"><i class="far fa-trash-alt"></i></div>';
        html += '</div>';
        html += '<ul class="closed">';
        html += '    <li data-id="view-tool" class="active"><a href="#"><i class="fas fa-eye"></i></a></li>';
        html += '    <li data-id="place-tool"><a href="#"><i class="fas fa-plus"></i></a></li>';
        html += '    <li data-id="rotate-tool"><a href="#"><i class="fas fa-undo-alt"></i></a></li>'; 
        html += '    <li data-id="remove-tool"><a href="#"><i class="far fa-trash-alt"></i></a></li>';   
        html += '</ul></div>';

        return $(html);
    };

    var addMenuAll = function(){
        self.menuAll = createMenuAll();
        self.view.append(self.menuAll);
    };

    var createMenuAll= function(){

        var html = '';

        html += '<div class="menu all">';
        html += '   <ul>';
        html += '      <li><a class="trees-menu" href="#"><img src="images/trees.jpg" alt=""></a></li>';  
        html += '      <li><a class="terrain-menu" href="#"><img src="images/terrain.jpg" alt=""></a></li>';  
        html += '   </ul>';
        html += '   </div>';

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
        this.helpButton.on("click", _action);
    };


    var addLanguagesContainer = function(){
        self.languagesView = createLanguageContainer().appendTo(self.view);
    };

    taskbarView.prototype.addLanguageElement = function(_label, _id){
        return createLanguageElement(_label, _id).appendTo(self.languagesView);
    };

    var createLanguageContainer = function(){
        return $('<div class="languages"></div>');
    };

    var createLanguageElement = function(_label, _id){
        return $('<button data-id='+ _id +' class="language-element button"><img src="images/' + _id + '.png"></button>');
    };

    taskbarView.prototype.setupModel = function(_model){

        this.languagesView.html("");

        var languagesList = _model.getLanguages();
        for (var i = 0, iMax = languagesList.length; i < iMax; i++) {
            this.addLanguageElement(languagesList[i].label, languagesList[i].typeID);
        }
        
    };

    taskbarView.prototype.show = function(container){
        $(container).append(this.view);
    };

    taskbarView.prototype.hide = function(){
        $(this.view).remove();
    };

    return taskbarView;

}());