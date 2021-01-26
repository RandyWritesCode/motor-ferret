import React from 'react'
import './EventForm.css'

function EventForm() {
  return (<section>
    <h3>Event Form</h3>
    <form>
      <fieldset>
        <legend>
          About your Event
        </legend>

        <div>
          <label htmlFor="title">Title: </label>
          <input type="text" id="title" required />
        </div>

        <div>
          <label htmlFor="date1">Start Date: </label>
          <input type="date" id="date1" required />
        </div>

        <div>
          <label htmlFor="date2">End Date: </label>
          <input type="date" id="date2" />
        </div>

        <div>
          <label htmlFor="organizer">Organizer: </label>
          <input type="text" id="organizer" required />
        </div>

        <div>

          <label htmlFor="website">Website: </label>
          <input type="text" id="website" />
        </div>
        <div>
          <label htmlFor="event_type">Event Type: </label>
          <select name="event-type" id="event_type">
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
          <textarea name="event_description" id="event_description" cols="30" rows="10">Write about your event here...</textarea>
        </div>
      </fieldset>

      <fieldset>
        <legend>Event Location</legend>
        <div>
          <label htmlFor="address">Street Address:</label>
          <input type="text" id="address" required />
        </div>

        <div>
          <label htmlFor="address2">Street Address Line 2:</label>
          <input type="text" id="address2" />
        </div>

        <div>
          <label htmlFor="city">City</label>
          <input type="text" id="city" required />
        </div>

        <div>
          <label htmlFor="state">State:</label>
          <input type="text" id="state" required />
        </div>

        <div>
          <label htmlFor="zip">Zip Code:</label>
          <input type="text" id="zip" required />
        </div>
      </fieldset>


      <button type="submit">Submit</button>
      <button type="reset">Clear</button>
    </form>

  </section>
  )
}

export default EventForm