﻿import React from 'react'

export default function ScheduleBox({ timeAtA, timeAtB, timeAtC, timeAtD, altSchedule, members }) {
  function AltUserLogo() {
    return (
      <svg width="28" height="28" viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg">
        <circle cx="14" cy="14" r="14" fill="#CFCFCF" />
        <path d="M9 20C9 20 8 20 8 19C8 18 9 15 14 15C19 15 20 18 20 19C20 20 19 20 19 20H9ZM14 14C14.7956 14 15.5587 13.6839 16.1213 13.1213C16.6839 12.5587 17 11.7956 17 11C17 10.2044 16.6839 9.44129 16.1213 8.87868C15.5587 8.31607 14.7956 8 14 8C13.2044 8 12.4413 8.31607 11.8787 8.87868C11.3161 9.44129 11 10.2044 11 11C11 11.7956 11.3161 12.5587 11.8787 13.1213C12.4413 13.6839 13.2044 14 14 14Z" fill="black" />
      </svg>
    )
  }

  return (
    <div>
      <div className="loose-text-field">
        <h4>{altSchedule.rides[0].dateAsStringShort()}</h4>
      </div>

      <div className="schedule-box">
        <h3>Upphämtning till aktivitet</h3>
        <p>Chaufför: {members[0].name}</p>
        <br></br>
        <ul>
          <li>
            <table>
              <tr>
                <td className="icon"><AltUserLogo className="alt-user-logo" /></td>
                <td className="name"><p>{members[0].name}s barn {members[0].child}</p><p>{members[0].address}</p></td>
                <td className="time">{timeAtA}</td>
              </tr>
            </table>
          </li>
          <li>
            <table>
              <tr>
                <td className="icon"><AltUserLogo className="alt-user-logo" /></td>
                <td className="name"><p>{members[1].name}s barn {members[1].child}</p><p>{members[1].address}</p></td>
                <td className="time">{timeAtB}</td>
              </tr>
            </table>
          </li>
          <li>
            <table>
              <tr>
                <td className="icon"><AltUserLogo className="alt-user-logo" /></td>
                <td className="name"><p>{members[2].name}s barn {members[2].child}</p><p>{members[2].address}</p></td>
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
                <td className="name"><p>Enskede Rackethall</p><p>{altSchedule.destination}</p></td>
                <td className="time">{timeAtD}</td>
              </tr>
            </table>
          </li>
        </ul>
      </div>

      <div className="schedule-box2">
        <h3>Avlämning från aktivitet</h3>
        <p>Chaufför: {members[0].name}</p>
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
                <td className="name"><p>Enskede Rackethall</p><p>{altSchedule.destination}</p></td>
                <td className="time">19:10</td>
              </tr>
            </table>
          </li>
          <li>
            <table>
              <tr>
                <td className="icon"><AltUserLogo className="alt-user-logo" /></td>
                <td className="name"><p>{members[2].name}s barn {members[2].child}</p><p>{members[2].address}</p></td>
                <td className="time">19:20</td>
              </tr>
            </table>
          </li>
          <li>
            <table>
              <tr>
                <td className="icon"><AltUserLogo className="alt-user-logo" /></td>
                <td className="name"><p>{members[1].name}s barn {members[1].child}</p><p>{members[1].address}</p></td>
                <td className="time">19:30</td>
              </tr>
            </table>
          </li>
          <li>
            <table>
              <tr>
                <td className="icon"><AltUserLogo className="alt-user-logo" /></td>
                <td className="name"><p>{members[0].name}s barn {members[0].child}</p><p>{members[0].address}</p></td>
                <td className="time">19:40</td>
              </tr>
            </table>
          </li>
        </ul>
      </div>
    </div>
  )
}
