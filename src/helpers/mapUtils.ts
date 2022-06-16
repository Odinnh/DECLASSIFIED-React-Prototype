import { MapItem } from './models';
import { useEffect, useState } from "react";
import { useMapEvents } from 'react-leaflet';

/* export function useSetMap(initialMap: MapItem) {
    const [currentMap, setCurrentMapState] = useState(initialMap);
    const mapInstance = useMapEvents({});

    const setCurrentMap = (newMap: MapItem) => setCurrentMapState(newMap);
    useEffect(() => {
        // set default layer for selected map in map instance

        if (currentMap) {
            // console.log(currentMap);

            mapInstance.eachLayer(function (layer) {
                // console.log("layer: ", layer);

                mapInstance.removeLayer(layer);
            });
            // mapInstance.addLayer(currentMap.mapOverlay)
        }

    }, [currentMap, mapInstance]);

    return [currentMap, setCurrentMap] as const;
} */

/* export function changeMapTo(mapId, targetElement) {
    const currentMap = findMapById(mapId);
    SetMap(mapId, targetElement);
    setVisibilityFromPrefs();
    collapseMenu();
    TriggerSearch();
} */

/* export function switchAndFly(location = [0, 0], selectedMap = "") {
    changeMapTo(selectedMap, document.getElementById(selectedMap))
    setLastVisitedMap(selectedMap)
    mapInstance.flyTo(location, 4)
} */

/* export function AddMapMarkersFromCache(intelArr) {
    for (intel of intelArr) {
        if (intel.map != mapDetails.allOutbreakMaps.id) {
            let factionIcon = intelIconInit(intel.faction, intel.intelType);
            mapLayer = mapLayers[intel.map];
            addMarkerToMap(intel, factionIcon, mapLayer);
        }
    }

    for (maep in miscPOI) {
        let currmap = miscPOI[maep];
        if (typeof (miscPOI[maep]) !== "undefined") {
            currmap.forEach(item => {
                addMiscMarkerToMap(item.loc, item.icon, mapLayers[maep], item.id, item.title, item.desc, item.layer)
            })
        }
    }
}

export function addMarkerToMap(intel, icon, maep) {
    if (intel.loc != null && JSON.stringify([0, 0]) != JSON.stringify(intel.loc)) { // don't add 0,0 markers to the map for cleanliness
        let snippet = '';
        let shareBtn = genShareButton(intel.id).outerHTML;
        let bugBtn = !userPrefs.hideBugRepButton ? genBugButton(intel.id).outerHTML : '';
        let moreBtn = genMoreButton(intel).outerHTML;
        let collectedBtn = genCollectedButton(intel.id, true).outerHTML;
        let imgSrc = 'assets/img/intelScreenshot/placeholder.png';
        let imgEle = ''

        if (intel.img !== undefined) {
            imgSrc = `https://i.imgur.com/${intel.img}.jpg`
        }

        imgEle = `<img src="${imgSrc}" onclick="expandImage(this)"></img>`

        if (intel.desc !== '') {
            snippet = `
            <h1>${intel.name}</h1>
                        
            <div class="intel-content">
                <div>
                    <p>${intel.desc}</p>
                    <div class="buttonContainer" data-item="${intel.id}" data-type="${markerTypes.intel.id}">
                        ${collectedBtn}
                        ${shareBtn}
                        ${bugBtn}
                        ${moreBtn}
                    </div>
                </div>
                ${imgEle}
            </div>
            `;

        }


        var marker = L.marker(intel.loc, { icon: icon })
            .addTo(maep.Markers)
            .bindPopup(snippet);

        if (hasUserCollected(intel.id)) {
            marker.setOpacity(0.35);
            app.disableMarkers.push(intel.id);
        }
        app.visibleMarkers[intel.id] = marker;
    }
}
export function expandImage(ele) {
    document.getElementById('lightbox-container').classList.toggle('-hidden')
    document.getElementById('lightbox').setAttribute('src', ele.getAttribute('src'))
}

export function addMiscMarkerToMap(loc, icon, maep, id, name, desc = ``, layer) {
    if (loc != null && JSON.stringify([0, 0]) != JSON.stringify(loc)) { // don't add 0,0 markers to the map for cleanliness
        let bugBtn = genBugButton(id).outerHTML;
        let descriptionEle = desc ? `<p>${desc}</p>` : '';
        let snippet = $(`<div></div>`)
        snippet = `
        <div class="misc-content">
            <h1>${name}</h1>
            <div class="buttonContainer noselect" data-item="${id}" data-type="${markerTypes.misc.id}">
                ${descriptionEle}
                ${bugBtn}
            </div>
        </div>`;
        L.marker(loc, { icon: icon })
            .addTo(maep[layer])
            .bindPopup(snippet);
    }
}

export function toggleMarkers(markerType = markerTypes.intel.id, forceHide = false) {
    let elementsToHide;
    switch (markerType) {
        case markerTypes.intel.id:
            elementsToHide = $(".intel-icon");
            break;
        case markerTypes.misc.id:
            elementsToHide = $(".misc-icon");
            break;
        case markerTypes.worldEvents.id:
        case markerTypes.easterEggs.id:
        default:
            break;
    }

    if (forceHide) {
        elementsToHide.fadeOut();
    } else {
        elementsToHide.fadeToggle();
    }
}
 */
