import React from 'react'

export default function RideOccation({ride}) {

  return (
    <tr>
      <td>{ride.dateAsString()}</td>
      <td>{ride.driverTo}</td>
      <td>{ride.driverFrom}</td>
    </tr>
  )
}
