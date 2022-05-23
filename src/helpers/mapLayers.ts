import L, { LatLngBoundsExpression } from "leaflet";
import { MapDetails } from "../contexts/IntelContext/types";
import { mapSVGs } from "./mapsvg";
import { RepoDomain } from "./models";

const globalMapSettings = {
    prefix: false,
    attribution: `Want to help out? <a href="${RepoDomain}">Github</a>. ||  See all <a href="${RepoDomain}#contributors">Contributors</a>`,
    id: '',
    tileSize: 0,
    bounds: [
        [0, 0],
        [512, 512]
    ],
    padding: [1000, 1000],
    zoomSnap: 0.1
}

export const MapLayers = generateMapLayers();

function generateMapLayers() {
    return {
        zoo: generateLayers(MapDetails.zoo.id, globalMapSettings),
        duga: generateLayers(MapDetails.duga.id, globalMapSettings),
        ruka: generateLayers(MapDetails.ruka.id, globalMapSettings),
        alpine: generateLayers(MapDetails.alpine.id, globalMapSettings),
        golova: generateLayers(MapDetails.golova.id, globalMapSettings),
        sanatorium: generateLayers(MapDetails.sanatorium.id, globalMapSettings),
        collateral: generateLayers(MapDetails.collateral.id, globalMapSettings),
        armada: generateLayers(MapDetails.armada.id, globalMapSettings),
        dieMaschine: generateLayers(MapDetails.dieMaschine.id, globalMapSettings),
        dieMaschine_underground: generateLayers(MapDetails.dieMaschineUnderground.id, globalMapSettings),
        firebaseZ: generateLayers(MapDetails.firebaseZ.id, globalMapSettings),
        firebaseZ_spawn: generateLayers(MapDetails.firebaseZSpawn.id, globalMapSettings),
        mauerDerToten: generateLayers(MapDetails.mauerDerToten.id, globalMapSettings),
        mauerDerToten_streets: generateLayers(MapDetails.mauerDerTotenStreets.id, globalMapSettings),
        forsaken: generateLayers(MapDetails.forsaken.id, globalMapSettings),
        forsaken_underground: generateLayers(MapDetails.forsakenUnderground.id, globalMapSettings),
    };
}

function generateLayers(name, settings) {
    settings.id = name

    let object = {
        Layer: new L.LayerGroup(),
        Markers: new L.LayerGroup(),
        MiscMarkers: new L.LayerGroup(),
        //Tiles: L.tileLayer(`./maps/${name}/${lightModeClass}{z}/{x}_{y}.png`, settings)
    }

    var svgElement = document.createElementNS("http://www.w3.org/2000/svg", "svg");
    svgElement.setAttribute('xmlns', "http://www.w3.org/2000/svg");
    svgElement.setAttribute('viewBox', "0 0 512 512");

    //too slow...
    // let load = $.get(`http://127.0.0.1:5500/maps/firebaseZ_spawn/firebaseZ_spawn.svg`, function (data) {
    //     var svg = $(data).find('svg');
    //     svg.removeAttr('xmlns:a');
    // }, 'xml').then(() => {
    //     console.log(load.responseText)
    //     svgElement.innerHTML = load.responseText.slice('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">'.length, '</svg>'.length + load.responseText.length)
    // })

    svgElement.innerHTML = mapSVGs.globalStyle + mapSVGs[name]
    var imageBounds: LatLngBoundsExpression = [
        [0, 0],
        [512, 512]
    ];

    //object.Tiles.addTo(object.Layer);
    L.svgOverlay(svgElement, imageBounds).addTo(object.Layer);
    // L.imageOverlay(imageUrl, imageBounds).addTo(object.Layer);
    object.Markers.addTo(object.Layer);
    object.MiscMarkers.addTo(object.Layer);
    return object
}