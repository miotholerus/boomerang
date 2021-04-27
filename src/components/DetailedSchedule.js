import React, {useState, useEffect} from 'react'
import ScheduleBox from './ScheduleBox'

export default function DetailedSchedule({schedule}) {
  const [origin, setOrigin] = useState("Lerbäcksgränd 18"); // "59.26078347858798,18.02139952888256" "Lerbäcksgränd 18, 124 66 Bandhagen"
  const [destination, setDestination] = useState("Sergelgatan 1"); // "59.28772349484027,18.058070840530874" "Sockenvägen 290, 122 63 Enskede"
  const [data, setData] = useState({
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
  });
  const [seconds, setSeconds] = useState(0);

  const url = `https://api.distancematrix.ai/maps/api/distancematrix/json?origins=${origin}&destinations=${destination}&key=bp6pjpgmaCcdxjtccQlnDpjTPEUqk`;

  useEffect(() => {
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

      <ScheduleBox/>
    </div>
  )
}
