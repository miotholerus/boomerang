import React from 'react'
import {dayOfWeekAsString} from '../App'

export default function RideOccation({ride}) {

  // plockar ut Date-objektet ur aktuellt RideObject
  const date = ride.date;
  
  return (
    <tr>
      <td>{ride.dateAsString()}</td>
      {console.log(date)}
      <td>{ride.driverTo}</td>
      <td>{ride.driverFrom}</td>
    </tr>
  )
}
