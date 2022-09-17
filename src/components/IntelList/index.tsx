import styled from 'styled-components'
import { IntelStore } from '../../data/intel'
import { IntelListMenuItem } from '../IntelListMenuItem'


const StyledIntelList = styled.div`
    padding: 10px;
`



export const IntelList = () => {
    // .filter(intel => (intel.map === mapId))
    var renderList = IntelStore.slice(0, 10);

    return (
        <StyledIntelList >
            {
                renderList.map(intel => {
                    return (<IntelListMenuItem key={intel.id} {...intel} />);
                })
            }
        </StyledIntelList>
    )
}
