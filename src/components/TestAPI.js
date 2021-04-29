import React, { useState, usRef, useEffect } from 'react'


export default function TestAPI() {
  
  const []
  
  const url = `https://www.mapquestapi.com/directions/v2/routematrix?key=Kr8qYQFLlQ0XjbF6hGWyyTprB5x4fEPU`;
  

  const submitForm = async (event) => {
    event.preventDefault();

    const locA = "59.28093793567633, 18.046790156144745"; //  Uddeholmsvägen 239, 12241 Enskede, SWEDEN
    const locB = "59.272215063170705, 18.037266160912903"; // Årdalavägen 133, 12432 Bandhagen, SWEDEN
    const locC = "59.26093702587597, 18.021367342650105"; // Lerbäcksgränd 18, 12466 Bandhagen, Sweden
    const locD = "59.287761851370426, 18.05808156963875"; // Sockenvägen 290, 12040 Enskede, SWEDEN

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

    console.log(dataAtoB)


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

  }

  return (
    <form onSubmit={(event) => submitForm(event)}>
      {/* <div>
        <label for="origin">Från: </label>
        <input type="text" id="origin" value={origin} onChange={(event) => setOrigin(event.target.value)} />
      </div>
      <div>
        <label for="destination">Till: </label>
        <input type="text" id="destination" value={destination} onChange={(event) => setDestination(event.target.value)} />
      </div> */}
      <div>
        <input type="submit" id="submitbutton" value="Test API" />
      </div>
    </form>
  )
}
