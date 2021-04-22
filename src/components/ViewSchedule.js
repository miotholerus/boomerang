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

        <div className="loose-text-field">
        <h3>Översikt körschema</h3>
          <span class="overview-info">{dayOfWeekAsString(schedule[3])}ar, {schedule[0]}-{schedule[1]}, {schedule[2]}<br></br></span>
        </div>
        

        <div className="container-a form schedule-box">
          <div className="scheduleList">
            
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

        </div>
      </div>
    </div>
  )
}
