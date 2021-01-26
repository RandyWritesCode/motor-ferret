import React from 'react';

// import Error from '../AppError/AppError';

export default class Search extends React.Component {

  render() {

    return (
      // <Error>
      <div className='pageContainer search'>
        <header>
          <section >
            <h2>Event Search </h2>
            <h3>Search for events</h3>
          </section>
        </header>
        <section>
          <form className='signup-form' onSubmit={this.props.handleEventSearch} >
            <div>
              <label htmlFor="search_term">Search Term: </label>
              <input
                // onChange={this.props.handleSearchTermChange} 
                placeholder='championship'
                type="text"
                name='search_term'
                id='search_term' />
            </div>
            <div className="">
              <label htmlFor='event_type'> Search for events by type: </label>
              <select
                id="event_type"
              // onChange={this.props.handleSearchTypeChange}
              >
                <option value='all'>All</option>
                <option value='drag_racing'>Drag Racing</option>
                <option value='rallying'>Rallying</option>
                <option value='time_attack'>Time Attack</option>
                <option value='road_racing'>Road Racing</option>
              </select>
            </div>

            <button type='submit'>Search</button>
          </form>
        </section>
        <div>
          {/* <EventSearchResults
            events={props.events} /> */}
        </div>
      </div>
      // </Error>
    );
  }
};

