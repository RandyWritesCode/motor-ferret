import React from 'react'

function LocationForm(props) {
  let stateOption = props.events.map((event, idx) => {
    return <option key={idx} value={event.state}>{event.state}</option>
  })

  return (
    <form onSubmit={props.handleEventSearchByLocation}>
      <label htmlFor='state'> Search by State: </label>
      <select id="state">
        {stateOption}
      </select>
      <button type="submit">Submit</button>
    </form>
  )
}

export default LocationForm
