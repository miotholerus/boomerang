import React from 'react'


export default function CreateSchedule() {
  return (
    <div>
      <i class="fa fa-bars"></i>
            <span class="banner">Boomerang</span>
            <span class="my-account right">Siri</span>
            <i class="fa fa-user-circle right menu-user-icon"></i>
      
            <div class="container group-box">
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
              
    </div>
  )
}
