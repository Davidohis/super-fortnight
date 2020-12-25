import React from 'react';


function Search({ searchChange }) {
    return (
        <div>
        <input 
          className="pa3 ba b--green bg-lightest-blue"
          type='search'
          placeholder='Search for robots'
          onChange={searchChange}
        />
        </div>
    )
}

export default Search;