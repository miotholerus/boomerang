import React, {useState, useEffect} from 'react'
import ScheduleBox from './ScheduleBox'

export default function DetailedSchedule({schedule, members}) {
  const destinationFromSchedule = schedule[2];
  const addressFromMember = members[0].address; // ska senare hämtas direkt från schedule-rideobjecten
  // schedule[6] = lista av rideobjects
  // schedule[6][0] = första rideobjectet i listan
  // schedule[6][0].driverTo.address = rideobjectets förares adress
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

  const [origin, setOrigin] = useState(addressFromMember); // kommer ej behövas sen, det är samma sak som addressFromMember
  const [destination, setDestination] = useState(destinationFromSchedule); // kommer ej behövas sen, det är samma sak som destinationFromSchedule
  const [data, setData] = useState(exampleData); // den riktiga datan efter att man kört API:n (kommer behöva köras för varje delresa)
  const [seconds, setSeconds] = useState(0); // sekunderna från datan, ska dras av från klockslagen

  const url = `https://api.distancematrix.ai/maps/api/distancematrix/json?origins=${origin}&destinations=${destination}&key=bp6pjpgmaCcdxjtccQlnDpjTPEUqk`;

  useEffect(() => {
    console.log(origin);
    console.log(destination);
    console.log(data.rows[0].elements[0].duration.value)
    setSeconds(data.rows[0].elements[0].duration.value) // seconds laddas från json-data
  }, [data])

  const submitForm = (event) => {
    event.preventDefault();

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

      <ScheduleBox seconds={seconds} members={members}/>
    </div>
  )
}
