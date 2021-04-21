import React, {useState, useEffect} from 'react'

export default function ChooseDrivers({rides, setRides, schedule, setSchedule, members}) {
  
  function RideEditRow({ride}) {
    const [driverTo, setDriverTo] = useState("");
    const [driverFrom, setDriverFrom] = useState("");

    useEffect(() => {
      ride.driverTo = driverTo;
    }, [driverTo])

    useEffect(() => {
      ride.driverFrom = driverFrom;
    }, [driverFrom])

    return (
      <tr>
        <td>{ride.dateAsString()}</td>
        <td>
          <select value={driverTo} onChange={e=>setDriverTo(e.target.value)}>
            {members.map(member => {
              return <option value={member}>{member}</option>
            })}
          </select>
        </td>
        <td>
          <select value={driverFrom} onChange={e=>setDriverFrom(e.target.value)}>
            {members.map(member => {
              return <option value={member}>{member}</option>
            })}
          </select>
        </td>
      </tr>
      
    )
  }

  // function ForEachRide() {
  //   for (let i = 0; i < rides.length; i++) {
  //     return (
  //       <RideEditRow key={i} ride={rides[i]}/>
  //     )
  //   }
  // }
  
  function RideEditTable() {

    return (
      <table className="choose-driver">
        
          <tr>
            <th>Tillfälle:</th>
            <th>Till aktivitet:</th>
            <th>Från aktivitet:</th>
          </tr>
      
        {/* På något sätt fånga upp detta och uppdatera rides... */}
        {/* <ForEachRide/> */}
        {rides.map(ride => {
          return (
            <RideEditRow key={ride.id} ride={ride}/>
          )
        })}
      </table>
    )
    
  }

  return (
    <div className="container">
      <RideEditTable/>
    </div>
  )
}
