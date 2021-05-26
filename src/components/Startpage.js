import React from 'react'
import { Link } from 'react-router-dom'

export default function Startpage() {
  return (
    <div >

      <div className="start-page loose-text-field">
        <h1 className="header-size">Vi skjutsar för framtiden!</h1>
        <p className="text">Tillsammans hjälps vi åt med skjutsning genom samåkning! Inget barn ska missa en aktivitet för att transport och tid inte finns.</p>
        <br></br>
        <Link to="/registrera" className="button-v2">REGISTRERA</Link>

      </div>
      <div className="start-page2">
        <div className="loose-text-field">
          <br></br>
          <h2 className="header-size">Därför ska du börja samåka med Boomerang</h2>

          <h5 className="custum-for-start-page">Spara tid och resurser</h5>

          <p className="text">Färre sträckor och tider att passa</p>
          {/* <br/> */}
          <h4 className="custum-for-start-page">Bra för miljön</h4>
          <p className="text">Klimatsmart &#38; ekonomiskt genom färre sträckor och fordon</p>
          {/* <br/> */}
          <h4 className="custum-for-start-page">Gemenskap</h4>
          <p className="text">Socialt - Ökar gemenskap</p>
          <br/>

        </div>

      </div>
      <img className="start-page_mobile" src="./startpageMobile.jpg" />
    </div>
  )
}
