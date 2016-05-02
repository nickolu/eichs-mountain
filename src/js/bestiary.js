module.exports = function() {
	var bestiary = {
		aardvark : {
			name : 'aardvark',
			level : 1,
			stats : {
				health : 100,
				strength : 1,
				dexterity : 1,
				magic : 1
			},
			elements : {
				'physical' : 3,
				'fire' : 1,
				'earth' : 1
			},
			abilities : ['fight','earth','fire','defend','sniff']		
		},
		llama : {
			name : 'llama',
			level : 5,
			stats : {
				health : 500,
				strength : 5,
				dexterity : 5,
				magic : 5
			},
			elements : {
				'physical' : 7,
				'water' : 5,
				'wind' : 5
			},
			abilities : ['fight','wind','water','defend','spit']		
		},
		sheep : {
			name : 'sheep',
			level : 5,
			stats : {
				health : 500,
				strength : 5,
				dexterity : 5,
				magic : 5
			},
			elements : {
				'physical' : 7,
				'water' : 5,
				'wind' : 5
			},
			abilities : ['fight','wind','water','defend','spit']		
		}
	}
	return bestiary;
}
