
import React from 'react'
import Header from './Header'

function Football() {
  return (
    <svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="futbol" className="svg-inline--fa fa-futbol fa-w-16" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
          <path fill="currentColor" d="M504 256c0 136.967-111.033 248-248 248S8 392.967 8 256 119.033 8 256 8s248 111.033 248 248zm-48 0l-.003-.282-26.064 22.741-62.679-58.5 16.454-84.355 34.303 3.072c-24.889-34.216-60.004-60.089-100.709-73.141l13.651 31.939L256 139l-74.953-41.525 13.651-31.939c-40.631 13.028-75.78 38.87-100.709 73.141l34.565-3.073 16.192 84.355-62.678 58.5-26.064-22.741-.003.282c0 43.015 13.497 83.952 38.472 117.991l7.704-33.897 85.138 10.447 36.301 77.826-29.902 17.786c40.202 13.122 84.29 13.148 124.572 0l-29.902-17.786 36.301-77.826 85.138-10.447 7.704 33.897C442.503 339.952 456 299.015 456 256zm-248.102 69.571l-29.894-91.312L256 177.732l77.996 56.527-29.622 91.312h-96.476z"></path>
    </svg>
  )
}

export default function CreateSchedule() {
  return (
    <div>
      <i class="fa fa-bars"></i>
            <span class="banner">Boomerang</span>
            <span class="my-account right">Siri</span>
            <i class="fa fa-user-circle right menu-user-icon"></i>
      
            <div class="container group-box"/>
              <h3>Skapa körschema</h3>
              <label for="destination">Fyll i destination:</label>
              <input type="text" id="destination"></input>
              <br/>
              <br/>
              <label for="dagar">Välj dag för skjutsning</label>
              <select>
                <option value="måndag">Måndag</option>
                <option value="tisdag">Tisdag</option>
                <option value="onsdag">Onsdag</option>
                <option value="torsdag">Torsdag</option>
                <option value="fredag">Fredag</option>
                <option value="lördag">Lördag</option>
                <option value="söndag">Söndag</option>
              </select>
              <br/>
              <br/>
              <label for="veckor">Välj antal veckor</label>
              <select>
                <option value="1">1</option>
                <option value="2">2</option>
                <option value="3">3</option>
                <option value="4">4</option>
                <option value="5">5</option>
                <option value="6">6</option>
                <option value="7">7</option>
                <option value="8">8</option>
                <option value="9">9</option>
                <option value="10">10</option>
              </select>
              <br/>
              <br/>
              
      <Header/>
      <div className="page-content">
        <div className="sub-header side-by-side">
          <div className="icon-column"> 
            <Football/>
          </div>
          <div className="group-column"> 
            <p>Fotbollsgruppen<br></br>
            Peter, Hanna, Siri</p>
          </div>
        </div>
        <form className="container form">
          <div>
            <h3>Skapa körschema</h3>
            
              <input className="standard-input" placeholder="Fyll i destinationen" id="fyll-i-destination"></input>
              <br></br>
              <input className="standard-input" placeholder="Välj dag för skjutsning" id="valj-dag-for-skjutsning"></input>
              <br></br>
              <input className="standard-input" placeholder="Välj antal veckor" id="valj-antal-veckor"></input>
            
          </div>
          <div>
            <p>Tid för aktivitet:</p>
            
              <div className="input-side-by-side">
                <input className="small-input" placeholder="Aktivitetens start" id="aktivitetens-start"></input>
                
                <input className="small-input" placeholder="Aktivitetens slut" id="aktivitetens-slut"></input>
              </div>
              
              <br></br>
              <input className="standard-input" placeholder="Välj ordning för chaufförer" id="valj-ordning-for-chaufforer"></input>
            
          </div>
          <div id="upphamtningslista">
            <h5>Upphämtningslista:</h5>
          </div>
        </form>
      </div>
    </div>
  )
}
