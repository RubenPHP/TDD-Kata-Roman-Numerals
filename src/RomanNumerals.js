function RomanNumerals() {
}

RomanNumerals.prototype.convert = function (n) {
	var converted = '';

	for (var counter = 1; counter <= n; counter++) {		
		converted += 'I';
	}

	if (n==4){
		converted = 'IV';
	}
	else if (n == 5){
		converted = 'V'
	}
	return converted;
};
/*
FizzBuzz.prototype.number = function(n) {
 	return 1;
};
*/
/*
Player.prototype.pause = function() {
  this.isPlaying = false;
};

Player.prototype.resume = function() {
  if (this.isPlaying) {
    throw new Error("song is already playing");
  }

  this.isPlaying = true;
};

Player.prototype.makeFavorite = function() {
  this.currentlyPlayingSong.persistFavoriteStatus(true);
};*/