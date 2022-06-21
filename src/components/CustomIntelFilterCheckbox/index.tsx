import styled from '@emotion/styled'
import React from 'react'

const StyledCustomIntelFilterCheckbox = styled.div`
    padding: 5px;
    .container {
        background-color: var(--clr-white-d);
        display: grid;
        grid-template-columns: 40% 40% 20%;
        justify-items: center;
        align-items: center;
    }
    label {
        background-color: var(--clr-grey-d);
        color: var(--clr-white-d);
        padding: 0.2rem;
        width: 100%;
        text-align: center;
    }
    img {
        width: 100%;
        padding: 0.2rem;
    }
    .intel-count {
        font-size: initial;
        background-color: var(--clr-white);
        text-align: center;
        height: 100%;
        display: flex;
        align-items: center;
        padding: 0.2rem;
    }
`

export const CustomIntelFilterCheckbox = ({ intelType }) => {
    const imgSrc = (intelType).toLowerCase();

    return (
        <StyledCustomIntelFilterCheckbox>
            <div className="container">
                <label>{intelType}</label>
                <img
                    src={require(`../../../src/assets/img/intelTypes/${imgSrc}.png`)}
                    alt='Placeholder'
                    loading="lazy"
                />
                <div className="intel-count">
                    10
                    /105
                </div>
            </div>
        </StyledCustomIntelFilterCheckbox>
    )
}
