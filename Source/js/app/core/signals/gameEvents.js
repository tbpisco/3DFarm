(function(global) {
	
	var GameEvents = global.APP.core.signals.GameEvents = {};

	GameEvents.OPEN_HELP_SCREEN = "GameEvents.OPEN_HELP_SCREEN";
	GameEvents.openHelpEvent = new CustomEvent(APP.core.signals.GameEvents.OPEN_HELP_SCREEN);

	GameEvents.OPEN_VR_SCREEN = "GameEvents.OPEN_VR_SCREEN";
	GameEvents.openVrEvent = new CustomEvent(APP.core.signals.GameEvents.OPEN_VR_SCREEN);

	GameEvents.ENABLE_VR = "GameEvents.ENABLE_VR";
	GameEvents.enableVr = new CustomEvent(APP.core.signals.GameEvents.ENABLE_VR);

})(window);