$(document).ready(function() {
	// $.ajax({
	// 	url: "https://api.github.com/gists/79de1d997a5bd0e28ad3"
	// }).success(function(res) {
	// 	var favs = JSON.parse(res.files["favs.json"].content).data;
	// 	addFavs(favs);
	// });

	var favs = [
		"Biggest Risk is not taking any Risk",
		"No Game No Life",
		"Deleted code is debugged code",
		"Simplicity is the ultimate sophistication",
		"Ethernet always wins",
		"Simplicity is prerequisite for reliability",
		"Computers are good at following instructions, but not at reading your mind",
		"When in doubt, use brute force",
		"What every programmer needs to know about game networking",
		"To understand code you have to build a mental model",
		"move fast and break things",
		"Talk is cheap. Show me the code",
		"It's not at all important to get it right the first time, It's vitally important to get it right the last time",
		"Git from the inside out",
		"First, solve the problem. Then, write the code.",
		"You cannot trust code that you did not totally create yourself",
		"A Brief History of User Experience Design",
		"Object-oriented design is the roman numerals of computing",
		"C++",
		"Python",
		"XML",
		"Deep Learning",
		"JavaScript",
		"EXPRESS JS",
		"GPU COMPUTING",
		"API",
		"NODE JS",
		"AI",
		"IoT",
		"SOCKET.IO",
		"Machine Learning",
		"ASYNC",
		"JSON",
		"Innovation"
	];

	addFavs(favs);

	function addFavs(favs) {
		var favContainer = $('<div>', {id: 'favs-background'});

		var favText = '';
		for (var i = 0; i < 5; i++) {
			shuffle(favs);
			favs.map(function(fav) {
				favText += ' [ ' + fav + ' ] ';
			});
		}
		
		$('#favs-background span').text(favText);
		// var favItem = $('<span>' + favText + '</span>')
		// favContainer.append(favItem);
		// favContainer.appendTo('#favs-background-wrapper');
	}

	// http://stackoverflow.com/a/2450976
	function shuffle(array) {
	  var currentIndex = array.length, temporaryValue, randomIndex ;
	  while (0 !== currentIndex) {
	    randomIndex = Math.floor(Math.random() * currentIndex);
	    currentIndex -= 1;
	    temporaryValue = array[currentIndex];
	    array[currentIndex] = array[randomIndex];
	    array[randomIndex] = temporaryValue;
	  }

	  return array;
	}
});