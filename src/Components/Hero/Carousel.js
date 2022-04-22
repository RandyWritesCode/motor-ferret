import React, { useEffect, useRef, useState } from 'react';
import {
    Box,
    Card,
    CardContent,
    CardMedia,
    Grid,
    Paper,
    Slide,
    Typography,
    useMediaQuery,
} from '@mui/material';
import { useTheme } from '@mui/material/styles';
import { SLIDE_INFO } from './slides';
import drift from './assets/drift.mp4';

const CarouselWrapper = ({
    children,
    largeLayout,
    mediumLayout,
    smallLayout,
}) => {
    const theme = useTheme();
    const extralargeScreen = useMediaQuery(theme.breakpoints.up('xl'));
    const largeScreen = useMediaQuery(theme.breakpoints.up('lg'));
    const mediumScreen = useMediaQuery(theme.breakpoints.up('md'));
    const smallScreen = useMediaQuery(theme.breakpoints.up('sm'));

    return (
        <Grid container>
            <Card
                sx={{
                    width: '110%',
                    overflow: 'hidden',
                    display: 'block',
                    maxHeight: extralargeScreen
                        ? '45vh'
                        : largeScreen
                        ? '35vh'
                        : mediumScreen
                        ? '28vh'
                        : smallScreen
                        ? '22vh'
                        : '17vh',
                    pointerEvents: 'none',
                }}
            >
                {children}
            </Card>
        </Grid>
    );
};
const Media = ({ videoEl }) => (
    <CardMedia
        component='video'
        playsInline
        loop
        muted
        controls
        alt='motorsports event'
        src={drift}
        ref={videoEl}
        sx={{
            filter: 'brightness(0.6)',
            position: 'relative',
        }}
    />
);

const Carousel = () => {
    const videoEl = useRef(null);

    const attemptPlay = () => {
        videoEl &&
            videoEl.current &&
            videoEl.current.play().catch(error => {
                console.error('Error attempting to play', error);
            });
    };

    useEffect(() => {
        attemptPlay();
    }, []);

    return (
        <CarouselWrapper>
            <Media videoEl={videoEl} />
            <CardContent
                sx={{
                    position: 'absolute',
                    top: 70,
                    left: '1%',
                    right: '1%',
                    bgcolor: 'transparent',
                    color: 'white',
                }}
            >
                <Grid>
                    <Typography
                        variant='h1'
                        align='center'
                        sx={{
                            fontSize: '12vw',
                            transfor: 'translate(0, -50%)',
                            textTransform: 'capitalize',
                            // fontFamily: 'Open Sans',
                        }}
                    >
                        Motor Ferret{' '}
                    </Typography>
                    <Typography
                        variant='h2'
                        align='center'
                        sx={{ fontSize: '5vw' }}
                    >
                        Find your event now
                    </Typography>
                </Grid>
            </CardContent>
        </CarouselWrapper>
    );
};

export default Carousel;
