import React from 'react'

export default function ScheduleBox({rideObject}) {
  return (
    <div className="schedule-box">
      <h3>Upphämtning till aktivitet</h3>
      <p>Chaufför: Siri</p>
      <br></br>
      <ul>
        <li>
          <table>
            <tr>
              <td><i className="fa fa-user-circle"></i></td>
              <td><p>Siris barn Sara</p><p>Semmelvägen 4</p></td>
              <td className="time">16:30</td>
            </tr>
          </table>
        </li>
        <li>
          <table>
            <tr>
              <td><i className="fa fa-user-circle"></i></td>
              <td><p>Hannas barn Hugo</p><p>Havsstigen 12</p></td>
              <td className="time">16:40</td>
            </tr>
          </table>
        </li>
        <li>
          <table>
            <tr>
              <td><i className="fa fa-user-circle"></i></td>
              <td><p>Peters barn Per</p><p>Prästgatan 50</p></td>
              <td className="time">16:50</td>
            </tr>
          </table>
        </li>
      </ul>
    </div>
  )
}
