import React, {useState, useEffect} from 'react'

export default function ChooseDrivers({rides, setRides, schedule, setSchedule, members}) {
  
  console.log("Kör ChooseDrivers, rides:", rides);

  const [rides2, setRides2] = useState(rides);

  useEffect(() => {
    setRides(rides2);
  }, [rides2])

  function RideEditRow({index, ride}) {
    console.log("RideEditRow, ride:", ride);

    const [driverTo, setDriverTo] = useState({"id": 0, "name": "Alba", "child": "Anna", "address": "Uddeholmsvägen 239"});
    const [driverFrom, setDriverFrom] = useState({"id": 0, "name": "Alba", "child": "Anna", "address": "Uddeholmsvägen 239"});
    const[driverIdTo,setDriverIdTo] = useState([]);
    const [driverIdFrom, setDriverIdFrom] = useState([]);

    useEffect(() => {
      setDriverTo(members[driverIdTo])
    },[driverIdTo])

    useEffect(() => {
      setDriverFrom(members[driverIdFrom])
    },[driverIdFrom])

    useEffect(() => {
      rides2[index].driverTo = driverTo;
      console.log("ride "+index+" driverTo: ", rides2[index].driverTo)
    }, [driverTo])

    useEffect(() => {
      rides2[index].driverFrom = driverFrom;
      console.log("ride "+index+" driverFrom: ", rides2[index].driverTo)
    }, [driverFrom])

    

    return (
      <tr>
        <td>
          {ride.dateAsStringShort()}
        </td>
        <td>
          <select className="driver" /*value={driverIdTo}*/ onChange={e=>setDriverIdTo(e.target.value)}>
            {members.map(member => {
              return <option value={member.id}>{member.name}</option>
            })}
          </select>
        </td>
        <td>
          <select className="driver" /*value={driverIdFrom}*/ onChange={e=>setDriverIdFrom(e.target.value)}>
            {members.map(member => {
              return <option value={member.id}>{member.name}</option>
            })}
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
