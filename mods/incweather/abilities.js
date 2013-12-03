exports.BattleAbilities = {
        "contamination": {
		desc: "When this Pokemon enters the battlefield, the weather becomes Acid Rain (for 5 turns normally, or 8 turns while holding Molar Rock).",
		shortDesc: "On switch-in, the weather becomes Acid Rain.",
		onStart: function(source) {
			this.setWeather('acidrain');
		},
		id: "Contamination",
		name: "Contamination",
		rating: 4.5,
		num: 1000
	},
	"acidrush": {
		desc: "This Pokemon's Speed is doubled if the weather is Acid Rain. This Pokemon is also immune to residual Acid Rain damage.",
		shortDesc: "If Acid Rain is active, this Pokemon's Speed is doubled; immunity to Acid Rain.",
		onModifySpe: function(speMod, pokemon) {
			if (this.isWeather('acidrain')) {
				return this.chain(speMod, 2);
			}
		},
		onImmunity: function(type, pokemon) {
			if (type === 'acidrain') return false;
		},
		id: "Acid Rush",
		name: "Acid Rush",
		rating: 2,
		num: 1001
	},
	"chemicalregeneration": {
		desc: "If the weather is Acid Rain, this Pokemon recovers 1/16 of its max HP after each turn.",
		shortDesc: "If the weather is Acid Rain, this Pokemon heals 1/16 of its max HP each turn.",
		onWeather: function(target, source, effect) {
			if (effect.id === 'acidrain') {
				this.heal(target.maxhp/16);
			}
		},
		id: "Chemical Regeneration",
		name: "Chemical Regeneration",
		rating: 1.5,
		num: 1002
	},
	"chemicalboost": {
		desc: "If Acid Rain is active, this Pokemon's attacks that receive STAB (Same Type Attack Bonus) are increased from 50% to 100%.",
		shortDesc: "If Acid Rain is active, this Pokemon's same-type attack bonus (STAB) is increased from 1.5x to 2x.",
		onModifyMove: function(move) {
			if (this.isWeather('acidrain')) {
			        move.stab = 2;
			}        
		},
		id: "Chemical Boost",
		name: "Chemical Boost",
		rating: 3,
		num: 1003
	},
	"toxicoverdrive": {
		desc: "If the weather is Acid Rain, this Pokemon's Special Attack and Attack is 1.3x, but it loses 1/8 of its max HP at the end of every turn.",
		shortDesc: "If Acid Rain is active, this Pokemon's Sp. Atk and Atk is 1.3x and loses 1/8 max HP per turn.",
		onModifySpAPriority: 5,
		onModifySpA: function(spa, pokemon) {
			if (this.isWeather('acidrain')) {
				return this.chainModify(1.3);
			}
		},
		onModifyAtkPriority: 5,
		onModifyAtk: function(atk, pokemon) {
			if (this.isWeather('acidrain')) {
				return this.chainModify(1.3);
			}
		},
		onWeather: function(target, source, effect) {
			if (effect.id === 'acidrain') {
				this.damage(target.maxhp/8);
			}
		},
		id: "Toxic Overdrive",
		name: "Toxic Overdrive",
		rating: 1.5,
		num: 1004
	}
};
