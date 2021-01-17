import React from 'react'

function Search() {
  return (
    <div className="container">
      <div className="search">
        <form>
          <div className="form-group">
            <input type="text" placeholder="Search pokemon by name or id"/>
            <button className="btn button">Search</button>
          </div>
        </form>
      </div>
    </div>
  )
}

export default Search
