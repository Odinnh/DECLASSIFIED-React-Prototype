import Dexie, { type EntityTable } from 'dexie';

interface DeclassifiedUserPreferences {
    id: number;
    currentMap: string;
    challengeTrackerState: string;
    darkMode: boolean;
    hideBugRepButton: boolean;
    hideIntel: boolean;
    hideMisc: boolean;
    useSystemTheme: boolean;
}

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

interface DeclassifiedIntelCollected {
    id: number;
    intelId: string;
}

interface DeclassifiedChallenges {
    id: number;
    challengeId: string;
}

const db = new Dexie('DeclassifiedV1') as Dexie & {
    userPrefs: EntityTable< DeclassifiedUserPreferences, 'id'>;
    intelCollected: EntityTable<DeclassifiedIntelCollected, 'id'>;
    completedChallenges: EntityTable<DeclassifiedChallenges, 'id'>;
    pinnedChallenges: EntityTable<DeclassifiedChallenges, 'id'>;
};

// Schema declaration:
db.version(1).stores({
    userPrefs: '++id, currentMap, challengeTrackerState, darkMode, hideBugRepButton, hideIntel, hideMisc, useSystemTheme',
    intelCollected: '++id, intelId',
    completedChallenges: '++id, challengeId',
    pinnedChallenges: '++id, challengeId'
});

export type { DeclassifiedUserPreferences, DeclassifiedIntelCollected, DeclassifiedChallenges };
export { db };