( function () {
	var helloSpeaker = {};
	helloSpeaker.speak = function (name) {
		console.log (speakWord + " " + name);
		window.helloSpeaker.speak = helloSpeaker.speak;
	}
	var speakWord = "Hello";
	window.helloSpeaker=helloSpeaker;
}) ();