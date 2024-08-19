import { useContext } from 'react'
import styled from 'styled-components'
import { DeclassifiedContext } from '../../contexts/DeclassifiedContext/declassifiedContextProvider'
import { Faction, IntelItem, IntelStore, IntelType, Season } from '../../data/intel'
import { IntelListMenuItem } from '../IntelListMenuItem'
import { MapItem } from '../../classes'
import { Paper, Typography } from '@mui/material'
import { db } from '../../data/db'
import { useLiveQuery } from 'dexie-react-hooks'


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
    const { currentMap, currentIntelFilter } = useContext(DeclassifiedContext);
    // .filter(intel => (intel.map === mapId))


    var renderList = filterIntel(
        currentMap,
        IntelStore,
        currentIntelFilter.searchTerm,
        currentIntelFilter.factions,
        currentIntelFilter.seasons,
        currentIntelFilter.intelTypes,
        currentIntelFilter.currentMapOnly,
        currentIntelFilter.hideCollected)

        console.log(renderList);
        
    const RenderedIntelList = renderList.map(intel => {
        return (<IntelListMenuItem key={intel.id} {...intel} />)
    })
    return (
        <StyledIntelList id="intel-list" >
            {
                RenderedIntelList.length ? RenderedIntelList : <NoResults><Typography variant='h2'> No Intel Found...</Typography></NoResults>
            }
        </StyledIntelList>
    )
}

function filterIntel(
    currentMap: MapItem,
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
            return intel.map === currentMap.id;
        });
    }
    // if (mapArr.some(item => item)) {
        //     results = results.filter((intel) => {
            //         return mapArr.includes(intel.map) || intel.map == mapDetails.allOutbreakMaps.id && mapArr.some((e) => { return allOutbreakMapsArr.includes(e) });
            //     });
            // }
            
    if (hideCollected) {
        results = results.filter((intel) => {
            return !useLiveQuery(() => db.intelCollected.get(intel.id));
        });
    }
    console.log({seasonsArr, intelTypeArr, results});
    return results;
}
