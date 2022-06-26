import styled from '@emotion/styled';
import { CircularProgress } from '@mui/material';
import React, { useState } from 'react'

const StyledImageContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
`

export const CustomImage = ({ src = './assets/img/intelScreenshot/placeholder.png', altText = 'Placeholder' }) => {
    const [imgLoaded, setImageLoaded] = useState(false);

    return (
        <StyledImageContainer>
            <img
                // className={imgLoaded ? "" : "-hidden"} // Doesn't seem to get removed, will look for better way
                src={src}
                alt={altText}
                onLoad={() => setImageLoaded(true)}
                loading="lazy"
            />
            {imgLoaded ? null : (<CircularProgress />)}
        </StyledImageContainer>
    )
}
