import React from 'react'

export default function RideOccation({ride}) {

  console.log("ride i RideOccation:", ride)

  return (
    <tr>
      <td>{ride.dateAsStringShort()}</td>
      <td>{ride.driverTo.name}</td>
      <td>{ride.driverFrom.name}</td>
    </tr>
  )
}
