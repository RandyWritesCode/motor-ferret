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
          <label for="title">Title: </label>
          <input type="text" id="title" required />
        </div>

        <div>
          <label for="organizer">Organizer: </label>
          <input type="text" id="organizer" required />
        </div>

        <div>

          <label for="website">Website: </label>
          <input type="text" id="website" />
        </div>
        <div>
          <label for="event-type">Event Type: </label>
          <select name="event-type" id="event-type">
            <option value='rallying'>Rallying</option>
            <option value='time-attack'>Time Attack</option>
            <option value='drag-racing'>Drag Racing</option>
            <option value='road-racing'>Road racing</option>
          </select>
        </div>
        <div>
          <label>Event Description</label>
          <textarea name="" id="" cols="30" rows="10">Write about your event here...</textarea>
        </div>
      </fieldset>
      <fieldset>
        <legend>Event Location</legend>



        <div>
          <label for="address">Street Address:</label>
          <input type="text" id="address" required />
        </div>

        <div>
          <label for="address2">Street Address Line 2:</label>
          <input type="text" id="address2" />
        </div>

        <div>

          <label for="city">City</label>
          <input type="text" id="city" required />
        </div>

        <div>
          <label for="state">State:</label>
          <input type="text" id="state" required />
        </div>

        <div>

          <label for="zip">Zip Code:</label>
          <input type="text" id="zip" required />
        </div>
      </fieldset>


      <button>Submit</button>
      <button>Clear</button>
    </form>

  </section>
  )
}

export default EventForm