import React from 'react'
import RideOccation from './RideOccation'

export default function ViewSchedule({schedule}) {
    return (
        null
        // egentligen bör vi hämta och mappa en lista av occations ur schedule, snarare än direkt över schedule
        // schedule.map(occation => {
        //     return <RideOccation key={occation.id} occation={occation} />
        // })
    )
}
