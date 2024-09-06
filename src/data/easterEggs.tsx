import { Item, MiscMarker } from '../classes';
import { IconFileNames } from './icons';
import { MapIds } from './intel';
import { IMisc } from './types';

export const EasterEggStrings = {
	dieMaschineEE: 'Seal the Deal', //https://callofduty.fandom.com/wiki/Seal_the_Deal
	dieMaschineWW: 'D.I.E. Wonder Weapon',
	dieMaschineBonusChest: 'Coffin Dance',
	dieMaschineRadioAlign: 'Radio Alignment',
	dieMaschineOrdaHand: 'Orda Hand',

	firebaseZEE: 'Maxis Potential', //https://callofduty.fandom.com/wiki/Maxis_Potential
	firebaseZWW: 'Rai K-84',
	firebaseZBonusChest: 'Bunny Scare',
	firebaseZSafe: "Sergei's Safe",
	firebaseZMonkeyUpgrade: 'Monkey bomb upgrade',
	firebaseZFreeJump: 'Free Jump pad',

	mauerDerTotenEE: 'Tin Man Heart', //https://callofduty.fandom.com/wiki/Tin_Man_Heart
	mauerDerTotenWW: 'CRBR-S',
	mauerDerTotenBonusChest: 'Hasenbau Club',
	mauerDerTotenTargets: 'Target Practice',
	mauerDerTotenEssenceHarvester: 'Essence Harvester',
	mauerDerTotenKlaus: 'Klaus',

	outbreakEE1: 'Ravenov Implications', //https://callofduty.fandom.com/wiki/Ravenov_Implications
	outbreakEE2: 'Entrapment', //https://callofduty.fandom.com/wiki/Entrapment

	mainQuest: 'Main Quest',
	clue: 'Visual Clue',
	interactable: 'Interactable Object',
	secretArea: 'Secret Area',
	music: 'Cassette Tape',
};

export const WorldEventTypes = {
	furyCrystal: new Item({ title: 'Fury Crystal' }),
	escort: new Item({ title: 'Escort' }),
	redChallengeChest: new Item({ title: 'Red Challenge Chest' }),
	purpleChallengeChest: new Item({ title: 'Purple Challenge Chest' }),
	dragonRocket: new Item({ title: 'Dragon Rocket' }),
	orda: new Item({ title: 'Orda' }),
	horde: new Item({ title: 'Horde' }),
	orb: new Item({
		title: 'Aetherial orb', desc: 'Damage it and chase it 3 times, you can also shoot it mid-air whilst moving to each location.',
	}),
	musicRadio: new Item({ title: 'Music radio' }),
};

export const EasterEggTypes = {
	mainQuest: new Item({
		title: EasterEggStrings.mainQuest, icon: IconFileNames.mainQuest,
	}),
	cassetteTape: new Item({
		title: EasterEggStrings.music, icon: IconFileNames.cassette,
	}),
	clue: new Item({ title: EasterEggStrings.clue, icon: IconFileNames.clue }),
	secretArea: new Item({
		title: EasterEggStrings.secretArea, icon: IconFileNames.secretArea,
	}),
	interactable: new Item({
		title: EasterEggStrings.interactable, icon: IconFileNames.interactable,
	}),
	essenceHarvester: new Item({
		title: EasterEggStrings.mauerDerTotenEssenceHarvester, icon: IconFileNames.reactor,
	}),
	thermophasic: new Item({ title: 'D.I.E. Thermophasic Upgrade', icon: IconFileNames.upgrade, }),
	nova5: new Item({ title: 'D.I.E. Nova-5 Upgrade', icon: IconFileNames.upgrade, }),
	electrobolt: new Item({ title: 'D.I.E. Electrobolt Upgrade', icon: IconFileNames.upgrade, }),
	cryoemitter: new Item({ title: 'D.I.E. Cryo-Emitter Upgrade', icon: IconFileNames.upgrade, }),
};

// Used to generate IDs for all of the below misc markers:
// https://nanoid.jormaechea.com.ar/?alphabet=0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ_abcdefghijklmnopqrstuvwxyz&length=5
// Please use the existing settings included in the URL and check for duplicate ids when possible (it`s very very unlikely but still possible).

