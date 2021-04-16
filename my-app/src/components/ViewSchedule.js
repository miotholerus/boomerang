import React from 'react'
import Header from './Header'
import RideOccation from './RideOccation'
import CreateSchedule from './CreateSchedule'



import { BrowserRouter as Router, Route, Switch, Link, useHistory } from "react-router-dom";
import FootballBanner from './FootballBanner';



export default function ViewSchedule({ KEY }) {
    // const schedule = JSON.parse(localStorage.getItem(KEY));
    // console.log(schedule);

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
                    <div className="scheduleList">Tisdagar, 17:00-19:00, Fyrishovshallen
                <br></br>

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
