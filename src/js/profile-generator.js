
module.exports = function() {
	var bestiary = Game.bestiary(),
		generator = {
			heroes : {
				name : function() {
					var name = "henry";
					
					return name;
				},
				stats : function() {
					var stats = {};
					return stats;
				},
				gender : function() {
					var gender = {};
					return gender;
				},
				profile : function() {
					var profile = {};

					profile.name = generator.heroes.name();
					profile.stats = generator.heroes.stats();
					profile.gender = generator.heroes.gender();

					return profile;
				}
			},
			enemies : function(amount) {
				var i, number = 0, enemies = [];
				
				for (i = 0; i < amount; i++) {
					number = randomNumber(0,bestiary.length-1)
					
					enemies.push(bestiary[number]);
				}
				
				return enemies;
			},
			randomNumber : function(min,max) {
				return Math.floor(Math.random() * (max - min + 1)) + min;
			}
		}

	return generator;
}