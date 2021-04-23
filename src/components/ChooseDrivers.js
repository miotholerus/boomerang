import React, {useState, useEffect} from 'react'

export default function ChooseDrivers({rides, setRides, schedule, setSchedule, members}) {
  
  function RideEditRow({index, ride}) {
    const [driverTo, setDriverTo] = useState("Siri");
    const [driverFrom, setDriverFrom] = useState("Siri");

    useEffect(() => {
      ride.driverTo = driverTo;
      console.log("ride "+index+" driverTo: "+rides[index].driverTo)
    }, [driverTo])

    useEffect(() => {
      ride.driverFrom = driverFrom;
    }, [driverFrom])

    return (
      <tr>
        <td>
          {ride.dateAsStringShort()}
        </td>
        <td>
          <select className="driver" value={driverTo} onChange={e=>setDriverTo(e.target.value)}>
            {members.map(member => {
              return <option value={member}>{member}</option>
            })}
          </select>
        </td>
        <td>
          <select className="driver" value={driverFrom} onChange={e=>setDriverFrom(e.target.value)}>
            {members.map(member => {
              return <option value={member}>{member}</option>
            })}
          </select>
        </td>
      </tr>
    )
  }

  function ForEachRide() {
    var index = 0;
    const returnElements = rides.map(ride => {
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
    return (
      <table className="even choose-driver">
  
        <tr>
          <th>Tillfälle:</th>
          <th>Till aktivitet:</th>
          <th>Från aktivitet:</th>
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
