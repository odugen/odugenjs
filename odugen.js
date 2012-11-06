var od = {
	waitAndRun: function(condition, callback, interval){
		var id = setInterval(function () {
		var canRun = condition();
			if (canRun) {
				clearInterval(id);
				callback();
			}
		}, interval || 500);
	}
};