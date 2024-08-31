import styled from '@emotion/styled';
import { Box, CircularProgress, Modal } from '@mui/material';
import React, { useState, useEffect } from 'react';

const StyledImageContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
`;

const style = {
    position: 'absolute' as 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: '80vw',
    bgcolor: 'var(--clr-bg-inverted)',
    border: '2px solid #000',
    boxShadow: 24,
    p: 4,
};

export const CustomImage = ({
    src: imageId = './assets/img/intelScreenshot/placeholder.png',
    altText = 'Placeholder'
}) => {
    const [imgLoaded, setImageLoaded] = useState(false);
    const [modalImageLoaded, setModalImageLoaded] = useState(false);
    const [open, setOpen] = useState(false);

    const handleOpen = () => {
        setModalImageLoaded(false);
        setOpen(true);
    };

    const handleClose = () => setOpen(false);

    return (
        <>
            <StyledImageContainer>
                {!imgLoaded && (
                        <CircularProgress />
                    )}
                <img
                    src={`https://i.imgur.com/${imageId}m.jpg?t=${new Date().getTime()}`}
                    onClick={handleOpen}
                    alt={altText}
                    loading="lazy"
                    style={{
                        height: 'auto',
                        cursor: 'pointer'
                    }}
                    onLoad={() => setImageLoaded(true)}
                />
            </StyledImageContainer>

            <Modal
                open={open}
                onClose={handleClose}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
            >
                <Box sx={style}>
                    {!modalImageLoaded && (
                        <CircularProgress style={{ display: 'block', margin: 'auto' }} />
                    )}
                    <img
                        src={`https://i.imgur.com/${imageId}.jpg?t=${new Date().getTime()}`}
                        onLoad={() => setModalImageLoaded(true)}
                        alt={altText}
                        style={{
                            width: '100%',
                            display: modalImageLoaded ? 'block' : 'none',
                        }}
                    />
                </Box>
            </Modal>
        </>
    );
};
