import styled from "@emotion/styled";
import { IntelList } from "../IntelList";
import { IntelListMenu } from "../IntelListMenu";

const StyledIntelFilter = styled.div`
        background-color: var(--clr-grey-d);
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        height: 100%;
    `;

export const IntelDrawerContent = <StyledIntelFilter id="intel-filter">
    <IntelList />
    <IntelListMenu />
</StyledIntelFilter>;

