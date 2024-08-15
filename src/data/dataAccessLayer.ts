import { db, DeclassifiedUserPreferences } from "./db";
import { MapIds } from "./intel";

const defaultUserPrefs: DeclassifiedUserPreferences = {
	id: 1,
	currentMap: MapIds.dieMaschine,
	challengeTrackerState: "",
	darkMode: true,
	hideBugRepButton: false,
	hideIntel: false,
	hideMisc: false,
	useSystemTheme: true,
};

export async function getSetUserPreferences() {
	try {
		const count = await db.userPrefs.count();
		if (count === 0) {
			await db.userPrefs.add(defaultUserPrefs);
			return defaultUserPrefs;
		} else {
			return db.userPrefs.get(1);
		}
	} catch (error) {
		console.log("ERROR - getSetUserPreferences: ", error)
	}
}

export async function addCollectedIntel(intelId: string) {
	try {
		if (intelId) {
			return await db.intelCollected.put({ intelId: intelId, dateCollected: new Date() });
		}
		return;
	} catch (error) {
		console.log("ERROR - addCollectedIntel: ", error)
	}
}

export async function deleteCollectedIntel(intelId: string) {
	try {
		if (intelId) {
			return await db.intelCollected.delete(intelId);
		}
		return;
	} catch (error) {
		console.log("ERROR - deleteCollectedIntel: ", error)
	}
}