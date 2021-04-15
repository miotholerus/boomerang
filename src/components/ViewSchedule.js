import React from 'react'
import Header from './Header'
import RideOccation from './RideOccation'

export default function ViewSchedule({schedule}) {
    return (
        <Header/>
        
        // egentligen bör vi hämta och mappa en lista av occations ur schedule, snarare än direkt över schedule
        // schedule.map(occation => {
        //     return <RideOccation key={occation.id} occation={occation} />
        // })
    )
}
