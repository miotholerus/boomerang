import React, {useState, useEffect} from 'react'
import ScheduleBox from './ScheduleBox'

export default function DetailedSchedule({schedule, members}) {
  const destinationFromSchedule = schedule[2];
  const addressFromMember = members[0].address; // schedule[]
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
  }

  const [origin, setOrigin] = useState(addressFromMember);
  const [destination, setDestination] = useState(destinationFromSchedule);
  const [data, setData] = useState(exampleData);
  const [seconds, setSeconds] = useState(0);

  const url = `https://api.distancematrix.ai/maps/api/distancematrix/json?origins=${origin}&destinations=${destination}&key=bp6pjpgmaCcdxjtccQlnDpjTPEUqk`;

  useEffect(() => {
    console.log(origin);
    console.log(destination);
    console.log(data.rows[0].elements[0].duration.value)
    setSeconds(data.rows[0].elements[0].duration.value)
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
