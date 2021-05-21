import React from 'react'
import AltUserLogo from "./logos/AltUserLogo";

export default function ScheduleBox({ timeAtA, timeAtB, timeAtC, timeAtD, schedule, members }) {  

  return (
    <div>
      <div className="loose-text-field">
        <h5>{schedule.rides[0].dateAsStringShort()}</h5>
      </div>

      <div className="schedule-box">
        <h3>Till aktivitet</h3>
        <p>Chaufför: {members[0].firstNname}</p>
        <br></br>
        <ul>
          <li>
            <table>
              <tr>
                <td className="icon"><AltUserLogo className="alt-user-logo" /></td>
                <td className="name"><p>{members[0].firstName}s barn {members[0].child}</p><p>{members[0].location.address}</p></td>
                <td className="time">{timeAtA}</td>
              </tr>
            </table>
          </li>
          <li>
            <table>
              <tr>
                <td className="icon"><AltUserLogo className="alt-user-logo" /></td>
                <td className="name"><p>{members[1].firstName}s barn {members[1].child}</p><p>{members[1].location.address}</p></td>
                <td className="time">{timeAtB}</td>
              </tr>
            </table>
          </li>
          <li>
            <table>
              <tr>
                <td className="icon"><AltUserLogo className="alt-user-logo" /></td>
                <td className="name"><p>{members[2].firstName}s barn {members[2].child}</p><p>{members[2].location.address}</p></td>
                <td className="time">{timeAtC}</td>
              </tr>
            </table>
          </li>
          <li>
            <table>
              <tr>
                <td className="icon">
                  <svg width="28" height="28" viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <circle cx="15" cy="15" r="15" fill="#CFCFCF" />
                    <g clip-path="url(#clip0)">
                      <path d="M9.16667 7.58301V21.833H8.375V23.4163H11.5417V21.833H10.75V17.8747H21.0417C21.2516 17.8747 21.453 17.7913 21.6015 17.6428C21.7499 17.4943 21.8333 17.293 21.8333 17.083V9.16634C21.8333 8.95638 21.7499 8.75501 21.6015 8.60655C21.453 8.45808 21.2516 8.37467 21.0417 8.37467H10.75V7.58301H9.16667ZM12.3333 9.95801V11.5413H13.9167V9.95801H15.5V11.5413H17.0833V9.95801H18.6667V11.5413H20.25V13.1247H18.6667V14.708H20.25V16.2913H18.6667V14.708H17.0833V16.2913H15.5V14.708H13.9167V16.2913H12.3333V14.708H10.75V13.1247H12.3333V11.5413H10.75V9.95801H12.3333Z" fill="black" />
                      <path d="M12.3335 13.1253H13.9168V14.7087H12.3335V13.1253ZM15.5002 13.1253H17.0835V14.7087H15.5002V13.1253ZM13.9168 11.542H15.5002V13.1253H13.9168V11.542ZM17.0835 11.542H18.6668V13.1253H17.0835V11.542Z" fill="black" />
                    </g>
                    <defs>
                      <clipPath id="clip0">
                        <rect width="19" height="19" fill="white" transform="translate(6 3)" />
                      </clipPath>
                    </defs>
                  </svg>
                </td>
                <td className="name"><p>Plats för aktivitet</p><p>{schedule.destination}</p></td>
                <td className="time">{timeAtD}</td>
              </tr>
            </table>
          </li>
        </ul>
      </div>

      <div className="schedule-box2">
        <h3>Från aktivitet</h3>
        <p>Chaufför: {members[0].firstName}</p>
        <br></br>
        <ul>
          <li>
            <table>
              <tr>
                <td className="icon">
                  <svg width="28" height="28" viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <circle cx="15" cy="15" r="15" fill="#CFCFCF" />
                    <g clip-path="url(#clip0)">
                      <path d="M9.16667 7.58301V21.833H8.375V23.4163H11.5417V21.833H10.75V17.8747H21.0417C21.2516 17.8747 21.453 17.7913 21.6015 17.6428C21.7499 17.4943 21.8333 17.293 21.8333 17.083V9.16634C21.8333 8.95638 21.7499 8.75501 21.6015 8.60655C21.453 8.45808 21.2516 8.37467 21.0417 8.37467H10.75V7.58301H9.16667ZM12.3333 9.95801V11.5413H13.9167V9.95801H15.5V11.5413H17.0833V9.95801H18.6667V11.5413H20.25V13.1247H18.6667V14.708H20.25V16.2913H18.6667V14.708H17.0833V16.2913H15.5V14.708H13.9167V16.2913H12.3333V14.708H10.75V13.1247H12.3333V11.5413H10.75V9.95801H12.3333Z" fill="black" />
                      <path d="M12.3335 13.1253H13.9168V14.7087H12.3335V13.1253ZM15.5002 13.1253H17.0835V14.7087H15.5002V13.1253ZM13.9168 11.542H15.5002V13.1253H13.9168V11.542ZM17.0835 11.542H18.6668V13.1253H17.0835V11.542Z" fill="black" />
                    </g>
                    <defs>
                      <clipPath id="clip0">
                        <rect width="19" height="19" fill="white" transform="translate(6 3)" />
                      </clipPath>
                    </defs>
                  </svg>
                </td>
                <td className="name"><p>Plats för aktivitet</p><p>{schedule.destination}</p></td>
                <td className="time">16:10</td>
              </tr>
            </table>
          </li>
          <li>
            <table>
              <tr>
                <td className="icon"><AltUserLogo className="alt-user-logo" /></td>
                <td className="name"><p>{members[2].firstName}s barn {members[2].child}</p><p>{members[2].location.address}</p></td>
                <td className="time">16:20</td>
              </tr>
            </table>
          </li>
          <li>
            <table>
              <tr>
                <td className="icon"><AltUserLogo className="alt-user-logo" /></td>
                <td className="name"><p>{members[1].firstName}s barn {members[1].child}</p><p>{members[1].location.address}</p></td>
                <td className="time">16:30</td>
              </tr>
            </table>
          </li>
          <li>
            <table>
              <tr>
                <td className="icon"><AltUserLogo className="alt-user-logo" /></td>
                <td className="name"><p>{members[0].firstName}s barn {members[0].child}</p><p>{members[0].location.address}</p></td>
                <td className="time">16:40</td>
              </tr>
            </table>
          </li>
        </ul>
      </div>
    </div>
  )
}
