import { Item, MiscMarker } from '../classes';
import { IconFileNames } from './icons';
import { MapIds } from './intel';
import { IMisc } from './types';

export const EasterEggStrings = {
	dieMaschineEE: `Seal the Deal`, //https://callofduty.fandom.com/wiki/Seal_the_Deal
	dieMaschineWW: `D.I.E. Wonder Weapon`,
	dieMaschineBonusChest: `Coffin Dance`,
	dieMaschineRadioAlign: `Radio Alignment`,
	dieMaschineOrdaHand: `Orda Hand`,

	firebaseZEE: `Maxis Potential`, //https://callofduty.fandom.com/wiki/Maxis_Potential
	firebaseZWW: `Rai K-84`,
	firebaseZBonusChest: `Bunny Scare`,
	firebaseZSafe: "Sergei`s Safe",
	firebaseZMonkeyUpgrade: `Monkey bomb upgrade`,
	firebaseZFreeJump: `Free Jump pad`,

	mauerDerTotenEE: `Tin Man Heart`, //https://callofduty.fandom.com/wiki/Tin_Man_Heart
	mauerDerTotenWW: `CRBR-S`,
	mauerDerTotenBonusChest: `Hasenbau Club`,
	mauerDerTotenTargets: `Target Practice`,
	mauerDerTotenEssenceHarvester: `Essence Harvester`,
	mauerDerTotenKlaus: `Klaus`,

	outbreakEE1: `Ravenov Implications`, //https://callofduty.fandom.com/wiki/Ravenov_Implications
	outbreakEE2: `Entrapment`, //https://callofduty.fandom.com/wiki/Entrapment

	mainQuest: `Main Quest`,
	clue: `Visual Clue`,
	interactable: `Interactable Object`,
	secretArea: `Secret Area`,
	music: `Cassette Tape`,
};

export const WorldEventTypes = {
	furyCrystal: new Item({ title: `Fury Crystal` }),
	escort: new Item({ title: `Escort` }),
	redChallengeChest: new Item({ title: `Red Challenge Chest` }),
	purpleChallengeChest: new Item({ title: `Purple Challenge Chest` }),
	dragonRocket: new Item({ title: `Dragon Rocket` }),
	orda: new Item({ title: `Orda` }),
	horde: new Item({ title: `Horde` }),
	orb: new Item({
		title: `Aetherial orb`, desc: `Damage it and chase it 3 times, you can also shoot it mid-air whilst moving to each location.`,
	}),
	musicRadio: new Item({ title: `Music radio` }),
};

export const EETypes = {
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
	questCollectible: new Item({
		title: EasterEggStrings.mainQuest, icon: IconFileNames.mainQuest,
	}),
	essenceHarvester: new Item({
		title: EasterEggStrings.mauerDerTotenEssenceHarvester, icon: IconFileNames.reactor,
	}),
	bonus: new Item({
		title: EasterEggStrings.interactable, icon: IconFileNames.interactable,
	}),
	thermophasic: new Item({ title: `D.I.E. Thermophasic Upgrade`, icon: IconFileNames.upgrade, }),
	nova5: new Item({ title: `D.I.E. Nova-5 Upgrade`, icon: IconFileNames.upgrade, }),
	electrobolt: new Item({ title: `D.I.E. Electrobolt Upgrade`, icon: IconFileNames.upgrade, }),
	cryoemitter: new Item({ title: `D.I.E. Cryo-Emitter Upgrade`, icon: IconFileNames.upgrade, }),
};

// Used to generate IDs for all of the below misc markers:
// https://nanoid.jormaechea.com.ar/?alphabet=0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ_abcdefghijklmnopqrstuvwxyz&length=5
// Please use the existing settings included in the URL and check for duplicate ids when possible (it`s very very unlikely but still possible).

