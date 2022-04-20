import React, { useState } from 'react';
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
        <div>
            <button className='searchOption' onClick={() => handleTitleForm()}>
                Title
            </button>
            <button
                className='searchOption'
                onClick={() => handleLocationForm()}
            >
                State
            </button>

            {displayForm()}
        </div>
    );
}

export default SearchEventsForm;
