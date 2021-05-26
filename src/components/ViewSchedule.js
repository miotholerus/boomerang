import React, { useState } from 'react'

import { dayOfWeekAsString } from '../App'
import FootballBanner from './FootballBanner'

import DetailedSchedule from './DetailedSchedule'
import PopupViewSchedule from './PopupViewSchedule'


export default function ViewSchedule({ currentGroup, schedule, members }) {
  const [buttonPopup, setButtonPopup] = useState(false);

  // console.log("Kör ViewSchedule, schedule:", schedule)
  // console.log("schedule:", schedule)

  return (
    <div>
      {/* <Header /> */}

      <div className="page-content">
        <FootballBanner currentGroup={currentGroup} members={members} />

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

        <DetailedSchedule schedule={schedule} members={members} />

        <br />
        <div className="button-holder-center loose-text-field">
          <button className='button-v2' onClick={() => setButtonPopup(true)}>
            <b>Skicka ut körschema</b>
          </button>
        </div>
        
        <div className="fill-out-page-bottom"></div>

      </div>
      <PopupViewSchedule trigger={buttonPopup} setTrigger={setButtonPopup}></PopupViewSchedule>

    </div>
  )
}
