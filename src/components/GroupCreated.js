import React from 'react'
import Header from './Header'

export default function GroupCreated() {
  return (
    <div>
      <Header />
      <div className="container group-box">
        <p>Namn på grupp:</p>
        <h4>Fotbollsgruppen</h4>
        <ul>
          <li>
            <i className="fa fa-user-circle li-user-icon"></i>
            <span>Siri (jag)</span>
            <span className="right">Admin</span>
          </li>
          <li>
            <i className="fa fa-user-circle li-user-icon"></i>
            <span>Peter</span>
            <span className="right">Medlem</span>
          </li>
          <li>
            <i className="fa fa-user-circle li-user-icon"></i>
            <span>Hanna</span>
            <span className="right">Medlem</span>
          </li>
        </ul>
      </div>
      <br></br>
      <div className="container before-create-schedule-box">
        <p>Vill du skapa körschema?</p>
        <p><a href="">Hoppa över</a></p>
        <button className="button-v3" id="create-schedule">Skapa körschema</button>
      </div>
    </div>
  )
}
