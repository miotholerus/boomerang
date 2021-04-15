﻿
import React from 'react'
import Header from './Header'
import ViewSchedule from './ViewSchedule'
import {BrowserRouter as Router, Route, Switch, Link, useHistory} from "react-router-dom";


function Football() {
  return (
    <svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="futbol" className="svg-inline--fa fa-futbol fa-w-16" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
          <path fill="currentColor" d="M504 256c0 136.967-111.033 248-248 248S8 392.967 8 256 119.033 8 256 8s248 111.033 248 248zm-48 0l-.003-.282-26.064 22.741-62.679-58.5 16.454-84.355 34.303 3.072c-24.889-34.216-60.004-60.089-100.709-73.141l13.651 31.939L256 139l-74.953-41.525 13.651-31.939c-40.631 13.028-75.78 38.87-100.709 73.141l34.565-3.073 16.192 84.355-62.678 58.5-26.064-22.741-.003.282c0 43.015 13.497 83.952 38.472 117.991l7.704-33.897 85.138 10.447 36.301 77.826-29.902 17.786c40.202 13.122 84.29 13.148 124.572 0l-29.902-17.786 36.301-77.826 85.138-10.447 7.704 33.897C442.503 339.952 456 299.015 456 256zm-248.102 69.571l-29.894-91.312L256 177.732l77.996 56.527-29.622 91.312h-96.476z"></path>
    </svg>
  )
}

function SaveButton() {
  let history = useHistory();

  // spara här

  function gotoViewSchedule() {
    history.push("/viewschedule")
  }

  return (
    <button type="button" className="button-v3" onClick={gotoViewSchedule}>Gå vidare</button>
  )
}

export default function CreateSchedule({schedule, setSchedule}) {
  let history = useHistory();

  
  function saveSchedule(e) {
    alert("Kör saveSchedule");
    // const starttid = starttidRef.current.value;

    const starttid = document.getElementById("starttid");
    const sluttid = document.getElementById("sluttid");
    const adress = document.getElementById("adress-for-destination");
    const veckodag = document.getElementById("veckodag");
    const upprepa = document.getElementById("upprepa");

    // if (starttid === '') return;
    // alert(starttid+" "+sluttid+" "+adress+" "+veckodag);

    const newSchedule = [starttid, sluttid, adress, veckodag, upprepa];
    
    setSchedule(newSchedule);
    


  }

  return (
    <div>
      <Header/>
      <div className="page-content">
        <div className="sub-header-football">
          <div className="football-column"> 
            <Football/>
          </div>
          <div className="group-column"> 
            Fotbollsgruppen<br></br>
            Peter, Hanna, Siri
          </div>
        </div>

        <br></br>
        <form className="container form">
        
          <h3>Skapa gruppens körschema</h3>
          <div className="aktivitet">
            <p>Aktivitet</p>

            <div className="input-side-by-side">
              <input type="time" className="small-input input-left" placeholder="Starttid kl." id="starttid"></input>
              
              <input type="time" className="small-input input-right" placeholder="Sluttid kl." id="sluttid"></input>
              {/* <button onClick={saveSchedule}>Spara</button> */}
            </div>

            <input className="standard-input" placeholder="Fyll i adress för destination" id="adress-for-destination"></input>
            
            
            <div className="input-side-by-side">
              <select defaultValue="Veckodag" className="small-input option-list input-left" id="veckodag">
                <option id="option-placeholder" value="" disabled selected>Veckodag</option>
                <option value="Måndag">Måndag</option>
                <option value="Tisdag">Tisdag</option>
                <option value="Onsdag">Onsdag</option>
                <option value="Torsdag">Torsdag</option>
                <option value="Fredag">Fredag</option>
                <option value="Lördag">Lördag</option>
                <option value="Söndag">Söndag</option>
              </select>

              <select className="small-input option-list input-right" id="upprepa">
                <option id="option-placeholder" value="" disabled selected>Upprepa</option>
                <option value="upprepa-inte">Upprepa inte</option>
                <option value="varje-dag">Varje dag</option>
                <option value="varje-vecka">Varje vecka</option>
              </select>
            </div>
          </div>

          <div className="schema">
            <p>Schema</p>

            <div className="input-side-by-side">
              <input type="date" className="small-input input-left" placeholder="Startdatum" id="startdatum"></input>

              <input type="date" className="small-input input-right" placeholder="Slutdatum" id="slutdatum"></input>
            </div>
          </div>
          
          {/* <div className="skjutsning"> */}
            {/* <p>Skjutsning</p> */}

            {/* Avancerat, egen komponent? */}
            {/* <select className="standard-input option-list input-left" id="ordning-for-chaufforer">
              <option id="option-placeholder" value="" disabled selected>Välj ordning för chaufförer</option>
              <option value="op1">Tillfälle 1 | Till aktivitet... | Från aktivitet...</option>
              <option value="op2">Tillfälle 2 | Till aktivitet... | Från aktivitet...</option>
              <option value="op3">Tillfälle 3 | Till aktivitet... | Från aktivitet...</option>
            </select>
            <select className="standard-input option-list input-left" id="upphamtning-avlamning">
              <option id="option-placeholder" value="" disabled selected>Upphämtning/avlämning</option>
              <option value="op1">Tillfälle 1 | Till aktivitet... | Från aktivitet...</option>
              <option value="op2">Tillfälle 2 | Till aktivitet... | Från aktivitet...</option>
              <option value="op3">Tillfälle 3 | Till aktivitet... | Från aktivitet...</option>
            </select> */}
          {/* </div> */}
          
          {/* <div id="upphamtningslista">
            <h5>Upphämtningslista:</h5>
          </div> */}
          <br></br>
          
          <SaveButton/>
          
          {/* <Link to="/viewschedule" className="button-v3" onClick={saveSchedule}>Gå vidare</Link>

          <button onClick={saveSchedule} className="button-v3">
            Gå vidare
          </button> */}

        </form>
      </div>
    </div>
  )
}