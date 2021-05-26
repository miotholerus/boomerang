import React, { useState, useEffect } from 'react'
import { useHistory } from "react-router-dom";
import FootballBanner from './FootballBanner'
import RideObject from '../RideObject'
import ChooseDrivers from './ChooseDrivers';

export default function CreateSchedule({ schedule, setSchedule, members, setMembers, currentGroup }) {

  useEffect(() => {
    // setMembers([]);
    var memberList = [];

    memberList.push(currentGroup.admin);

    currentGroup.members.map(member => memberList.push(member));

    // console.log("memberList: ", memberList);

    setMembers(memberList);
  }, []);

  let history = useHistory();

  // Uppdateras varje gång input ändras
  const [startTime, setStartTime] = useState("");
  const [endTime, setEndTime] = useState("");
  const [destination, setDestination] = useState("");
  const [weekday, setWeekday] = useState("");
  const [startDate, setStartDate] = useState("");
  const [endDate, setEndDate] = useState("");

  // Uppdateras varje gång veckodag, startdatum eller slutdatum ändras via useEffect!
  const [rides, setRides] = useState([]);

  useEffect(() => {
    
    if (weekday != "") generateDates();

  }, [weekday, startDate, endDate]);

  function generateDates() {
    console.log("Kör generateDates")

    const dayOfWeekIndex = weekday;
    const startDateDate = new Date(startDate);
    const endDateDate = new Date(endDate);

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


    // Skapar RideObjects av alla datum och lägger i en tredje lista.
    // (TODO) Vi kanske bör byta klass/objekt till json för lättare lagring
    var rideObjects = new Array();
    for (let i = 0; i < rideDates.length; i++) {
      // Två datumobjekt av samma datum läggs till i varje ride - får senare olika klockslag
      const dateTimeStart = rideDates[i];
      const dateTimeEnd = new Date(dateTimeStart);

      // HÄR kan vi generera föreslagen körordning - Hämta från medlemslistan
      
      const newRideObject = new RideObject(dateTimeStart, dateTimeEnd, members[0], members[0], members);

      rideObjects.push(newRideObject);

    }

    // rides (statevariabel) blir listan av RideObjects
    setRides(rideObjects);
    // console.log("rides: ", rides);

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

  function saveSchedule(e) {

    const startHours = startTime.substring(0, 2);
    // console.log("startHours:", startHours)
    const startMinutes = startTime.substring(3);
    const endHours = endTime.substring(0, 2);
    const endMinutes = endTime.substring(3);
    rides.map(ride => {
      ride.dateTimeStart.setHours(startHours, startMinutes);
      // console.log(ride.dateTimeStart.toLocaleTimeString());
      ride.dateTimeEnd.setHours(endHours, endMinutes);
      // console.log(ride.dateTimeStart.toLocaleTimeString());
    })

    rides.forEach(ride => console.log(ride))

    const newSchedule = {
      "id": 0,
      "startTime": startTime,
      "endTime": endTime,
      "destination": destination,
      "weekday": weekday,
      "startDate": startDate,
      "endDate": endDate,
      "rides": rides
    }

    setSchedule(newSchedule);
    // console.log("schedule after Save: ", schedule);

    history.push("/viewschedule");
  }



  return (
    <div>
      <div className="page-content">
        <FootballBanner currentGroup={currentGroup} members={members}/>

        <div className="loose-text-field">
          <h4>Skapa gruppens körschema</h4>
          <br className="changesizeofbr"></br>
        </div>

        <form className="form">

          <div className="box-a aktivitet bottom-margin">
            <h6>&nbsp;Aktivitet</h6>

            {/* <div >&nbsp;Starttid &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; Sluttid</div> */}
            <div className="input-side-by-side">
              <div className="input-column">
                <label for="starttid" className="input-left">Starttid</label>
                <input type="time" value={startTime} onChange={e => setStartTime(e.target.value)}
                  className="small-input input-left"
                  id="starttid"></input>
              </div>

              <div className="input-column">
                <label for="sluttid" className="input-right">Sluttid</label>
                <input type="time" value={endTime} onChange={e => setEndTime(e.target.value)}
                  className="small-input input-right"
                  id="sluttid"></input>
              </div>
            </div>

            <div>
              <label for="adress-for-destination">Adress för destination</label>
              <input value={destination} onChange={e => setDestination(e.target.value)} className="standard-input" /*placeholder="Fyll i adress för destination"*/ id="adress-for-destination"></input>
            </div>

            {/* <div className="input-side-by-side"> */}
            <div>
              <label for="veckodag">Veckodag</label>
              <select value={weekday} onChange={e => setWeekday(e.target.value)}
              /*defaultValue="Veckodag"*/ className="standard-input option-list input-left"
                id="veckodag">

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
          <div className="box-a schema bottom-margin">
            <h6>&nbsp;Schema</h6>
            {/* <div>&nbsp;Startdatum &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Slutdatum</div> */}
            <div className="input-side-by-side">
              <div>
                <label for="startdatum" id="startdate" className="input-left">Startdatum</label>
                <input value={startDate} onChange={e => setStartDate(e.target.value)} type="date" className="small-input input-left" id="startdatum"></input>
              </div>
              <div>
                <label for="slutdatum" id="enddate" className="input-right">Slutdatum</label>
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
          <div className="box-a skjutsning bottom-margin">
            <h6>&nbsp;Skjutsning</h6>
            {/* <select className="standard-input option-list input-left" id="ordning-for-chaufforer">
            <option id="option-placeholder" value="" disabled selected>Välj ordning för chaufförer</option>
          </select> */}
            {/* Avancerat, egen komponent? */}

            {/* {<select className="standard-input option-list input-left" id="ordning-for-chaufforer">
              <option id="option-placeholder" value="" disabled selected>Välj ordning för chaufförer</option>
            </select>} */}
            {rides.length ? <ChooseDrivers rides={rides} setRides={setRides} members={members} /> : null /*<ShowChooseDrivers />*/}
          </div>

          {/* <div id="upphamtningslista">
            <h5>Upphämtningslista:</h5>
          </div> */}

          <br className="changesizeofbr"></br>
          <div className="button-holder-center loose-text-field">
            <button type="button" className="button-v2" onClick={saveSchedule}>SPARA KÖRSCHEMA</button>
          </div>
          

        </form>
      </div>
    </div>
  )
}