export const EasterEggStore: IMisc = {
	[MapIds.dieMaschine]: [
		new MiscMarker(`w_xnt`, EasterEggTypes.thermophasic, [223.35366309316512, 223.1585943917737], 'Unlocked after following the steps with the fuse in the Dark Aether.'),
		new MiscMarker(`9ySyg`, EasterEggTypes.nova5, [315.29654358848376, 295.69795800010473], 'Unlocked after following the steps with the cannister in the Dark Aether.'),
		new MiscMarker('yLQtN', EasterEggTypes.interactable, [133.03685434894203, 282.6545483161539], 'Cannister used in nova 5 steps, can only be retrieved with the alt fire of the D.I.E.'),
	],
	[MapIds.dieMaschineUnderground]: [
		new MiscMarker(`VpIJu`, EasterEggTypes.cryoemitter, [297.2665148522491, 349.81279151873895]),
		new MiscMarker(`VNWWl`, EasterEggTypes.electrobolt, [113.39539786187888, 353.078013760189]),
		new MiscMarker('5M9A0', EasterEggTypes.interactable, [211.50810943751497, 233.52599646325353], 'D.I.E upgrade chest, requires the fuse and can only be interacted with when in the Dark Aether. Re-appears as open, above ground, on the back of the truck.'),
		new MiscMarker('1m5tF', EasterEggTypes.interactable, [147.39538299834174, 388.52809723485626], 'Downstairs, hidden behind the top left of the zombie spawn window.\n1 of 5 blue orbs that you can shoot for a bonus chest.'),
		new MiscMarker('PxlsM', EasterEggTypes.interactable, [76.10682851697437, 358.63289696847636], '1 of 5 blue orbs that you can shoot for a bonus chest.'),
		new MiscMarker('ONsCv', EasterEggTypes.interactable, [201.05343475851072, 301.68965836584806], 'High up on the wall.\n1 of 5 blue orbs that you can shoot for a bonus chest.'),
		new MiscMarker('RFgwR', EasterEggTypes.interactable, [221.09307449751262, 347.24424924795073], '1 of 5 blue orbs that you can shoot for a bonus chest.'),
		new MiscMarker('7TACp', EasterEggTypes.interactable, [134.79653471600014, 401.6474904867542], 'Hidden behind the grating.\n1 of 5 blue orbs that you can shoot for a bonus chest.'),
		new MiscMarker('UTXXu', EasterEggTypes.secretArea, [293.1716173546175, 370.9160154554998], 'Only accessible after using the Aether Tunnel above ground. 1 of 2 places the PaP part can spawn.'),
		new MiscMarker('6WnTv', EasterEggTypes.secretArea, [206.2697306892794, 176.17280788708192], 'Only accessible after using the Aether Tunnel above ground. 1 of 2 places the PaP part can spawn.'),
	],
	[MapIds.mauerDerToten]: [
		new MiscMarker('2wAit', EasterEggTypes.clue, [384.32068891654967, 272.1759937481422], '#0 Blacklight locker'),
		new MiscMarker('G107e', EasterEggTypes.clue, [181.79736917081456, 459.6975460903231], '#2 Blacklight numbers'),
		new MiscMarker('h8fAY', EasterEggTypes.clue, [261.5104831795745, 336.1746978373792], 'Klaus Part, Electronic Chips, box with green light, shoot with CRBR-S.'),
		new MiscMarker('GYRE6', EasterEggTypes.interactable, [359.9483781264314, 284.16977220507744], 'Train Line Controls, used to switch train tracks during the main quest.'),
		new MiscMarker('drKer', EasterEggTypes.interactable, [364.2365012890661, 214.16776152079905], 'Klaus Part Box, use blacklight to check if it contains a disk, order Klaus to open if it does.'),
		new MiscMarker('eQXff', EasterEggTypes.interactable, [206.05222014011366, 330.2612687292476], 'Klaus Part Box, use blacklight to check if it contains a disk, order Klaus to open if it does.'),
		new MiscMarker('v9aLr', EasterEggTypes.interactable, [168.93078742529096, 137.35493930841415], 'Essence Canister Pickup.'),
		new MiscMarker('_n0MB', EasterEggTypes.interactable, [193.68010197590363, 264.8048544502154], '1 of 6 Mr Peeks pieces used to access the bonus chest room.'),
		new MiscMarker('jOSoP', EasterEggTypes.essenceHarvester, [151.62276338235262, 217.9029453522394], 'Used in the quest to charge soul canisters.'),
		new MiscMarker('CWAYy', EasterEggTypes.secretArea, [328.3739589925339, 296.7995398586364], 'Train Carriage, use Klaus to stop the train, contains the Keycard and Warhead needed for the main quest.'),
		new MiscMarker('4QpYx', EasterEggTypes.secretArea, [168.43591618416733, 160.56583724877993],
			"Entrance to Valentina's Lab. Klaus can knock the wall down. Then use the CRBR-S beam mod to open the metal door."
		),
	],
	[MapIds.mauerDerTotenStreets]: [
		new MiscMarker('ook1f', EasterEggTypes.cassetteTape, [364.594308702165, 411.59576707869667], '1 of 3 needed for the easter egg song.'),
		new MiscMarker('YMZPe', EasterEggTypes.cassetteTape, [175.42748080394747, 324.57693567676864], '1 of 3 needed for the easter egg song.'),
		new MiscMarker('00CEF', EasterEggTypes.cassetteTape, [185.86657193523203, 70.19853360643957], '1 of 3 needed for the easter egg song.'),
		new MiscMarker('PwmRS', EasterEggTypes.clue, [110.80096229476811, 298.4347086625506], '#1 Blacklight numbers'),
		new MiscMarker('muHxa', EasterEggTypes.clue, [302.33874571909564, 311.0221039512368], '#3 Blacklight numbers'),
		new MiscMarker('eOTNC', EasterEggTypes.clue, [373.50680516628154, 388.36535534693917], 'Klaus Part, transistor, shoot radio on the shelf with CRBR-S.'),
		new MiscMarker('DwMIE', EasterEggTypes.clue, [333.76018343302235, 467.30140318168293], 'Klaus Part, antenna, shoot pylon with CRBR-S.'),
		new MiscMarker('WzV96', EasterEggTypes.interactable, [144.5504050965535, 289.50012070442347], 'Klaus Upgrade Station'),
		new MiscMarker('5pm__', EasterEggTypes.interactable, [197.11229814842187, 196.7896920958058], 'Klaus Part, microwave dish, dig piles of debris to find.'),
		new MiscMarker('3S1gY', EasterEggTypes.interactable, [301.6366591960302, 150.97963262432313], 'Klaus Part, microwave dish, dig piles of debris to find.'),
		new MiscMarker('RC0It', EasterEggTypes.interactable, [131.97446059908233, 383.233529816566], 'Klaus Part Box, use blacklight to check if it contains a disk, order Klaus to open if it does.'),
		new MiscMarker('p0jy0', EasterEggTypes.interactable, [296.2174019490392, 91.91078506007518], 'Klaus Part Box, use blacklight to check if it contains a disk, order Klaus to open if it does.'),
		new MiscMarker('1Zm1y', EasterEggTypes.interactable, [202.13121369227582, 53.47866191858418], 'Klaus Part Box, use blacklight to check if it contains a disk, order Klaus to open if it does.'),
		new MiscMarker('1TKX2', EasterEggTypes.interactable, [298.34930940180675, 420.2199816609127], 'Klaus Part Box, use blacklight to check if it contains a disk, order Klaus to open if it does.'),
		new MiscMarker('aqK7n', EasterEggTypes.interactable, [290.44881000922993, 44.59962748588934], '1 of 2 Computers used during main quest to spawn Megatons, requires keycard from the train.'),
		new MiscMarker('zq5i8', EasterEggTypes.interactable, [377.5561578030767, 339.7506667046973], '1 of 2 Computers used during main quest to spawn Megatons, requires keycard from the train.'),
		new MiscMarker('pufCN', EasterEggTypes.interactable, [310.47106934268305, 281.8460771337832], '1 of 6 Mr Peeks pieces used to access the bonus chest room.'),
		new MiscMarker('9z8Uu', EasterEggTypes.interactable, [315.8911862106404, 75.03474289078483], '1 of 6 Mr Peeks pieces used to access the bonus chest room.'),
		new MiscMarker('1uxx8', EasterEggTypes.interactable, [317.22176766835554, 386.3680282265149], '1 of 6 Mr Peeks pieces used to access the bonus chest room.'),
		new MiscMarker('IC0Xq', EasterEggTypes.interactable, [172.9720302577955, 466.15217502439106], '1 of 6 Mr Peeks pieces used to access the bonus chest room.'),
		new MiscMarker('r79fA', EasterEggTypes.interactable, [152.2094092404965, 343.9680542153249], '1 of 6 Mr Peeks pieces used to access the bonus chest room.'),
		new MiscMarker('0ZFbr', EasterEggTypes.secretArea, [118.31471157271051, 467.80515920170296], 'Hotel Room 305, use brain rot zombie to open door and get Klaus hands and the safe for CRBR-S.'),
		new MiscMarker('YqN75', EasterEggTypes.essenceHarvester, [181.1322876506002, 304.5979694369277], 'Used in the quest to charge soul canisters.'),
		new MiscMarker('vgkPi', EasterEggTypes.essenceHarvester, [173.4707721095559, 358.04367363412337], 'Used in the quest to charge soul canisters.'),
	],
	[MapIds.duga]: [
		new MiscMarker(`6IA1p`, EasterEggTypes.electrobolt, [218.94657303732083, 383.23711642835906]),
	],
	[MapIds.ruka]: [
		new MiscMarker(`YeH4n`, EasterEggTypes.thermophasic, [94.0042121017423, 334.3317226785948]),
	],
	[MapIds.alpine]: [
		new MiscMarker(`KfCN7`, EasterEggTypes.cryoemitter, [106.2932488669672, 313.34003330490333]),
	],
	[MapIds.golova]: [
		new MiscMarker(`jxkej`, EasterEggTypes.nova5, [197.8850734145944, 146.29544698855156]),
	],
};
