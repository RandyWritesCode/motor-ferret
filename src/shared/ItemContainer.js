import React from 'react';
import { Card, Grid } from '@mui/material';

export const ItemContainer = ({ idx, children }) => {
    return (
        <Grid xs={12} sx={{ margin: 1 }}>
            <Card key={idx} sx={{ padding: 2 }}>
                {children}
            </Card>
        </Grid>
    );
};
