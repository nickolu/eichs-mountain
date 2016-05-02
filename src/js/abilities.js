(function(){
	var abilities = {
		fight : function(target) {
			var totalDamage,
				attackDamage = 0,
				target = {};

			totalDamage = (function(){
				var damage;



				return damage;
			}());

			/*
			total damage is
				
				if hit
					attack damage - defense

				chance to hit is
					src.dex + 100 - target.evade

				attack damage is
					src.strength
					+ elem bonus
					* critical bonus
				
				defense is
					target.defense
					+ elem bonus


			 */
		}
	};

	function hit(chance) {
		return Math.floor(Math.random() * 100) < chance;
	}

	return abilities;
}());