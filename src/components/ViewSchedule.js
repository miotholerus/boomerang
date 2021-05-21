import React from 'react'

import { dayOfWeekAsString } from '../App'
import FootballBanner from './FootballBanner'

import DetailedSchedule from './DetailedSchedule'

export default function ViewSchedule({ currentGroup, schedule, members2 }) {

  // console.log("Kör ViewSchedule, schedule:", schedule)
  // console.log("schedule:", schedule)

  return (
    <div>
      {/* <Header /> */}

      <div className="page-content">
        <FootballBanner currentGroup={currentGroup} members2={members2} />

        <div className="loose-text-field">
          <h4>Översikt körschema</h4>
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
                      <td>{ride.driverTo.firstName}</td>
                      <td>{ride.driverFrom.firstName}</td>
                    </tr>
                  )
                  // <RideOccation key={ride.id} ride={ride} />
                })}

              </tbody>
            </table>

          </div>
        </div>

        <DetailedSchedule schedule={schedule} members2={members2} />

        <br/>
        <div className="button-holder-center loose-text-field">
          <button className='button-v2'>
            <b>Skicka ut körschema</b>
          </button>
        </div>

      </div>
    </div>
  )
}
