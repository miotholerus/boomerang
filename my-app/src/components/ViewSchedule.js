import React from 'react'
import Header from './Header'
import RideOccation from './RideOccation'
import CreateSchedule from './CreateSchedule'
import {dayOfWeekAsString} from '../App'

import FootballBanner from './FootballBanner';



export default function ViewSchedule({ schedule, KEY }) {
    // const schedule = JSON.parse(localStorage.getItem(KEY));

    console.log(schedule);

    const startDate = new Date(schedule[5].value);
    const endDate = new Date(schedule[6].value);

    console.log(dayOfWeekAsString(schedule[3].value));


    function Show() {

        // const starttid = document.getElementById("starttid");
        // const sluttid = document.getElementById("sluttid");
        // const adress = document.getElementById("adress-for-destination");
        // const veckodag = document.getElementById("veckodag");
        // const upprepa = document.getElementById("upprepa");
        // const startdatum = document.getElementById("startdatum");
        // const slutdatum = document.getElementById("slutdatum");

        // alert(starttid.value+" "+sluttid.value+" "+adress.value+" "+veckodag.value+" "+upprepa.value+" "+startdatum.value+" "+slutdatum.value);
    }

    return (
        // egentligen bör vi hämta och mappa en lista av occations ur schedule, snarare än direkt över schedule
        // schedule.map(occation => {
        //     return <RideOccation key={occation.id} occation={occation} />
        // })
        <div>
            <Header />

            <div className="page-content">
                <FootballBanner/>

                <form className="container form schedule-box"><b>Körschema</b>
                    <div className="scheduleList">{dayOfWeekAsString(schedule[3].value)}ar, {schedule[0].value}-{schedule[1].value}, {schedule[2].value}
                    <br></br>{schedule[5].value} - {schedule[6].value}
                    <br></br> 
                    {/* <button className="button-v2" onClick={Show}>Visa info</button> */}
                    {console.log(new Date().toLocaleString('sv-se', {  weekday: 'long' }))}
                        <table >
                            <tr>
                                <th>Chaufför</th>
                                <th>Tillfälle</th>
                            </tr>
                        </table>
                        <hr></hr><br></br>
                        <table>
                            <tr>
                                <td>{schedule[7].value}</td>
                                <td>{dayOfWeekAsString(schedule[3].value)} - {schedule[5].value}</td>
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
