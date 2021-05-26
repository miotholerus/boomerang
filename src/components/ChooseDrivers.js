import React, {useState, useEffect, useRef} from 'react'

export default function ChooseDrivers({rides, setRides, members}) {

  // console.log("Kör ChooseDrivers, rides", rides);

  var rides2 = rides;
  
  // NYTT FÖRSÖK: ändra direkt i rides/schedule utan att gå via driverTo/driverFrom? Funkade!!
  useEffect(() => {
    // console.log("Kör useEffect [rides2], rides: ", rides);
    // console.log("rides2: ", rides2);
    setRides(rides2);
    // console.log("efter setRides, rides: ", rides);
  }, [rides2])
  

  function RideEditRow({index, ride}) {

    // useRef hook istället
    const driverToRef = useRef();
    const driverFromRef = useRef();

    function handleChangeDriverTo(e) {
      //e.preventDefault();

      const newDriverToId = driverToRef.current.value; // den valda medlemmens id
      // console.log("newDriverToId: ", newDriverToId);
      
      rides2[index].driverTo = members[newDriverToId];
      // console.log("rides2[index].driverTo: ", rides2[index].driverTo);


      // Bestämmer körordning
      let tempArr = [...members]; // kopiera members istället?
      let temp = members[newDriverToId]
      tempArr.splice(newDriverToId, 1);
      // console.log("Efter splice, index", index, ", ", rides2[index], "members, ", members);
      tempArr = [temp, ...tempArr];
      rides2[index].pickupOrderTo = tempArr;
      console.log("pickupOrderTo", rides2[index].pickupOrderTo);

      // // Bestämmer körordning Backup
      // let tempArr = [...rides2[index].pickupOrderTo]; // kopiera members istället?
      // let temp = members[newDriverToId]
      // tempArr.splice(newDriverToId, 1);
      // // console.log("Efter splice, index", index, ", ", rides2[index], "members, ", members);
      // tempArr = [temp, ...tempArr];
      // rides2[index].pickupOrderTo = tempArr;
      // console.log("pickupOrderTo", rides2[index].pickupOrderTo);
    }

    function handleChangeDriverFrom(e) {
      e.preventDefault();

      const newDriverFromId = driverFromRef.current.value;
      // console.log("newDriverFromId: ", newDriverFromId);
      
      rides2[index].driverFrom = members[newDriverFromId];
      // console.log("rides2[index].driverFrom: ", rides2[index].driverFrom);


      // Bestämmer körordning, ej testat
      let tempArr = [...members]; // gör en kopia av pickupOrderFrom
      let temp = members[newDriverFromId]; // temp är rätt medlemmen med rätt index ur medlemslistan
      tempArr.splice(newDriverFromId, 1); // tar bort medlemmen ur den tillfälliga listan - FEL INDEX - ska vara bakvänt
      console.log("1. tempArr efter splice, index", index, ", ", tempArr);

      tempArr = [temp, ...tempArr].reverse(); // lägger till föraren SIST i listan
      console.log("2. tempArr efter att medlemmen lagts till först och sedan vänts", tempArr)
      
      rides2[index].pickupOrderFrom = tempArr;
      console.log("3. pickupOrderFrom", rides2[index].pickupOrderFrom);
    }

    var ix = 0;
    const options = members.map(member => {
      return <option value={ix++}>{member.firstName}</option>
    })
    

    return (
      <tr>
        <td>
          {ride.dateAsStringShort()}
        </td>
        <td>
          <select className="driver" /*value={driverTo.id}*/ onChange={e => handleChangeDriverTo(e)/*e=>setDriverIdTo(e.target.value)*/} ref={driverToRef} >
            
            {options}

          </select>
        </td>
        <td>
          <select className="driver" /*value={driverFrom.id}*/ onChange={e => handleChangeDriverFrom(e)} ref={driverFromRef} /*onChange={e=>setDriverIdFrom(e.target.value)}*/>
            
            {options}
          
          </select>
        </td>
      </tr>
    )
  }

  function ForEachRideOneRow() {
    // console.log("Kör ForEachRideOneRow, rides:", rides, "\nrides2: \n", rides2);

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
  
  return (
    <div className="choose-drivers-box">
      <table className="even choose-driver">
        
        <tr>
          <th>Tillfälle:</th>
          <th>Till:</th>
          <th>Från:</th>
        </tr>

        <ForEachRideOneRow/>
        {/* På något sätt fånga upp detta och uppdatera rides... */}
        {/* {rides.map(ride => {
          return (
            <RideEditRow key={ride.id} ride={ride}/>
          )
        })} */}
      </table>
    </div>
  )
}
