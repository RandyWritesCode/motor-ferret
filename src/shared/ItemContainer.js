import React from 'react';
import { Card, Grid } from '@mui/material';

export const ItemContainer = ({ idx = 0, children }) => {
    return (
        <Grid item sx={{ margin: 1 }}>
            <Card key={idx} sx={{ padding: 2, boxShadow: 4 }}>
                {children}
            </Card>
        </Grid>
    );
};
