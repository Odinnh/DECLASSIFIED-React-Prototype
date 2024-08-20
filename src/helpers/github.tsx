import { MapItem } from "../classes";
import { IntelStore } from "../data/intel";
import { MarkerTypes, MiscStore } from "../data/misc";
import { ContribTemplates, RepoDomain } from "./models";

export function redirectToGithub( id = "", itemType, issueType = "New", currentMap, location = "") {
    const domain = `${RepoDomain}/issues/new`;
    let assignees = "Odinnh,sol3uk";

    const isIntel = (itemType == MarkerTypes.intel.id);
    const isMisc = (itemType == MarkerTypes.misc.id);
    let label = ""; let issueTemplate = ""; let entityName = ""; let map = currentMap ?? "";

    if (isIntel) {
        if (issueType !== "New") {
            issueTemplate = ContribTemplates.intel.editId
            label = ContribTemplates.intel.editTitle
            let intel = getIntelById(id);
            entityName = intel ? intel.title : "";
            map = intel ? intel.map : "";
        } else { //NEW Issue
            issueTemplate = ContribTemplates.intel.newId
            label = ContribTemplates.intel.newTitle
            map = currentMap.id ?? "";
        }
    } else if (isMisc) {
        issueTemplate = issueType === "New" ? ContribTemplates.misc.newId : ContribTemplates.misc.editId;
        label = issueType === "New" ? ContribTemplates.misc.newTitle : ContribTemplates.misc.editTitle;
        let miscItem = getMiscMarkerById(id, currentMap);
        entityName = miscItem ? miscItem.title : "";
        // Don't yet keep map against misc markers, need to change this, this will do for now since miscs are only on the current map
        map = currentMap.id;
    }

    let labels = `${label},${map}`;

    let intelIdPlaceholder = id ? `[${id}]` : "";

    let issueTitle = `${label}: ${entityName} [${map}]${intelIdPlaceholder}`;
    let finalURL = `${domain}?assignees=${assignees}&labels=${labels}&template=${issueTemplate}.yml&title=${issueTitle}`

    if (isIntel) {
        let intelParams = `&intelId=${id}&intelName=${entityName}&intelLocation=${location}&intelMap=${map}`
        finalURL += intelParams;
    }
    if (isMisc) {
        let miscParams = `&markerId=${id}&markerName=${entityName}&markerLocation=${location}&markerMap=${map}`
        finalURL += miscParams;
    }
    window.open(encodeURI(finalURL));
}

function getIntelById(intelId) {
    if (intelId) {
        let matchedIntel = IntelStore.find((item) => item.id === intelId)
        return matchedIntel;
    }
    return null;
}

function getMiscMarkerById(itemId, currentMap: MapItem) {
    if (itemId) {
        let matchedMisc = MiscStore[currentMap.id!].find((item) => item.id === itemId)
        return matchedMisc;
    }
    return null;
}