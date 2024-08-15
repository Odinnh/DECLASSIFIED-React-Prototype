import Dexie, { type EntityTable } from 'dexie';

// TODO - Use this interface to map old user preferences to new user preferences
interface OldDeclassifiedUserPreferences {
    challengeTrackerState: string;
    collectedIntel: string[];
    completedChallenges: string[];
    darkMode: boolean;
    hideBugRepButton: boolean;
    hideIntel: boolean;
    hideMisc: boolean;
    lastSelectedMap: string;
    pinnedChallenges: string[];
    useSystemTheme: boolean;
}

interface DeclassifiedUserPreferences {
    username: string; // TODO - Use this as a feature to allow multiple users to have their own preferences
    currentMap: string;
    challengeTrackerState: string;
    darkMode: boolean;
    hideBugRepButton: boolean;
    hideIntel: boolean;
    hideMisc: boolean;
    useSystemTheme: boolean;
}

interface DeclassifiedIntelCollected {
    intelId: string;
    dateCollected: Date;
}

interface DeclassifiedChallenges {
    challengeId: string;
    isPinned: boolean;
    dateCompleted: Date;
}

const db = new Dexie('DeclassifiedV1') as Dexie & {
    userPrefs: EntityTable< DeclassifiedUserPreferences, 'username'>;
    intelCollected: EntityTable<DeclassifiedIntelCollected, 'intelId'>;
    completedChallenges: EntityTable<DeclassifiedChallenges, 'challengeId'>;
};

// Schema declaration:
db.version(1).stores({
    userPrefs: '&username, currentMap, challengeTrackerState, darkMode, hideBugRepButton, hideIntel, hideMisc, useSystemTheme',
    intelCollected: '&intelId, dateCollected',
    completedChallenges: '&challengeId, isPinned, dateCompleted',
});

export type { DeclassifiedUserPreferences, DeclassifiedIntelCollected, DeclassifiedChallenges };
export { db };