import React from 'react'
import Header from './Header'
import RideOccation from './RideOccation'
import { dayOfWeekAsString } from '../App'
import FootballBanner from './FootballBanner'
import ScheduleBox from './ScheduleBox';
import DetailedSchedule from './DetailedSchedule'
import ChooseDrivers from './ChooseDrivers'


export default function ViewSchedule({ schedule, altSchedule, members, driverTo, driverFrom }) {

  console.log("Kör ViewSchedule, schedule:", schedule)
  console.log("altSchedule:", altSchedule)

  return (
    <div>
      <Header />

      <div className="page-content">
        <FootballBanner />

        <div className="loose-text-field">
        <h2>Översikt körschema</h2>
          <span class="overview-info">{dayOfWeekAsString(altSchedule.weekday)}ar, {altSchedule.startTime}-{altSchedule.endTime}, {altSchedule.destination}<br></br></span>
        </div>
        
        <br className="changesizeofbr"></br>
        <p></p>

        <div className="box-a form">
          <div className="scheduleList">
            <p>Skjutsning till/från aktivitet</p>
            {/* {schedule[4]} - {schedule[5]}<br></br> */}

            <table className="even schedule-overview-table">
              <thead>
                <tr>
                  <th>Tillfälle:</th>
                  <th>Till:</th>
                  <th>Från:</th>
                </tr>
              </thead>
            
              <tbody>
                {altSchedule.rides.map(ride => {
                  return <RideOccation key={ride.id} ride={ride} />
                })}
                
              </tbody>
            </table>

          </div>
        </div>
        
        <DetailedSchedule schedule={schedule} altSchedule={altSchedule} members={members} />
        
        
      </div>
    </div>
  )
}
