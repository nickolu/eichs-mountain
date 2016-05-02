var log = {
	error : function(message) {
		if (console) {
			console.error('[error]: '+message)
		}
		return false;
	},
	warn : function(message) {
		if (console) {
			console.log('[warning]: '+message);
		}
	}
}
return log;