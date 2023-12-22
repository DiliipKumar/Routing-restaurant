import React from 'react'
import ManuApi from './ManuApi'
import moduleName from './style.css'
export default function ManuCard(props) {
  console.log(props.manuData)

  return (
    <div className="container box">
      {ManuApi.map((items) => {
        return <div className="row" key={items.id} >

          <div className="card" style={{ width: '18rem' }}>
           
            <img className="card-img-top" src={items.image} alt="Card image cap" />
            <div className="card-body">
              <h4>{items.name}</h4>
              <p className="card-text">{items.description}</p>
               <p>{items.price}</p>
                <a href={items.Link}  target="_blank" >
              <button type="button" class="btn btn-primary" link="" >See Details</button>
              </a>

            </div>
          </div>
        </div>
      })}


    </div>
  )
}

