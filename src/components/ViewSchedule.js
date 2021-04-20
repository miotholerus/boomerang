import React from 'react'
import Header from './Header'
import RideOccation from './RideOccation'
import CreateSchedule from './CreateSchedule'
import { dayOfWeekAsString } from '../App'

import FootballBanner from './FootballBanner';





export default function ViewSchedule({ schedule, setSchedule }) {
  // const schedule = JSON.parse(localStorage.getItem(KEY));

  // console.log(schedule);

  // const startDate = new Date(schedule[5].value);
  // const endDate = new Date(schedule[6].value);

  // console.log(dayOfWeekAsString(schedule[3].value));


  function getRideDates() {
    const dayOfWeekIndex = schedule[3].value;
    const startDate = new Date(schedule[5].value);
    const endDate = new Date(schedule[6].value);
    const dateList = getDates(startDate, endDate);
    console.log("dateList:")
    console.log(dateList);

    var rideDates = new Array();
    for (let i = 0; i < dateList.length; i++) {
      if(dayOfWeekIndex == dateList[i].getDay()){
        rideDates.push(dateList[i])

      }
    }
    console.log("rideDates:")
    console.log(rideDates);
    
    function getDates(startDate, endDate) {
      var dateArray = new Array();
      var dateToAdd = startDate;

      while (dateToAdd <= endDate) {
        dateArray.push(new Date(dateToAdd))
        dateToAdd.setDate(dateToAdd.getDate() + 1);
      }
      return dateArray;
    }

    const newSchedule = schedule;
    newSchedule.push(rideDates);
    console.log(newSchedule);
    setSchedule(newSchedule);
    console.log("schedule:")
    console.log(schedule);

    // return rideDates;
  }


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
            {getRideDates()}
            {/* <button className="button-v2" onClick={()=>getRideDates()}>Visa info</button>  */}
            {console.log(new Date().toLocaleString('sv-se', { weekday: 'long' }))}

            <table >
              <tr>
                <th>Chaufför</th>
                <th>Tillfälle</th>
              </tr>
            </table>
            <hr></hr><br></br>
            <table>
              <tr>
                <td>Siri</td>
                <td>Tisdag 8 mars</td>
              </tr>

              <tr>
                <td>Peter</td>
                <td>Tisdag 15 mars</td>
              </tr>

              <tr>
                <td>Hanna</td>
                <td>Tisdag 22 mars</td>
              </tr>

              <tr>
                <td>Siri</td>
                <td>Tisdag 29 mars</td>
              </tr>

              <tr>
                <td>Peter</td>
                <td>Tisdag 5 april</td>
              </tr>

              <tr>
                <td>Hanna</td>
                <td>Tisdag 12 april</td>
              </tr>

            </table>

          </div>

        </form>
      </div>
    </div>










  )
}
