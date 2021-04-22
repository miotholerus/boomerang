import React, { useState, useEffect } from 'react'
import Header from './Header'
import { useHistory } from "react-router-dom";
import FootballBanner from './FootballBanner'
import RideObject from '../RideObject'
import ChooseDrivers from './ChooseDrivers';


export default function CreateSchedule({ schedule, setSchedule, members }) {
  let history = useHistory();
  
  // Uppdateras varje gång input ändras
  const [startTime, setStartTime] = useState("");
  const [endTime, setEndTime] = useState("");
  const [address, setAddress] = useState("");
  const [weekday, setWeekday] = useState("");
  const [startDate, setStartDate] = useState("");
  const [endDate, setEndDate] = useState("");
  
  // Uppdateras varje gång veckodag, startdatum eller slutdatum ändras via useEffect!
  const [rides, setRides] = useState([]);

  useEffect(() => {
    generateDates();
  }, [weekday, startDate, endDate]);

  function ShowChooseDrivers() {
    if (rides.length > 0) {
      return (<ChooseDrivers rides={rides} members={members}/>)
    } else {
      return null
    }
  }

  function generateDates() {
    console.log("Kör generateDates")
    
    const dayOfWeekIndex = weekday; console.log("dayOfWeekIndex: "+dayOfWeekIndex);
    const startDateDate = new Date(startDate); console.log("startDateDate: "+startDateDate);
    const endDateDate = new Date(endDate); console.log("endDateDate: "+endDateDate);

    // Skapar en lista av alla datum mellan startDate och endDate
    const dateList = getDates(startDateDate, endDateDate);

    // Plockar ut alla datum av angiven veckodag och lägger i en ny lista
    var rideDates = new Array();
    for (let i = 0; i < dateList.length; i++) {
      const date = dateList[i];

      if (dayOfWeekIndex == date.getDay()) {
        rideDates.push(date)
      }
    }
    console.log("rideDates:")
    console.log(rideDates);

    // Skapar RideObjects av alla datum och lägger i en tredje lista
    var rideObjects = new Array();
    for (let i = 0; i < rideDates.length; i++) {
      const date = rideDates[i];
      rideObjects.push(new RideObject(date, "Siri", "Peter"))
    }

    // rides (statevariabel) blir listan av RideObjects
    setRides(rideObjects);
    console.log("rides: "+rides);
    
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
      const newSchedule = [startTime, endTime, address, weekday, startDate, endDate, rides];

      setSchedule(newSchedule);
      console.log("schedule after Save: "+schedule)

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
        
          <h3>Aktivitet</h3>
          <div className="aktivitet">
            <p>Skapa körschema</p>

            <input className="standard-input" placeholder="Fyll i adress för destination" id="adress-for-destination"></input>
            
            <div className="input-side-by-side">
              <input type="time" value={startTime} onChange={e => setStartTime(e.target.value)} className="small-input input-left" id="starttid"></input>

              <input type="time" value={endTime} onChange={e => setEndTime(e.target.value)} className="small-input input-right" id="sluttid"></input>
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

              <input value={endDate} onChange={e=>setEndDate(e.target.value)} type="date" className="small-input input-right" id="slutdatum"></input>
            </div>

            <div className="driver">
              {/* <select className="small-input option-list input-left" id="chaufför">
                <option id="option-placeholder" value="" disabled selected>Välj ordning för chaufförer</option>
                <option id="option-placeholder" value="Siri">Siri</option>
                <option id="option-placeholder" value="Peter">Peter</option>
                <option id="option-placeholder" value="Hanna">Hanna</option>
              </select> */}
            </div>
          </div>

          <div className="skjutsning">
            <p>Skjutsning</p>

            {/* Avancerat, egen komponent? */}
            {<ShowChooseDrivers/>}
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
          </div>

          {/* <div id="upphamtningslista">
            <h5>Upphämtningslista:</h5>
          </div> */}
          
          <br></br>
          <SaveButton />
        </form>
      </div>
    </div>
  )
}
