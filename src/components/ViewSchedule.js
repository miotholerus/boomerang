import React from 'react'
import Header from './Header'
import RideOccation from './RideOccation'
import CreateSchedule from './CreateSchedule'



import { BrowserRouter as Router, Route, Switch, Link, useHistory } from "react-router-dom";
import FootballBanner from './FootballBanner';



export default function ViewSchedule({ schedule, KEY }) {
    // const schedule = JSON.parse(localStorage.getItem(KEY));
    // console.log(schedule);

    function Show() {

        alert(schedule[2].value);

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
                    <div className="scheduleList">Tisdagar, 17:00-19:00, Fyrishovshallen
                    <br></br>
                    <button className="button-v2" onClick={Show}>Visa info</button>
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
