import React from 'react'
import Header from './Header'
import RideOccation from './RideOccation'
import { dayOfWeekAsString } from '../App'
import FootballBanner from './FootballBanner'


export default function ViewSchedule({ schedule }) {

  return (
    <div>
      <Header />

      <div className="page-content">
        <FootballBanner />

        <form className="container form schedule-box"><b>Körschema</b>
          <div className="scheduleList">
            <p>{dayOfWeekAsString(schedule[3])}ar, {schedule[0]}-{schedule[1]}, {schedule[2]}<br></br></p>
            {/* {schedule[4]} - {schedule[5]}<br></br> */}

            <table className="schedule-overview-table">
              <thead>
                <tr>
                  <th>Tillfälle:</th>
                  <th>Till:</th>
                  <th>Från:</th>
                </tr>
              </thead>
            
              <tbody>
                {schedule[6].map(ride => {
                  return <RideOccation key={ride.id} ride={ride} />
                })}
              </tbody>
            </table>

          </div>      
        </form>
      </div>
    </div>
  )
}
