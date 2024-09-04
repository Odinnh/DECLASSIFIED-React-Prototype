import { Item, MiscMarker } from '../classes';
import { IconFileNames } from './icons';
import { MapIds } from './intel';

/////////////////////Misc/////////////////////////
export const MiscTypes = {
	dementedEcho: new Item({
		title: 'Demented Echo',
		desc: 'Destroy it before it touches you to get a reward.',
		icon: IconFileNames.demented,
	}),
	rift: new Item({
		title: 'Aether Rift',
		desc: 'Jump through to teleport and gain a random powerup.',
		icon: IconFileNames.rift,
	}),
	redRift: new Item({
		title: 'Red Aether Rift',
		desc: 'Jump through all the rifts to continue the Easter Egg',
		icon: IconFileNames.redRift,
	}),
	radio: new Item({ title: 'Radio', icon: IconFileNames.radio }),
	exfillRadio: new Item({ title: 'Exfill Radio', icon: IconFileNames.radio }),
	//TODO STANDARDISE STRING
	requiemRadio: new Item({
		title: 'Requiem Radio',
		icon: IconFileNames.radio,
		layer: 'Markers',
	}),
	omegaRadio: new Item({ title: 'Omega Radio', icon: IconFileNames.radio }),
	maxisRadio: new Item({ title: 'Maxis Radio', icon: IconFileNames.radio }),
	monkey: new Item({ title: 'Stone Monkey', icon: IconFileNames.monkey }),
	projector: new Item({
		title: 'Projector',
		desc: 'The projector for the Main Quest',
		icon: IconFileNames.projector,
	}),
	signal: new Item({ title: 'Signal' }),
	fishing: new Item({
		title: 'Fishing',
		desc: 'Fish up to 3 times for a small reward each time.',
		icon: IconFileNames.fishing,
	}),
	essenceDrop: new Item({ title: 'Essence Drop' }),
	scrapHeap: new Item({ title: 'Scrap Heap' }),
	thermophasic: new Item({
		title: 'D.I.E. Thermophasic Upgrade',
		icon: IconFileNames.upgrade,
	}),
	nova5: new Item({
		title: 'D.I.E. Nova-5 Upgrade',
		icon: IconFileNames.upgrade,
	}),
	electrobolt: new Item({
		title: 'D.I.E. Electrobolt Upgrade',
		icon: IconFileNames.upgrade,
	}),
	cryoemitter: new Item({
		title: 'D.I.E. Cryo-Emitter Upgrade',
		icon: IconFileNames.upgrade,
	}),

	wunderFizz: new Item({
		title: 'Der Wunderfizz',
		icon: IconFileNames.wunderFizz,
	}),
	trialComputer: new Item({
		title: 'Trial Computer',
		icon: IconFileNames.trialComputer,
	}),
	papMachine: new Item({
		title: 'Pack-a-Punch',
		icon: IconFileNames.papMachine,
	}),
	mysteryBox: new Item({
		title: 'Mystery Box Location',
		icon: IconFileNames.mysteryBox,
	}),
	wallbuy: new Item({ title: 'Wall Buy', icon: IconFileNames.wallbuy }),
	power: new Item({ title: 'Power Switch', icon: IconFileNames.power }),
	jumpPad: new Item({ title: 'Jump Pad', icon: IconFileNames.jumpPad }),
	landingPad: new Item({
		title: 'Landing Pad',
		icon: IconFileNames.landingPad,
	}),
	airSupport: new Item({ title: 'Air Support Console' }),
	teleporter: new Item({ title: 'Teleporter', icon: IconFileNames.portal }),
	collector: new Item({
		title: 'Collection Unit',
		icon: IconFileNames.reactor,
	}),
	reactor: new Item({ title: 'Aether Reactor', icon: IconFileNames.reactor }),
	craftingTable: new Item({
		title: 'Crafting Table',
		icon: IconFileNames.craftingTable,
	}),
	workbench: new Item({ title: 'Workbench', icon: IconFileNames.workbench }),
	arsenal: new Item({ title: 'Arsenal', icon: IconFileNames.arsenal }),
	ammoCrate: new Item({ title: 'Ammo Crate', icon: IconFileNames.ammoCrate }),
	trap: new Item({ title: 'Trap', icon: IconFileNames.trap }),
	zipline: new Item({ title: 'Zipline', icon: IconFileNames.zipline }),
	ziplineUp: new Item({ title: 'Zipline', icon: IconFileNames.ziplineUp }),
	ziplineDown: new Item({ title: 'Zipline', icon: IconFileNames.ziplineDown }),
	rampageInducer: new Item({
		title: 'Rampage Inducer',
		icon: IconFileNames.rampageInducer,
	}),

	klausRadio: new Item({
		title: 'Klaus recall radio',
		icon: IconFileNames.trap,
	}),
	aetherTunnel: new Item({
		title: 'Aether Tunnel',
		icon: IconFileNames.tunnel,
	}),
	aetherCrystal: new Item({ title: 'Aether Crystal' }),

	//bo6 new markers
	wallArmor: new Item({
		title: 'Armor wall buy',
		icon: IconFileNames.armorWall,
	}),
	door: new Item({ title: 'door', icon: IconFileNames.door }),
	doorPower: new Item({
		title: 'Power door',
		desc: 'enable power to open this door',
		icon: IconFileNames.doorPower,
	}),
	gumball: new Item({ title: 'Gumball machine', icon: IconFileNames.gumball }),
};

/////////////////////Perks/////////////////////////
export const Perks = {
	staminup: new Item({
		id: 'staminUp',
		title: 'Stamin-Up',
		icon: IconFileNames.staminUp,
	}),
	quick: new Item({
		id: 'quickRevive',
		title: 'Quick Revive',
		icon: IconFileNames.quickRevive,
	}),
	jugg: new Item({
		id: 'juggernog',
		title: 'Jugger-Nog',
		icon: IconFileNames.juggernog,
	}),
	speed: new Item({
		id: 'speedCola',
		title: 'Speed Cola',
		icon: IconFileNames.speedCola,
	}),
	mule: new Item({
		id: 'muleKick',
		title: 'Mule Kick',
		icon: IconFileNames.muleKick,
	}),
	elemental: new Item({
		id: 'elementalPop',
		title: 'Elemental Pop',
		icon: IconFileNames.elementalPop,
	}),
	death: new Item({
		id: 'deathPerception',
		title: 'Death Perception',
		icon: IconFileNames.deathPerception,
	}),
	tomb: new Item({
		id: 'tombstoneSoda',
		title: 'Tombstone',
		icon: IconFileNames.tombstoneSoda,
	}),
	deadshot: new Item({
		id: 'deadshotDaiquiri',
		title: 'Deadshot Daiquiri',
		icon: IconFileNames.deadshotDaiquiri,
	}),
	phd: new Item({
		id: 'phdSlider',
		title: 'PHD Slider',
		icon: IconFileNames.phdSlider,
	}),
	meleeMacchiato: new Item({
		id: 'meleeMacchiato',
		title: 'Melee Macchiato',
		icon: IconFileNames.meleeMacchiato,
	}),
};

/////////////////////Markers/////////////////////////
export const MarkerTypes = {
	intel: new Item({ id: 'intel', title: 'Intel' }),
	misc: new Item({ id: 'misc', title: 'Misc' }),
	worldEvents: new Item({ id: 'worldEvents', title: 'World Events' }),
	easterEggs: new Item({ id: 'easterEggs', title: 'Easter Eggs' }),
};

//TODO: Decide the structure for how we store and retrieve EE steps (maybe new datastore)
/*  
    These are just the initial labels for the easter eggs.
    We will need to break these down further and make step-by-step markers 
*/

// Gonna have to add a way to bring through the full description along with the unique description from the misc markers
export const OutbreakEE2Steps = {
	step2Helicopter: new Item({
		title: 'Crashed Helicopter',
		desc: `The transport chopper that the Omega Eight were using is located in the "Carved Hills", located south of the lone shack, having crashed by unknown means. Nearing it will spawn a horde needs to be eliminated, as one of the corpses is holding a message from Hugo Jager about where the surviving members of the crash went.`,
	}),
	step3Orb: new Item({
		title: 'Red Aetherial Orb',
		desc: 'The Aetherium Orb can spawn within three places and is visually distinct, having a darker hue of red and will not produce Essence upon being damaged. When damaged, it will flee like the standard variant for a total of three times before it will flee to hover over the Recon Rover to where it will stay above, unwilling to enter it.',
		icon: IconFileNames.orb,
	}),
};

export interface IMisc {
	[key: string]: MiscMarker[];
}

// Used to generate IDs for all of the below misc markers:
// https://nanoid.jormaechea.com.ar/?alphabet=0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ_abcdefghijklmnopqrstuvwxyz&length=5
// Please use the existing settings included in the URL and check for duplicate ids when possible (it's very very unlikely but still possible).

// Non collectible items that need icons on the respective maps

