import React from 'react'

function TitleForm(props) {

  return (
    <form className='signup-form' onSubmit={props.handleEventSearch} >
      <div>
        <label htmlFor="search_term">Search Term: </label>
        <input
          placeholder='championship'
          type="text"
          name='search_term'
          id='search_term' />
      </div>
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

      <button type='submit'>Search</button>
      <button type='reset'>Clear From</button>

    </form>
  )
}

export default TitleForm