module.exports = function() {
	var instructions;

	// sample instructions to show what the game programs users write could look like

	Heroes['Terra'].on('turn-ready', function() {
		var self = this, target;
	
		if (this.get.health() / this.get.maxHealth() < .5) {
			this.abilities.spells('heal',self);
		} else {
			target = target('lowest-health');
			this.abilities.fight(target);
		}
	});

	function target(instruction) {
	 	switch(instruction) {
			case 'lowest-health':
				var i, l, 
					lowest = enemies[0].getHealth();
					enemies = getAvailableEnemies();

				l = enemies.length;

				for (i = 0; i < l; i++) {
					if (enemies[i].getHealth() < lowest) {
						lowest = enemies[i].getHealth();
					}
				}

				return lowest;
				break;
			default : 
				// do something
	 	}
	} 

	return instructions;
}