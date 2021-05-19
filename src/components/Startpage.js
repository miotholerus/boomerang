import React from 'react'
import { Link } from 'react-router-dom'

export default function Startpage() {
    return (
        <div>
            <div className="start-page">
                <h1>Vi skjutsar för framtiden!</h1>
            
                <p className="text">Tillsammans bygber vi broar av möjligheter vilka väver samman tid, transport och föräldrar emellan på ett enkelt och hållbart sätt.</p>
                <br></br>
                <Link to="/registrera" className="button-v2">REGISTRERA</Link>
           </div>
           <div className="start-page2">
               <br></br>
               <h3>Därför ska du börja samåka med Boomerang</h3>

               <h4>Spara tid och resurser</h4>
               <p className="text">Färre sträckor och tider att passa</p>
               <br></br>
               <h4>Bra för miljön</h4>
               <p className="text">Klimatsmart/ekonomiskt genom färre sträckor och fordon</p>
               <br></br>
               <h4>Gemenskap</h4>
               <p className="text">Socialt- Ökar gemenskap</p>
               <br></br>
               <img className="start-page_mobile" src="./startpageMobile.jpg"/>
           </div>
        </div>
    )
}
