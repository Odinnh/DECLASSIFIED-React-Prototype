import { useContext, useEffect, useRef, useState } from 'react'
import styled from 'styled-components'
import { DeclassifiedContext } from '../../contexts/DeclassifiedContext/declassifiedContextProvider'
import { Faction, IntelItem, IntelStore, IntelType, Season } from '../../data/intel'
import { IntelListMenuItem } from '../IntelListMenuItem'
import { MapItem } from '../../classes'
import { Paper, Typography } from '@mui/material'
import { db } from '../../data/db'
import { useLiveQuery } from 'dexie-react-hooks'
import { MapMenuItem } from '../MapControls/types'
import NotificationBanner from '../NotificationBanner/NotificationBanner'


const StyledIntelList = styled.div`
    background-color: var(--clr-grey-d);
    padding: 10px;
`

const NoResults = styled(Paper)`
    h2 {
        display: flex;
        justify-content: center;
        font-size: 1.5rem;
        padding: 10px;
    }
`

export const IntelList = () => {
    const { currentMap, currentMapGroup, currentIntelFilter } = useContext(DeclassifiedContext);
    // const [loading, setLoading] = useState(true); // TODO - Implement loading spinner

    const collectedIntel = useLiveQuery(async () => {
        return await db.intelCollected.toArray();
    });

    const snackbarRef = useRef<{
        handleClick: (msg: string) => void;
    }>(null);

    const notification = (intelId: string) => {
        if (snackbarRef.current) {
            snackbarRef.current.handleClick(`Copied Link To Clipboard`);
        }
    };

    const IntelListToRender = filterIntel(
        collectedIntel,
        currentMap,
        currentMapGroup,
        IntelStore,
        currentIntelFilter.searchTerm,
        currentIntelFilter.factions,
        currentIntelFilter.seasons,
        currentIntelFilter.intelTypes,
        currentIntelFilter.currentMapOnly,
        currentIntelFilter.hideCollected)

    // console.log("IntelListToRender", IntelListToRender);

    const RenderedIntelList = IntelListToRender.map(intel => {
        return (<IntelListMenuItem
            key={intel.id}
            {...intel}
            notification={notification} />)
    })
    if (RenderedIntelList.length === 0) {
        return (
            <NoResults>
                <Typography variant='h2'> No Intel Found...</Typography>
            </NoResults>
        )
    }
    return (
        <>
            <StyledIntelList id="intel-list" >
                {RenderedIntelList}
            </StyledIntelList>
            <NotificationBanner ref={snackbarRef} />
        </>
    )
}

function filterIntel(
    collectedIntel,
    currentMap: MapItem,
    currentMapGroup: MapMenuItem,
    intelCache: IntelItem[],
    searchTermDirty: string,
    factionsArr: Faction[] = [],
    seasonsArr: Season[] = [],
    intelTypeArr: IntelType[] = [],
    currentMapOnly: boolean,
    hideCollected = true) {
    let results = intelCache;


    let searchTerm = searchTermDirty.trim().toLowerCase()
    results = results.filter((intel) => {
        return intel.title.toLowerCase().indexOf(searchTerm.trim().toLowerCase()) !== -1
    });

    if (factionsArr.some(item => item)) {
        results = results.filter((intel) => {
            return factionsArr.includes(intel.faction);
        });
    }

    if (seasonsArr.some(item => item)) {
        results = results.filter((intel) => {
            return seasonsArr.includes(intel.season);
        });
    }

    if (intelTypeArr.some(item => item)) {
        results = results.filter((intel) => {
            return intelTypeArr.includes(intel.typeDesc);
        });
    }

    // if currentMapOnly then get current map ids and filter
    if (currentMapOnly) {
        results = results.filter((intel) => {
            return currentMapGroup.mapLayers.filter((map) => map.id === intel.map).length > 0;
        });
    }
    // if (mapArr.some(item => item)) {
    //     results = results.filter((intel) => {
    //         return mapArr.includes(intel.map) || intel.map == mapDetails.allOutbreakMaps.id && mapArr.some((e) => { return allOutbreakMapsArr.includes(e) });
    //     });
    // }

    if (hideCollected) {
        results = results.filter((intel) => {
            return !(intel.id === collectedIntel.find((collected) => collected.intelId === intel.id)?.intelId);
        });
    }
    // console.log({ seasonsArr, intelTypeArr, results });
    // console.log("INTEL FILTERED END: ", results);
    return results;
}
