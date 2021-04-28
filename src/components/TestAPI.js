import React, { useState, usRef, useEffect } from 'react'


export default function TestAPI() {
  const [origin, setOrigin] = useState(""); // "59.26078347858798,18.02139952888256" "Lerbäcksgränd 18, 124 66 Bandhagen"
  const [destination, setDestination] = useState(""); // "59.28772349484027,18.058070840530874" "Sockenvägen 290, 122 63 Enskede"
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

  // Response:
  // {
  //   "destination_addresses": [
  //     "Sockenvägen 290, 122 63 Enskede, Sweden"
  //   ],
  //   "origin_addresses": [
  //     "Uddeholmsvägen 239, 122 41 Enskede, Sweden"
  //   ],
  //   "rows": [
  //     {
  //       "elements": [
  //         {
  //           "distance": {
  //             "text": "1.7 km",
  //             "value": 1701
  //           },
  //           "duration": {
  //             "text": "4 min",
  //             "value": 246
  //           },
  //           "status": "OK"
  //         }
  //       ]
  //     }
  //   ],
  //   "status": "OK"
  // }

  // const loadResponse = async () => {
  //   fetch(url)
  //     .then(responseFromAPI =>
  //       responseFromAPI.json()
  //         .then(data =>
  //           alert(JSON.stringify(data))
  //         )
  //     );
  // }

  // useEffect(() => {
  //   loadResponse
  // }, [run])

  // const submitForm = (event) => {
  //   event.preventDefault();

  //   setRun(true)
  // }
  
  // const submitForm = async (event) => {
  //   event.preventDefault();

  //   const data = await fetch(url)
  //     .then(responseFromAPI =>
  //       responseFromAPI.json()
  //         // .then(data =>
  //         //   alert(JSON.stringify(data))
  //         // )
  //     );
  // }

  return (
    <form onSubmit={(event) => submitForm(event)}>
      <div>
        <label for="origin">Från: </label>
        <input type="text" id="origin" value={origin} onChange={(event) => setOrigin(event.target.value)} />
      </div>
      <div>
        <label for="destination">Till: </label>
        <input type="text" id="destination" value={destination} onChange={(event) => setDestination(event.target.value)} />
      </div>
      <div>
        <input type="submit" id="submitbutton" value="Send" />
      </div>
    </form>
  )
}
