import React from 'react'
import Header from './Header'

export default function GroupCreated() {
  return (
    <div>
      <Header />
      <div class="container group-box">
        <p>Namn på grupp:</p>
        <h4>Fotbollsgruppen</h4>
        <ul>
          <li>
            <i class="fa fa-user-circle li-user-icon"></i>
            <span>Siri (jag)</span>
            <span class="right">Admin</span>
          </li>
          <li>
            <i class="fa fa-user-circle li-user-icon"></i>
            <span>Peter</span>
            <span class="right">Medlem</span>
          </li>
          <li>
            <i class="fa fa-user-circle li-user-icon"></i>
            <span>Hanna</span>
            <span class="right">Medlem</span>
          </li>
        </ul>
      </div>
      <br></br>
      <div class="container create-schedule-box">
        <p>Vill du skapa körschema?</p>
        <p><a href="">Hoppa över</a></p>
        <button class="button-v3" id="create-schedule">Skapa körschema</button>
      </div>
    </div>
  )
}
