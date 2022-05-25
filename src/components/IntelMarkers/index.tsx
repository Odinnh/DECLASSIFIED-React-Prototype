import React, { useContext } from 'react'
import { LayersControl } from 'react-leaflet'
import { IntelContext } from '../../contexts/IntelContext/IntelContextProvider'
import { IntelMapMarker } from '../MapMarker'

export const IntelMarkers = () => {
    const { intelArtifactMarkers, intelAudioMarkers } = useContext(IntelContext)
    return (
        <>
            <LayersControl.Overlay name="Intel - Audio Logs">
                {intelAudioMarkers}
            </LayersControl.Overlay>
            <LayersControl.Overlay name="Intel - Artifacts">
                {intelArtifactMarkers}
            </LayersControl.Overlay>
        </>
    )
}
