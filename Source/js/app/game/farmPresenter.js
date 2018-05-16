APP.game.farmPresenter = (function() {

    var self;

    function farmPresenter(view){
        self = this;
        this.view = view;

        window.addEventListener(APP.core.signals.GameEvents.ENABLE_VR, this.enableVr.bind(this), false);
    };

    farmPresenter.prototype.enableVr = function(){
        this.view.enableVr();
    };

    farmPresenter.prototype.addFarm = function(){
        this.view.show();
        this.init();
    };

    farmPresenter.prototype.setupModel = function(model){
        this.model = model;

        if(this.model.getIsMobile()){
            this.view.addEventsForMobile();
            this.view.init(self.model.getVrEnabled());
        } else {
            this.view.init(false);
        }
    };

    farmPresenter.prototype.init = function(){ 
        

        window.addEventListener("resize", this.resizeWindow.bind(this));

        this.resizeWindow();

        this.intervalLight = setInterval(function(){
            this.view.updateLight(new Date().getHours());        
        }.bind(this),1000*60);

        var tileTypes = [{name:"grama", src:"images/grass1.jpg"},
                            {name:"terra", src:"images/dirt2.jpg"},
                            {name:"caminho", src:"images/path.jpg"},
                            {name:"caminhoCurva", src:"images/path_curva.jpg"},
                            {name:"caminho_1", src:"images/path_1.jpg"},
                            {name:"caminhoCurva_1", src:"images/path_curva_1.jpg"},
                            {name:"pedra", src:"images/182.jpg"},
                            {name:"stone", src:"images/stone1.jpg"},
                            {name:"stonePath", src:"images/path_stone.jpg"},
                            {name:"stonePathCurva", src:"images/path_stone_curva.jpg"},
                            {name:"stonePath_1", src:"images/path_stone_1.jpg"},
                            {name:"stonePathCurva_1", src:"images/path_stone_curva_1.jpg"},
                            {name:"ceu", src:"images/sky_blue.jpg"},
                            ]
        for (var i = 0; i < tileTypes.length; i++) {
            this.view.createTexture(tileTypes[i].name, tileTypes[i].src);
        }

        this.view.addTiles();

        this.view.canvas[0].addEventListener( 'mouseup', onDocumentMouseUp, false );
        this.view.canvas[0].addEventListener( 'mousedown', onDocumentMouseDown, false );
        this.view.canvas[0].addEventListener( 'mousemove', onDocumentMouseMove, false );
    };

    var onDocumentMouseMove = function (event) {

        event.preventDefault();
        mouseMoveUpdate(event.clientX, event.clientY);

    };

    var onDocumentMouseUp = function (event) {

        event.preventDefault();
        mouseUp(event.clientX, event.clientY,event.pageX, event.pageY, event.which);
    };

    var onDocumentMouseDown = function (event) {

        event.preventDefault();
        mouseDown(event.pageX, event.pageY);
    };

    var mouseDown = function (x,y) {

        event.preventDefault();
        self.mouseDownPosX = x;
        self.mouseDownPosY = y;

    };

    var mouseMoveUpdate = function(x,y){

        var mouse = new THREE.Vector2();
        mouse.x = ( x / self.view.canvas[0].width ) * 2 - 1;
        mouse.y = - ( y / self.view.canvas[0].height ) * 2 + 1;

        var intersects = self.view.getIntersects(mouse);

        var typeID = self.model.getObjectTypeIdSelected();

        if(self.model.getMenuSelected() === -1){
          self.view.removeBuildElements();
        }

        if ( intersects.length > 0 ) {

          self.view.removeBuildElements();

           if(self.model.getMenuSelected() !== -1){

              if(typeID <=11){
                
                self.view.addElement("mark");
                self.view.objectMouseMoveUpdate(intersects[ 0 ].object.name,"mark");
                
              } else if(typeID == 12){

                self.view.addElement("pineModel");
                self.view.objectMouseMoveUpdate(intersects[ 0 ].object.name,"pineModel");

              } else if(typeID==13){

                self.view.addElement("multipleRoundTree");
                self.view.objectMouseMoveUpdate(intersects[ 0 ].object.name,"multipleRoundTree");

              } else if(typeID == 14){

                self.view.addElement("roundTree");
                self.view.objectMouseMoveUpdate(intersects[ 0 ].object.name,"roundTree");

              }
            }
        }
    };

    var mouseUp = function (x,y, pageX, pageY, which) {

        event.preventDefault();
        var mouse = new THREE.Vector2();
        mouse.x = ( x / self.view.canvas[0].width ) * 2 - 1;
        mouse.y = - ( y / self.view.canvas[0].height ) * 2 + 1;

        var intersects = self.view.getIntersects(mouse);
        var typeID = self.model.getObjectTypeIdSelected();

        self.mouseUpPosX = pageX;
        self.mouseUpPosY = pageY;

        if(self.mouseDownPosX === self.mouseUpPosX && self.mouseDownPosY === self.mouseUpPosY){
         if (which === 3 || typeID == 16) {
          if ( intersects.length > 0 ) {
            var yAxis = new THREE.Vector3(0,1,0);
            self.view.rotateAroundObjectAxis(intersects[ 0 ].object, yAxis, 90*Math.PI / 180);
          }
        } else {

          if ( intersects.length > 0 ) {
            console.log(intersects[0].object.name);
            if(typeID == 0){
                self.view.updateTerrainTile(intersects[0].object, "materialsGrama");
            } else if(typeID == 1){
                self.view.updateTerrainTile(intersects[0].object, "materialsTerra");
            } else if(typeID == 2){
                self.view.updateTerrainTile(intersects[0].object, "materialsPath");
            } else if(typeID == 3){
                self.view.updateTerrainTile(intersects[0].object, "materialsPathCurva");
            } else if(typeID == 4){
                self.view.updateTerrainTile(intersects[0].object, "materialsPath_1");
            } else if(typeID == 5){
                self.view.updateTerrainTile(intersects[0].object, "materialsPathCurva_1");
            } else if(typeID == 7){
                self.view.updateTerrainTile(intersects[0].object, "materialsStone");
            } else if(typeID == 8){
                self.view.updateTerrainTile(intersects[0].object, "materialsStonePath");
            } else if(typeID == 9){
                self.view.updateTerrainTile(intersects[0].object, "materialsStoneCurva");
            } else if(typeID == 10){
                self.view.updateTerrainTile(intersects[0].object, "materialsStonePath_1");
            } else if(typeID == 11){
                self.view.updateTerrainTile(intersects[0].object, "materialsStonePathCurva_1");
            } else if(typeID == 12){

              console.log("position: " + intersects[0].object.position);
              self.view.addNewModel(intersects[ 0 ].object, "pineModel");

            } else if(typeID == 13){

              self.view.addNewModel(intersects[ 0 ].object, "multipleRoundTree");
              
            } else if(typeID == 14){

              self.view.addNewModel(intersects[ 0 ].object, "roundTree");

            } else if(typeID == 15){

                for (var i = 0; i < intersects.length; i++) {
                if(intersects[ i ].object.name.indexOf("tile-")===-1){

                  if(intersects[i].object.parent.name.indexOf("arvore")!==-1){
                    
                    var name = intersects[i].object.parent.name;
                   // var object = self.scene.getObjectByName(name[1]+"-"+name[2]);
                 /*   if(!object){
                      object = self.scene.getObjectByName(name);
                      self.removeObjectInScene(object);
                    }
                    for (var w = 0; w < object.children.length; w++) {
                       self.removeObjectInScene(object.children[w].name);
                    }*/
                    self.view.removeObjectInScene(name);
                  }
                  
                }

                if(intersects[0].object.name.indexOf("tile-")!==-1){
                  self.view.updateTerrainTile(intersects[0].object, "materialsGrama");
                }
              }
            }
          }
        }
       } 
    
    };

    farmPresenter.prototype.resizeWindow = function(){
       this.view.updateCanvasSize();
    };

    return farmPresenter;
    
}());



