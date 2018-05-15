APP.game.farmView = (function() {

    var self;

    var TAMANHO_TILE = 100;

    function farmView(){
        self = this;
        self.VRViewEnabled = false;

        this.init();
    };

    farmView.prototype.init = function(){
        addFarmContainer();
        addCanvasElement();
    };

    var addFarmContainer = function(){
        self.view = createFarmContainer();
    };

    var createFarmContainer = function(){
        return $('<div id="farm"></div>');
    };

    var addCanvasElement = function(){
        self.canvas = createCanvasElement();
        self.view.append(self.canvas);
    };

    var createCanvasElement = function(){
        return $('<canvas id="farm-canvas"></canvas>');
    };

    var addRendererWebGL = function(){
        self.renderer = new THREE.WebGLRenderer({canvas: self.canvas[0], antialias:true});
        self.renderer.sortObjects = false;
        self.renderer.setClearColor(0x000000, 0);
        self.renderer.autoClear = false;
    };

    var addScene = function(){
        self.scene = new THREE.Scene();
    };

    var addCamera = function(){
        if(self.VRViewEnabled){

            self.camera = new THREE.PerspectiveCamera(45, self.widthApp / self.heightApp, 0.1, 20000);
            self.camera.position.set( 200,700,800);
            //self.camera.position.set(100,10,10);

            
        } else {
            self.camera = new THREE.PerspectiveCamera(45, self.widthApp / self.heightApp, 0.1, 20000);
            self.camera.position.set( 200,700,800);

        }
        
        self.scene.add(self.camera);
    };

    farmView.prototype.enableVr = function(){
      this.VRViewEnabled = !this.VRViewEnabled;
      resetCameraControls();
      addCamera();
      addControls();
      if(self.VRViewEnabled)self.effect = new THREE.StereoEffect(self.renderer);
      self.updateCanvasSize();
    };

    var resetCameraControls = function(){
        self.scene.remove(self.camera);
        self.camera = null;
        self.controls = null;
        self.effect = null;
    };

    var addLight = function(){
        self.light = new THREE.AmbientLight( 0xffffff ); // soft white light
        self.updateLight(); 
        self.scene.add( self.light );

        self.spotLight = new THREE.SpotLight( 0xffffff );
        self.spotLight.position.set( 100, 2000, 100 );
        self.spotLight.scale.set( 10, 10, 10 );
        self.spotLight.intensity = 0.3;
        self.spotLight.castShadow = true;

        self.spotLight.shadow.mapSize.width = self.widthApp;
        self.spotLight.shadow.mapSize.height = self.heightApp;

        self.spotLight.shadow.camera.near = 500;
        self.spotLight.shadow.camera.far = 4000;
        self.spotLight.shadow.camera.fov = 30;

        self.scene.add( self.spotLight );
    };

    var addEvents = function(){
        self.raycaster = new THREE.Raycaster();
    };

    var addControls = function(){
        if(self.VRViewEnabled){
            self.controls = new THREE.DeviceOrientationControls(self.camera);
           // self.controls = new THREE.OrbitControls( self.camera , self.canvas[0]);
        } else {
            self.controls = new THREE.OrbitControls( self.camera , self.canvas[0]);
        }
        self.controls.damping = 0.2;
    };

    farmView.prototype.addEventsForMobile = function(){
        window.addEventListener( 'orientationchange', self.updateCanvasSize, false );
        window.addEventListener( 'deviceorientation', self.updateCanvasSize, false );
    };

    var onProgressObject = function ( xhr ) {
          if ( xhr.lengthComputable ) {
            var percentComplete = xhr.loaded / xhr.total * 100;
            console.log( Math.round( percentComplete, 2 ) + '% downloaded' );
          }
    };

    var onError = function ( xhr ) { };

    var addModels = function(){

        THREE.Loader.Handlers.add( /\.dds$/i, new THREE.DDSLoader() );

        var roundTree = new THREE.MTLLoader()
          .setPath( 'images/trees/' )
          .load( 'roundtree.mtl', function ( materials ) {
            materials.preload();
            new THREE.OBJLoader()
              .setMaterials( materials )
              .setPath( 'images/trees/' )
              .load( 'roundtree.obj', function ( object ) {
                 self.roundTree = object;
              }, onProgressObject, onError );
          } );

          var multipleRoundTree = new THREE.MTLLoader()
          .setPath( 'images/trees/' )
          .load( 'multipleroundtree.mtl', function ( materials ) {
            materials.preload();
            new THREE.OBJLoader()
              .setMaterials( materials )
              .setPath( 'images/trees/' )
              .load( 'multipleroundtree.obj', function ( object ) {
                 self.multipleRoundTree = object;
              }, onProgressObject, onError );
          } );


          var pine = new THREE.MTLLoader()
          .setPath( 'images/trees/' )
          .load( 'pinetree.mtl', function ( materials ) {
            materials.preload();
            new THREE.OBJLoader()
              .setMaterials( materials )
              .setPath( 'images/trees/' )
              .load( 'pinetree.obj', function ( object ) {
                 self.pineModel = object;
              }, onProgressObject, onError );
          } );
    };

    farmView.prototype.addTiles = function(){

        this.objects = [];

        this.matrixTiles = [];
        for (var i = 0; i < 15; i++) {
          this.matrixTiles.push([]);
        };

        for (var i = 0; i < this.matrixTiles.length; i++) {
          for (var j = 0; j < this.matrixTiles.length; j++) {
             this.matrixTiles[i].push(0);
          }
        };

        var materialsTerra = [this.pedra,this.pedra,this.terra,this.pedra,this.pedra,this.pedra];
          var materialsGrama = [this.pedra,this.pedra,this.grama,this.pedra,this.pedra,this.pedra];
          var materialsPath = [this.pedra,this.pedra,this.caminho,this.pedra,this.pedra,this.pedra];
          var materialsPathCurva = [this.pedra,this.pedra,this.caminhoCurva,this.pedra,this.pedra,this.pedra];
          var materialsPath_1 = [this.pedra,this.pedra,this.caminho_1,this.pedra,this.pedra,this.pedra];
          var materialsPathCurva_1 = [this.pedra,this.pedra,this.caminhoCurva_1,this.pedra,this.pedra,this.pedra];

          var materialsStone = [this.pedra,this.pedra,this.stone,this.pedra,this.pedra,this.pedra];
          var materialsStonePath = [this.pedra,this.pedra,this.stonePath,this.pedra,this.pedra,this.pedra];
          var materialsStoneCurva = [this.pedra,this.pedra,this.stonePathCurva,this.pedra,this.pedra,this.pedra];
          var materialsStonePath_1 = [this.pedra,this.pedra,this.stonePath_1,this.pedra,this.pedra,this.pedra];
          var materialsStonePathCurva_1 = [this.pedra,this.pedra,this.stonePathCurva_1,this.pedra,this.pedra,this.pedra];

          this.materialsTerra = materialsTerra;
          this.materialsGrama = materialsGrama;
          this.materialsPath = materialsPath;
          this.materialsPathCurva = materialsPathCurva;
          this.materialsPath_1 = materialsPath_1;
          this.materialsPathCurva_1 = materialsPathCurva_1;

          this.materialsStone = materialsStone;
          this.materialsStonePath = materialsStonePath;
          this.materialsStoneCurva = materialsStoneCurva;
          this.materialsStonePath_1 = materialsStonePath_1;
          this.materialsStonePathCurva_1 = materialsStonePathCurva_1;


          var tamanhoTile = TAMANHO_TILE;
          for (var i = 0; i < this.matrixTiles.length; i++) {
            for (var j = 0; j < this.matrixTiles[i].length; j++) {
              if(this.matrixTiles[i][j] ==1){
                var tileVazio = new THREE.Mesh(new THREE.BoxGeometry(tamanhoTile, 40, tamanhoTile), new THREE.MeshFaceMaterial( this.materialsTerra ));
                tileVazio.overdraw = true;
                tileVazio.position.x = -15*tamanhoTile/2 +tamanhoTile*i;
                tileVazio.position.z = -15*tamanhoTile/2 +tamanhoTile*j;
                tileVazio.name = "tile-" + i +j;
                this.objects.push(tileVazio);
                this.scene.add(tileVazio);
              }
              else if(this.matrixTiles[i][j] == 2){
                tilePath = new THREE.Mesh(new THREE.BoxGeometry(tamanhoTile, 40, tamanhoTile), new THREE.MeshFaceMaterial( this.materialsPath));
                tilePath.overdraw = true;
                tilePath.position.x = -15*tamanhoTile/2 +tamanhoTile*i;
                tilePath.position.z = -15*tamanhoTile/2 +tamanhoTile*j;
                tilePath.name = "tile-" + i +j;
                this.objects.push(tilePath);
                this.scene.add(tilePath);
              }
              else if(this.matrixTiles[i][j] == 3){
                tilePathCurva = new THREE.Mesh(new THREE.BoxGeometry(tamanhoTile, 40, tamanhoTile), new THREE.MeshFaceMaterial( this.materialsPathCurva));
                tilePathCurva.overdraw = true;
                tilePathCurva.position.x = -15*tamanhoTile/2 +tamanhoTile*i;
                tilePathCurva.position.z = -15*tamanhoTile/2 +tamanhoTile*j;
                tilePathCurva.name = "tile-" + i +j;
                this.objects.push(tilePathCurva);
                this.scene.add(tilePathCurva);
              }
              else if(this.matrixTiles[i][j] == 4){
                tilePath_1 = new THREE.Mesh(new THREE.BoxGeometry(tamanhoTile, 40, tamanhoTile), new THREE.MeshFaceMaterial( this.materialsPath_1));
                tilePath_1.overdraw = true;
                tilePath_1.position.x = -15*tamanhoTile/2 +tamanhoTile*i;
                tilePath_1.position.z = -15*tamanhoTile/2 +tamanhoTile*j;
                tilePath_1.name = "tile-" + i +j;
                this.objects.push(tilePath_1);
                this.scene.add(tilePath_1);
              }
              else if(this.matrixTiles[i][j] == 5){
                tilePathCurva_1 = new THREE.Mesh(new THREE.BoxGeometry(tamanhoTile, 40, tamanhoTile), new THREE.MeshFaceMaterial( this.materialsPathCurva_1));
                tilePathCurva_1.overdraw = true;
                tilePathCurva_1.position.x = -15*tamanhoTile/2 +tamanhoTile*i;
                tilePathCurva_1.position.z = -15*tamanhoTile/2 +tamanhoTile*j;
                tilePathCurva_1.name = "tile-" + i +j;
                this.objects.push(tilePathCurva_1);
                this.scene.add(tilePathCurva_1);
              }
              else if(this.matrixTiles[i][j] == 7){
                tileStone = new THREE.Mesh(new THREE.BoxGeometry(tamanhoTile, 40, tamanhoTile), new THREE.MeshFaceMaterial( this.materialsStone));
                tileStone.overdraw = true;
                tileStone.position.x = -15*tamanhoTile/2 +tamanhoTile*i;
                tileStone.position.z = -15*tamanhoTile/2 +tamanhoTile*j;
                tileStone.name = "tile-" + i +j;
                this.objects.push(tileStone);
                this.scene.add(tileStone);
              }
              else if(this.matrixTiles[i][j] == 8){
                tileStonePath= new THREE.Mesh(new THREE.BoxGeometry(tamanhoTile, 40, tamanhoTile), new THREE.MeshFaceMaterial( this.materialsStonePath));
                tileStonePath.overdraw = true;
                tileStonePath.position.x = -15*tamanhoTile/2 +tamanhoTile*i;
                tileStonePath.position.z = -15*tamanhoTile/2 +tamanhoTile*j;
                tileStonePath.name = "tile-" + i +j;
                this.objects.push(tileStonePath);
                this.scene.add(tileStonePath);
              }
              else if(this.matrixTiles[i][j] == 9){
                tileStoneCurva= new THREE.Mesh(new THREE.BoxGeometry(tamanhoTile, 40, tamanhoTile), new THREE.MeshFaceMaterial( this.materialsStoneCurva));
                tileStoneCurva.overdraw = true;
                tileStoneCurva.position.x = -15*tamanhoTile/2 +tamanhoTile*i;
                tileStoneCurva.position.z = -15*tamanhoTile/2 +tamanhoTile*j;
                tileStoneCurva.name = "tile-" + i +j;
                this.objects.push(tileStoneCurva);
                this.scene.add(tileStoneCurva);
              }
              else if(this.matrixTiles[i][j] == 10){
                tileStonePath_1= new THREE.Mesh(new THREE.BoxGeometry(tamanhoTile, 40, tamanhoTile), new THREE.MeshFaceMaterial( this.materialsStonePath_1));
                tileStonePath_1.overdraw = true;
                tileStonePath_1.position.x = -15*tamanhoTile/2 +tamanhoTile*i;
                tileStonePath_1.position.z = -15*tamanhoTile/2 +tamanhoTile*j;
                tileStonePath_1.name = "tile-" + i +j;
                this.objects.push(tileStonePath_1);
                this.scene.add(tileStonePath_1);
              }
              else if(this.matrixTiles[i][j] == 11){
                tileStoneCurva_1= new THREE.Mesh(new THREE.BoxGeometry(tamanhoTile, 40, tamanhoTile), new THREE.MeshFaceMaterial( this.materialsStoneCurva_1));
                tileStoneCurva_1.overdraw = true;
                tileStoneCurva_1.position.x = -15*tamanhoTile/2 +tamanhoTile*i;
                tileStoneCurva_1.position.z = -15*tamanhoTile/2 +tamanhoTile*j;
                tileStoneCurva_1.name = "tile-" + i +j;
                this.objects.push(tileStoneCurva_1);
                this.scene.add(tileStoneCurva_1);
              }
              else{
                tileGrama = new THREE.Mesh(new THREE.BoxGeometry(tamanhoTile, 40, tamanhoTile), new THREE.MeshFaceMaterial( this.materialsGrama ));
                tileGrama.overdraw = true;
                tileGrama.position.x = -15*tamanhoTile/2 +tamanhoTile*i;
                tileGrama.position.z = -15*tamanhoTile/2 +tamanhoTile*j;
                tileGrama.name = "tile-" + i +j;
                this.objects.push(tileGrama);
                this.scene.add(tileGrama);
              }
            };
          };

        createMark();
        createSky();          
          
    };

    var createSky = function(){
        var geometry = new THREE.SphereGeometry( 3000, 32, 32 );
        var material = self.ceu;
        material.side = THREE.DoubleSide;
        var sky = new THREE.Mesh( geometry, material );
        sky.position.y = 1000;
        self.scene.add( sky );
    };

    var createMark = function(){
        self.mark = new THREE.Mesh(new THREE.PlaneBufferGeometry (TAMANHO_TILE, TAMANHO_TILE), new THREE.MeshBasicMaterial( { color: 0xffffff , opacity:0.3} ));
        self.mark.material.opacity =0.5;
        self.mark.material.transparent = true;
        self.mark.position.y = 21;
        self.mark.name = "mark";
        self.mark.rotation.x = (270 * Math.PI / 180).toFixed(2);
    };

    farmView.prototype.createTexture = function(name, src){
       /* self[name] = new THREE.MeshPhongMaterial( {
            map: THREE.ImageUtils.loadTexture(src)
        } );*/

        var texture = new THREE.TextureLoader().load( src );
        self[name] = new THREE.MeshPhongMaterial( { map: texture } );
    };

    farmView.prototype.updateLight = function(hour){
        if(hour === 0){
          self.light.color.setHex( 0x333333);
        } else if(hour === 1 || hour === 23){
          self.light.color.setHex( 0x444444);
        } else if(hour === 2 || hour === 22){
          self.light.color.setHex( 0x555555);
        } else if(hour === 3 || hour === 21){
          self.light.color.setHex( 0x666666);
        } else if(hour === 4 || hour === 20){
          self.light.color.setHex( 0x777777);
        } else if(hour === 5 || hour === 19){
          self.light.color.setHex( 0x888888);
        } else if(hour === 6 || hour === 18){
          self.light.color.setHex( 0x999999);
        } else if(hour === 7 || hour === 17){
          self.light.color.setHex( 0xaaaaaa);
        } else if(hour === 8 || hour === 16){
          self.light.color.setHex( 0xbbbbbb);
        } else if(hour === 9 || hour === 15){
          self.light.color.setHex( 0xcccccc);
        } else if(hour === 10 || hour === 14){
          self.light.color.setHex( 0xdddddd);
        } else if(hour === 11 || hour === 13){
          self.light.color.setHex( 0xeeeeee);
        } else if(hour === 12){
          self.light.color.setHex( 0xffffff);
        }  
    };

    farmView.prototype.getIntersects = function(mouse){
        this.raycaster.setFromCamera( mouse, this.camera );
        return this.raycaster.intersectObjects( this.objects );
    };

    farmView.prototype.removeBuildElements = function(){
        self.scene.remove(self.scene.getObjectByName("mark"));
        self.scene.remove(self.pineModel);
        self.scene.remove(self.multipleRoundTree);
        self.scene.remove(self.roundTree);
    };

    farmView.prototype.addElement = function(name){
        self.scene.add(self[name]);
    };

    farmView.prototype.objectMouseMoveUpdate = function(name,object)
    {
        self[object].position.x = self.scene.getObjectByName(name).position.x;
        self[object].position.z = self.scene.getObjectByName(name).position.z;
        for (var i = 0; i <   self[object].children.length; i++) {
            self[object].children[i].material.opacity = 0.5;
            self[object].children[i].material.transparent = true;
        }
    };

    farmView.prototype.updateCanvasSize = function(){
       self.widthApp = self.view.width();
       self.heightApp = self.view.height();

       self.renderer.setSize(self.widthApp, self.heightApp);

       if(self.VRViewEnabled){
            self.camera.aspect = self.widthApp/2 / self.heightApp;
       } else {
            self.camera.aspect = self.widthApp / self.heightApp;
       }
       
       self.camera.updateProjectionMatrix();
    };

    var animate = function() {
        requestAnimationFrame(animate);
        self.renderer.clear();

        if(self.VRViewEnabled){
            
            self.effect.render(self.scene, self.camera);

        } else {

            self.renderer.render(self.scene, self.camera);

        }
        
        
        
        self.controls.update();
    };

    farmView.prototype.updateTerrainTile = function(object, material){
        if(object.name.indexOf("tile-")!==-1)object.material = new THREE.MeshFaceMaterial(self[material]);
    };

    farmView.prototype.addNewModel = function(object, model){
        var newModel = self[model].clone();
        var materialClone;
        var meshClone;
        newModel.name = "arvore-" + new Date().getTime();
        newModel.opacity = 1;
        newModel.position.set( object.position.x,  object.position.y,  object.position.z);

        self.objects.push(newModel);
        self.scene.add( newModel );
    };

    farmView.prototype.rotateAroundObjectAxis = function(object, axis, radians) {
      rotObjectMatrix = new THREE.Matrix4();
      rotObjectMatrix.makeRotationAxis(axis.normalize(), radians);
      object.matrix.multiply(rotObjectMatrix);
      object.rotation.setFromRotationMatrix(object.matrix);
    };

    farmView.prototype.removeObjectInScene = function(name)
    {
      var object = this.scene.getObjectByName(name);
      if(object){
         console.log('remove: ' + name);
         for (var i = 0; i < this.objects.length; i++) {
           if(this.objects[i].name == name){
              this.objects.splice(i, 1);
           }
         }
        this.scene.remove( object );
      }
    };

    farmView.prototype.getView = function(){
        return this.view;
    };

    farmView.prototype.hide = function(){
        $(this.view).remove();
    };

    farmView.prototype.show = function(){
        $("body").append(this.view);
        self.widthApp = self.view.width();
        self.heightApp = self.view.height();
        addRendererWebGL();
        addScene();
        addCamera();
        addLight();
        addEvents();
        addControls();
        addModels();
        animate();
    };

    return farmView;

}());   