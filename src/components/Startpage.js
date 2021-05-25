import React from 'react'
import { Link } from 'react-router-dom'

export default function Startpage() {
  return (
    <div >

      <div className="start-page loose-text-field">
        <h1 className="header-size">Vi skjutsar för framtiden!</h1>
        <p className="text">Tillsammans bygger vi broar av möjligheter vilka väver samman tid, transport och föräldrar emellan på ett enkelt och hållbart sätt.</p>
        <br></br>
        <Link to="/registrera" className="button-v2">REGISTRERA</Link>

      </div>
      <div className="start-page2">
        <div className="loose-text-field">
          <br></br>
          <h3>Därför ska du börja samåka med Boomerang</h3>

          <h4 className="custum-for-start-page">Spara tid och resurser</h4>

          <p className="text">Färre sträckor och tider att passa</p>
          <br></br>
          <h4 className="custum-for-start-page">Bra för miljön</h4>
          <p className="text">Klimatsmart/ekonomiskt genom färre sträckor och fordon</p>
          <br></br>
          <h4 className="custum-for-start-page">Gemenskap</h4>
          <p className="text">Socialt- Ökar gemenskap</p>
          <br></br>

        </div>

      </div>
      <img className="start-page_mobile" src="./startpageMobile.jpg" />
    </div>
  )
}
