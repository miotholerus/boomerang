import React, { useState, useEffect } from 'react'
import ScheduleBox from './ScheduleBox'


export default function DetailedSchedule({ schedule, altSchedule, members }) {
  const destinationFromSchedule = altSchedule.destination // tidigare schedule[2]
  const addressFromMember = members[0].address; // ska senare hämtas direkt från schedule-rideobjecten

  const [origin, setOrigin] = useState(addressFromMember); // samma sak som addressFromMember
  const [destination, setDestination] = useState(destinationFromSchedule); // samma sak som destinationFromSchedule
  const exampleData = {
    "destination_addresses": [
      "Sockenvägen 290, 122 63 Enskede, Sweden"
    ],
    "origin_addresses": [
      "Uddeholmsvägen 239, 122 41 Enskede, Sweden"
    ],
    "rows": [
      {
        "elements": [
          {
            "distance": {
              "text": "1.7 km",
              "value": 1701
            },
            "duration": {
              "text": "4 min",
              "value": 246
            },
            "status": "OK"
          }
        ]
      }
    ],
    "status": "OK"
  } // exempeldata för att det inte ska krascha när vi testar
  const [data, setData] = useState(exampleData); // den riktiga datan efter att man kört API:n (kommer behöva köras för varje delresa)
  const [seconds, setSeconds] = useState(0); // sekunderna från datan, ska dras av från klockslagen

  const url = `https://api.distancematrix.ai/maps/api/distancematrix/json?origins=${origin}&destinations=${destination}&key=bp6pjpgmaCcdxjtccQlnDpjTPEUqk`;

  var addMinutes = function (dateTime, minutes) {
    return new Date(dateTime.getTime() + minutes * 60000);
  }
  var addSeconds = function (dateTime, seconds) {
    return new Date(dateTime.getTime() + seconds * 1000);
  }
  // Testar med första körtillfället
  var timeAtDestination;
  var timeToStart;

  useState(() => {
    console.log("Kör useState [] en gång");

    //timeAtDestination = addMinutes(altSchedule.rides[0].date, -5); // date-objekt
    //console.log("timeAtDestination: ", timeAtDestination.toString());

    // fetch(url)
    //   .then(responseFromAPI =>
    //     responseFromAPI.json()
    //       .then(apiData => {
    //         console.log(apiData)
    //         setData(apiData)
    //         console.log(origin);
    //         console.log(destination);
    //         console.log(data.rows[0].elements[0].duration.value)
    //         setSeconds(data.rows[0].elements[0].duration.value)
    //       }).then(then => {
    //         timeToStart = addSeconds(timeAtDestination, -seconds);
    //         console.log("timeToStart efter första automatiska API-anropet: ", timeToStart);
    //       })
    //   );

  }, [])

  // var date = new Date(2021, 2, 16, 17, 0, 0, 0);
  // var dtMinusThirty = minusMinutes(date, 30);
  // console.log(dtMinusThirty.toString());

  useEffect(() => {
    console.log(origin);
    console.log(destination);
    console.log(data.rows[0].elements[0].duration.value)
    setSeconds(data.rows[0].elements[0].duration.value) // seconds laddas från json-data

  }, [data])

  const submitForm = (event) => {
    event.preventDefault();

    console.log("TEST API");

    fetch(url)
      .then(responseFromAPI =>
        responseFromAPI.json()
          .then(apiData => {
            console.log(apiData)
            setData(apiData)
          })
      );
  }

  return (
    <div>

      <form onSubmit={(event) => submitForm(event)}>
        <div>
          <input type="submit" id="submitbutton" value="Test API" />
        </div>
      </form>

      <ScheduleBox seconds={seconds} members={members} />
    </div>
  )
}
