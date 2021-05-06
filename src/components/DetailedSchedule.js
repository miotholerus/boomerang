import React, { useState, useEffect } from 'react'
import ScheduleBox from './ScheduleBox'


export default function DetailedSchedule({ schedule, members }) {
  // const destinationFromSchedule = altSchedule.destination // tidigare schedule[2]
  // const addressFromMember = members[0].address; // ska senare hämtas direkt från schedule-rideobjecten

  const [timeAB, setTimeAB] = useState(0);
  const [timeBC, setTimeBC] = useState(0);
  const [timeCD, setTimeCD] = useState(0);

  var addMinutes = function (dateTime, minutes) {
    return new Date(dateTime.getTime() + minutes * 60000);
  }
  var addSeconds = function (dateTime, seconds) {
    return new Date(dateTime.getTime() + seconds * 1000);
  }

  var startTime = new Date(schedule.rides[0].dateTimeStart);
  console.log("startTime", startTime);

  var margin = 5*60;
  
  var timeAtA = addSeconds(startTime, -(timeAB + margin + timeBC + margin + timeCD + margin)).toLocaleTimeString('sv-se').substring(0, 5);
  var timeAtB = addSeconds(startTime, -(timeBC + margin + timeCD + margin)).toLocaleTimeString('sv-se').substring(0, 5);
  var timeAtC = addSeconds(startTime, -(timeCD + margin)).toLocaleTimeString('sv-se').substring(0, 5);
  var timeAtD = addSeconds(startTime, -margin).toLocaleTimeString('sv-se').substring(0, 5);

  const url = `https://www.mapquestapi.com/directions/v2/routematrix?key=Kr8qYQFLlQ0XjbF6hGWyyTprB5x4fEPU`;
  
  // useState(() => {
  //   console.log("Kör useState [] en gång");

  //   timeAtDestination = addMinutes(altSchedule.rides[0].date, -5); // date-objekt
  //   console.log("timeAtDestination: ", timeAtDestination.toString());

  //   fetch(url)
  //     .then(responseFromAPI =>
  //       responseFromAPI.json()
  //         .then(apiData => {
  //           console.log(apiData)
  //           setData(apiData)
  //           console.log(origin);
  //           console.log(destination);
  //           console.log(data.rows[0].elements[0].duration.value)
  //           setSeconds(data.rows[0].elements[0].duration.value)
  //         }).then(then => {
  //           timeToStart = addSeconds(timeAtDestination, -seconds);
  //           console.log("timeToStart efter första automatiska API-anropet: ", timeToStart);
  //         })
  //     );

  // }, [])

  useEffect(() => {
    
    const apiRequest = async () => {
      
  
      console.log("TEST API");
  
      const locA = "59.28093793567633, 18.046790156144745"; //  "Uddeholmsvägen 239, 12241 Enskede, SWEDEN";
      const locB = "59.272215063170705, 18.037266160912903"; // "Årdalavägen 133, 12432 Bandhagen, SWEDEN";
      const locC = "59.26093702587597, 18.021367342650105"; // "Lerbäcksgränd 18, 12466 Bandhagen, SWEDEN";
      const locD = "59.287761851370426, 18.05808156963875"; // "Sockenvägen 290, 12040 Enskede, SWEDEN";
  
      const requestBodyAtoB = {
        "locations": [
          locA,
          locB
        ]
      }
      const responseAtoB = await fetch(url, {
        method: "POST",
        headers: {
          "content-type": "application/json"
        },
        body: JSON.stringify(requestBodyAtoB)
      })
      const dataAtoB = await responseAtoB.json()
  
      console.log(dataAtoB);
  
      setTimeAB(dataAtoB.time[1]);
  
  
  
      const requestBodyBtoC = {
        "locations": [
          locB,
          locC
        ]
      }
      const responseBtoC = await fetch(url, {
        method: "POST",
        headers: {
          "content-type": "application/json"
        },
        body: JSON.stringify(requestBodyBtoC)
      })
      const dataBtoC = await responseBtoC.json()
  
      console.log(dataBtoC)
      
      setTimeBC(dataBtoC.time[1]);
  
  
      
      const requestBodyCtoD = {
        "locations": [
          locC,
          locD
        ]
      }
      const responseCtoD = await fetch(url, {
        method: "POST",
        headers: {
          "content-type": "application/json"
        },
        body: JSON.stringify(requestBodyCtoD)
      })
      const dataCtoD = await responseCtoD.json()
  
      console.log(dataCtoD)
  
      setTimeCD(dataCtoD.time[1]);
  
      
  
      // fetch(url)
      //   .then(responseFromAPI =>
      //     responseFromAPI.json()
      //       .then(apiData => {
      //         console.log(apiData)
      //         setData(apiData)
      //       })
      //   );
    }
    apiRequest();
  }, [])
  

  return (
    <div>

      {/* <form onSubmit={(event) => submitForm(event)}>
        <div className="loose-text-field">
          <input type="submit" id="submitbutton" value="Test API" />
        </div>
      </form> */}

      <ScheduleBox timeAtA={timeAtA} timeAtB={timeAtB} timeAtC={timeAtC} timeAtD={timeAtD} schedule={schedule} members={members} />
    </div>
  )
}
