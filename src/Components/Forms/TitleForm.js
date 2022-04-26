import { TextField, Grid, Button } from '@mui/material';
import React from 'react';
import { ItemContainer } from '../../shared/index';

function TitleForm(props) {
    return (
        <ItemContainer>
            <Grid
                type='form'
                className='signup-form'
                onSubmit={props.handleEventSearch}
            >
                <Grid className='center'>
                    <TextField
                        labe='Search Term'
                        placeholder='championship'
                        type='text'
                        name='search_term'
                        id='search_term'
                    />
                </Grid>
                {/* <div className="">
              <label htmlFor='event_type'> Search for events by type: </label>
              <select id="event_type">
                <option value='all'>All</option>
                <option value='drag_racing'>Drag Racing</option>
                <option value='rallying'>Rallying</option>
                <option value='time_attack'>Time Attack</option>
                <option value='road_racing'>Road Racing</option>
              </select>
            </div> */}

                <Button className='primary' type='submit'>
                    Search
                </Button>
                <Button type='reset'>Clear</Button>
            </Grid>
        </ItemContainer>
    );
}

export default TitleForm;