export const EasterEggStore: IMisc = {
	[MapIds.dieMaschine]: [
		new MiscMarker(`w_xnt`, EETypes.thermophasic, [223.35366309316512, 223.1585943917737], `Unlocked after following the steps with the fuse in the Dark Aether.`),
		new MiscMarker(`9ySyg`, EETypes.nova5, [315.29654358848376, 295.69795800010473], `Unlocked after following the steps with the cannister in the Dark Aether.`),
		new MiscMarker(`XW3JZ`, EETypes.interactable, [174.74870507815817, 257.415635207116], `Crack in the wall where you can remotely activate the D.I.E Wonder Weapon after acquiring the D.I.E remote.`),
		new MiscMarker(`wgKEY`, EETypes.questCollectible, [196.29722988085663, 307.495182630813], `1 of 3 Aetherscope Parts, one will spawn randomly when entering the Dark Aether, dogs spawn after picking it up.`),
		new MiscMarker(`N29aN`, EETypes.questCollectible, [356.6938648779643, 343.9768501463755], `1 of 3 Aetherscope Parts, one will spawn randomly when entering the Dark Aether, dogs spawn after picking it up.`),
		new MiscMarker(`yLQtN`, EETypes.questCollectible, [133.03685434894203, 282.6545483161539], `Cannister used in nova 5 steps, can only be retrieved with the alt fire of the D.I.E.`),
		new MiscMarker(`3eput`, EETypes.questCollectible, [314.69833497058926, 344.089550203993], `Box containing a fuse used in the Thermophasic upgrade steps, hidden under the plane nose, inaccessible unless in the Dark Aether.`),
		new MiscMarker(`G7SE2`, EETypes.questCollectible, [242.97643511037063, 255.9881891661138], `Crate containing the vial used in the Cryo upgrade steps. Shoot the crate with the D.I.E to knock it down.`),
		new MiscMarker(`O0QxP`, EETypes.questCollectible, [256.63368476295705, 206.02147315077295], `Tree fungus used in the Cryo upgrade steps.\nHave a Megaton shoot the fungus to activate it.\nInteract whilst holding the vial to place it underneath the fungus and fill the vial.`),
		new MiscMarker(`nS4PT`, EETypes.questCollectible, [258.3778460127693, 335.23982709555946], `1 of 3 Crystals used in the Electrobolt upgrade steps, use the alt fire of the D.I.E to collect the energy, then run down to the upgrade box and shoot it to progress.`),
		new MiscMarker(`Vc_0w`, EETypes.questCollectible, [377.14480548250435, 224.28934027831147], `1 of 3 Crystals used in the Electrobolt upgrade steps, use the alt fire of the D.I.E to collect the energy, then run down to the upgrade box and shoot it to progress.`),
		new MiscMarker(`nhHde`, EETypes.questCollectible, [258.5949702531161, 173.9165165178388], `1 of 3 Crystals used in the Electrobolt upgrade steps, use the alt fire of the D.I.E to collect the energy, then run down to the upgrade box and shoot it to progress.`),
		new MiscMarker(`pfJ2L`, EETypes.mainQuest, [160.42537161357052, 375.00631403381794], `Broken tank that needs to be interacted with 3 times whilst holding the wrench.\nShoot the zombie that pops out, then throw a lethal explosive into the now open hatch. This causes the gun to fire, dropping the Decontamination Agent from the tree it shoots.`),
		new MiscMarker(`TbPJZ`, EETypes.mainQuest, [257.59332755993654, 349.50282422284494], `Final ghostly dialogue anomaly before the boss fight.\nInteract with it and the family portrait will spawn.\nPicking up the photo will start the ending boss fight.`),

	],
	[MapIds.dieMaschineUnderground]: [
		new MiscMarker(`1m5tF`, EETypes.bonus, [147.39538299834174, 388.52809723485626], `Downstairs, hidden behind the top left of the zombie spawn window.\n1 of 5 blue orbs that you can shoot for a bonus chest.`),
		new MiscMarker(`PxlsM`, EETypes.bonus, [76.10682851697437, 358.63289696847636], `1 of 5 blue orbs that you can shoot for a bonus chest.`),
		new MiscMarker(`ONsCv`, EETypes.bonus, [201.05343475851072, 301.68965836584806], `High up on the wall.\n1 of 5 blue orbs that you can shoot for a bonus chest.`),
		new MiscMarker(`RFgwR`, EETypes.bonus, [221.09307449751262, 347.24424924795073], `1 of 5 blue orbs that you can shoot for a bonus chest.`),
		new MiscMarker(`7TACp`, EETypes.bonus, [134.79653471600014, 401.6474904867542], `Hidden behind the grating.\n1 of 5 blue orbs that you can shoot for a bonus chest.`),
		new MiscMarker(`UTXXu`, EETypes.secretArea, [293.1716173546175, 370.9160154554998], `Only accessible after using the Aether Tunnel above ground. 1 of 2 places the PaP part can spawn.`),
		new MiscMarker(`6WnTv`, EETypes.secretArea, [206.2697306892794, 176.17280788708192], `Only accessible after using the Aether Tunnel above ground. 1 of 2 places the PaP part can spawn.`),
		new MiscMarker(`VpIJu`, EETypes.cryoemitter, [297.2665148522491, 349.81279151873895], `Unlocked after pouring the liquid gathered from the fungus near the lake, onto the crate.`),
		new MiscMarker(`VNWWl`, EETypes.electrobolt, [113.39539786187888, 353.078013760189], `Unlocked after gathering the energy from 3 crystals and shooting it at the box. The bulbs around the box indicate the progress.`),
		new MiscMarker(`5M9A0`, EETypes.mainQuest, [211.50810943751497, 233.52599646325353], `D.I.E upgrade chest, requires the fuse and can only be interacted with when in the Dark Aether. Re-appears as open, above ground, on the back of the truck.`),
		new MiscMarker(`5oG2A`, EETypes.interactable, [198.7906869627428, 178.82125886330365], `Plaguehound Gas condenser.\nInteract whilst holding the canister to place it, then kill a Plaguehound near it to fill it with gas.`),
		new MiscMarker(`af5QE`, EETypes.questCollectible, [324.47444670325746, 318.8136922248336], `1 of 3 Orbs that spawn in the Dark Aether after acquiring the Aetherscope. Interact with it to trigger the ghostly figure dialogue.`),
		new MiscMarker(`xpxgz`, EETypes.questCollectible, [235.5479859749598, 273.1385305408606], `1 of 3 Orbs that spawn in the Dark Aether after acquiring the Aetherscope. Interact with it to trigger the ghostly figure dialogue.`),
		new MiscMarker(`rj9BH`, EETypes.questCollectible, [181.93046504375246, 348.6110192429405], `1 of 3 Orbs that spawn in the Dark Aether after acquiring the Aetherscope. Interact with it to trigger the ghostly figure dialogue.`),
		new MiscMarker(`Kgdjc`, EETypes.questCollectible, [215.23791437285269, 305.50159134986285], `1 of 3 Aetherscope Parts, one will spawn randomly when entering the Dark Aether, dogs spawn after picking it up.`),
		new MiscMarker(`JFz4Z`, EETypes.mainQuest, [339.1999615318702, 326.4211594207544], `Vogel's Computer.\n After activating all 3 ghostly dialogues, interact with it 3 times to insert the password.`),
		new MiscMarker(`mR1Ye`, EETypes.interactable, [273.33595868320293, 353.86231995501794], `A portal that appears after shooting all 4 canisters of the containment device with the corresponding D.I.E upgrade.`),
		new MiscMarker(`fwG9Z`, EETypes.mainQuest, [329.39656431710233, 325.66999226629395], `Ghostly dialogue that appears after entering the portal that appears after shooting after shooting all 4 canisters of the containment device.\nSpawns the Dark Aether Wrench.`),
		new MiscMarker(`UyMmA`, EETypes.mainQuest, [310.66531882982684, 339.46395788705297], `Containment device on the roof with four canisters pointing down. Shoot each one with the corresponding elemental version of the D.I.E.\nAfter placing the decontamination agent, this will allow you to trap both halves of a Megaton. Furthering the main quest.`),
	],
	[MapIds.mauerDerToten]: [
		// TODO: Go back over these to mark the correct steps as "questCollectible" where they're part of the main quest
		new MiscMarker(`2wAit`, EETypes.clue, [384.32068891654967, 272.1759937481422], `#0 Blacklight locker`),
		new MiscMarker(`G107e`, EETypes.clue, [181.79736917081456, 459.6975460903231], `#2 Blacklight numbers`),
		new MiscMarker(`h8fAY`, EETypes.clue, [261.5104831795745, 336.1746978373792], `Klaus Part, Electronic Chips, box with green light, shoot with CRBR-S.`),
		new MiscMarker(`GYRE6`, EETypes.interactable, [359.9483781264314, 284.16977220507744], `Train Line Controls, used to switch train tracks during the main quest.`),
		new MiscMarker(`drKer`, EETypes.interactable, [364.2365012890661, 214.16776152079905], `Klaus Part Box, use blacklight to check if it contains a disk, order Klaus to open if it does.`),
		new MiscMarker(`eQXff`, EETypes.interactable, [206.05222014011366, 330.2612687292476], `Klaus Part Box, use blacklight to check if it contains a disk, order Klaus to open if it does.`),
		new MiscMarker(`v9aLr`, EETypes.interactable, [168.93078742529096, 137.35493930841415], `Essence Canister Pickup.`),
		new MiscMarker(`_n0MB`, EETypes.interactable, [193.68010197590363, 264.8048544502154], `1 of 6 Mr Peeks pieces used to access the bonus chest room.`),
		new MiscMarker(`jOSoP`, EETypes.essenceHarvester, [151.62276338235262, 217.9029453522394], `Used in the quest to charge soul canisters.`),
		new MiscMarker(`CWAYy`, EETypes.secretArea, [328.3739589925339, 296.7995398586364], `Train Carriage, use Klaus to stop the train, contains the Keycard and Warhead needed for the main quest.`),
		new MiscMarker(`4QpYx`, EETypes.secretArea, [168.43591618416733, 160.56583724877993],
			"Entrance to Valentina`s Lab. Klaus can knock the wall down. Then use the CRBR-S beam mod to open the metal door."
		),
	],
	[MapIds.mauerDerTotenStreets]: [
		// TODO: Go back over these to mark the correct steps as "questCollectible" where they're part of the main quest
		new MiscMarker(`ook1f`, EETypes.cassetteTape, [364.594308702165, 411.59576707869667], `1 of 3 needed for the easter egg song.`),
		new MiscMarker(`YMZPe`, EETypes.cassetteTape, [175.42748080394747, 324.57693567676864], `1 of 3 needed for the easter egg song.`),
		new MiscMarker(`00CEF`, EETypes.cassetteTape, [185.86657193523203, 70.19853360643957], `1 of 3 needed for the easter egg song.`),
		new MiscMarker(`PwmRS`, EETypes.clue, [110.80096229476811, 298.4347086625506], `#1 Blacklight numbers`),
		new MiscMarker(`muHxa`, EETypes.clue, [302.33874571909564, 311.0221039512368], `#3 Blacklight numbers`),
		new MiscMarker(`eOTNC`, EETypes.questCollectible, [373.50680516628154, 388.36535534693917], `Klaus Part, transistor, shoot radio on the shelf with CRBR-S.`),
		new MiscMarker(`DwMIE`, EETypes.questCollectible, [333.76018343302235, 467.30140318168293], `Klaus Part, antenna, shoot pylon with CRBR-S.`),
		new MiscMarker(`p3Ots`, EETypes.questCollectible, [252.06528772610116, 170.0875885168442], `Klaus Part, battery, obtained from killing the first Krasny Soldat.`),
		new MiscMarker(`WzV96`, EETypes.interactable, [144.5504050965535, 289.50012070442347], `Klaus Upgrade Station`),
		new MiscMarker(`5pm__`, EETypes.interactable, [197.11229814842187, 196.7896920958058], `Klaus Part, microwave dish, dig piles of debris to find.`),
		new MiscMarker(`3S1gY`, EETypes.interactable, [301.6366591960302, 150.97963262432313], `Klaus Part, microwave dish, dig piles of debris to find.`),
		new MiscMarker(`RC0It`, EETypes.interactable, [131.97446059908233, 383.233529816566], `Klaus Part Box, use blacklight to check if it contains a disk, order Klaus to open if it does.`),
		new MiscMarker(`p0jy0`, EETypes.interactable, [296.2174019490392, 91.91078506007518], `Klaus Part Box, use blacklight to check if it contains a disk, order Klaus to open if it does.`),
		new MiscMarker(`1Zm1y`, EETypes.interactable, [202.13121369227582, 53.47866191858418], `Klaus Part Box, use blacklight to check if it contains a disk, order Klaus to open if it does.`),
		new MiscMarker(`1TKX2`, EETypes.interactable, [298.34930940180675, 420.2199816609127], `Klaus Part Box, use blacklight to check if it contains a disk, order Klaus to open if it does.`),
		new MiscMarker(`aqK7n`, EETypes.interactable, [290.44881000922993, 44.59962748588934], `1 of 2 Computers used during main quest to spawn Megatons, requires keycard from the train.`),
		new MiscMarker(`zq5i8`, EETypes.interactable, [377.5561578030767, 339.7506667046973], `1 of 2 Computers used during main quest to spawn Megatons, requires keycard from the train.`),
		new MiscMarker(`pufCN`, EETypes.interactable, [310.47106934268305, 281.8460771337832], `1 of 6 Mr Peeks pieces used to access the bonus chest room.`),
		new MiscMarker(`9z8Uu`, EETypes.interactable, [315.8911862106404, 75.03474289078483], `1 of 6 Mr Peeks pieces used to access the bonus chest room.`),
		new MiscMarker(`1uxx8`, EETypes.interactable, [317.22176766835554, 386.3680282265149], `1 of 6 Mr Peeks pieces used to access the bonus chest room.`),
		new MiscMarker(`IC0Xq`, EETypes.interactable, [172.9720302577955, 466.15217502439106], `1 of 6 Mr Peeks pieces used to access the bonus chest room.`),
		new MiscMarker(`r79fA`, EETypes.interactable, [152.2094092404965, 343.9680542153249], `1 of 6 Mr Peeks pieces used to access the bonus chest room.`),
		new MiscMarker(`0ZFbr`, EETypes.secretArea, [118.31471157271051, 467.80515920170296], `Hotel Room 305, use brain rot zombie to open door and get Klaus hands and the safe for CRBR-S.`),
		new MiscMarker(`YqN75`, EETypes.essenceHarvester, [181.1322876506002, 304.5979694369277], `Used in the quest to charge soul canisters.`),
		new MiscMarker(`vgkPi`, EETypes.essenceHarvester, [173.4707721095559, 358.04367363412337], `Used in the quest to charge soul canisters.`),
	],
	[MapIds.duga]: [
		new MiscMarker(`6IA1p`, EETypes.electrobolt, [218.94657303732083, 383.23711642835906]),
	],
	[MapIds.ruka]: [
		new MiscMarker(`YeH4n`, EETypes.thermophasic, [94.0042121017423, 334.3317226785948]),
	],
	[MapIds.alpine]: [
		new MiscMarker(`KfCN7`, EETypes.cryoemitter, [106.2932488669672, 313.34003330490333]),
	],
	[MapIds.golova]: [
		new MiscMarker(`jxkej`, EETypes.nova5, [197.8850734145944, 146.29544698855156]),
	],
};
