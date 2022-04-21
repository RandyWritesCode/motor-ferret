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
} from '@mui/material';
import { SLIDE_INFO } from './slides';
import drift from './assets/drift.mp4';

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
        <Grid container direction='row'>
            <Card
                sx={{
                    width: '100%',
                    overflow: 'hidden',
                    display: 'block',
                    maxHeight: '35vh',
                    pointerEvents: 'none',
                }}
            >
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
                        zIndex: '0',
                    }}
                ></CardMedia>
                <CardContent
                    sx={{
                        position: 'absolute',
                        top: 70,
                        left: '1%',
                        right: '1%',
                        bgcolor: 'transparent',
                        color: 'white',
                        zIndex: '1',
                    }}
                >
                    <Grid>
                        <Typography
                            variant='h1'
                            align='center'
                            sx={{
                                fontSize: '15vw',
                                transfor: 'translate(0, -50%)',
                            }}
                        >
                            Motor Ferret
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
            </Card>

            <Grid item xs={1} />
        </Grid>
    );
};

export default Carousel;
