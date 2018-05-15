APP.utils.fontSizeManagerUtil = (function() {

	function init(){

        window.addEventListener('resize', updateFontSize);
	    window.addEventListener('orientationchange', updateFontSize);
	    window.addEventListener('deviceorientation', updateFontSize);

	    updateFontSize();
    };

    var updateFontSize = function(){
    	document.getElementsByTagName("body")[0].style.fontSize = (window.innerWidth*0.01 + window.innerHeight*0.01) + "px";
    };

   init();
    
})();