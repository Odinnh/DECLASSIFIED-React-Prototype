import { db, DeclassifiedUserPreferences } from "./db";
import { MapIds } from "./intel";

const defaultUsername = "defaultUser";
const defaultUserPrefs: DeclassifiedUserPreferences = {
	username: defaultUsername,
	currentMap: MapIds.dieMaschine,
	challengeTrackerState: "",
	darkMode: true,
	hideBugRepButton: false,
	hideIntel: false,
	hideMisc: false,
	useSystemTheme: true,
};

export async function getSetUserPreferences(username: string = defaultUsername) {
	try {
		const userExists = await db.userPrefs.get(username) !== undefined;
		console.log("userExists: ", userExists);
		if (!userExists) {
			await db.userPrefs.add(defaultUserPrefs, username);
			return defaultUserPrefs;
		} else {
			return db.userPrefs.get(username);
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