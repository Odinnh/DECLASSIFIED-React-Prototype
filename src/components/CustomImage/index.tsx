import styled from '@emotion/styled';
import { CircularProgress } from '@mui/material';
import React, { useState } from 'react'

const StyledImageContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
`

export const CustomImage = ({ src, altText }) => {
    const [imgLoaded, setImageLoaded] = useState(false);

    return (
        <StyledImageContainer>
            <img
                src={src}
                alt={altText}//'Placeholder'
                onLoad={() => setImageLoaded(true)}
            />
            {imgLoaded ? null : (<CircularProgress />)}
        </StyledImageContainer>
    )
}
