import React, { useState } from 'react';
import './Form.css';

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

    return (
        <section className='formContainer'>
            <div className='formItem'>
                <h3>Add Event Form</h3>
                <form onSubmit={e => props.handleAddEvent(e)}>
                    <fieldset>
                        <legend>About your Event</legend>

                        <div>
                            <label htmlFor='title'>Title: </label>
                            <input
                                type='text'
                                id='title'
                                onChange={e => setTitle(e.target.value)}
                                required
                            />
                        </div>

                        <div>
                            <label htmlFor='date1'>Start Date: </label>
                            <input
                                type='date'
                                id='date1'
                                onChange={e => {
                                    setDate1(e.target.value);
                                }}
                                required
                            />
                        </div>

                        <div>
                            <label htmlFor='date2'>End Date: </label>
                            <input
                                type='date'
                                id='date2'
                                onChange={e => {
                                    setDate2(e.target.value);
                                }}
                            />
                        </div>

                        <div>
                            <label htmlFor='organizer'>Organizer: </label>
                            <input type='text' id='organizer' required />
                        </div>

                        <div>
                            <label htmlFor='website'>Website: </label>
                            <input
                                type='text'
                                id='website'
                                onChange={e => setWebsite(e.target.value)}
                            />
                        </div>
                        <div>
                            <label htmlFor='event_type'>Event Type: </label>
                            <select
                                name='event-type'
                                id='event_type'
                                onChange={e => setEventType(e.target.value)}
                            >
                                <option value='rallying'>Rallying</option>
                                <option value='time_attack'>Time Attack</option>
                                <option value='drag_racing'>Drag Racing</option>
                                <option value='road_racing'>Road racing</option>
                            </select>
                        </div>

                        <div>
                            <label htmlFor='event_description'>
                                Event Description
                            </label>
                            <textarea
                                name='event_description'
                                id='event_description'
                                cols='30'
                                rows='10'
                                onChange={e => setDescription(e.target.value)}
                            ></textarea>
                        </div>
                    </fieldset>

                    <fieldset>
                        <legend>Event Location</legend>
                        <div>
                            <label htmlFor='address'>Street Address:</label>
                            <input type='text' id='address' required />
                        </div>

                        <div>
                            <label htmlFor='address2'>
                                Street Address Line 2:
                            </label>
                            <input type='text' id='address2' />
                        </div>

                        <div>
                            <label htmlFor='city'>City</label>
                            <input type='text' id='city' required />
                        </div>

                        <div>
                            <label htmlFor='all_states'>
                                State (or district):{' '}
                            </label>

                            <select
                                name='all_states'
                                id='all_states'
                                onChange={e => setState(e.target.value)}
                                required
                            >
                                <option value='AL'>AL</option>
                                <option value='AK'>AK</option>
                                <option value='AZ'>AZ</option>
                                <option value='AR'>AR</option>
                                <option value='CA'>CA</option>
                                <option value='CO'>CO</option>
                                <option value='CT'>CT</option>
                                <option value='DC'>DC</option>
                                <option value='DE'>DE</option>
                                <option value='FL'>FL</option>
                                <option value='GA'>GA</option>
                                <option value='HI'>HI</option>
                                <option value='ID'>ID</option>
                                <option value='IL'>IL</option>
                                <option value='IN'>IN</option>
                                <option value='IA'>IA</option>
                                <option value='KS'>KS</option>
                                <option value='KY'>KY</option>
                                <option value='LA'>LA</option>
                                <option value='ME'>ME</option>
                                <option value='MD'>MD</option>
                                <option value='MA'>MA</option>
                                <option value='MI'>MI</option>
                                <option value='MN'>MN</option>
                                <option value='MS'>MS</option>
                                <option value='MO'>MO</option>
                                <option value='MT'>MT</option>
                                <option value='NE'>NE</option>
                                <option value='NV'>NV</option>
                                <option value='NH'>NH</option>
                                <option value='NJ'>NJ</option>
                                <option value='NM'>NM</option>
                                <option value='NY'>NY</option>
                                <option value='NC'>NC</option>
                                <option value='ND'>ND</option>
                                <option value='OH'>OH</option>
                                <option value='OK'>OK</option>
                                <option value='OR'>OR</option>
                                <option value='PA'>PA</option>
                                <option value='RI'>RI</option>
                                <option value='SC'>SC</option>
                                <option value='SD'>SD</option>
                                <option value='TN'>TN</option>
                                <option value='TX'>TX</option>
                                <option value='UT'>UT</option>
                                <option value='VT'>VT</option>
                                <option value='VA'>VA</option>
                                <option value='WA'>WA</option>
                                <option value='WV'>WV</option>
                                <option value='WI'>WI</option>
                                <option value='WY'>WY</option>
                            </select>
                        </div>

                        <div>
                            <label htmlFor='zip'>Zip Code:</label>
                            <input type='text' id='zip' required />
                        </div>
                    </fieldset>

                    <button className='primary' type='submit'>
                        Submit
                    </button>
                    <button type='reset'>Clear</button>
                </form>
            </div>
            <div className='formItem '>
                <h3>Event Preview</h3>
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
            </div>
        </section>
    );
}

export default EventForm;
