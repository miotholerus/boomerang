import React from 'react'
import Header from './Header'
import RideOccation from './RideOccation'
import { dayOfWeekAsString } from '../App'
import FootballBanner from './FootballBanner'
import RideObject from '../RideObject'




export default function ViewSchedule({ schedule, setSchedule }) {
  // const schedule = JSON.parse(localStorage.getItem(KEY));

  // console.log(schedule);

  // const startDate = new Date(schedule[5].value);
  // const endDate = new Date(schedule[6].value);

  // console.log(dayOfWeekAsString(schedule[3].value));


  return (

    // egentligen bör vi hämta och mappa en lista av occations ur schedule, snarare än direkt över schedule
    // schedule.map(occation => {
    //     return <RideOccation key={occation.id} occation={occation} />
    // })
    <div>
      <Header />

      <div className="page-content">
        <FootballBanner />

        <form className="container form schedule-box"><b>Körschema</b>
          <div className="scheduleList">{dayOfWeekAsString(schedule[3].value)}ar, {schedule[0].value}-{schedule[1].value}, {schedule[2].value}
            <br></br>{schedule[5].value} - {schedule[6].value}
            <br></br>
            {/* {getRideDates()} */}
            {/* <button className="button-v2" onClick={()=>getRideDates()}>Visa info</button>  */}
            {/* {console.log(new Date().toLocaleString('sv-se', { weekday: 'long' }))} */}

            <table className="schedule-overview-table">
              <thead>
                <tr>
                  <th>Tillfälle:</th>
                  <th>Till aktivitet:</th>
                  <th>Från aktivitet:</th>
                </tr>
              </thead>
            
              <tbody>
                {schedule[7].map(ride => {
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

