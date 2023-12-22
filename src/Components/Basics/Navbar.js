import React from 'react'

export default function Navbar() {
  return (
    <div className="d-flex justify-content-center">
      <nav className="navbar navbar-light bg-light">
        <form className="form-inline" >
          <button className="btn btn-sm btn-outline-secondary mx-3 " type="button"  >BreakFast</button>
          <button className="btn btn-sm btn-outline-secondary mx-3" type="button"   >Lunch</button>
          <button className="btn btn-sm btn-outline-secondary mx-3" type="button"   >Evening</button>
          <button className="btn btn-sm btn-outline-secondary mx-3" type="button"  >Dinner</button>
          <button className="btn btn-sm btn-outline-secondary mx-3" type="button"   >All</button>
        </form>
      </nav>
      
       
    </div>
  )
}


//type="button" 
