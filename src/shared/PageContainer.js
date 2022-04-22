import React from 'react';
import { Grid } from '@mui/material';

export const PageContainer = ({ children }) => {
    return <Grid sx={{ margin: '10vh 10vw 0 10vw' }}>{children}</Grid>;
};
