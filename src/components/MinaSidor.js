import React, { useState } from 'react'
import Header from './Header'
import { Link } from 'react-router-dom';
export default function MinaSidor({ me, groups }) {

  return (
    <div>
      {/* <Header/> */}
      <h1 className="topline">Mina sidor</h1>

      <label className="tagg1">Skjutsningar</label>
      <div className="infoskjuts">
        <p>Här får du upp alla dina kommande skjutsningar. För att skjutsningar ska visas behöver du gå med i en grupp och skapa ett körschema.</p>
      </div>

      {groups.length ?
        <>
          <label className="tagg2">{groups[0].title}</label>
          <div className="infogrupp">
            <p>{me.firstName+", "+groups[0].members.reduce((m1, m2) => m1.firstName+", "+m2.firstName)}</p>

            <Link className="button-grupp" to='/createschedule'>SKAPA KÖRSCHEMA</Link>
          </div>
        </>
        
        : <>
          <label className="tagg2">Grupper</label>
          <div className="infogrupp">
            <p>Du är inte med i någon grupp än. Skapa en ny grupp och ett nytt körschema.</p>

            <Link className="button-v2" to='/creategroup'>SKAPA NY GRUPP</Link>
          </div>
        </>}
        <div>
                    <h3 className="topline_2">Så kommer du igång</h3>
                    <ol className="how_to" start="1">
                        <li className="info_text">Skapa en ny grupp</li>
                        <li className="info_text">Lägg till medlemar</li>
                        <li className="info_text">Skapa ett körschema</li>
                    </ol>
                    
                </div>


    </div>
  )
}
