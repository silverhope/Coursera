( function (window) {
	var byeSpeaker = {};
	byeSpeaker.speak = function (name) {
		console.log (speakWord + " " + name);
		window.byeSpeaker.speak = byeSpeaker.speak;
	}
	var speakWord = "Good Bye";
	window.byeSpeaker = byeSpeaker;
}) (window);
