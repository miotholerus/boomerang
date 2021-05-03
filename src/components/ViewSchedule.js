import React from 'react'
import Header from './Header'

import { dayOfWeekAsString } from '../App'
import FootballBanner from './FootballBanner'

import DetailedSchedule from './DetailedSchedule'
import ChooseDrivers from './ChooseDrivers'


export default function ViewSchedule({ schedule, members, }) {

  // console.log("Kör ViewSchedule, schedule:", schedule)
  console.log("schedule:", schedule)

  return (
    <div>
      <Header />

      <div className="page-content">
        <FootballBanner />

        <div className="loose-text-field">
          <h2>Översikt körschema</h2>
          <p class="overview-info">{dayOfWeekAsString(schedule.weekday)}ar, {schedule.startTime}-{schedule.endTime}, {schedule.destination}<br></br></p>
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
                {schedule.rides.map(ride => {
                  return (
                    <tr>
                      <td>{ride.dateAsStringShort()}</td>
                      <td>{ride.driverTo.name}</td>
                      <td>{ride.driverFrom.name}</td>
                    </tr>
                  )
                  // <RideOccation key={ride.id} ride={ride} />
                })}

              </tbody>
            </table>

          </div>
        </div>

        <DetailedSchedule schedule={schedule} members={members} />


      </div>
    </div>
  )
}
