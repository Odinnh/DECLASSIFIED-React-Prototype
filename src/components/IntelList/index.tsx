import styled from 'styled-components'
import { IntelStore } from '../../data/intel'
import { IntelListMenuItem } from '../IntelListMenuItem'


const StyledIntelList = styled.div`
    background-color: var(--clr-grey-d);
    padding: 10px;
`



export const IntelList = () => {
    // .filter(intel => (intel.map === mapId))


    return (
        <StyledIntelList >
            {IntelStore
                .map(intel => {
                    return (<IntelListMenuItem key={intel.id} {...intel} />);
                })
            }
        </StyledIntelList>
    )
}
