(function(global) {
	
	var GameEvents = global.APP.core.signals.GameEvents = {};

	GameEvents.OPEN_GAME_SCREEN = "GameEvents.OPEN_GAME_SCREEN";
	GameEvents.openGameScreenEvent = new CustomEvent(APP.core.signals.GameEvents.OPEN_GAME_SCREEN);

	GameEvents.OPEN_HELP_SCREEN = "GameEvents.OPEN_HELP_SCREEN";
	GameEvents.openHelpEvent = new CustomEvent(APP.core.signals.GameEvents.OPEN_HELP_SCREEN);

})(window);