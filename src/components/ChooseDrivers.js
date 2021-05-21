import React, {useState, useEffect, useRef} from 'react'

export default function ChooseDrivers({rides, setRides, members}) {

  console.log("Kör ChooseDrivers, rides", rides);

  var rides2 = rides;
  
  // NYTT FÖRSÖK: ändra direkt i rides/schedule utan att gå via driverTo/driverFrom? Funkade!!
  useEffect(() => {
    console.log("Kör useEffect [rides2], rides: ", rides);
    console.log("rides2: ", rides2);
    setRides(rides2);
    console.log("efter setRides, rides: ", rides);
  }, [rides2])

  function RideEditRow({index, ride}) {

    // useRef hook istället
    const driverToRef = useRef();
    const driverFromRef = useRef();

    function handleChangeDriverTo(e) {
      e.preventDefault();

      const newDriverToId = driverToRef.current.value;
      console.log("newDriverToId: ", newDriverToId);
      
      rides2[index].driverTo = members[newDriverToId];
      console.log("rides2[index].driverTo: ", rides2[index].driverTo);

    }

    function handleChangeDriverFrom(e) {
      e.preventDefault();

      const newDriverFromId = driverFromRef.current.value;
      console.log("newDriverFromId: ", newDriverFromId);
      
      rides2[index].driverFrom = members[newDriverFromId];
      console.log("rides2[index].driverFrom: ", rides2[index].driverFrom);

    }

    const returnOptions = members.map(member => {
      return <option value={member.id}>{member.firstName}</option>
    })

    


    return (
      <tr>
        <td>
          {ride.dateAsStringShort()}
        </td>
        <td>
          <select className="driver" /*value={driverTo.id}*/ onChange={handleChangeDriverTo/*e=>setDriverIdTo(e.target.value)*/} ref={driverToRef} >
            {returnOptions}
          </select>
        </td>
        <td>
          <select className="driver" /*value={driverFrom.id}*/ onChange={handleChangeDriverFrom} ref={driverFromRef} /*onChange={e=>setDriverIdFrom(e.target.value)}*/>
            {returnOptions}
          </select>
        </td>
      </tr>
    )
  }

  function ForEachRide() {
    console.log("Kör ForEachRide, rides:",)

    var index = 0;
    const returnElements = rides2.map(ride => {
      //id++;
      return (
        <RideEditRow index={index++} ride={ride}/>
      )
    })

    return (
      <>{returnElements}</>
    )

    // for (let i = 0; i < rides.length; i++) {
    //   return (
    //     <RideEditRow key={i} ride={rides[i]}/>
    //     // Hmmm funkar inte pga kan bara returnera en grej...
    //     // Hur får vi in körtillfällets rides-index?
    //     // Index behövs för att kunna uppdatera rides på rätt index (tror jag)
    //   )
    // }
  }
  
  function RideEditTable() {
    console.log("Kör RideEditTable, rides:", rides);

    return (
      <table className="even choose-driver">
  
        <tr>
          <th>Tillfälle:</th>
          <th>Till:</th>
          <th>Från:</th>
        </tr>
    
        <ForEachRide/>
        {/* På något sätt fånga upp detta och uppdatera rides... */}
        {/* {rides.map(ride => {
          return (
            <RideEditRow key={ride.id} ride={ride}/>
          )
        })} */}
      </table>
    ) 
  }

  return (
    <div className="choose-drivers-box">
      <RideEditTable/>
    </div>
  )
}
