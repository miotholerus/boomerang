import React from 'react'
import {dayOfWeekAsString} from '../App'

export default function RideOccation({date}) {
  return (
    // <div>
    //     {/* {occation.tillfalle} */}
    //     <div>
    //         Upphämtning till aktivitet
    //         Chaufför {/* {occation.tillaktivitet} */}
    //     </div>
    //     <div>
    //         Avlämning från aktivitet
    //         Chaufför {/* {occation.franaktivitet} */}
    //     </div>
    // </div>
    <tr>
      <td>{dayOfWeekAsString(date.getDay())+" "+date.getDate()+" "+date.toLocaleString('sv-se', { month: 'long' })}</td>
      {console.log(date)}
      <td>Siri</td>
      <td>Siri</td>
    </tr>
  )
}
