
import React from 'react'
import "../components/styles/Highlights.css"
import SpecialsCard from './SpecialsCard'

const Highlights = () =>{


    return (
        <div className="specials-section-container">
          <div className="specials-section-title">
                <h1>This Week's Specials</h1>
                <div className="btn-container">
                    <button className="btn btn-menu">Online Menu</button>
                </div>
          </div>
          <SpecialsCard />
        </div>
      )


}
export default Highlights;