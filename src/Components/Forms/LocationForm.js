import React from 'react'

function LocationForm(props) {

  return (
    <form onSubmit={props.handleEventSearchByLocation}>
      <label htmlFor='state'> Search by State: </label>
      <select id="state">
        {(props.events)
          ? props.events.map((event, idx) => {
            return <option key={idx} value={event.state}>{event.state}</option>
          })
          : ''}
      </select>
      <div className='center'>
        <button className='primary' type="submit">Submit</button>
      </div>
    </form>
  )
}

export default LocationForm
