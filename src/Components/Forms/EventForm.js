import React, { useState } from 'react';

import {
    Box,
    Button,
    Grid,
    MenuItem,
    Paper,
    TextField,
    Typography,
} from '@mui/material';

import './Form.css';
import { ItemContainer, PageContainer } from '../../shared/index';

function EventForm(props) {
    const [title, setTitle] = useState('');
    const [date1, setDate1] = useState('');
    const [date2, setDate2] = useState('');
    const [website, setWebsite] = useState('');
    const [eventType, setEventType] = useState('');
    const [description, setDescription] = useState('');
    const [state, setState] = useState('');

    let formattedEventType = eventType.replace('_', ' ').toUpperCase();
    let days = [
        'Sunday',
        'Monday',
        'Tuesday',
        'Wednesday',
        'Thursday',
        'Friday',
        'Saturday',
    ];
    let months = [
        'January',
        'February',
        'March',
        'April',
        'May',
        'June',
        'July',
        'August',
        'September',
        'October',
        'November',
        'December',
    ];

    let eventTypes = [
        { title: 'Rallying', value: 'rallying' },
        { title: 'Time Attack', value: 'time_attack' },
        { title: 'Drag Racing', value: 'drag_racing' },
        { title: 'Road Racing', value: 'road_racing' },
        { title: 'Other', value: 'other' },
    ];

    let states = [
        '',
        'AK',
        'AL',
        'AR',
        'AS',
        'AZ',
        'CA',
        'CO',
        'CT',
        'DC',
        'DE',
        'FL',
        'GA',
        'GU',
        'HI',
        'IA',
        'ID',
        'IL',
        'IN',
        'KS',
        'KY',
        'LA',
        'MA',
        'MD',
        'ME',
        'MI',
        'MN',
        'MO',
        'MS',
        'MT',
        'NC',
        'ND',
        'NE',
        'NH',
        'NJ',
        'NM',
        'NV',
        'NY',
        'OH',
        'OK',
        'OR',
        'PA',
        'PR',
        'RI',
        'SC',
        'SD',
        'TN',
        'TX',
        'UT',
        'VA',
        'VI',
        'VT',
        'WA',
        'WI',
        'WV',
        'WY',
    ];

    return (
        <PageContainer>
            <Grid className='formItem'>
                <Typography variant='h3' sx={{ fontSize: '40px' }}>
                    Add your Event
                </Typography>
                {/* <ItemContainer> */}
                <Grid
                    // direction='row'
                    component='form'
                    onSubmit={e => props.handleAddEvent(e)}
                >
                    <Grid item xs='auto' sx={{ margin: 2 }}>
                        <TextField
                            type='text'
                            label='Title:'
                            id='title'
                            value={title}
                            onChange={e => setTitle(e.target.value)}
                            required
                        />
                    </Grid>

                    <Grid item xs='auto' sx={{ margin: 2 }}>
                        <TextField
                            label='Start Date: '
                            InputLabelProps={{ shrink: true }}
                            type='date'
                            id='date1'
                            value={date1}
                            onChange={e => {
                                setDate1(e.target.value);
                            }}
                            required
                            sx={{
                                width: 282,
                            }}
                        />
                    </Grid>

                    <Grid item xs='auto' sx={{ margin: 2 }}>
                        <TextField
                            id='date2'
                            type='date'
                            InputLabelProps={{ shrink: true }}
                            label='End Date: '
                            value={date2}
                            onChange={e => {
                                setDate2(e.target.value);
                            }}
                            sx={{
                                width: 282,
                            }}
                        />
                    </Grid>

                    <Grid item xs='auto' sx={{ margin: 2 }}>
                        <TextField
                            id='organizer'
                            type='text'
                            label='Organizer: '
                            required
                        />
                    </Grid>
                    <Grid item xs='auto' sx={{ margin: 2 }}>
                        <TextField
                            id='website'
                            type='text'
                            label='Website: '
                            value={website}
                            onChange={e => setWebsite(e.target.value)}
                        />
                    </Grid>
                    <Grid item xs='auto' sx={{ margin: 2 }}>
                        <TextField
                            id='event_type'
                            name='event-type'
                            label='Event Type:'
                            select
                            sx={{
                                width: 282,
                            }}
                            value={eventType}
                            onChange={e => setEventType(e.target.value)}
                        >
                            {eventTypes.map((eventType, idx) => {
                                return (
                                    <MenuItem
                                        key={`eventType-${idx}`}
                                        value={eventType.value}
                                    >
                                        {eventType.title}
                                    </MenuItem>
                                );
                            })}
                        </TextField>
                    </Grid>

                    <Grid item xs='auto' sx={{ margin: 2 }}>
                        <TextField
                            label='Event Description'
                            name='event_description'
                            id='event_description'
                            rows={4}
                            multiline
                            sx={{
                                width: 282,
                            }}
                            value={description}
                            onChange={e => setDescription(e.target.value)}
                        />
                    </Grid>

                    <Grid item xs='auto' sx={{ margin: 2 }}>
                        <TextField
                            label='Street Address:'
                            type='text'
                            id='address'
                            required
                        />
                    </Grid>

                    <Grid item xs='auto' sx={{ margin: 2 }}>
                        <TextField
                            label=' Street Address Line 2:'
                            type='text'
                            id='address2'
                        />
                    </Grid>

                    <Grid item xs='auto' sx={{ margin: 2 }}>
                        <TextField
                            label='City'
                            type='text'
                            id='city'
                            required
                        />
                    </Grid>

                    <Grid item xs='auto' sx={{ margin: 2 }}>
                        <TextField
                            select
                            label='State (or district):'
                            name='all_states'
                            id='all_states'
                            value={state}
                            onChange={e => setState(e.target.value)}
                            required
                            sx={{
                                width: 282,
                            }}
                        >
                            {states.map(state => {
                                return (
                                    <MenuItem value={state}>{state}</MenuItem>
                                );
                            })}
                        </TextField>
                    </Grid>

                    <Grid item xs='auto' sx={{ margin: 2 }}>
                        <TextField
                            label='Zip Code:'
                            type='text'
                            id='zip'
                            required
                        />
                    </Grid>

                    <Button className='primary' type='submit'>
                        Submit
                    </Button>
                    <Button type='reset'>Clear</Button>
                </Grid>
                {/* </ItemContainer> */}
            </Grid>
            <Grid className='formItem '>
                <Typography variant='h3' sx={{ fontSize: '40px' }}>
                    Event Preview
                </Typography>
                <section className='preview'>
                    <a href={website}>
                        <h4>{title}</h4>
                    </a>
                    <p>
                        {date1
                            ? `${days[new Date(date1).getUTCDay()]}, ${
                                  months[new Date(date1).getUTCMonth()]
                              } ${new Date(date1).getUTCDate()}, ${new Date(
                                  date1
                              ).getUTCFullYear()}`
                            : ''}
                    </p>
                    <p>
                        {date2
                            ? `to ${days[new Date(date2).getUTCDay()]}, ${
                                  months[new Date(date2).getUTCMonth()]
                              } ${new Date(date2).getUTCDate()}, ${new Date(
                                  date2
                              ).getUTCFullYear()}`
                            : ''}
                    </p>
                    <p>{state}</p>
                    <p>
                        {formattedEventType === ''
                            ? ''
                            : `Event Type: ${formattedEventType}`}
                    </p>
                    <p>
                        {description === ''
                            ? ''
                            : `Description: ${description}`}
                    </p>
                </section>
            </Grid>
        </PageContainer>
    );
}

export default EventForm;
