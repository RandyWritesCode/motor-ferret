import React, { useState } from 'react';
import { Button, Grid, ToggleButton, ToggleButtonGroup } from '@mui/material';
import TitleForm from '../Forms/TitleForm.js';
import LocationForm from '../Forms/LocationForm.js';

function SearchEventsForm(props) {
    const [formType, setFormType] = useState('title');

    function handleFormChange(e) {
        setFormType(e.target.value);
    }

    function displayForm() {
        if (formType === 'title') {
            return <TitleForm handleEventSearch={props.handleEventSearch} />;
        } else if (formType === 'state') {
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
            <ToggleButtonGroup
                color='primary'
                value={formType}
                exclusive
                onChange={handleFormChange}
            >
                <ToggleButton value='title'>Event Title</ToggleButton>
                <ToggleButton value='state'>State</ToggleButton>
            </ToggleButtonGroup>
            {/* <Grid item xs='auto' sx={{ margin: 2 }}>
                <Button
                    variant='outlined'
                    className='searchOption'
                    onClick={() => handleFormChange('title')}
                >
                    Title
                </Button>
            </Grid>

            <Grid item xs='auto' sx={{ margin: 2 }}>
                <Button
                    variant='outlined'
                    className='searchOption'
                    onClick={e => handleFormChange('state')}
                >
                    State
                </Button>
            </Grid> */}

            {displayForm()}
        </Grid>
    );
}

export default SearchEventsForm;
