import React from 'react'
import './Form.css'

function EventForm(props) {

  return (<section>
    <h3>Add Event Form</h3>
    <form onSubmit={(e) => props.handleAddEvent(e)}>
      <fieldset>
        <legend>
          About your Event
        </legend>

        <div>
          <label htmlFor="title">Title: </label>
          <input type="text" id="title"
            defaultValue='testTitle'
            required />
        </div>

        <div>
          <label htmlFor="date1">Start Date: </label>
          <input type="date" id="date1"
            // defaultValue='02202021'
            required />
        </div>

        <div>
          <label htmlFor="date2">End Date: </label>
          <input type="date" id="date2"
          // defaultValue='02/20/2021'
          />
        </div>

        <div>
          <label htmlFor="organizer">Organizer: </label>
          <input type="text" id="organizer"
            defaultValue='testOrg'
            required />
        </div>

        <div>

          <label htmlFor="website">Website: </label>
          <input type="text" id="website"
            defaultValue='www.testWeb.com'
          />
        </div>
        <div>
          <label htmlFor="event_type">Event Type: </label>
          <select name="event-type" id="event_type"
            defaultValue='rallying'
          >
            <option value='rallying'>Rallying</option>
            <option value='time_attack'>Time Attack</option>
            <option value='drag_racing'>Drag Racing</option>
            <option value='road_racing'>Road racing</option>
          </select>
        </div>

        <div>
          <label htmlFor="photo">
            Photo URL
          </label>
          <input type='text' id="photo" />
        </div>

        <div>
          <label htmlFor="event_description">Event Description</label>
          <textarea name="event_description" id="event_description" cols="30" rows="10"
          >Write about your event here...</textarea>
        </div>
      </fieldset>

      <fieldset>
        <legend>Event Location</legend>
        <div>
          <label htmlFor="address">Street Address:</label>
          <input type="text" id="address"
            defaultValue='194 Euclid Street'
            required />
        </div>

        <div>
          <label htmlFor="address2">Street Address Line 2:</label>
          <input type="text" id="address2" />
        </div>

        <div>
          <label htmlFor="city">City</label>
          <input type="text" id="city"
            defaultValue='Haines City'
            required />
        </div>

        <div>
          <label htmlFor="all_states">State (Abbreviation):</label>
          <input type="text" id="all_states"
            defaultValue='FL'
            required />
        </div>

        <div>
          <label htmlFor="zip">Zip Code:</label>
          <input type="text" id="zip"
            defaultValue="33844"
            required />
        </div>
      </fieldset>


      <button type="submit">Submit</button>
      <button type="reset">Clear</button>
    </form>

  </section>
  )
}

export default EventForm