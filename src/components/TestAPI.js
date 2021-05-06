import React, { useState, usRef, useEffect } from 'react'


export default function TestAPI() {
  
  const [timeAtoB, setTimeAtoB] = useState(0);
  const [timeBtoC, setTimeBtoC] = useState(0);
  const [timeCtoD, setTimeCtoD] = useState(0);

  var addSeconds = function (dateTime, seconds) {
    return new Date(dateTime.getTime() + seconds * 1000);
  }

  var startTime = new Date(new Date("2021-04-29").setHours(17, 0));

  var margin = 5*60;
  
  var timeAtA = addSeconds(startTime, -(timeAtoB + margin + timeBtoC + margin + timeCtoD + margin)).toLocaleTimeString('sv-se')//.substring(0, 5);
  var timeAtB = addSeconds(startTime, -(timeBtoC + margin + timeCtoD + margin)).toLocaleTimeString('sv-se');
  var timeAtC = addSeconds(startTime, -(timeCtoD + margin)).toLocaleTimeString('sv-se');
  var timeAtD = addSeconds(startTime, -margin).toLocaleTimeString('sv-se');//.substring(0, 5);

  const url = `https://www.mapquestapi.com/directions/v2/routematrix?key=Kr8qYQFLlQ0XjbF6hGWyyTprB5x4fEPU`;
  

  const submitForm = async (event) => {
    event.preventDefault();

    const locA = "Uddeholmsvägen 239, 12241 Stockholm, SWEDEN"; // "59.28093793567633, 18.046790156144745"; //
    const locB = "Årdalavägen 133, 12432 Stockholm, SWEDEN"; // "59.272215063170705, 18.037266160912903"; //
    const locC = "Lerbäcksgränd 18, 12466 Stockholm, SWEDEN"; // "59.26093702587597, 18.021367342650105"; //
    const locD = "Sockenvägen 290, 12040 Stockholm, SWEDEN"; // "59.287761851370426, 18.05808156963875"; //


    const requestBodyAtoB = {
      "locations": [
        locA,
        locB,
        locC
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

    setTimeAtoB(dataAtoB.time[1]);



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
    
    setTimeBtoC(dataBtoC.time[1]);


    
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

    setTimeCtoD(dataCtoD.time[1]);

    
  }

  return (
    <form onSubmit={(event) => submitForm(event)}>
      <div>
        <input type="submit" id="submitbutton" value="Test API" />
      </div>
      <div>
        Starttid aktivitet: {startTime.toLocaleTimeString("sv-se")}<br></br>
        Marginal: {margin/60} min<br></br><br></br>

        A till B: {timeAtoB} sek ({timeAtoB/60} min)<br></br>
        B till C: {timeBtoC} sek ({timeBtoC/60} min)<br></br>
        C till D: {timeCtoD} sek ({timeCtoD/60} min)<br></br><br></br>
        
        A kl. {timeAtA}<br></br>
        B kl. {timeAtB}<br></br>
        C kl. {timeAtC}<br></br>
        D kl. {timeAtD}
      </div>
    </form>
  )
}

/*
{
    "allToAll": false,
    "distance": [
        0,
        1.834,
        3.74
    ],
    "locations": [
        {
            "dragPoint": false,
            "displayLatLng": {
                "lng": 18.04679,
                "lat": 59.280938
            },
            "adminArea4": "",
            "adminArea5": "Stockholm",
            "postalCode": "12241",
            "adminArea1": "SE",
            "adminArea3": "Stockholms län",
            "type": "s",
            "sideOfStreet": "N",
            "geocodeQualityCode": "P1AAA",
            "adminArea4Type": "County",
            "linkId": 0,
            "street": "239 Uddeholmsvägen",
            "adminArea5Type": "City",
            "geocodeQuality": "POINT",
            "adminArea1Type": "Country",
            "adminArea3Type": "State",
            "latLng": {
                "lng": 18.04679,
                "lat": 59.280938
            }
        },
        {
            "dragPoint": false,
            "displayLatLng": {
                "lng": 18.037266,
                "lat": 59.272215
            },
            "adminArea4": "",
            "adminArea5": "Stockholm",
            "postalCode": "12432",
            "adminArea1": "SE",
            "adminArea3": "Stockholms län",
            "type": "s",
            "sideOfStreet": "N",
            "geocodeQualityCode": "P1AAA",
            "adminArea4Type": "County",
            "linkId": 0,
            "street": "131 Årdalavägen",
            "adminArea5Type": "City",
            "geocodeQuality": "POINT",
            "adminArea1Type": "Country",
            "adminArea3Type": "State",
            "latLng": {
                "lng": 18.037266,
                "lat": 59.272215
            }
        },
        {
            "dragPoint": false,
            "displayLatLng": {
                "lng": 18.021367,
                "lat": 59.260937
            },
            "adminArea4": "",
            "adminArea5": "Stockholm",
            "postalCode": "12465",
            "adminArea1": "SE",
            "adminArea3": "Stockholms län",
            "type": "s",
            "sideOfStreet": "N",
            "geocodeQualityCode": "B1AAA",
            "adminArea4Type": "County",
            "linkId": 0,
            "street": "Lerbäcksgränd",
            "adminArea5Type": "City",
            "geocodeQuality": "STREET",
            "adminArea1Type": "Country",
            "adminArea3Type": "State",
            "latLng": {
                "lng": 18.021367,
                "lat": 59.260937
            }
        }
    ],
    "time": [
        0,
        345,
        520
    ],
    "manyToOne": false,
    "info": {
        "statuscode": 0,
        "copyright": {
            "imageAltText": "© 2021 MapQuest, Inc.",
            "imageUrl": "http://api.mqcdn.com/res/mqlogo.gif",
            "text": "© 2021 MapQuest, Inc."
        },
        "messages": []
    }
}
*/
