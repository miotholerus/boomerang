import React from 'react'

export default function RideOccation({ride}){
  // Använda denna tabell till att printa listan i ChooseDrivers (s. 21 och 22 i prototypen)?
  // Kan man få knappen där man väljer förare till varje tillfälle att bara vara synlig/aktiv ibland?
  // Att ride.driverTo / ride.driverFrom ibland är vanliga text-element och ibland <select>-element med förare?
  // Skicka med en boolean som bestämmer elementtyperna?

  return (
    <tr>
      <td>{ride.dateAsStringShort()}</td>
      <td>{ride.driverTo.name}</td>
      <td>{ride.driverFrom.name}</td>
    </tr>
  )
}