/////////////////////Round Based Misc Items/////////////////////////
export const MiscStore: IMisc = {
	[MapIds.dieMaschine]: [
		new MiscMarker(
			'qnnn7',
			MiscTypes.craftingTable,
			[238.9533945125948, 313.2529307427267]
		),
		new MiscMarker(
			'FcRRV',
			MiscTypes.rampageInducer,
			[187.22527858413707, 297.96712471202267]
		),
		new MiscMarker('RNg0j', MiscTypes.ammoCrate, [173.22590130162, 293.5]),
		new MiscMarker('r1v1U', MiscTypes.mysteryBox, [206.4640696694447, 344]),
		new MiscMarker('2y3Cc', MiscTypes.exfillRadio, [242.55058174922743, 337.5]),
		new MiscMarker(
			'nZA19',
			MiscTypes.requiemRadio,
			[189.18283195992137, 256.25]
		),
		new MiscMarker(
			'68O2O',
			MiscTypes.wallbuy,
			[261.1077465118457, 355],
			'1911'
		),
		new MiscMarker(
			'lmW4Q',
			MiscTypes.wallbuy,
			[276.7037503511565, 255.75],
			'MP5'
		),
		new MiscMarker('81V83', MiscTypes.ammoCrate, [250.46531510441054, 301.25]),
		new MiscMarker('hZ0vk', MiscTypes.mysteryBox, [386.16701001966476, 287.25]),
		new MiscMarker('ospc7', Perks.staminup, [251.96478134656803, 349.75]),
		new MiscMarker('fcM5h', Perks.jugg, [362.1755501451447, 259.75]),
		new MiscMarker('7WBdI', MiscTypes.ammoCrate, [335.7277202921622, 263.875]),
		new MiscMarker(
			'qnd1q',
			MiscTypes.wallbuy,
			[340.9758521397134, 318.75],
			'Gallo'
		),
		new MiscMarker(
			'sLfEw',
			MiscTypes.wallbuy,
			[194.23292443112652, 256.125],
			'Hauer 77'
		),
		new MiscMarker('rXxRl', MiscTypes.ammoCrate, [203.48479258357526, 282]),
		new MiscMarker(
			'V1v4Z',
			MiscTypes.wallbuy,
			[179.74021678059745, 256],
			'Diamatti'
		),
		new MiscMarker(
			'r5tfe',
			MiscTypes.wunderFizz,
			[277.920479445641, 297.75],
			"On the 'Penthouse' level within the Dark Aether. Arrives in the standard map 10 rounds after the power is turned on."
		),
		new MiscMarker('whnl0', MiscTypes.mysteryBox, [227.36045978087836, 178.5]),
		new MiscMarker(
			'znu5z',
			MiscTypes.wallbuy,
			[211.11624215750538, 158.125],
			'M16'
		),
		new MiscMarker('U24cf', MiscTypes.ammoCrate, [256.22518494241035, 86.25]),
		new MiscMarker(
			'6gdU5',
			MiscTypes.maxisRadio,
			[257.99097293754096, 88.5625]
		),
		new MiscMarker('206x9', MiscTypes.aetherTunnel, [228.712198675318, 112.25]),
		new MiscMarker(
			'yZ4Mf',
			MiscTypes.aetherTunnel,
			[231.71142976622465, 261.25]
		),
		new MiscMarker(
			'zczWT',
			MiscTypes.aetherTunnel,
			[312.95656000863335, 345.5]
		),
	],
	[MapIds.dieMaschineUnderground]: [
		new MiscMarker(
			'cTakX',
			MiscTypes.craftingTable,
			[302.9450323063958, 199.5]
		),
		new MiscMarker(
			'GdJqJ',
			MiscTypes.wallbuy,
			[325.4370259387583, 188.25],
			'XM4'
		),
		new MiscMarker(
			'OwuYN',
			MiscTypes.wallbuy,
			[189.74051249234878, 245],
			'RPD'
		),
		new MiscMarker('tbKp7', Perks.deadshot, [195.98761430452765, 227.875]),
		new MiscMarker('4CUDy', Perks.elemental, [120.36551249234878, 419.875]),
		new MiscMarker('bNKSM', Perks.speed, [320.16749670765864, 330]),
		new MiscMarker(
			'CRQrY',
			MiscTypes.wallbuy,
			[99.48320905903957, 413],
			'LW3 - Tundra'
		),
		new MiscMarker(
			'6wZVg',
			MiscTypes.wallbuy,
			[185.47998163708195, 359.25],
			'Krig 6'
		),
		new MiscMarker('VC2JI', MiscTypes.ammoCrate, [190.9774312317994, 386.25]),
		new MiscMarker('IWFVK', MiscTypes.papMachine, [175.2347346651086, 358.5]),
		new MiscMarker('tKfcy', MiscTypes.trialComputer, [228.18152393671284, 304]),
		new MiscMarker('bbpOB', MiscTypes.arsenal, [246.2018112514607, 373.25]),
		new MiscMarker('DW0WK', MiscTypes.mysteryBox, [335.16054105688795, 380.5]),
		new MiscMarker(
			'FUa64',
			MiscTypes.wallbuy,
			[334.4108888394265, 318.5],
			'Type 63'
		),
		new MiscMarker('VJSPN', MiscTypes.ammoCrate, [237.45586871441026, 319.75]),
		new MiscMarker(
			'TUgDl',
			MiscTypes.wallbuy,
			[210.9681570307718, 296],
			'AK-74u'
		),
		new MiscMarker('q44EK', MiscTypes.mysteryBox, [182.9811409122104, 203.75]),
		new MiscMarker('LXxTQ', MiscTypes.power, [126.11151299315564, 399.125]),
		new MiscMarker('ovCt3', MiscTypes.aetherTunnel, [209.95886673591343, 173]),
		new MiscMarker('ZK5LG', MiscTypes.aetherTunnel, [216.46392872077806, 315]),
		new MiscMarker('amLbg', MiscTypes.aetherTunnel, [293.2263897694622, 384]),
	],
	[MapIds.firebaseZ]: [
		new MiscMarker(
			'JgR0a',
			MiscTypes.teleporter,
			[325.0978719917595, 221.75],
			'To Spawn'
		),
		new MiscMarker('zfWMF', MiscTypes.ammoCrate, [314.97647485719637, 243.375]),
		new MiscMarker('V0Gux', MiscTypes.ammoCrate, [357.7112627586853, 248.75]),
		new MiscMarker('sBCpq', MiscTypes.ammoCrate, [298.9436979117895, 337.5]),
		new MiscMarker('SR3Xs', MiscTypes.ammoCrate, [210.49324374941475, 371.75]),
		new MiscMarker('VyRH8', MiscTypes.ammoCrate, [424.45432390673284, 316.875]),
		new MiscMarker('hM87O', MiscTypes.ammoCrate, [251.96042232418768, 267.5]),
		new MiscMarker('RUa3j', MiscTypes.ammoCrate, [245.96255735555764, 221]),
		new MiscMarker('a5NWx', MiscTypes.ammoCrate, [258.9873279333271, 153.75]),
		new MiscMarker('URVRf', MiscTypes.ammoCrate, [406.4054452664107, 384.25]),
		new MiscMarker('Y7LKb', MiscTypes.ammoCrate, [156.2185176514655, 315.75]),
		new MiscMarker('kJLhK', MiscTypes.mysteryBox, [416.458860848394, 261.5]),
		new MiscMarker('tviIi', MiscTypes.mysteryBox, [192.4815947186066, 283.25]),
		new MiscMarker('nKgEY', MiscTypes.mysteryBox, [412.32647719823956, 361.25]),
		new MiscMarker('QZFdH', MiscTypes.mysteryBox, [265.7322572338234, 361.5]),
		new MiscMarker('MdsK_', MiscTypes.mysteryBox, [172.96255735555764, 370.75]),
		new MiscMarker('c1Kne', MiscTypes.mysteryBox, [254.98688313512503, 168.25]),
		new MiscMarker('RODrY', MiscTypes.arsenal, [416.9586829291132, 251.5]),
		new MiscMarker('CxbPm', MiscTypes.arsenal, [321.43569154415206, 338.75]),
		new MiscMarker('jHHcR', MiscTypes.arsenal, [159.10707931454255, 266.5]),
		new MiscMarker(
			'77gVD',
			MiscTypes.wallbuy,
			[353.48127867777885, 317.5],
			'M16'
		),
		new MiscMarker(
			'z46lQ',
			MiscTypes.wallbuy,
			[331.09573696038956, 278.375],
			'Ak-74u'
		),
		new MiscMarker(
			'8ZbjF',
			MiscTypes.wallbuy,
			[432.8419561756719, 283.75],
			'1911'
		),
		new MiscMarker(
			'STzNi',
			MiscTypes.wallbuy,
			[239.21495926584885, 261.75],
			'AUG'
		),
		new MiscMarker(
			'TChc2',
			MiscTypes.wallbuy,
			[278.60534460155446, 153.125],
			'DMR 14'
		),
		new MiscMarker(
			'Oc61M',
			MiscTypes.wallbuy,
			[268.34635967787244, 216.5],
			'QBZ-83'
		),
		new MiscMarker(
			'T2xi0',
			MiscTypes.wallbuy,
			[359.83813091113404, 212],
			'Hauer 77'
		),
		new MiscMarker(
			'OSfjR',
			MiscTypes.wallbuy,
			[430.4222586384493, 350.75],
			'FFAR 1'
		),
		new MiscMarker(
			'n4iky',
			MiscTypes.wallbuy,
			[382.9138074726098, 385.5],
			'M82'
		),
		new MiscMarker(
			'TBoB4',
			MiscTypes.wallbuy,
			[284.8504518213316, 361.875],
			'Type 63'
		),
		new MiscMarker(
			'3exzd',
			MiscTypes.wallbuy,
			[191.4971626556794, 350],
			'AK-47'
		),
		new MiscMarker(
			'IC4tW',
			MiscTypes.wallbuy,
			[215.2387114898399, 331.5],
			'KSP'
		),
		new MiscMarker(
			'pYZAK',
			MiscTypes.wallbuy,
			[148.46469238692762, 343.75],
			'RPD'
		),
		new MiscMarker(
			'rQkF_',
			MiscTypes.craftingTable,
			[309.8493398258264, 286.875]
		),
		new MiscMarker(
			'8OaeH',
			MiscTypes.craftingTable,
			[294.8495622249274, 153.625]
		),
		new MiscMarker(
			'hFCmp',
			MiscTypes.craftingTable,
			[175.95490682648187, 307.5]
		),
		new MiscMarker('ZehFH', Perks.tomb, [277.9856821799794, 285.375]),
		new MiscMarker('P3Ykk', Perks.jugg, [320.0880419514936, 208.125]),
		new MiscMarker('dGeon', Perks.staminup, [366.6949433467553, 355.25]),
		new MiscMarker('8arCc', Perks.speed, [168.88305552954398, 328.25]),
		new MiscMarker(
			'245Uw',
			MiscTypes.trialComputer,
			[295.8543215656897, 221.75]
		),
		new MiscMarker('VM2_4', MiscTypes.collector, [415.08265989324843, 327.75]),
		new MiscMarker('itaev', MiscTypes.collector, [240.46451446764678, 180.5]),
		new MiscMarker('aHjsU', MiscTypes.collector, [294.1953881449574, 178.5]),
		new MiscMarker('H6jlt', MiscTypes.collector, [282.4257819084184, 205.0625]),
		new MiscMarker('hQIqU', MiscTypes.collector, [398.93346755314167, 354.25]),
		new MiscMarker('bUaR9', MiscTypes.collector, [356.92305927521306, 338.75]),
		new MiscMarker('1TK5Q', MiscTypes.collector, [226.73461934638078, 321.75]),
		new MiscMarker('wgAyy', MiscTypes.collector, [190.74742953460066, 308.5]),
		new MiscMarker('LNUej', MiscTypes.collector, [199.45312763367357, 356.5]),
		new MiscMarker('YmIMM', MiscTypes.reactor, [269.95401723007774, 185.25]),
		new MiscMarker('QvEhD', MiscTypes.reactor, [391.9359584230733, 336.5]),
		new MiscMarker('k59kA', MiscTypes.reactor, [199.7442269875457, 338.25]),
		new MiscMarker(
			'0dNxK',
			MiscTypes.jumpPad,
			[322.58968770484125, 139.375],
			'To Scorched Defence'
		),
		new MiscMarker(
			'Nt2PU',
			MiscTypes.jumpPad,
			[242.48185691544154, 337.5],
			'To Scorched Defence'
		),
		new MiscMarker(
			'fjCW8',
			MiscTypes.jumpPad,
			[213.48230639572995, 141.5],
			'To Rocky Defence'
		),
		new MiscMarker(
			'5xNmk',
			MiscTypes.jumpPad,
			[333.9318662796142, 351.25],
			'To Rocky Defence'
		),
		new MiscMarker(
			'4TlOa',
			MiscTypes.jumpPad,
			[360.94698941848486, 327.5],
			'To Jungle Defence'
		),
		new MiscMarker(
			'RnOvS',
			MiscTypes.jumpPad,
			[159.9606002434685, 323.25],
			'To Jungle Defence'
		),
		new MiscMarker('JaJJe', MiscTypes.landingPad, [341.67848581327837, 366.75]),
		new MiscMarker('3xfbm', MiscTypes.landingPad, [440.39334675531416, 364]),
		new MiscMarker('cDayE', MiscTypes.landingPad, [325.0887981084371, 157.25]),
		new MiscMarker('ahCRs', MiscTypes.landingPad, [214.48195055716826, 164.25]),
		new MiscMarker('_1PF1', MiscTypes.landingPad, [154.21922932858882, 360.5]),
		new MiscMarker('bQdiD', MiscTypes.landingPad, [141.2155819833318, 309.75]),
		new MiscMarker(
			'jRbkg',
			MiscTypes.requiemRadio,
			[200.87166869557075, 374.375],
			'On top of a cart on the left wall of the upstairs room.'
		),
		new MiscMarker(
			'ro5Lp',
			MiscTypes.maxisRadio,
			[143.38939430434863, 346.5],
			'On an ammo crate right behind a ledge in the tank tracks.'
		),
		new MiscMarker(
			'4oMQK',
			MiscTypes.exfillRadio,
			[270.60312061054407, 239.375]
		),
		new MiscMarker(
			'6t6Ot',
			MiscTypes.airSupport,
			[268.2128242344789, 140.75],
			'Cruise Missile'
		),
		new MiscMarker(
			'4wv87',
			MiscTypes.airSupport,
			[393.9098932484315, 375.5],
			'Napalm Strike'
		),
		new MiscMarker(
			'eLtJ6',
			MiscTypes.airSupport,
			[149.72083060211628, 349.75],
			'Artillery'
		),
	],
	[MapIds.firebaseZSpawn]: [
		new MiscMarker('uxA5R', MiscTypes.ammoCrate, [208.93098604738273, 232.5]),
		new MiscMarker('kgGlY', Perks.quick, [159.46212192152825, 258.5]),
		new MiscMarker('rVCnt', MiscTypes.craftingTable, [311.9078565408746, 242]),
		new MiscMarker(
			'UyWMz',
			MiscTypes.wallbuy,
			[325.9028748010113, 223.5],
			'Magnum'
		),
		new MiscMarker(
			'8Tm13',
			MiscTypes.wallbuy,
			[315.20624122108813, 328],
			'Bullfrog'
		),
		new MiscMarker('3qsWY', MiscTypes.papMachine, [380.469758404345, 257.875]),
		new MiscMarker('GTe1y', MiscTypes.wunderFizz, [379.844980803446, 215.375]),
		new MiscMarker(
			'oQwxc',
			MiscTypes.omegaRadio,
			[300.9558734823382, 330.3515634503805],
			'On top of a table, outside the bedroom. You will have to turn on the power first.'
		),
		new MiscMarker('d1zVX', MiscTypes.arsenal, [364.850318381871, 169.25]),
		new MiscMarker(
			'PN5cS',
			MiscTypes.rampageInducer,
			[256.4956901395262, 188.375]
		),
		new MiscMarker(
			'zQK69',
			MiscTypes.wallbuy,
			[115.12184661485156, 215.125],
			'Gallo'
		),
		new MiscMarker(
			'il15s',
			MiscTypes.wallbuy,
			[314.4659378218934, 149.25],
			'Stoner-63'
		),
		new MiscMarker(
			'ZQwBM',
			MiscTypes.teleporter,
			[220.20935480850267, 349.25],
			'To Main Base'
		),
	],
	[MapIds.mauerDerToten]: [
		new MiscMarker(
			'qVjRy',
			MiscTypes.exfillRadio,
			[276.7438548447102, 192.62948494393575]
		),
		new MiscMarker('Vz7PI', MiscTypes.ammoCrate, [360.6779752089085, 166.75]),
		new MiscMarker(
			'lgFlW',
			MiscTypes.ammoCrate,
			[313.43651220099684, 307.7578472555278]
		),
		new MiscMarker(
			'028Bw',
			MiscTypes.ammoCrate,
			[207.98264577272982, 224.85949360808374]
		),
		new MiscMarker(
			'lyE4a',
			MiscTypes.ammoCrate,
			[182.8381938034719, 330.2883500965944]
		),
		new MiscMarker(
			'12omS',
			MiscTypes.ammoCrate,
			[188.41788459268184, 144.79835354493784]
		),
		new MiscMarker(
			'qXZCX',
			MiscTypes.craftingTable,
			[307.4422328657983, 199.5]
		),
		new MiscMarker(
			'2Z69d',
			MiscTypes.arsenal,
			[189.36420253469458, 208.85605371524963]
		),
		new MiscMarker('rvI3J', MiscTypes.mysteryBox, [378.6772711270868, 219]),
		new MiscMarker('lUa4E', Perks.mule, [308.7001537862926, 268.75]),
		new MiscMarker(
			'mYtJL',
			Perks.elemental,
			[254.115302662541, 212.98081184778474]
		),
		new MiscMarker(
			'vu9tj',
			Perks.deadshot,
			[196.36891402801726, 392.7378280560345]
		),
		new MiscMarker(
			'htMzr',
			MiscTypes.zipline,
			[146.61019806933353, 174.85745117171348]
		),
		new MiscMarker(
			'qUsdq',
			MiscTypes.wallbuy,
			[333.1876563339571, 200.75],
			'Krig 6'
		),
		new MiscMarker('_MhF2', MiscTypes.wallbuy, [287.957458635193, 312], 'M16'),
		new MiscMarker(
			'9iDLM',
			MiscTypes.wallbuy,
			[264.4634433306776, 206.21861097788877],
			'Milano 821'
		),
		new MiscMarker(
			'6n4vD',
			MiscTypes.wallbuy,
			[159.12485177224806, 196.85347379562404],
			'XM4'
		),
		new MiscMarker(
			'v08K4',
			MiscTypes.wallbuy,
			[150.48213221909987, 80.55439072511358],
			'DMR 14'
		),
		new MiscMarker(
			'xRomg',
			MiscTypes.wallbuy,
			[157.85840261969585, 417.3706776955915],
			'RPD'
		),
		new MiscMarker(
			'ROB5S',
			MiscTypes.power,
			[283.45675455337124, 206.46866472621429],
			'2 fuses are required to activate.'
		),
	],
	[MapIds.mauerDerTotenStreets]: [
		new MiscMarker(
			'WLKGz',
			MiscTypes.ammoCrate,
			[226.22815725111633, 104.23454735640928]
		),
		new MiscMarker(
			'O9joh',
			MiscTypes.ammoCrate,
			[298.4431129680754, 171.48344551573587]
		),
		new MiscMarker('KtnDa', MiscTypes.ammoCrate, [368.860374089789, 329.5]),
		new MiscMarker('uuvse', MiscTypes.ammoCrate, [289.19293694762, 353.25]),
		new MiscMarker('8NpKm', MiscTypes.ammoCrate, [115.48491782624001, 287.75]),
		new MiscMarker('lS2oV', MiscTypes.ammoCrate, [124.50577625020844, 443]),
		new MiscMarker('fEYzo', MiscTypes.ammoCrate, [339.6007809749681, 444.125]),
		new MiscMarker(
			'qop_T',
			MiscTypes.ammoCrate,
			[319.96859425101854, 264.9739921141247]
		),
		new MiscMarker(
			'MvQgd',
			MiscTypes.craftingTable,
			[313.73489003353654, 412.75]
		),
		new MiscMarker(
			'jO42X',
			MiscTypes.craftingTable,
			[326.8100280096752, 252.86991700265528],
			'Inside the grocery store, in the back.'
		),
		new MiscMarker(
			'9tX9l',
			MiscTypes.workbench,
			[386.2704971478231, 340.9742540345685],
			'For Quest Items'
		),
		new MiscMarker(
			'kea3N',
			MiscTypes.workbench,
			[290.5197263204584, 50.94558539052251],
			'For Quest Items'
		),
		new MiscMarker(
			'I998A',
			MiscTypes.omegaRadio,
			[378.5471745893419, 327.51062416910804],
			'On the table inside the tent.'
		),
		new MiscMarker('g7EFo', MiscTypes.arsenal, [412.2201043152804, 386.875]),
		new MiscMarker('d4_OW', MiscTypes.arsenal, [178.86090215115524, 389.5]),
		new MiscMarker(
			'frIgP',
			MiscTypes.arsenal,
			[178.80175339341875, 214.62665344155863]
		),
		new MiscMarker('X3VOB', MiscTypes.mysteryBox, [116.75850456726766, 413.75]),
		new MiscMarker('ePWVb', MiscTypes.mysteryBox, [98.74219488243688, 271.125]),
		new MiscMarker('N8ZNs', MiscTypes.mysteryBox, [276.9905226881103, 269.25]),
		new MiscMarker(
			'IX8sm',
			MiscTypes.mysteryBox,
			[378.910177402522, 245.23908704107671]
		),
		new MiscMarker(
			'LEd_i',
			MiscTypes.mysteryBox,
			[343.4854752213171, 385.6801376596718]
		),
		new MiscMarker('5Jio9', Perks.jugg, [328.1014850567898, 386.125]),
		new MiscMarker('npHck', Perks.speed, [154.97101221026105, 300]),
		new MiscMarker('YWNji', Perks.staminup, [119.88167256489595, 364.5]),
		new MiscMarker('kU1ty', Perks.tomb, [290.1182070000556, 384.25]),
		new MiscMarker(
			'KMuzB',
			Perks.quick,
			[349.96564996205154, 243.66029463523287]
		),
		new MiscMarker('iSOF5', MiscTypes.zipline, [158.71969205684536, 338.25]),
		new MiscMarker('PYHwG', MiscTypes.zipline, [200.9548183283615, 306]),
		new MiscMarker('enALO', MiscTypes.zipline, [287.44821756128295, 426.5]),
		new MiscMarker('99LL2', MiscTypes.zipline, [209.47567675232995, 424]),
		new MiscMarker(
			'jAKky',
			MiscTypes.zipline,
			[218.36798261974315, 62.52416596377261]
		),
		new MiscMarker(
			'Pnm7G',
			MiscTypes.zipline,
			[297.2230874546504, 66.49025111819103]
		),
		new MiscMarker(
			'GlZ4L',
			MiscTypes.zipline,
			[351.8449252558993, 406.6482451443249]
		),
		new MiscMarker(
			'ZUMOe',
			MiscTypes.zipline,
			[366.5220960898484, 387.1877036353398]
		),
		new MiscMarker(
			'9K2aA',
			MiscTypes.zipline,
			[351.807574435536, 309.44331154539293]
		),
		new MiscMarker(
			'1ZEfz',
			MiscTypes.zipline,
			[319.1791980480966, 244.71282290579543]
		),
		new MiscMarker(
			'2FWVD',
			MiscTypes.zipline,
			[293.12912335167323, 295.76044402807963]
		),
		new MiscMarker(
			'7_Xve',
			MiscTypes.zipline,
			[185.22849307961684, 103.70872128599069],
			'To Subway'
		),
		new MiscMarker(
			'CFOPW',
			MiscTypes.zipline,
			[350.1803292993851, 106.50645960257796],
			'To Subway'
		),
		new MiscMarker(
			'X9Qx7',
			MiscTypes.ziplineDown,
			[311.4543341852104, 91.91985593181492],
			"To No Man's Land"
		),
		new MiscMarker(
			'GKvzw',
			MiscTypes.trap,
			[302.8222664961821, 180.10692583594192],
			'Auto Turret'
		),
		new MiscMarker(
			'FZ9wR',
			MiscTypes.trap,
			[197.9487619590601, 167.00775711246345],
			'Auto Turret'
		),
		new MiscMarker(
			'jiSKu',
			MiscTypes.klausRadio,
			[248.69686909470747, 86.08737776355258]
		),
		new MiscMarker(
			'ju6UD',
			MiscTypes.klausRadio,
			[390.1321584270637, 329.59800864437324]
		),
		new MiscMarker(
			'UM_zY',
			MiscTypes.klausRadio,
			[181.4866273933248, 286.50529186955015]
		),
		new MiscMarker(
			'hELxf',
			MiscTypes.wallbuy,
			[286.69157898902415, 102.51138061773712],
			'Stoner-63'
		),
		new MiscMarker(
			'Bv7or',
			MiscTypes.wallbuy,
			[199.4014593131159, 175.9347523985546],
			'QBZ-83'
		),
		new MiscMarker(
			'0NXak',
			MiscTypes.wallbuy,
			[399.8494608215523, 326],
			'Type 63'
		),
		new MiscMarker(
			'8kTWI',
			MiscTypes.wallbuy,
			[286.72101221026105, 380.25],
			'AK-74u'
		),
		new MiscMarker(
			'X4lhW',
			MiscTypes.wallbuy,
			[140.47611680346853, 340],
			'MP5'
		),
		new MiscMarker(
			'jQOwR',
			MiscTypes.wallbuy,
			[186.48321783920994, 404.375],
			'Gallo SA12'
		),
		new MiscMarker(
			'ZEXRC',
			MiscTypes.wallbuy,
			[340.85034092382944, 413.75],
			'Diamatti'
		),
		new MiscMarker(
			'vdYgv',
			MiscTypes.wallbuy,
			[323.38931113034687, 313.6534246276432],
			'Hauer 77'
		),
		new MiscMarker(
			'ZUMvb',
			MiscTypes.wallbuy,
			[307.8645191395491, 294.70791575751707],
			'KSP 45'
		),
		new MiscMarker(
			'Awvc5',
			MiscTypes.wunderFizz,
			[316.19672138741174, 57.20469016157574]
		),
		new MiscMarker(
			'7EMcB',
			MiscTypes.papMachine,
			[251.9594828704304, 196.73887409661467]
		),
		new MiscMarker(
			'slGlH',
			MiscTypes.trialComputer,
			[252.96874015675087, 39.595653414259026]
		),
		new MiscMarker(
			'UvjK8',
			MiscTypes.rampageInducer,
			[337.9763530414482, 384.75]
		),
	],
	[MapIds.forsaken]: [
		new MiscMarker(
			'uhk5c',
			MiscTypes.teleporter,
			[312.4317773199738, 82.75],
			'To Main Street'
		),
		new MiscMarker('UATGZ', MiscTypes.ammoCrate, [238.70802041389643, 101.25]),
		new MiscMarker(
			'8zjoh',
			MiscTypes.ammoCrate,
			[260.86174735462123, 289.5625]
		),
		new MiscMarker('nWAL0', MiscTypes.ammoCrate, [371.7196226238412, 95.625]),
		new MiscMarker('VgClz', MiscTypes.ammoCrate, [389.9737615881637, 219.625]),
		new MiscMarker('RlnB7', MiscTypes.ammoCrate, [94.73274651184568, 193]),
		new MiscMarker('jA4L1', MiscTypes.ammoCrate, [166.97531838187098, 233.625]),
		new MiscMarker('d6iGj', MiscTypes.ammoCrate, [203.72923260604927, 278.125]),
		new MiscMarker('tO_Nq', MiscTypes.ammoCrate, [247.5, 427]),
		new MiscMarker('I35On', MiscTypes.ammoCrate, [268.5, 436.375]),
		new MiscMarker(
			'esx6w',
			MiscTypes.craftingTable,
			[203.22065268283546, 110.25]
		),
		new MiscMarker(
			'2X5E_',
			MiscTypes.craftingTable,
			[365.6009855791741, 192.375]
		),
		new MiscMarker('Mmsy_', MiscTypes.craftingTable, [260.625, 436.3125]),
		new MiscMarker(
			'aY4N9',
			MiscTypes.teleporter,
			[223.20793145425603, 129],
			'To Tower'
		),
		new MiscMarker(
			'4EXal',
			MiscTypes.teleporter,
			[383.941029122577, 41.75],
			'To Staging Area'
		),
		new MiscMarker(
			'LinzC',
			MiscTypes.wallbuy,
			[252.94734525704655, 91.75],
			'1911'
		),
		new MiscMarker('6uLKO', MiscTypes.arsenal, [257.69565502387866, 115.5]),
		new MiscMarker('_S8eS', MiscTypes.arsenal, [275.375, 436.375]),
		new MiscMarker(
			'KTf9e',
			MiscTypes.rampageInducer,
			[269.94129600149824, 123.5]
		),
		new MiscMarker('dNZrb', Perks.death, [296.9316883603334, 127.75]),
		new MiscMarker(
			'DkPDk',
			MiscTypes.wallbuy,
			[285.1908512032962, 57.25],
			'Diamatti'
		),
		new MiscMarker(
			'hPvQY',
			MiscTypes.wallbuy,
			[381.70090364266315, 78.25],
			'Hauer 77'
		),
		new MiscMarker(
			'ftW_1',
			MiscTypes.wallbuy,
			[236.37046539938197, 307.5],
			'Pellington'
		),
		new MiscMarker(
			'xbmnw',
			MiscTypes.wallbuy,
			[320.9730698099073, 182.9375],
			'DMR 14'
		),
		new MiscMarker(
			'5Bzt4',
			MiscTypes.wallbuy,
			[365.2261190186347, 203.5],
			'Bullfrog'
		),
		new MiscMarker(
			'e6LK0',
			MiscTypes.wallbuy,
			[447.66361667759156, 220.9375],
			'Gallo'
		),
		new MiscMarker(
			'5dWjB',
			MiscTypes.wallbuy,
			[159.05660876486562, 183.9375],
			'QBZ-83'
		),
		new MiscMarker(
			'mOTWb',
			MiscTypes.wallbuy,
			[154.86786332989982, 158.9375],
			'Milano 821'
		),
		new MiscMarker(
			'nNJxZ',
			MiscTypes.wallbuy,
			[198.60605627867778, 273.5],
			'Type 63s'
		),
		new MiscMarker('rBir5', Perks.jugg, [396.847115834816, 98]),
		new MiscMarker('yixf9', Perks.phd, [237.61886646689766, 296.75]),
		new MiscMarker('x_U2D', Perks.quick, [354.6048998033524, 223.75]),
		new MiscMarker('_EJAx', Perks.tomb, [367.60832474950837, 248]),
		new MiscMarker('elRzv', Perks.staminup, [416.8465375971533, 186.5]),
		new MiscMarker('5UsEQ', Perks.elemental, [156.10418812622905, 240.5]),
		new MiscMarker('3IYFT', MiscTypes.mysteryBox, [153.46077816274934, 122.5]),
		new MiscMarker('dgz_n', MiscTypes.mysteryBox, [321.7450674220433, 228.625]),
		new MiscMarker('kzgZZ', MiscTypes.mysteryBox, [426.58274885288887, 206.25]),
		new MiscMarker(
			'eqygP',
			MiscTypes.trap,
			[136.1078799513063, 108.25],
			'Suspended Hind'
		),
		new MiscMarker('PO_Zs', MiscTypes.wallbuy, [81.87718419327653, 85], 'MP5'),
		new MiscMarker('guJMC', Perks.mule, [61.63438992415021, 109]),
		new MiscMarker(
			'PE7Yv',
			MiscTypes.wallbuy,
			[124.48701657458564, 175],
			'AUG'
		),
		new MiscMarker(
			'Cjvh8',
			MiscTypes.wallbuy,
			[85.85552252083528, 102.25],
			'XM4'
		),
		new MiscMarker(
			'IHqvu',
			MiscTypes.wallbuy,
			[157.2287878078472, 232],
			'FFAR 1'
		),
		new MiscMarker(
			'xSDbU',
			MiscTypes.teleporter,
			[62.24088631894372, 92.75],
			'To Main Street'
		),
		new MiscMarker(
			'sRlGi',
			MiscTypes.teleporter,
			[283.4247143927334, 296.1875],
			'To Staging Area'
		),
		new MiscMarker(
			'Q_P5D',
			MiscTypes.teleporter,
			[275.1142159846428, 336.9375],
			'To Bunker'
		),
		new MiscMarker(
			'pkLTA',
			MiscTypes.teleporter,
			[383.223183350501, 239.5],
			'To Anytown'
		),
		new MiscMarker(
			'hf9Pd',
			MiscTypes.teleporter,
			[249.9121172394419, 264.25],
			'To Bunker - Needs to be repaired'
		),
		new MiscMarker('MCTIZ', Perks.speed, [80.109525704654, 178.125]),
		new MiscMarker(
			'9OeeA',
			MiscTypes.craftingTable,
			[93.22985532353218, 171.75]
		),
		new MiscMarker(
			'1BYWt',
			MiscTypes.trap,
			[108.349473265287, 161.5],
			'Suspended Hind'
		),
		new MiscMarker(
			'6YJ_i',
			MiscTypes.wallbuy,
			[110.609525704654, 202.25],
			'M82'
		),
		new MiscMarker('kIs6t', MiscTypes.zipline, [116.23252411274464, 259.25]),
		new MiscMarker('kJsx4', MiscTypes.zipline, [384.73239067328404, 125]),
		new MiscMarker('aJTrM', MiscTypes.zipline, [244.25, 282.75], 'To Anytown'),
		new MiscMarker(
			'fzQu8',
			MiscTypes.zipline,
			[299.75, 281.5],
			'To Main street'
		),
		new MiscMarker(
			'tbM3z',
			MiscTypes.zipline,
			[348.36059322033896, 237],
			'To Tower'
		),
		new MiscMarker(
			'tjGuQ',
			MiscTypes.zipline,
			[182.5966710366139, 241.375],
			'To Tower'
		),
		new MiscMarker(
			'wLU_k',
			MiscTypes.trap,
			[130.8523199737803, 216],
			'Suspend Hind'
		),
		new MiscMarker('xFBpY', MiscTypes.arsenal, [112.1089919468115, 238.375]),
		new MiscMarker('jTLky', MiscTypes.arsenal, [400.7215375971533, 247.25]),
		new MiscMarker(
			'Dzmo9',
			MiscTypes.wallbuy,
			[118.23181243562132, 215.375],
			'RPD'
		),
		new MiscMarker('OAD4X', Perks.deadshot, [118.98323578986796, 238.875]),
		new MiscMarker(
			'n474k',
			MiscTypes.trap,
			[151.59858366888284, 273.875],
			'Suspended Hind'
		),
		new MiscMarker('lbIYT', MiscTypes.mysteryBox, [118.62162421575054, 211.75]),
		new MiscMarker('nzKwk', MiscTypes.mysteryBox, [237.86299513063022, 324]),
		new MiscMarker(
			'xcJJq',
			MiscTypes.mysteryBox,
			[263.70345178866245, 38.39665499450159]
		),
		new MiscMarker(
			'0U1dM',
			MiscTypes.wallbuy,
			[163.22869884820676, 344.625],
			'FFAR1'
		),
		new MiscMarker(
			'i4Hh4',
			MiscTypes.trialComputer,
			[264.67736094203576, 289.5625]
		),
		new MiscMarker(
			'seF1D',
			MiscTypes.papMachine,
			[274.98619135686863, 306.875]
		),
		new MiscMarker('GBsU3', MiscTypes.papMachine, [264.8125, 453.25]),
		new MiscMarker('Cpob6', MiscTypes.wunderFizz, [272.75, 453.0625]),
		new MiscMarker('vuLXB', MiscTypes.radio, [66.98666073602396, 129.125]),
	],
	[MapIds.forsakenUnderground]: [
		new MiscMarker('ndKPG', MiscTypes.arsenal, [385.43844929300496, 142]),
		new MiscMarker('9sxm7', MiscTypes.ammoCrate, [284.6965446202828, 98.5]),
		new MiscMarker('lotfM', MiscTypes.ammoCrate, [194.4862604176421, 298.25]),
		new MiscMarker('zC3eP', MiscTypes.ammoCrate, [168.21140088023225, 424.5]),
		new MiscMarker(
			'7BgHO',
			MiscTypes.craftingTable,
			[274.9777694540687, 227.25]
		),
		new MiscMarker(
			'BwlgF',
			MiscTypes.teleporter,
			[296.91141492649126, 38],
			'To Tower'
		),
		new MiscMarker('f7d0q', MiscTypes.teleporter, [54.983195992134114, 448.5]),
		new MiscMarker('jys26', MiscTypes.mysteryBox, [297.9818124356213, 396.125]),
		new MiscMarker(
			'CCURy',
			MiscTypes.wunderFizz,
			[165.73875128757373, 263.625]
		),
		new MiscMarker(
			'EWbhd',
			MiscTypes.wallbuy,
			[345.4748735836689, 228.375],
			'Krig'
		),
		new MiscMarker(
			'wTePJ',
			MiscTypes.wallbuy,
			[222.46318007304055, 263.75],
			'M60'
		),
		new MiscMarker(
			'OFSTG',
			MiscTypes.wallbuy,
			[150.21780597434218, 470.75],
			'AK-74u'
		),
	],

	/////////////////////Outbreak Misc Items/////////////////////////
	[MapIds.zoo]: [
		new MiscMarker(
			'tzc4_',
			MiscTypes.dementedEcho,
			[163.36993130570124, 296.445005309222]
		),
		new MiscMarker(
			'cl6IT',
			MiscTypes.dementedEcho,
			[203.0904837783254, 333.7537888538516]
		),
		new MiscMarker('AuC64', MiscTypes.dementedEcho, [211.47346160666785, 323]),
		new MiscMarker(
			's9ryH',
			MiscTypes.dementedEcho,
			[213.7534729131719, 373.50719403987466]
		),
		new MiscMarker(
			'a0AnD',
			MiscTypes.dementedEcho,
			[116.9816405037569, 387.408120242332]
		),
		new MiscMarker('lL22O', MiscTypes.rift, [435.44962759354496, 270]),
		new MiscMarker('9JAf2', MiscTypes.rift, [207.47388721404502, 468.5]),
		new MiscMarker('6Z0Tt', MiscTypes.rift, [120.48314417449899, 180]),
		new MiscMarker('NFKKy', MiscTypes.rift, [288.9652154637347, 43.5]),
		new MiscMarker('9gKgQ', MiscTypes.fishing, [248.9694715375066, 345.5]),
		new MiscMarker('dz6u_', MiscTypes.fishing, [172.47761127859548, 332.5]),
		new MiscMarker(
			'XHBng',
			MiscTypes.wallbuy,
			[169.788791011143, 373.51495741647]
		),
		new MiscMarker(
			'C48eX',
			MiscTypes.wallbuy,
			[199.8618860850235, 339.953248441663]
		),
		new MiscMarker(
			'hUgNo',
			MiscTypes.wallbuy,
			[226.05336642166992, 284.46966314770833]
		),
		new MiscMarker(
			'5mHNU',
			MiscTypes.wallbuy,
			[271.9013083975607, 327.48529982779115]
		),
		new MiscMarker(
			'uLBiL',
			MiscTypes.wallbuy,
			[378.694470373232, 279.2212709056113]
		),
		new MiscMarker(
			'IseUH',
			MiscTypes.wallbuy,
			[377.02986155344405, 406.01380851879895]
		),
		new MiscMarker(
			's6Ggz',
			MiscTypes.wallbuy,
			[258.7671967862002, 112.99627959809773]
		),
		new MiscMarker(
			'GRImF',
			MiscTypes.wallbuy,
			[117.70440343659759, 383.7635095097696]
		),
		new MiscMarker(
			'C8ExY',
			MiscTypes.wallbuy,
			[150.5199691988099, 271.05612018196865]
		),
		new MiscMarker(
			'Pf372',
			MiscTypes.ammoCrate,
			[196.78455986019551, 388.89032598944937]
		),
		new MiscMarker(
			'ykBfS',
			MiscTypes.ammoCrate,
			[176.96849229385415, 366.4596383969935]
		),
		new MiscMarker(
			'tsnBG',
			MiscTypes.ammoCrate,
			[192.0715706327847, 337.1326169848179]
		),
		new MiscMarker(
			'R9bqQ',
			MiscTypes.ammoCrate,
			[168.52216510057147, 312.96973518677555]
		),
		new MiscMarker(
			'1aqkq',
			MiscTypes.ammoCrate,
			[213.48501167152224, 300.4013804366279]
		),
		new MiscMarker(
			'OQwM9',
			MiscTypes.ammoCrate,
			[283.7615868237564, 327.48529982779115]
		),
		new MiscMarker(
			'srJdt',
			MiscTypes.ammoCrate,
			[262.4092125606224, 256.73890544646724]
		),
		new MiscMarker(
			'CAjam',
			MiscTypes.ammoCrate,
			[324.78259081632854, 247.2883935895421]
		),
		new MiscMarker(
			'Nxzgt',
			MiscTypes.ammoCrate,
			[289.7210824169569, 397.1512153266003]
		),
		new MiscMarker(
			'Ff65e',
			MiscTypes.ammoCrate,
			[232.3976460415551, 402.32115606005016]
		),
		new MiscMarker(
			'rG6OZ',
			MiscTypes.ammoCrate,
			[133.45549570945437, 367.83256031362055]
		),
		new MiscMarker(
			'K6fkC',
			MiscTypes.ammoCrate,
			[230.94686487840548, 108.61362457152732]
		),
		new MiscMarker(
			'Dl0uR',
			MiscTypes.jumpPad,
			[202.42858014843836, 335.5695254809683]
		),
		new MiscMarker(
			'BuMxe',
			MiscTypes.jumpPad,
			[366.27914203888383, 306.1056709595219]
		),
		new MiscMarker(
			'xZlT6',
			MiscTypes.jumpPad,
			[294.42019778116367, 219.069043148302]
		),
		new MiscMarker(
			'lMcxb',
			MiscTypes.jumpPad,
			[272.2861614315077, 436.4132549551656]
		),
		new MiscMarker(
			'LIIDC',
			MiscTypes.jumpPad,
			[158.0237228555812, 273.21317651221364]
		),
		new MiscMarker(
			'3FJRd',
			MiscTypes.jumpPad,
			[119.91665879829864, 374.4956053248856]
		),
		new MiscMarker(
			'tzQW4',
			MiscTypes.arsenal,
			[212.19705685623882, 365.358745754419]
		),
		new MiscMarker(
			'LPQNf',
			MiscTypes.wunderFizz,
			[185.75872880079808, 324.37261753718536]
		),
		new MiscMarker(
			'Tlb6u',
			MiscTypes.craftingTable,
			[194.31913199538405, 220.12767796156717]
		),
		new MiscMarker(
			'4tp_E',
			MiscTypes.papMachine,
			[273.84851828842864, 297.746094221808]
		),
		new MiscMarker(
			'DFsPI',
			MiscTypes.mysteryBox,
			[193.12781735790279, 293.3206171971081]
		),
		new MiscMarker(
			'AUjar',
			MiscTypes.mysteryBox,
			[356.7659005934825, 397.0672338086722]
		),
		new MiscMarker(
			'Zxydg',
			MiscTypes.mysteryBox,
			[181.58349779739913, 374.11064389955226]
		),
		new MiscMarker(
			'k9OHn',
			MiscTypes.mysteryBox,
			[255.75540630740025, 308.10160628994294]
		),
		new MiscMarker(
			'qjbmY',
			MiscTypes.trialComputer,
			[150.6289514492613, 324.5962181095381]
		),
		new MiscMarker(
			'KkvCk',
			MiscTypes.trialComputer,
			[189.44671176451865, 373.2189392228686]
		),
		new MiscMarker(
			'Krmmb',
			MiscTypes.trialComputer,
			[267.6000979346463, 299.1927779603539]
		),
		new MiscMarker('RDvrx', MiscTypes.requiemRadio, [382.4552668912928, 277.5]),
		new MiscMarker('dsmm6', MiscTypes.omegaRadio, [116.98351658095407, 376]),
		new MiscMarker('g64Z9', MiscTypes.maxisRadio, [262.9679819116865, 118]),
		new MiscMarker(
			'G6f1o',
			MiscTypes.monkey,
			[357.6836499712147, 349.54995004995004],
			'Midway up the stairs in the book nook.'
		),
		new MiscMarker(
			'dkJOS',
			MiscTypes.monkey,
			[334.6704087507196, 262.5942934616404],
			'In the corner on a green cabinet.'
		),
		new MiscMarker(
			'AqCfQ',
			MiscTypes.monkey,
			[204.52540299366723, 279.51968694570735],
			'Between a wall and a rock.'
		),
		new MiscMarker(
			't1Csu',
			MiscTypes.monkey,
			[266.54015544041454, 117.57161206140799],
			'In the middle of the large shelves.'
		),
		new MiscMarker(
			'a84zo',
			MiscTypes.projector,
			[241.65018710420264, 295.65660105200925]
		),
		new MiscMarker(
			'QDny7',
			MiscTypes.redRift,
			[194.58900339361654, 392.10299971799157]
		),
	],
	[MapIds.duga]: [
		new MiscMarker('BcM6G', MiscTypes.dementedEcho, [218.2373426139386, 258]),
		new MiscMarker(
			'X69Ma',
			MiscTypes.dementedEcho,
			[168.83660953980305, 352.95720859235564]
		),
		new MiscMarker(
			'M6PhI',
			MiscTypes.dementedEcho,
			[400.31381858522724, 250.95835630001685],
			'Inside the underground bunker'
		),
		new MiscMarker(
			'ZeAyZ',
			MiscTypes.dementedEcho,
			[147.2673857661874, 265.46200912494885],
			'Inside the underground bunker'
		),
		new MiscMarker(
			'UtKcD',
			MiscTypes.dementedEcho,
			[104.0667719037023, 306.8175516471223]
		),
		new MiscMarker(
			'xeydw',
			MiscTypes.dementedEcho,
			[256.02458104515534, 191.20823141347046]
		),
		new MiscMarker(
			'xCH_G',
			MiscTypes.dementedEcho,
			[361.7255340221552, 79.6459891424929]
		),
		new MiscMarker('j0woJ', MiscTypes.rift, [260.96862032275226, 486]),
		new MiscMarker('YzOdE', MiscTypes.rift, [139.48154814683454, 193]),
		new MiscMarker('8Dwkm', MiscTypes.rift, [310.4633534314595, 30.5]),
		new MiscMarker('pWvAS', MiscTypes.rift, [423.45133002305374, 260.5]),
		new MiscMarker('8wQJ4', MiscTypes.fishing, [91.48665543536083, 359.5]),
		new MiscMarker('fXMwv', MiscTypes.fishing, [191.97596205000883, 160.5]),
		new MiscMarker('XaCK_', MiscTypes.fishing, [123.48325057634332, 261]),
		new MiscMarker('pqtg9', MiscTypes.fishing, [287.46580067387833, 64.5]),
		new MiscMarker(
			'MxjA2',
			MiscTypes.ammoCrate,
			[201.09797612718282, 276.89957333223686]
		),
		new MiscMarker(
			'y_uaM',
			MiscTypes.ammoCrate,
			[214.59038922539906, 260.69511740020835]
		),
		new MiscMarker(
			'nq3VS',
			MiscTypes.ammoCrate,
			[233.81825202493548, 322.8962313594156]
		),
		new MiscMarker(
			'lDedv',
			MiscTypes.ammoCrate,
			[169.77869283641405, 313.01829526629393]
		),
		new MiscMarker(
			'WSe9N',
			MiscTypes.ammoCrate,
			[170.29069147945606, 363.0748283756314]
		),
		new MiscMarker(
			'3oKQj',
			MiscTypes.ammoCrate,
			[232.54680567576682, 372.5778360713054]
		),
		new MiscMarker(
			'9VHyi',
			MiscTypes.ammoCrate,
			[265.4029415114675, 446.12229526918975]
		),
		new MiscMarker(
			'6sxKz',
			MiscTypes.ammoCrate,
			[290.2862557988399, 280.76045465863615]
		),
		new MiscMarker(
			'BXt8R',
			MiscTypes.ammoCrate,
			[154.37664743655102, 207.31244648201488]
		),
		new MiscMarker(
			'mGa6x',
			MiscTypes.ammoCrate,
			[295.8560155969824, 211.28179076416518]
		),
		new MiscMarker(
			'pWj7D',
			MiscTypes.wallbuy,
			[240.40983939603782, 309.6215067926123]
		),
		new MiscMarker(
			'_et7e',
			MiscTypes.wallbuy,
			[179.7866999930869, 311.14179392441775]
		),
		new MiscMarker(
			'QJLeT',
			MiscTypes.wallbuy,
			[162.5180873040452, 353.77125671112447]
		),
		new MiscMarker(
			'Aa7h5',
			MiscTypes.wallbuy,
			[218.9804723907548, 387.53389130258694]
		),
		new MiscMarker(
			'Z2G7z',
			MiscTypes.wallbuy,
			[295.8011933010631, 273.74144329217023]
		),
		new MiscMarker(
			'jyPt2',
			MiscTypes.wallbuy,
			[329.9425791075898, 236.51538664159438]
		),
		new MiscMarker(
			'JFoDx',
			MiscTypes.requiemRadio,
			[218.18265982443694, 262.5]
		),
		new MiscMarker('SpPAk', MiscTypes.omegaRadio, [292.4610125908848, 261.5]),
		new MiscMarker('JG472', MiscTypes.maxisRadio, [170.99728786132295, 358.5]),
		new MiscMarker(
			'uReU5',
			MiscTypes.monkey,
			[182.73715299184204, 242],
			'On top of the small building'
		),
		new MiscMarker(
			'knmox',
			MiscTypes.monkey,
			[339.4971340539545, 215.75],
			'On top of a stack of barrels.'
		),
		new MiscMarker(
			'FIUz1',
			MiscTypes.monkey,
			[358.4786674447592, 360.5],
			'At the back on top of the bus stop.'
		),
		new MiscMarker(
			'P79of',
			MiscTypes.monkey,
			[107.24119968079447, 330],
			'Behind the wall'
		),
		new MiscMarker('d2US7', MiscTypes.projector, [173.2474009132825, 354.5625]),
		new MiscMarker(
			'1q0fz',
			MiscTypes.mysteryBox,
			[394.91828663236106, 377.7967404457413]
		),
		new MiscMarker(
			'Fps2a',
			MiscTypes.mysteryBox,
			[244.24867769247766, 180.47068724767]
		),
		new MiscMarker(
			'Sniis',
			MiscTypes.mysteryBox,
			[154.06970159807457, 395.86233538877013]
		),
		new MiscMarker(
			'K53yY',
			MiscTypes.jumpPad,
			[148.54646545184332, 401.28777829579485]
		),
		new MiscMarker(
			'HxnzA',
			MiscTypes.jumpPad,
			[257.9280438867792, 194.34102447516744]
		),
		new MiscMarker(
			'1ycSr',
			MiscTypes.jumpPad,
			[359.0265436332714, 317.953126549139]
		),
		new MiscMarker(
			'k2jH1',
			MiscTypes.arsenal,
			[326.5927368844101, 212.2958620188356]
		),
		new MiscMarker(
			'3Xjvq',
			MiscTypes.arsenal,
			[196.6219646344271, 445.1421234611733]
		),
		new MiscMarker(
			'VIamS',
			MiscTypes.craftingTable,
			[392.9834590571724, 252.98893825655972]
		),
		new MiscMarker(
			'cd9s4',
			MiscTypes.craftingTable,
			[150.54000918056096, 262.26732211660993]
		),
		new MiscMarker(
			'gbIKf',
			MiscTypes.papMachine,
			[254.77418243078154, 348.7609997299418]
		),
		new MiscMarker(
			'QU4JZ',
			MiscTypes.trialComputer,
			[240.0005248924028, 315.2523023747949]
		),
		new MiscMarker(
			'kHQFd',
			MiscTypes.trialComputer,
			[222.46786422999594, 251.42072927638944]
		),
		new MiscMarker(
			'svAvo',
			MiscTypes.wunderFizz,
			[219.1693079026586, 260.3728463398107]
		),
		new MiscMarker(
			'ORM0f',
			MiscTypes.redRift,
			[391.40929445880636, 252.02191837378084]
		),
		new MiscMarker(
			'6IA1p',
			MiscTypes.electrobolt,
			[218.94657303732083, 383.23711642835906]
		),
	],
	[MapIds.ruka]: [
		new MiscMarker(
			'18A2Y',
			MiscTypes.dementedEcho,
			[332.61885317644305, 225.16827101672993]
		),
		new MiscMarker(
			'NFpUv',
			MiscTypes.dementedEcho,
			[146.8961039621756, 299.61206359787775]
		),
		new MiscMarker(
			'vi0sy',
			MiscTypes.dementedEcho,
			[198.3015251501929, 89.86190166016635]
		),
		new MiscMarker(
			'JzRzZ',
			MiscTypes.dementedEcho,
			[324.1631998133326, 339.009553939874]
		),
		new MiscMarker(
			'Rek6g',
			MiscTypes.dementedEcho,
			[282.9017792859132, 270.16920975405776]
		),
		new MiscMarker(
			'kXIXK',
			MiscTypes.ammoCrate,
			[257.37816083600154, 413.6172346831651]
		),
		new MiscMarker(
			'lq8hp',
			MiscTypes.ammoCrate,
			[332.4315645567427, 232.09767416325312]
		),
		new MiscMarker(
			'aLOSj',
			MiscTypes.ammoCrate,
			[173.19896792429392, 197.1565143418122]
		),
		new MiscMarker(
			'XxDLk',
			MiscTypes.ammoCrate,
			[248.02970877991163, 224.95717773061753]
		),
		new MiscMarker(
			'YVtjH',
			MiscTypes.ammoCrate,
			[289.25543405210186, 266.9102758254492]
		),
		new MiscMarker(
			'80XwF',
			MiscTypes.ammoCrate,
			[233.14760778468533, 335.4940487545893]
		),
		new MiscMarker(
			'IhpXC',
			MiscTypes.ammoCrate,
			[395.7668393679832, 260.3598201125223]
		),
		new MiscMarker(
			'sIyJB',
			MiscTypes.ammoCrate,
			[268.7045125258021, 128.23023540175157]
		),
		new MiscMarker(
			'IDIaG',
			MiscTypes.wallbuy,
			[257.623049666483, 419.4945666147199]
		),
		new MiscMarker(
			'ViQKB',
			MiscTypes.wallbuy,
			[330.8199221096839, 219.85452285253052]
		),
		new MiscMarker(
			'bg0KW',
			MiscTypes.wallbuy,
			[149.24142150677562, 197.01558759817974]
		),
		new MiscMarker(
			'ddBw7',
			MiscTypes.wallbuy,
			[267.5912024956175, 231.7284640168234]
		),
		new MiscMarker(
			'G3Lx1',
			MiscTypes.wallbuy,
			[290.428408237228, 265.0335171292474]
		),
		new MiscMarker(
			'aM_1i',
			MiscTypes.wallbuy,
			[278.76550804955167, 148.92171676191577]
		),
		new MiscMarker(
			'lWHWs',
			MiscTypes.mysteryBox,
			[235.4553675253349, 249.47430038351064]
		),
		new MiscMarker(
			'yzLM0',
			MiscTypes.mysteryBox,
			[207.93825237571295, 94.9904070205805]
		),
		new MiscMarker(
			'ed0yh',
			MiscTypes.mysteryBox,
			[355.2101735577195, 227.85936691186168]
		),
		new MiscMarker(
			'rFqJg',
			MiscTypes.arsenal,
			[347.15083903672115, 234.58658002443053]
		),
		new MiscMarker(
			'kaOkz',
			MiscTypes.jumpPad,
			[392.29946958579256, 336.5463149934965]
		),
		new MiscMarker(
			'c4qex',
			MiscTypes.jumpPad,
			[95.04671795003881, 281.07608728949407]
		),
		new MiscMarker(
			'tWNlC',
			MiscTypes.jumpPad,
			[225.09835126041426, 382.40520100156704]
		),
		new MiscMarker(
			'IBOr_',
			MiscTypes.jumpPad,
			[170.23950630801224, 177.14491674600282]
		),
		new MiscMarker(
			'S__Hp',
			MiscTypes.craftingTable,
			[325.56003778629366, 355.70206934085627]
		),
		new MiscMarker('lyrog', MiscTypes.wunderFizz, [294.15625, 257.75]),
		new MiscMarker(
			'SKc7w',
			MiscTypes.papMachine,
			[212.21101079768593, 112.00474522680605]
		),
		new MiscMarker(
			'eAhW4',
			MiscTypes.trialComputer,
			[211.04576192475383, 282.0806769140612]
		),
		new MiscMarker(
			'V_Wa0',
			MiscTypes.trialComputer,
			[240.21886293358622, 221.09696339658433]
		),
		new MiscMarker(
			'fFSJs',
			MiscTypes.trialComputer,
			[166.71633771720073, 171.7897004879693]
		),
		new MiscMarker('oKjiO', MiscTypes.rift, [235.467130697, 449.5]),
		new MiscMarker('5IzIg', MiscTypes.rift, [444.44909558432346, 244.5]),
		new MiscMarker('kbFXC', MiscTypes.rift, [287.1108249260276, 62]),
		new MiscMarker('7jxeH', MiscTypes.rift, [61.506318847812906, 204]),
		new MiscMarker('KDAvD', MiscTypes.redRift, [244.73564018442983, 88.5]),
		new MiscMarker('WD73g', MiscTypes.fishing, [244.5885797297779, 319]),
		new MiscMarker('qRfcl', MiscTypes.fishing, [292.11059320523333, 226.5]),
		new MiscMarker('osAam', MiscTypes.fishing, [289.1092028804677, 101]),
		new MiscMarker('51o_O', MiscTypes.requiemRadio, [329.11800827064985, 336]),
		new MiscMarker('rVWEx', MiscTypes.omegaRadio, [152.53621083027343, 224.5]),
		new MiscMarker('lPmDl', MiscTypes.maxisRadio, [269.0902017753378, 126]),
		new MiscMarker(
			'X6iHS',
			MiscTypes.monkey,
			[126.02392962817726, 148],
			'On the third shelf next to three boxed.'
		),
		new MiscMarker(
			'NXZCq',
			MiscTypes.monkey,
			[312.61036148443907, 345],
			'Behind some pallets next to the train platform.'
		),
		new MiscMarker(
			'FqjzW',
			MiscTypes.monkey,
			[366.728066736379, 131],
			'Leaning against the broken down car.'
		),
		new MiscMarker(
			'SGa0I',
			MiscTypes.monkey,
			[238.30978121120768, 448.3125],
			'At the end of the railroad, under rafters.'
		),
		// new MiscMarker("fDb0E", MiscTypes.projector, [0, 0]), // Dont think this exists
		new MiscMarker(
			'YeH4n',
			MiscTypes.thermophasic,
			[94.0042121017423, 334.3317226785948]
		),
	],
	[MapIds.alpine]: [
		new MiscMarker(
			'yfDA4',
			MiscTypes.dementedEcho,
			[335.2545905360252, 70.87629629055847]
		),
		new MiscMarker(
			'JnfGP',
			MiscTypes.dementedEcho,
			[240.22404548274855, 373.19860378733625]
		),
		new MiscMarker(
			'BXDDX',
			MiscTypes.dementedEcho,
			[367.45739492817876, 227.5]
		),
		new MiscMarker(
			'sKxXQ',
			MiscTypes.dementedEcho,
			[282.063145684509, 290.79367162236287]
		),
		new MiscMarker(
			'aGYxW',
			MiscTypes.dementedEcho,
			[211.5378017806543, 142.50036019533616]
		),
		new MiscMarker('gWtba', MiscTypes.rift, [410.72577141337115, 228.75]),
		new MiscMarker('y5uTI', MiscTypes.rift, [256.9818097180351, 38.5]),
		new MiscMarker('RG6Zt', MiscTypes.rift, [182.98968345451317, 425.75]),
		new MiscMarker('3FXOt', MiscTypes.rift, [387.9760374179819, 422.25]),
		new MiscMarker('gtLZ1', MiscTypes.fishing, [326.96170420287285, 91.5]),
		new MiscMarker('1RmkQ', MiscTypes.requiemRadio, [164.47899450257137, 203]),
		new MiscMarker('UxCH9', MiscTypes.omegaRadio, [266.4858529881185, 143.25]),
		new MiscMarker(
			'GH3ng',
			MiscTypes.maxisRadio,
			[137.01459256960453, 347.625]
		),
		new MiscMarker(
			'EXt18',
			MiscTypes.monkey,
			[256.4818629189573, 69.25],
			'On the balcony against the wall.'
		),
		new MiscMarker(
			'VPl2_',
			MiscTypes.monkey,
			[138.24444493704556, 195],
			'Upstairs on a shelf.'
		),
		new MiscMarker(
			'VcAW0',
			MiscTypes.monkey,
			[129.99532275226102, 339.5],
			'On top of some wall mounted cases.'
		),
		new MiscMarker(
			'aFKUh',
			MiscTypes.monkey,
			[409.2206641248448, 212.25],
			'Behind the porta-potties, by the gasoline tank.'
		),
		new MiscMarker(
			'GpYuO',
			MiscTypes.ammoCrate,
			[167.19038659224887, 208.25980211403822]
		),
		new MiscMarker(
			'qU6_R',
			MiscTypes.ammoCrate,
			[187.46320676628696, 380.41400504320177]
		),
		new MiscMarker(
			'4Tlfm',
			MiscTypes.ammoCrate,
			[120.37297507183676, 204.4570385411345]
		),
		new MiscMarker(
			'Oqkxy',
			MiscTypes.ammoCrate,
			[211.8918399426303, 79.65858644459786]
		),
		new MiscMarker(
			'MKtmw',
			MiscTypes.ammoCrate,
			[260.64986687396004, 79.03901174346548],
			'Upstairs'
		),
		new MiscMarker(
			'ppd1P',
			MiscTypes.ammoCrate,
			[323.99058361102664, 73.98654040704174]
		),
		new MiscMarker(
			'_W3h7',
			MiscTypes.ammoCrate,
			[312.8908638823932, 112.95741402764561]
		),
		new MiscMarker(
			'TEogm',
			MiscTypes.ammoCrate,
			[362.8946598890521, 211.73032649058598]
		),
		new MiscMarker(
			'XyAgq',
			MiscTypes.ammoCrate,
			[277.408394782328, 289.43138017987076]
		),
		new MiscMarker(
			'2g8Ub',
			MiscTypes.ammoCrate,
			[226.11646202504733, 135.28743922428836]
		),
		new MiscMarker(
			'kFNI2',
			MiscTypes.ammoCrate,
			[202.21408760379495, 147.23862643491452]
		),
		new MiscMarker(
			'AT4fj',
			MiscTypes.ammoCrate,
			[271.5817130039255, 424.1474543938674]
		),
		new MiscMarker(
			'5Q_V6',
			MiscTypes.ammoCrate,
			[247.33771878626217, 409.699013395462]
		),
		new MiscMarker(
			'tUhu5',
			MiscTypes.mysteryBox,
			[153.15666174952116, 338.3859439791644]
		),
		new MiscMarker(
			'nUB_M',
			MiscTypes.trialComputer,
			[255.26086609890288, 217.57428329288462]
		),
		new MiscMarker(
			'lkjMr',
			MiscTypes.trialComputer,
			[272.94284887125167, 155.35087050379542]
		),
		new MiscMarker(
			'rchkq',
			MiscTypes.trialComputer,
			[283.9590193391858, 285.8308652148561]
		),
		new MiscMarker(
			's22Xu',
			MiscTypes.wunderFizz,
			[244.61974027191252, 384.97768648319214]
		),
		new MiscMarker(
			'X9PPp',
			MiscTypes.papMachine,
			[215.97978012413833, 138.2109413854094]
		),
		new MiscMarker(
			'_V0IV',
			MiscTypes.arsenal,
			[385.693026495192, 212.90464820808694]
		),
		new MiscMarker(
			'yM1S2',
			MiscTypes.jumpPad,
			[278.45410886328614, 59.38781135361046]
		),
		new MiscMarker(
			'y7K2E',
			MiscTypes.jumpPad,
			[111.80976958193502, 304.4770170013288]
		),
		new MiscMarker(
			'IRcNb',
			MiscTypes.jumpPad,
			[377.01932066722077, 127.84632462506406]
		),
		new MiscMarker(
			'eAUAb',
			MiscTypes.wallbuy,
			[237.5596066858896, 394.0444742792774]
		),
		new MiscMarker(
			'OUQrp',
			MiscTypes.wallbuy,
			[216.02706746094876, 85.24573718234292]
		),
		new MiscMarker(
			'X6Bf3',
			MiscTypes.wallbuy,
			[164.33578728860493, 343.10287670138746]
		),
		new MiscMarker(
			'31UO9',
			MiscTypes.wallbuy,
			[317.30615777129947, 67.41337618919444]
		),
		new MiscMarker(
			'GpZS_',
			MiscTypes.wallbuy,
			[139.88254903819504, 197.95937117870153]
		),
		new MiscMarker(
			'K7ay6',
			MiscTypes.wallbuy,
			[378.35148690180966, 214.6089341851221]
		),
		new MiscMarker(
			'UzNkV',
			MiscTypes.wallbuy,
			[216.07746476812133, 139.11181913168872]
		),
		new MiscMarker(
			'rYPHj',
			MiscTypes.projector,
			[199.38751401269195, 138.7419183294555]
		),
		new MiscMarker(
			'KfCN7',
			MiscTypes.cryoemitter,
			[106.2932488669672, 313.34003330490333]
		),
	],
	[MapIds.golova]: [
		new MiscMarker(
			'_9qob',
			MiscTypes.dementedEcho,
			[167.02309933760583, 326.8300791718768]
		),
		new MiscMarker(
			'1blw4',
			MiscTypes.dementedEcho,
			[184.7468020757672, 156.32421714103378]
		),
		new MiscMarker(
			'qAgVa',
			MiscTypes.dementedEcho,
			[190.00365176294605, 397.6050741155826]
		),
		new MiscMarker(
			'I5d6u',
			MiscTypes.dementedEcho,
			[91.33402582482371, 335.3619366422391]
		),
		new MiscMarker(
			'Sjjf7',
			MiscTypes.dementedEcho,
			[331.2666015762386, 282.2520092653466]
		),
		new MiscMarker(
			'NMtT4',
			MiscTypes.dementedEcho,
			[136.33052041417935, 278.97388266034534]
		),
		new MiscMarker('jMyYI', MiscTypes.rift, [165.47840929242773, 129]),
		new MiscMarker('hVgX3', MiscTypes.rift, [220.97891026777796, 422.75]),
		new MiscMarker('5ySfH', MiscTypes.rift, [424.9572042915411, 301]),
		new MiscMarker('Pu7ID', MiscTypes.rift, [81.49737098776382, 235.5]),
		new MiscMarker('oI3EF', MiscTypes.redRift, [92.49637125376842, 331.625]),
		new MiscMarker('YRGBh', MiscTypes.fishing, [399.0779840698966, 237]),
		new MiscMarker('58PeR', MiscTypes.fishing, [400.07822885871917, 258]),
		new MiscMarker('IEzsn', MiscTypes.fishing, [331.5614608243734, 99.5]),
		new MiscMarker(
			'a4_z1',
			MiscTypes.jumpPad,
			[178.81075010907483, 269.78767029205784]
		),
		new MiscMarker(
			'9209C',
			MiscTypes.jumpPad,
			[183.4066223421374, 416.5830049890631]
		),
		new MiscMarker(
			'Zp0WW',
			MiscTypes.jumpPad,
			[363.1195255322712, 364.2038960046949]
		),
		new MiscMarker(
			'eZtvN',
			MiscTypes.jumpPad,
			[277.9466975034903, 127.12073089134977]
		),
		new MiscMarker(
			'CGnf3',
			MiscTypes.jumpPad,
			[65.96100379722746, 293.4287813490203]
		),
		new MiscMarker(
			'ms1jS',
			MiscTypes.jumpPad,
			[299.0269733372165, 235.22320946725563]
		),
		new MiscMarker(
			'wmuWG',
			MiscTypes.wallbuy,
			[391.01912850701865, 349.97680753791883]
		),
		new MiscMarker(
			'PHx0y',
			MiscTypes.wallbuy,
			[259.9441282565234, 324.96215738223185]
		),
		new MiscMarker(
			'NUegF',
			MiscTypes.wallbuy,
			[255.30544263370194, 278.5150283276749]
		),
		new MiscMarker(
			'WgZlk',
			MiscTypes.wallbuy,
			[247.78045977198417, 260.83585172484396]
		),
		new MiscMarker(
			'EDdVd',
			MiscTypes.wallbuy,
			[189.4695980177873, 406.4654447254141]
		),
		new MiscMarker(
			'Cj7z7',
			MiscTypes.wallbuy,
			[102.99143995016017, 332.67423226159815]
		),
		new MiscMarker(
			'Sv2Mr',
			MiscTypes.wallbuy,
			[133.40913902258612, 294.7666483087646]
		),
		new MiscMarker(
			'lf_Z1',
			MiscTypes.wallbuy,
			[213.79236709189115, 283.7899469967797]
		),
		new MiscMarker(
			'wY8A6',
			MiscTypes.wallbuy,
			[175.03616784419052, 335.71818781886225]
		),
		new MiscMarker(
			'ZPs7o',
			MiscTypes.wallbuy,
			[285.4329306073199, 141.63750920858075]
		),
		new MiscMarker(
			'LO4ZZ',
			MiscTypes.ammoCrate,
			[349.449295335965, 219.4854934108629]
		),
		new MiscMarker(
			'0COcP',
			MiscTypes.ammoCrate,
			[391.0260080998486, 284.14556588589]
		),
		new MiscMarker(
			'9VzV4',
			MiscTypes.ammoCrate,
			[390.81226196987603, 355.6863239630557]
		),
		new MiscMarker(
			'QkuGH',
			MiscTypes.ammoCrate,
			[248.5964217690379, 293.38366916287623]
		),
		new MiscMarker(
			'K9jOB',
			MiscTypes.ammoCrate,
			[210.66408576343133, 249.73160523453842]
		),
		new MiscMarker(
			'x8fiV',
			MiscTypes.ammoCrate,
			[189.9127523456741, 208.92383078695119]
		),
		new MiscMarker(
			'ZRywH',
			MiscTypes.ammoCrate,
			[316.8513073546179, 281.7996314785133]
		),
		new MiscMarker(
			'B_YJN',
			MiscTypes.ammoCrate,
			[300.21661371850047, 354.27936803588216]
		),
		new MiscMarker(
			'yUofe',
			MiscTypes.ammoCrate,
			[187.2444222254949, 398.55370857504107]
		),
		new MiscMarker(
			'o1J4W',
			MiscTypes.ammoCrate,
			[126.62881961085267, 360.8765027033238]
		),
		new MiscMarker(
			'yTCA_',
			MiscTypes.ammoCrate,
			[107.36873247991804, 328.4845379831156]
		),
		new MiscMarker(
			'ssewl',
			MiscTypes.ammoCrate,
			[115.00205528402677, 270.95565007815117]
		),
		new MiscMarker(
			'AePXk',
			MiscTypes.ammoCrate,
			[187.7860285988807, 290.0382231282173]
		),
		new MiscMarker(
			'qY_pY',
			MiscTypes.ammoCrate,
			[169.37894486032135, 338.84232588458104]
		),
		new MiscMarker(
			'CNmst',
			MiscTypes.ammoCrate,
			[234.72131681669816, 351.1258802481972]
		),
		new MiscMarker(
			'W30tl',
			MiscTypes.ammoCrate,
			[286.60997362013364, 118.61977918022414]
		),
		new MiscMarker(
			'yYjve',
			MiscTypes.trialComputer,
			[251.31629509255035, 307.3456855569068],
			'Possible Location'
		),
		new MiscMarker(
			'p_19C',
			MiscTypes.trialComputer,
			[212.27251614100095, 336.3092409664307],
			'Possible Location'
		),
		new MiscMarker(
			'8Kc3K',
			MiscTypes.trialComputer,
			[215.78102586982874, 241.93630173283827],
			'Possible Location'
		),
		new MiscMarker(
			'IlqAS',
			MiscTypes.mysteryBox,
			[162.53961558131536, 289.1094253248955]
		),
		new MiscMarker(
			'2iQrl',
			MiscTypes.mysteryBox,
			[357.2445605708355, 135.4251857136415]
		),
		new MiscMarker(
			'_xuqv',
			MiscTypes.arsenal,
			[173.76893185342092, 349.62966512210227]
		),
		new MiscMarker(
			'X9QAq',
			MiscTypes.papMachine,
			[171.8265448249648, 315.8620137043266]
		),
		new MiscMarker(
			'rI6qv',
			MiscTypes.craftingTable,
			[211.81979569292037, 321.0915172424777]
		),
		new MiscMarker(
			'lbxwz',
			MiscTypes.wunderFizz,
			[251.3789140415691, 294.7111497838819]
		),
		new MiscMarker(
			'pDoZ4',
			MiscTypes.requiemRadio,
			[274.46979074303954, 119.5]
		),
		new MiscMarker('vRPj2', MiscTypes.omegaRadio, [166.4812821422238, 314]),
		new MiscMarker('ksOb3', MiscTypes.maxisRadio, [270.97016314949457, 359]),
		new MiscMarker(
			'QkQhl',
			MiscTypes.monkey,
			[179.47691966660756, 151],
			'In the elevated building behind a chain link fence.'
		),
		new MiscMarker(
			'mk0gS',
			MiscTypes.monkey,
			[351.4586185493882, 227],
			'Up in the rafters.'
		),
		new MiscMarker(
			'xsRN7',
			MiscTypes.monkey,
			[106.49109327895019, 339.5],
			'On a pillar at the top of the scaffolding.'
		),
		new MiscMarker(
			'8xhDt',
			MiscTypes.monkey,
			[185.48268753325056, 416.75],
			'On the top shelf.'
		),
		new MiscMarker('iMHwr', MiscTypes.projector, [177.0071341819346, 347.625]),
		new MiscMarker(
			'jxkej',
			MiscTypes.nova5,
			[197.8850734145944, 146.29544698855156]
		),
	],
	[MapIds.sanatorium]: [
		new MiscMarker(
			'ijcwV',
			MiscTypes.dementedEcho,
			[121.50275687461007, 277.77812593764446]
		),
		new MiscMarker(
			'FpAjy',
			MiscTypes.dementedEcho,
			[168.9897871582542, 435.97930944364305]
		),
		new MiscMarker(
			'H8LVB',
			MiscTypes.dementedEcho,
			[302.18576429912486, 307.75772061687144]
		),
		new MiscMarker(
			'U0DjB',
			MiscTypes.dementedEcho,
			[289.0557298906468, 211.186559738963]
		),
		new MiscMarker(
			'rngCc',
			MiscTypes.dementedEcho,
			[284.82361164993495, 58.75987297871505]
		),
		new MiscMarker(
			'Fgozl',
			MiscTypes.wallbuy,
			[369.03998522090853, 182.79574040351952]
		),
		new MiscMarker(
			'KKSy2',
			MiscTypes.wallbuy,
			[240.2366599253267, 64.20726302897477]
		),
		new MiscMarker(
			'RGkIq',
			MiscTypes.wallbuy,
			[156.49071639701307, 125.97763641344636]
		),
		new MiscMarker(
			'wvhSe',
			MiscTypes.wallbuy,
			[151.36399346608587, 385.4893157572437]
		),
		new MiscMarker(
			'wYhoP',
			MiscTypes.wallbuy,
			[221.0869496733043, 267.7446709720566]
		),
		new MiscMarker('MWdg9', MiscTypes.wallbuy, [257.38248348472337, 352.125]),
		new MiscMarker('Li3bP', MiscTypes.wallbuy, [280.5175197881211, 200.75]),
		new MiscMarker('a_JVl', MiscTypes.wallbuy, [260.2622177801051, 212]),
		new MiscMarker('FLBef', MiscTypes.wallbuy, [279.026156408071, 251]),
		new MiscMarker('O6WkK', MiscTypes.wallbuy, [309.86762509032627, 210.59375]),
		new MiscMarker(
			'Gf_oJ',
			MiscTypes.wallbuy,
			[283.2996720837837, 136.5767028690432]
		),
		new MiscMarker('e1R7L', MiscTypes.ammoCrate, [311.8518370977006, 151.75]),
		new MiscMarker(
			'X0w4K',
			MiscTypes.ammoCrate,
			[322.73809256359897, 212.4375]
		),
		new MiscMarker('ut4gA', MiscTypes.ammoCrate, [303.614812816142, 223.5625]),
		new MiscMarker('_aF_P', MiscTypes.ammoCrate, [235.5625, 308.0625]),
		new MiscMarker('VOQ1q', MiscTypes.ammoCrate, [264.5133305472196, 203.125]),
		new MiscMarker(
			'mnjT9',
			MiscTypes.ammoCrate,
			[183.13248348472337, 334.5625]
		),
		new MiscMarker('ghKXO', MiscTypes.ammoCrate, [149.3834540089827, 465.25]),
		new MiscMarker(
			'S1uXA',
			MiscTypes.ammoCrate,
			[353.105542159303, 150.54136719631288]
		),
		new MiscMarker(
			'pma5h',
			MiscTypes.ammoCrate,
			[291.1098592097075, 62.72816015083636]
		),
		new MiscMarker(
			'hTI7x',
			MiscTypes.ammoCrate,
			[239.98703329184815, 68.58503883714185]
		),
		new MiscMarker(
			'S0dPc',
			MiscTypes.ammoCrate,
			[137.48717330429372, 167.96648080703903]
		),
		new MiscMarker(
			'nXbSo',
			MiscTypes.ammoCrate,
			[137.36867999377722, 280.17639676733165]
		),
		new MiscMarker(
			'3lKnY',
			MiscTypes.jumpPad,
			[164.73460640945862, 371.98502111064556]
		),
		new MiscMarker(
			'mPRat',
			MiscTypes.jumpPad,
			[140.72089296826385, 201.17866696747996]
		),
		new MiscMarker('z4Nqp', MiscTypes.jumpPad, [251, 302.50180499137497]),
		new MiscMarker(
			'wOx4g',
			MiscTypes.jumpPad,
			[356.1360564854374, 153.00811122457864]
		),
		new MiscMarker(
			'QSYQG',
			MiscTypes.jumpPad,
			[335.7934048316435, 264.48856377851973]
		),
		new MiscMarker(
			'1moS1',
			MiscTypes.mysteryBox,
			[124.72686683260734, 136.90174686563316]
		),
		new MiscMarker(
			'fqc3I',
			MiscTypes.mysteryBox,
			[335.982215715215, 149.75814251584396]
		),
		new MiscMarker(
			'HpgRm',
			MiscTypes.mysteryBox,
			[244.99933781783668, 216.7945360007589]
		),
		new MiscMarker(
			'oTXPr',
			MiscTypes.craftingTable,
			[126.86940339141258, 276.0485423985561]
		),
		new MiscMarker(
			'A1YB4',
			MiscTypes.wunderFizz,
			[190.5554099253267, 262.79783535307956]
		),
		new MiscMarker(
			'EyYLJ',
			MiscTypes.papMachine,
			[272.10535750680924, 208.98565144365352]
		),
		new MiscMarker(
			'pYGQX',
			MiscTypes.arsenal,
			[343.21966426414184, 128.3551147724546]
		),
		new MiscMarker(
			'NCxrV',
			MiscTypes.trialComputer,
			[257.4964994007296, 194.7729931364493],
			'Possible Location'
		),
		new MiscMarker(
			'7QLDs',
			MiscTypes.trialComputer,
			[292.7496260332077, 140.65510404721564],
			'Possible Location'
		),
		new MiscMarker('d3n29', MiscTypes.rift, [262.46420464621383, 409]),
		new MiscMarker('vLJwe', MiscTypes.rift, [253.96510906189036, 15.5]),
		new MiscMarker('VPGKZ', MiscTypes.rift, [98.98160134775662, 241]),
		new MiscMarker('VF463', MiscTypes.rift, [391.4504788082993, 216]),
		new MiscMarker('Slo09', MiscTypes.fishing, [220.46867352367434, 439.5]),
		new MiscMarker('SgHF_', MiscTypes.fishing, [339.4560117042028, 273.5]),
		new MiscMarker('oDnxX', MiscTypes.fishing, [293.46090618904054, 271.5]),
		new MiscMarker('yE4r8', MiscTypes.fishing, [245.96596027664475, 332]),
		new MiscMarker('43xpY', MiscTypes.requiemRadio, [152.47590884908664, 380]),
		new MiscMarker('K0GoW', MiscTypes.omegaRadio, [315.458565348466, 212]),
		new MiscMarker('of73n', MiscTypes.maxisRadio, [168.48744901578294, 140.25]),
		new MiscMarker(
			'xpCIP',
			MiscTypes.monkey,
			[317.4583525447774, 209.5],
			'In the Admins office on a bookshelf floor 2.'
		),
		new MiscMarker(
			'nOKZv',
			MiscTypes.monkey,
			[129.74498802979247, 278.375],
			'Up in the rafters.'
		),
		new MiscMarker(
			'BDOca',
			MiscTypes.monkey,
			[265.106262191878, 348],
			'Underneath the bridge, on a support pillar.'
		),
		new MiscMarker(
			'bEmlA',
			MiscTypes.monkey,
			[194.48468256783116, 67.75],
			'On the top shelf above the bed.'
		),
		new MiscMarker('ZO8MP', MiscTypes.projector, [364.45335165809536, 179.5]),
		new MiscMarker(
			'SFmVd',
			OutbreakEE2Steps.step2Helicopter,
			[178.2582145549112, 78.59647195866988]
		),
		new MiscMarker(
			'g0Vbn',
			OutbreakEE2Steps.step3Orb,
			[128.51585279728454, 269.42304126372875],
			'Can spawn in 1 of 3 locations, this one is located on the roof'
		),
		new MiscMarker(
			'ecy3g',
			OutbreakEE2Steps.step3Orb,
			[393.4503192055329, 163.5],
			'Can spawn in 1 of 3 locations, this one is located on the roof'
		),
		new MiscMarker(
			'brKfY',
			OutbreakEE2Steps.step3Orb,
			[264.5128764056229, 197.08519448344717],
			'Can spawn in 1 of 3 locations, this one is located in the middle of the pool'
		),
		//Don't really need this for now, not until we re-work easter eggs
		//new MiscMarker(new Item("oEPK3", "Chopper Gunner", "Hold out until the wave is dead to continue with the Easter Egg"), [-170.51300319205535, 39.25])
	],
	[MapIds.collateral]: [
		new MiscMarker(
			'LZtAf',
			MiscTypes.dementedEcho,
			[302.1582217610988, 414.1356865122179]
		),
		new MiscMarker(
			'2ogDj',
			MiscTypes.dementedEcho,
			[196.9588998109597, 319.81699864797247]
		),
		new MiscMarker(
			'jZYx5',
			MiscTypes.dementedEcho,
			[304.4851067015507, 202.60851085028]
		),
		new MiscMarker(
			'0FS1A',
			MiscTypes.requiemRadio,
			[208.56446345433304, 185.99219645126215]
		),
		new MiscMarker(
			'W6wPV',
			MiscTypes.omegaRadio,
			[205.64054514049639, 328.34673879951004]
		),
		new MiscMarker(
			'bUGza',
			MiscTypes.maxisRadio,
			[296.69284893739234, 413.4940734223786]
		),
		new MiscMarker(
			'T42U3',
			MiscTypes.projector,
			[276.52649758435535, 255.64213181187142]
		),
		new MiscMarker(
			'XLltd',
			MiscTypes.redRift,
			[268.485236370739, 177.6590598896251]
		),
		new MiscMarker(
			'aCqDF',
			MiscTypes.mysteryBox,
			[278.56354383919887, 398.8710380995699]
		),
		new MiscMarker(
			'lt6ZB',
			MiscTypes.mysteryBox,
			[171.09686412283247, 178.85510249601353]
		),
		new MiscMarker(
			'2cDDN',
			MiscTypes.mysteryBox,
			[337.46799316757017, 172.47532688497765]
		),
		new MiscMarker(
			'K1b_U',
			MiscTypes.wallbuy,
			[274.1902735759488, 271.97980445743264]
		),
		new MiscMarker(
			'1NE2i',
			MiscTypes.wallbuy,
			[329.35910463308284, 392.12343294135957]
		),
		new MiscMarker(
			'WfKIX',
			MiscTypes.ammoCrate,
			[270.11233204955715, 273.39039433171195]
		),
		new MiscMarker(
			'Et8uN',
			MiscTypes.ammoCrate,
			[342.8775753456348, 401.3405720635541]
		),
		new MiscMarker(
			'0P_Uk',
			MiscTypes.ammoCrate,
			[366.0879054071596, 315.2256099277464]
		),
		new MiscMarker(
			'VuK7w',
			MiscTypes.ammoCrate,
			[361.2630236225512, 154.59725384849298]
		),
		new MiscMarker(
			'4n8Cs',
			MiscTypes.jumpPad,
			[244.23800218110284, 72.15445857118556]
		),
		new MiscMarker(
			'ZqhS_',
			MiscTypes.jumpPad,
			[152.59236547842607, 341.9430405590901]
		),
		new MiscMarker(
			'dnh9f',
			MiscTypes.jumpPad,
			[363.3237348993215, 357.49649577033546]
		),
		new MiscMarker(
			'pRGu7',
			MiscTypes.jumpPad,
			[120.54039287605569, 62.45822337142159]
		),
		new MiscMarker(
			'COZqh',
			MiscTypes.jumpPad,
			[306.72159375392386, 461.8725944854807]
		),
		new MiscMarker(
			'if8kK',
			MiscTypes.zipline,
			[358.43859399777614, 216.41575486658184]
		),
		new MiscMarker(
			'gFBcM',
			MiscTypes.zipline,
			[315.4737014874989, 180.21385469588523]
		),
		new MiscMarker(
			'O5Xn4',
			MiscTypes.zipline,
			[290.41084752317045, 226.75915491535227]
		),
		new MiscMarker(
			'XrSeO',
			MiscTypes.arsenal,
			[316.7521870319834, 325.9648254914252]
		),
		new MiscMarker(
			'Rh08g',
			MiscTypes.craftingTable,
			[212.93462384001523, 326.75507384946224]
		),
		new MiscMarker(
			'Udtir',
			MiscTypes.trialComputer,
			[218.7558581608214, 303.77651731996417]
		),
		new MiscMarker(
			'HRaD3',
			MiscTypes.trialComputer,
			[158.87932153268142, 199.66049151313487]
		),
		new MiscMarker(
			'kJ7vR',
			MiscTypes.papMachine,
			[217.97483629430047, 226.51124543935873]
		),
		new MiscMarker(
			'BUlnd',
			MiscTypes.wunderFizz,
			[239.15967566031475, 169.77687275024397]
		),
	],
	[MapIds.armada]: [
		new MiscMarker(
			'AEpO7',
			MiscTypes.dementedEcho,
			[245.08327415625956, 200.03583430491622]
		),
		new MiscMarker(
			'eKuk9',
			MiscTypes.dementedEcho,
			[191.30383357596716, 134.46987913495167]
		),
		new MiscMarker(
			'l9CCu',
			MiscTypes.dementedEcho,
			[300.8856411583173, 350.8475161407786]
		),
		new MiscMarker(
			'iC2vJ',
			MiscTypes.requiemRadio,
			[314.4681601026199, 347.8060741618561]
		),
		new MiscMarker(
			'S1EN7',
			MiscTypes.omegaRadio,
			[182.95659975912724, 183.2198466652555]
		),
		new MiscMarker('G5tYA', MiscTypes.maxisRadio, [251.6097221192863, 312.25]),
		new MiscMarker(
			'ztQiq',
			MiscTypes.fishing,
			[228.11241453743676, 237],
			'Located at Launch Bay 1'
		),
		new MiscMarker(
			'CCX5S',
			MiscTypes.fishing,
			[227.48741453743676, 278.375],
			'Located at Launch Bay 2'
		),
		new MiscMarker(
			'9ISs5',
			MiscTypes.fishing,
			[274.48741453743673, 270.375],
			'Located at Launch Bay 3'
		),
		new MiscMarker(
			'DHE7r',
			MiscTypes.fishing,
			[273.61241453743673, 229.75],
			'Located at Launch Bay 4'
		),
		new MiscMarker('ovGId', MiscTypes.ammoCrate, [267.48741453743673, 208.875]),
		new MiscMarker('mYafV', MiscTypes.ammoCrate, [236.3490647755276, 307.25]),
		new MiscMarker('p1HAx', MiscTypes.ammoCrate, [197.10139704656206, 141]),
		new MiscMarker('IBgQv', MiscTypes.ammoCrate, [193.4875604491301, 85.875]),
		new MiscMarker('iuxkU', MiscTypes.ammoCrate, [323.1715400400215, 338.3125]),
		new MiscMarker('EkOhG', MiscTypes.ammoCrate, [311.71891617720627, 407.125]),
		new MiscMarker('7dw4P', MiscTypes.wallbuy, [273.61241453743673, 248.625]),
		new MiscMarker('MplYv', MiscTypes.wallbuy, [237.96560363435918, 272.5625]),
		new MiscMarker('i2E9R', MiscTypes.wallbuy, [175.35905393637324, 164]),
		new MiscMarker('K7xgo', MiscTypes.wallbuy, [318.5914958959441, 382.375]),
		new MiscMarker('wpiVY', MiscTypes.arsenal, [251.33845954308796, 290.5]),
		new MiscMarker(
			'Has1o',
			MiscTypes.trialComputer,
			[336.469312223231, 276.125]
		),
		new MiscMarker(
			'6TRkO',
			MiscTypes.trialComputer,
			[268.31784484760055, 199.1123679251593]
		),
		new MiscMarker('CKs1g', MiscTypes.mysteryBox, [327.47248059142873, 280.5]),
		new MiscMarker(
			'UEsxf',
			MiscTypes.mysteryBox,
			[203.36468434062894, 265.02048106003724]
		),
		new MiscMarker(
			'fOm12',
			MiscTypes.mysteryBox,
			[244.86526700981926, 253.48678579054018]
		),
		new MiscMarker(
			'eGoUP',
			MiscTypes.wunderFizz,
			[347.8323266198514, 283.65625]
		),
		new MiscMarker(
			'V7fzw',
			MiscTypes.craftingTable,
			[310.5950163050527, 192.125]
		),
		new MiscMarker(
			'RlHu9',
			MiscTypes.papMachine,
			[190.3367491337941, 261.0625]
		),
		new MiscMarker(
			'gLRQZ',
			MiscTypes.redRift,
			[281.5872778794272, 99.5338716371389]
		),
	],

	/////////////////////Bo6 Misc Items/////////////////////////
	[MapIds.libertyFalls]: [
		new MiscMarker(
			'3f0zk',
			MiscTypes.papMachine,
			[203.68095003781633, 80.27425677960997]
		),
		new MiscMarker(
			'H78fX',
			MiscTypes.wallArmor,
			[251.33910903655286, 80.67403768502217]
		),
		new MiscMarker(
			'p2HuK',
			MiscTypes.ammoCrate,
			[262.6225707216955, 91.95580351782239]
		),
		new MiscMarker(
			'fvuiO',
			MiscTypes.wallbuy,
			[233.00348379819602, 119.87817395400299]
		),
		new MiscMarker(
			'KjVcG',
			MiscTypes.wallbuy,
			[260.3911978406195, 198.80150418737742]
		),
		new MiscMarker(
			'4zfaY',
			MiscTypes.wallbuy,
			[198.92378085777787, 252.7375535307155]
		),
		new MiscMarker(
			'LDSqJ',
			MiscTypes.wallbuy,
			[226.8714611903116, 252.1371056442005]
		),
		new MiscMarker(
			'BgXvx',
			MiscTypes.wallbuy,
			[155.37139785865875, 288.90258018583415]
		),
		new MiscMarker(
			'unyje',
			MiscTypes.wallbuy,
			[168.31573473300784, 370.0835855753783]
		),
		new MiscMarker(
			'GIMoK',
			MiscTypes.wallbuy,
			[241.74995353941142, 394.23867000110164]
		),
		new MiscMarker(
			'ycejl',
			MiscTypes.wallbuy,
			[304.9780605795013, 279.93780658453477]
		),
		new MiscMarker(
			'78Nsj',
			MiscTypes.wallbuy,
			[240.25637620775572, 331.2362333030811]
		),
		new MiscMarker(
			'yVyNb',
			MiscTypes.wallbuy,
			[266.64290906700586, 301.1046331431583]
		),
		new MiscMarker(
			'FjQ72',
			MiscTypes.ammoCrate,
			[210.71864697003926, 132.00607222426325]
		),
		new MiscMarker(
			'mwkhJ',
			MiscTypes.gumball,
			[211.2828200542964, 167.54363459758397]
		),
		new MiscMarker(
			'nzPPs',
			MiscTypes.zipline,
			[248.6913628094859, 172.08941953731676]
		),
		new MiscMarker(
			'Ss0aG',
			MiscTypes.ammoCrate,
			[213.31303727027645, 188.49039806705932]
		),
		new MiscMarker(
			'LSCGD',
			MiscTypes.arsenal,
			[196.65839693949133, 196.53528362673296]
		),
		new MiscMarker(
			'gN56Y',
			Perks.meleeMacchiato,
			[175.36257294357463, 137.6951945070073]
		),
		new MiscMarker(
			'HeXRx',
			Perks.phd,
			[199.37685764143518, 211.34125795627676]
		),
		new MiscMarker(
			'GQcBM',
			Perks.speed,
			[246.2859286146521, 250.42196558532459]
		),
		new MiscMarker(
			'1hoGs',
			Perks.staminup,
			[143.9206383159653, 300.3575686763833]
		),
		new MiscMarker(
			'YksKA',
			Perks.quick,
			[303.4512230353636, 338.6077383572001]
		),
		new MiscMarker(
			'juvMH',
			Perks.jugg,
			[285.06369615742574, 302.10071909885824]
		),
		new MiscMarker(
			'xvhF0',
			MiscTypes.craftingTable,
			[293.01272626394575, 173.8730780202884]
		),
		new MiscMarker(
			'CbJIp',
			MiscTypes.ammoCrate,
			[157.84481913951518, 239.14023016684877]
		),
		new MiscMarker(
			'Xf_Np',
			MiscTypes.door,
			[233.66761294517124, 261.20198788677834]
		),
		new MiscMarker(
			'JtuLa',
			MiscTypes.trap,
			[249.61615450344914, 238.02154679560675]
		),
		new MiscMarker(
			'S03qI',
			MiscTypes.ammoCrate,
			[302.34473107606846, 232.83928222676948]
		),
		new MiscMarker(
			'7RFZM',
			MiscTypes.ammoCrate,
			[122.51269656223408, 288.90258018583415]
		),
		new MiscMarker(
			'ymgVk',
			MiscTypes.craftingTable,
			[153.87782052700305, 313.55570758940735]
		),
		new MiscMarker(
			'rS0yi',
			MiscTypes.gumball,
			[195.4490562580858, 311.5635356780075]
		),
		new MiscMarker(
			'Qv2E4',
			MiscTypes.gumball,
			[177.0282691676659, 352.40305986170466]
		),
		new MiscMarker(
			'DmP2D',
			MiscTypes.ziplineDown,
			[203.66373158219196, 430.34678589522406]
		),
		new MiscMarker(
			'rGb4q',
			MiscTypes.ammoCrate,
			[214.1187729037816, 377.8032517320528]
		),
		new MiscMarker(
			'yKD_3',
			MiscTypes.mysteryBox,
			[289.0465690418408, 386.26998235550224]
		),
		new MiscMarker(
			'6xQ9M',
			MiscTypes.craftingTable,
			[262.16217707203884, 334.2244911701809]
		),
		new MiscMarker(
			'q5VtS',
			MiscTypes.arsenal,
			[343.8110712025486, 345.92850114965506]
		),
		new MiscMarker(
			'Nl1gJ',
			MiscTypes.ammoCrate,
			[338.8324800970297, 334.22449117018084]
		),
		new MiscMarker(
			'4qnBp',
			MiscTypes.wallArmor,
			[324.3945658910249, 325.0106960799565]
		),
		new MiscMarker(
			'GjGRM',
			MiscTypes.trap,
			[316.17989056691874, 316.0459224786572]
		),
		new MiscMarker(
			'XrBoV',
			MiscTypes.gumball,
			[282.32547104939033, 267.7357536272106]
		),
		new MiscMarker(
			'S9oX1',
			MiscTypes.zipline,
			[270.376852396145, 270.7240114943104]
		),
		new MiscMarker(
			'eznoZ',
			MiscTypes.door,
			[241.00316487358356, 281.4319355180847]
		),
		new MiscMarker(
			'YVX1t',
			MiscTypes.door,
			[220.59094134095616, 297.1202893203586]
		),
		new MiscMarker(
			'bIFAl',
			MiscTypes.door,
			[229.3034757756142, 327.2518894802814]
		),
		new MiscMarker(
			'XYMOz',
			MiscTypes.door,
			[241.25209442885952, 314.30277205618233]
		),
		new MiscMarker(
			'8Kr_R',
			MiscTypes.wunderFizz,
			[267.38969773283367, 308.0772348330578]
		),
		new MiscMarker(
			'AVYOm',
			MiscTypes.zipline,
			[281.3297528282866, 299.3614827206834]
		),
		new MiscMarker(
			'IYLlb',
			MiscTypes.ammoCrate,
			[284.8147666021498, 292.1398595418589]
		),
	],
};
