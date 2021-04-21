
import React, { useState } from 'react'
import Header from './Header'
import { BrowserRouter as Router, Route, Switch, Link, useHistory } from "react-router-dom";
import FootballBanner from './FootballBanner'
import RideObject from '../RideObject'


export default function CreateSchedule({ schedule, setSchedule }) {

  const [startTime, setStartTime] = useState("");
  const [endTime, setEndTime] = useState("");
  const [address, setAddress] = useState("");
  const [weekday, setWeekday] = useState("");
  const [startDate, setStartDate] = useState("");
  const [endDate, setEndDate] = useState("");
  
  const [rides, setRides] = useState([]);

  let history = useHistory();

  function handleEndDateChange(e) {
    e.preventDefault();
    setEndDate(e.target.value);
    generateDates();
  }

  function generateDates() {
    console.log("Kör generateDates")
    const dayOfWeekIndex = weekday;
    const startDateDate = new Date(startDate);
    const endDateDate = new Date(endDate);

    console.log(dayOfWeekIndex+", "+startDateDate+", "+endDateDate);

    const dateList = getDates(startDateDate, endDateDate);

    var rideDates = new Array();
    for (let i = 0; i < dateList.length; i++) {
      if (dayOfWeekIndex == dateList[i].getDay()) {
        rideDates.push(dateList[i])
      }
    }
    console.log("rideDates:")
    console.log(rideDates);

    // Skapar RideObjects av alla datum
    var rideObjects = new Array();
    for (let i = 0; i < rideDates.length; i++) {
      const date = rideDates[i];
      rideObjects.push(new RideObject(date, "Siri", "Peter"))
      console.log("RideObject "+i+":")
      console.log(rideObjects[i]);
    }

    setRides(rideObjects);
    console.log(rides);
    
    function getDates(startDate, endDate) {
      var dateArray = new Array();
      var dateToAdd = startDate;

      while (dateToAdd <= endDate) {
        dateArray.push(new Date(dateToAdd))
        dateToAdd.setDate(dateToAdd.getDate() + 1);
      }
      return dateArray;
    }

  }

  function SaveButton() {

    function SaveSchedule(e) {
      // spara här
      // alert("Kör saveSchedule");
      // const starttid = starttidRef.current.value;

      // const [starttid, setStarttid] = useState("");

      //const starttid = document.getElementById("starttid"); // det är mer "korrekt" att använda refs och React-funktionen useRef, men kbry
      //const sluttid = document.getElementById("sluttid");
      //const adress = document.getElementById("adress-for-destination");
      //const veckodag = document.getElementById("veckodag");
      //const upprepa = document.getElementById("upprepa");
      //const startdatum = document.getElementById("startdatum");
      //const slutdatum = document.getElementById("slutdatum");

      // if (starttid === '') return;
      // alert(starttid.value+" "+sluttid.value+" "+adress.value+" "+veckodag.value+" "+upprepa.value+" "+startdatum.value+" "+slutdatum.value);

      const newSchedule = [startTime, endTime, address, weekday, startDate, endDate, rides];
      console.log("newSchedule:");
      console.log(newSchedule);

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
      <Header />
      <div className="page-content">
        <FootballBanner />

        <br></br>
        <form className="container form">

          <h3>Skapa gruppens körschema</h3>
          <div className="aktivitet">
            <p>Aktivitet</p>

            <div className="input-side-by-side">
              <input type="time" value={startTime} onChange={e => setStartTime(e.target.value)} className="small-input input-left" id="starttid"></input>

              <input type="time" value={endTime} onChange={e => setEndTime(e.target.value)} className="small-input input-right" id="sluttid"></input>
              {/* <button onClick={saveSchedule}>Spara</button> */}
            </div>

            <input value={address} onChange={e=>setAddress(e.target.value)} className="standard-input" placeholder="Fyll i adress för destination" id="adress-for-destination"></input>


            <div className="input-side-by-side">
              <select value={weekday} onChange={e=>setWeekday(e.target.value)} /*defaultValue="Veckodag"*/ className="standard-input option-list input-left" id="veckodag">
                <option id="option-placeholder" value="" disabled selected>Veckodag</option>
                <option value="1">Måndag</option>
                <option value="2">Tisdag</option>
                <option value="3">Onsdag</option>
                <option value="4">Torsdag</option>
                <option value="5">Fredag</option>
                <option value="6">Lördag</option>
                <option value="0">Söndag</option>
              </select>

              {/* <select className="small-input option-list input-right" id="upprepa">
                <option id="option-placeholder" value="" disabled selected>Upprepa</option>
                <option value="upprepa-inte">Upprepa inte</option>
                <option value="varje-dag">Varje dag</option>
                <option value="varje-vecka">Varje vecka</option>
              </select> */}
            </div>
          </div>

          <div className="schema">
            <p>Schema</p>

            <div className="input-side-by-side">
              <input value={startDate} onChange={e=>setStartDate(e.target.value)} type="date" className="small-input input-left" id="startdatum"></input>

              <input value={endDate} onChange={e=>handleEndDateChange(e)} type="date" className="small-input input-right" id="slutdatum"></input>
            </div>
          </div>

          <div className="skjutsning">
            <p>Skjutsning</p>

            {/* Avancerat, egen komponent? */}
            <select className="standard-input option-list input-left" id="ordning-for-chaufforer">
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
            </select>
          </div>

          {/* <div id="upphamtningslista">
            <h5>Upphämtningslista:</h5>
          </div> */}
          
          <br></br>
          <SaveButton />

          {/* <Link to="/viewschedule" className="button-v2" onClick={saveSchedule}>Gå vidare</Link>

          <button onClick={saveSchedule} className="button-v2">
            Gå vidare
          </button> */}

        </form>
      </div>
    </div>
  )
}
