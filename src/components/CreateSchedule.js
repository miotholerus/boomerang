﻿import React, { useState, useEffect } from 'react'
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

  function generateDates() {
    console.log("1. Kör generateDates")

    const dayOfWeekIndex = weekday; // console.log("dayOfWeekIndex: " + dayOfWeekIndex);
    const startDateDate = new Date(startDate); // console.log("startDateDate: " + startDateDate);
    const endDateDate = new Date(endDate); // console.log("endDateDate: " + endDateDate);

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
    // console.log("2. rideDates:")
    // console.log(rideDates);

    // Skapar RideObjects av alla datum och lägger i en tredje lista
    var rideObjects = new Array();
    for (let i = 0; i < rideDates.length; i++) {
      const date = rideDates[i];
      const dateCopy = new Date(date);

      const newRideObject = new RideObject(date, dateCopy, {"id": 0, "name": "Alba", "child": "Anna", "address": "Uddeholmsvägen 239"}, {"id": 0, "name": "Alba", "child": "Anna", "address": "Uddeholmsvägen 239"});
      console.log("NEW RIDE OBJECT:", newRideObject); // Här är driverTo och driverFrom undefined :))))

      rideObjects.push(newRideObject);
      
    }

    // rides (statevariabel) blir listan av RideObjects
    setRides(rideObjects);
    console.log("rides: ", rides);

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

    function saveSchedule(e) {

      const startHours = startTime.substring(0, 2);
      console.log("startHours:", startHours)
      const startMinutes = startTime.substring(3);
      const endHours = endTime.substring(0, 2);
      const endMinutes = endTime.substring(3);
      rides.map(ride => {
        ride.dateTimeStart.setHours(startHours, startMinutes);
        console.log(ride.dateTimeStart.toLocaleTimeString());
        ride.dateTimeEnd.setHours(endHours, endMinutes);
        console.log(ride.dateTimeStart.toLocaleTimeString());
      })

      rides.forEach(ride => console.log(ride))

      const newSchedule = {
        "id": 0,
        "startTime": startTime,
        "endTime": endTime,
        "destination": address,
        "weekday": weekday,
        "startDate": startDate,
        "endDate": endDate,
        "rides": rides
      }

      setSchedule(newSchedule);
      console.log("schedule after Save: ", schedule);

      history.push("/viewschedule");
    }

    return (
      <button type="button" className="button-v2" onClick={saveSchedule}>SPARA KÖRSCHEMA</button>
    )
  }

  return (
    <div>
      <Header />
      <div className="page-content">
        <FootballBanner />

        <div className="loose-text-field">
          <h2 className="skapagruppenskörschema">Skapa gruppens körschema</h2>
          <br className="changesizeofbr"></br>
        </div>

        <form className="form">

          <div className="box-a aktivitet">
            <h3>&nbsp;Aktivitet</h3>
            
            {/* <div >&nbsp;Starttid &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; Sluttid</div> */}
            <div className="input-side-by-side">
              <div className="input-column">
                <label for="starttid" className="input-left">&nbsp;Starttid</label>
                <input type="time" value={startTime} onChange={e => setStartTime(e.target.value)} className="small-input input-left" id="starttid"></input>
              </div>

              <div className="input-column">
                <label for="sluttid" className="input-right">&nbsp;Sluttid</label>
                <input type="time" value={endTime} onChange={e => setEndTime(e.target.value)} className="small-input input-right" id="sluttid"></input>
              </div>
            </div>

            <div>
              <label for="adress-for-destination">&nbsp;Adress för destination</label>
              <input value={address} onChange={e => setAddress(e.target.value)} className="standard-input" /*placeholder="Fyll i adress för destination"*/ id="adress-for-destination"></input>
            </div>

            {/* <div className="input-side-by-side"> */}
            <div>
              <label for="veckodag">&nbsp;Veckodag</label>
              <select value={weekday} onChange={e => setWeekday(e.target.value)} /*defaultValue="Veckodag"*/ className="standard-input option-list input-left" id="veckodag">
                <option id="option-placeholder" value="" disabled selected>{/*Ej vald*/}</option>
                <option value="1">Måndag</option>
                <option value="2">Tisdag</option>
                <option value="3">Onsdag</option>
                <option value="4">Torsdag</option>
                <option value="5">Fredag</option>
                <option value="6">Lördag</option>
                <option value="0">Söndag</option>
              </select>
            </div>

            {/* <select className="small-input option-list input-right" id="upprepa">
                <option id="option-placeholder" value="" disabled selected>Upprepa</option>
                <option value="upprepa-inte">Upprepa inte</option>
                <option value="varje-dag">Varje dag</option>
                <option value="varje-vecka">Varje vecka</option>
              </select> */}
            {/* </div> */}
          </div>
        </form>

        <br className="changesizeofbr"></br>

        <form className="form">
          <div className="box-a schema">
            <h3>&nbsp;Schema</h3>
            {/* <div>&nbsp;Startdatum &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Slutdatum</div> */}
            <div className="input-side-by-side">
              <div>
                <label for="startdatum" className="input-left">&nbsp;Startdatum</label>
                <input value={startDate} onChange={e => setStartDate(e.target.value)} type="date" className="small-input input-left" id="startdatum"></input>
              </div>
              <div>
                <label for="slutdatum" className="input-right">&nbsp;Slutdatum</label>
                <input value={endDate} onChange={e => setEndDate(e.target.value)} type="date" className="small-input input-right" id="slutdatum"></input>
              </div>
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
        </form>

        <br className="changesizeofbr"></br>

        <form className="form">
          <div className="box-a skjutsning">
            <h3>&nbsp;Skjutsning</h3>
              {/* <select className="standard-input option-list input-left" id="ordning-for-chaufforer">
            <option id="option-placeholder" value="" disabled selected>Välj ordning för chaufförer</option>
          </select> */}
            {/* Avancerat, egen komponent? */}
            
            {/* {<select className="standard-input option-list input-left" id="ordning-for-chaufforer">
              <option id="option-placeholder" value="" disabled selected>Välj ordning för chaufförer</option>
            </select>} */}
            {rides.length ? <ChooseDrivers rides={rides} setRides={setRides} members={members}/> : null /*<ShowChooseDrivers />*/}
          </div>

          {/* <div id="upphamtningslista">
            <h5>Upphämtningslista:</h5>
          </div> */}

          <br className="changesizeofbr"></br>
          <SaveButton />
          
        </form>
      </div>
    </div>
  )
}
