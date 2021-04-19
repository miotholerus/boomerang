
import React, {useState} from 'react'
import Header from './Header'
import ViewSchedule from './ViewSchedule'
import {BrowserRouter as Router, Route, Switch, Link, useHistory} from "react-router-dom";
import FootballBanner from './FootballBanner'



export default function CreateSchedule({schedule, setSchedule, KEY}) {
  
  let history = useHistory();

  function SaveButton() {

    function SaveSchedule(e) {
      // spara här
      //alert("Kör saveSchedule");
      // const starttid = starttidRef.current.value;
  
      // const [starttid, setStarttid] = useState("");

      const starttid = document.getElementById("starttid");
      const sluttid = document.getElementById("sluttid");
      const adress = document.getElementById("adress-for-destination");
      const veckodag = document.getElementById("veckodag");
      const upprepa = document.getElementById("upprepa");
      const startdatum = document.getElementById("startdatum");
      const slutdatum = document.getElementById("slutdatum");

  
      // if (starttid === '') return;
      // alert(starttid.value+" "+sluttid.value+" "+adress.value+" "+veckodag.value+" "+upprepa.value+" "+startdatum.value+" "+slutdatum.value);
  
      const newSchedule = [starttid, sluttid, adress, veckodag, upprepa, startdatum, slutdatum];
      
      setSchedule(newSchedule);

      //alert(schedule[2].value);

      // localStorage.setItem(KEY, JSON.stringify(newSchedule))
  
      history.push("/viewschedule")
      
    }

    return (
      <button type="button" className="button-v2" onClick={SaveSchedule}>Gå vidare</button>
    )
  }

  return (
    <div>
      <Header/>
      <div className="page-content">
        <FootballBanner/>

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
          
          {/* <Link to="/viewschedule" className="button-v2" onClick={saveSchedule}>Gå vidare</Link>

          <button onClick={saveSchedule} className="button-v2">
            Gå vidare
          </button> */}

        </form>
      </div>
    </div>
  )
}
