import React, { useState, useEffect } from 'react'
import ScheduleBox from './ScheduleBox'


export default function DetailedSchedule({ schedule, members }) {
  // const destinationFromSchedule = altSchedule.destination // tidigare schedule[2]
  // const addressFromMember = members[0].address; // ska senare hämtas direkt från schedule-rideobjecten

  const url = `https://www.mapquestapi.com/directions/v2/routematrix?key=Kr8qYQFLlQ0XjbF6hGWyyTprB5x4fEPU`;

  // useEffect(() => {
    
  // }, [])

  var locations; // Lista med strängar av varje adress
  const [dataAllToAll, setDataAllToAll] = useState({});
  
  
  
  useEffect(async () => {

    locations = [];
    members.map(m => {
      locations.push(`${m.location.address}, ${m.location.postalCode} ${m.location.city}, ${m.location.country}`)
    })
    locations.push(`${schedule.destination}, 12040 Stockholm, SWEDEN`);

    // const locA = `${members[0].location.address}, ${members[0].location.postalCode} ${members[0].location.city}, ${members[0].location.country}`; // "Uddeholmsvägen 239, 12241 Stockholm, SWEDEN"; // "59.28093793567633, 18.046790156144745"; //
    // const locB = `${members[1].location.address}, ${members[1].location.postalCode} ${members[1].location.city}, ${members[1].location.country}`; // "Årdalavägen 133, 12432 Stockholm, SWEDEN"; // "59.272215063170705, 18.037266160912903"; //
    // const locC = `${members[2].location.address}, ${members[2].location.postalCode} ${members[2].location.city}, ${members[2].location.country}`; // "Lerbäcksgränd 18, 12466 Stockholm, SWEDEN"; // "59.26093702587597, 18.021367342650105"; //
    // const locD = `${schedule.destination}, 12040 Stockholm, SWEDEN`; // "Sockenvägen 290, 12040 Stockholm, SWEDEN"; // "59.287761851370426, 18.05808156963875"; //


    // Fortsätt med detta när namn och adresser är på sin plats!
    // const requestBodyAllToAll = {
    //   "locations": locations,
    //   "options": {
    //     "allToAll": true
    //   }
    // }

    // const responseAllToAll = await fetch(url, {
    //   method: "POST",
    //   headers: {
    //     "content-type": "application/json"
    //   },
    //   body: JSON.stringify(requestBodyAllToAll)
    // })
    // const data = await responseAllToAll.json()

    // console.log(data);
    
    // setDataAllToAll(data);

    

    //    \To A|0   B|1   C|2   D|3  
    // From\
    //  A|0   0     345   520   173
    //
    //  B|1   329   0     383   279
    //
    //  C|2   501   371   0     451
    //
    //  D|3   174   315   491   0


    //}
    //apiRequest();
  }, []) // Körs en gång när sidan laddas (?)
  

  return (
    <div>
      {/* {console.log("schedule.rides", schedule.rides)} */}
      {schedule.rides.map(ride => {
        
        return <ScheduleBox key={ride} dataAllToAll={dataAllToAll} ride={ride} schedule={schedule} members={members} />
      })}

      {/* <form onSubmit={(event) => submitForm(event)}>
        <div className="loose-text-field">
          <input type="submit" id="submitbutton" value="Test API" />
        </div>
      </form> */}

      {/* <ScheduleBox schedule={schedule} members={members} /> */}
    </div>
  )
}
