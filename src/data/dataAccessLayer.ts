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

export async function getUserPreferences() {
	try {
		const count = await db.userPrefs.count();
		if (count === 0) {
			await db.userPrefs.add(defaultUserPrefs);
			return defaultUserPrefs;
		} else {
			return db.userPrefs.get(1);
		}
	} catch (error) {
        console.log("error fetching user prefs: ", error)
    }
}
