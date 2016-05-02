/**

Eich's Mountain

a javascript learning game

by Nickolus Cunningham

**/

var Game = window.Game || {};

Game.bestiary = require('./bestiary.js');
Game.abilities = require('./abilities.js');
Game.generator = require('./profile-generator.js');
Game.log = require('./log.js');

Game.battle = function(gameboard) {

	var game = this,
		bestiary = Game.bestiary,
		abilities = Game.abilities,
		generator = Game.generator;

	var Player = function() {
		var pub = {};


		return pub;
	};

	var Timer = function() {
		var pub = {};


		return pub;
	};

	var Unit = function(stats) {
		var pub = this,
			priv = {};

		this.abilities = abilities;

		priv.stats = stats;

		pub.get = {
			health : function() {
				return priv.health;	
			},
			maxHealth : function() {
				return priv.stats['max-health'];
			}
			stats : function() {
				return priv.stats;
			}
		}
	}

	var Hero = function(profile) {
		var pub = this,
			priv = {};

		priv.profile = profile || generator.heroes.profile();
	
		pub.fight = function(target) {
			target(target).resolveDamage(pub.stats,'fight');
		};

		pub.cast = function(target,spellName) {
			target(target).resolveSpell(pub.stats,spellName);
		};

		return pub;
	};

	
	var Event = function() {
		// whenever this event is triggered, do something
		var pub = this;

		pub.events = [];
		pub.bind = function(event) {
			if (typeof event === 'function') {
				events.push(event);	
			} else {
				return 'supplied event is not a function';
			}
		};

		pub.trigger = function(){
			var i, 
				l = pub.events.length;
			
			for (i=0; i<l; i++) {
				pub.events[i]();
			}

		};
	};

	function target(target) {

		switch (typeof target) {
			case 'string' : 
				if (findTarget(target)) {
					target = makeTarget(target);
				} else {
					Game.log.warn(target+' is an invalid target')
					return false;
				}
				break;
			case 'object' : 
				return target;
				break;
			default :
				return false;
		}

		function findTarget(target) {
			// todo: make this loop through each enemy object and find by name
			var targetIndex = gameboard.getEnemies().indexOf(target);
			
			if (targetIndex > -1) {
				return gameboard.getEnemies()[targetIndex];
			}

			targetIndex = gameboard.getHeroes().indexOf(target);

			if (targetIndex > -1) {
				return gameboard.getHeroes()[targetIndex];
			}

			Game.log.warn('no target found with name '+target);
			return false;
		}

	}

	function startBattle() {
		// set up gameboard
		// 	- add enemies and heroes
		// 	start the event clock
		// 	
		var gameBoard, enemies, heroes;


		enemies = generator.enemies(3);
		heroes = [
			generator.heroes.profile(),
			generator.heroes.profile()
		]

		gameBoard = new Gameboard(enemies, heroes)
	}

	var Gameboard = function(enemies, heroes) {
		var pub = this,
			priv = {};

		priv.enemies = enemies || [];
		priv.heroes = heroes || [];

		pub.getEnemies = function() {
			return priv.enemies;
		}

		pub.getHeroes = function() {
			return priv.heroes;
		}

		return pub;
	}

	return game;
};

if (window) {
	window.Game = Game;	
}



