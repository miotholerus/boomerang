import React from 'react'

export default function ScheduleBox({ rideObject, seconds, members }) {
  function AltUserLogo() {
    return (
      <svg width="28" height="28" viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg">
        <circle cx="14" cy="14" r="14" fill="#CFCFCF"/>
        <path d="M9 20C9 20 8 20 8 19C8 18 9 15 14 15C19 15 20 18 20 19C20 20 19 20 19 20H9ZM14 14C14.7956 14 15.5587 13.6839 16.1213 13.1213C16.6839 12.5587 17 11.7956 17 11C17 10.2044 16.6839 9.44129 16.1213 8.87868C15.5587 8.31607 14.7956 8 14 8C13.2044 8 12.4413 8.31607 11.8787 8.87868C11.3161 9.44129 11 10.2044 11 11C11 11.7956 11.3161 12.5587 11.8787 13.1213C12.4413 13.6839 13.2044 14 14 14Z" fill="black"/>
      </svg>
    )
  }

  return (
    <div>
      <div className="schedule-box">
        <h3>Upphämtning till aktivitet</h3>
        <p>Chaufför: {members[0].name}</p>
        <br></br>
        <ul>
          <li>
            <table>
              <tr>
                <td className="icon"><AltUserLogo className="alt-user-logo"/></td>
                <td><p>{members[0].name}s barn {members[0].child}</p><p>{members[0].address}</p></td>
                <td className="time">16:30</td>
              </tr>
            </table>
          </li>
          <li>
            <table>
              <tr>
                <td className="icon"><AltUserLogo className="alt-user-logo"/></td>
                <td><p>{members[1].name}s barn {members[1].child}</p><p>{members[1].address}</p></td>
                <td className="time">16:40</td>
              </tr>
            </table>
          </li>
          <li>
            <table>
              <tr>
                <td className="icon"><AltUserLogo className="alt-user-logo"/></td>
                <td><p>{members[2].name}s barn {members[2].child}</p><p>{members[2].address}</p></td>
                <td className="time">16:50</td>
              </tr>
            </table>
          </li>
        </ul>
      </div>

      <div className="schedule-box2">
        <h3>Avlämning från aktivitet</h3>
        <p>Chaufför: Siri</p>
        <br></br>
        <ul>
          <li>
            <table>
              <tr>
                <td><AltUserLogo className="alt-user-logo"/></td>
                <td><p>Petets barn Per</p><p>Prästgatan 50</p></td>
                <td className="time">19:20</td>
              </tr>
            </table>
          </li>
          <li>
            <table>
              <tr>
                <td><AltUserLogo className="alt-user-logo"/></td>
                <td><p>Hannas barn Hugo</p><p>Havsstigen 12</p></td>
                <td className="time">19:30</td>
              </tr>
            </table>
          </li>
          <li>
            <table>
              <tr>
                <td><AltUserLogo className="alt-user-logo"/></td>
                <td><p>Siris barn Sara</p><p>Semmelvägen 4</p></td>
                <td className="time">19:40</td>
              </tr>
            </table>
          </li>
        </ul>
      </div>
    </div>
  )
}
