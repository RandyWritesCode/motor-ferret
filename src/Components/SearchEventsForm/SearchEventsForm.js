import React, { useState } from 'react';
import { Button, Grid } from '@mui/material';
import TitleForm from '../Forms/TitleForm.js';
import LocationForm from '../Forms/LocationForm.js';

function SearchEventsForm(props) {
    const [form, setForm] = useState('title');

    function handleTitleForm() {
        setForm(form => (form = 'title'));
    }

    function handleLocationForm() {
        setForm(form => (form = 'location'));
    }

    function displayForm() {
        if (form === 'title') {
            return <TitleForm handleEventSearch={props.handleEventSearch} />;
        } else if (form === 'location') {
            return (
                <LocationForm
                    events={props.events}
                    handleEventSearchByLocation={
                        props.handleEventSearchByLocation
                    }
                />
            );
        }
    }

    return (
        <Grid container>
            <Grid xs={3} sx={{ marginLeft: 1 }}>
                <Button
                    variant='outlined'
                    className='searchOption'
                    onClick={() => handleTitleForm()}
                >
                    Title
                </Button>
            </Grid>

            <Grid xs={3} sx={{ marginLeft: 1 }}>
                <Button
                    variant='outlined'
                    className='searchOption'
                    onClick={() => handleLocationForm()}
                >
                    State
                </Button>
            </Grid>

            {displayForm()}
        </Grid>
    );
}

export default SearchEventsForm;
