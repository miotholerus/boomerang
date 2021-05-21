import React, { useState, useEffect } from 'react'
import firebase from "firebase/app";
import { Link, useHistory } from 'react-router-dom';
export default function MinaSidor({ me, myGroups, setMyGroups, setCurrentGroup }) {
  
  let history = useHistory();

  useEffect(() => {
    console.log("Kör useEffect (sätter grupplista)", me);
    setMyGroups([]);

    const db = firebase.database();
    const query = db.ref("groups")          // SELECT * FROM groups
      .orderByChild("admin/email")          // WHERE admin/email
      .equalTo(me.email)                    // = den inloggades email

    query.on("child_added", snap => {
      // snap.key = "-MZx8..."
      // snap.val() = elementets innehåll
      // snap.val().firstName = t.ex "Berit"

      setMyGroups(myGroups => [...myGroups, snap.val()]); // ska setMyGroups även köras när man skapar en ny grupp?
    })
  }, []) // körs vid varje rendering av MinaSidor (tror jag)

  function createScheduleForGroup(group) {
    setCurrentGroup(group);

    history.push("/createschedule");
  }

  return (
    <div className="page-content">
      <div className="loose-text-field">
        <h2>Mina sidor</h2>
      </div>

      <h5 className="tagg">Skjutsningar</h5>
      <div className="infobox">
        <p>Här får du upp alla dina kommande skjutsningar. För att skjutsningar ska visas behöver du gå med i en grupp och skapa ett körschema.</p>
      </div>

      {myGroups.length ? 
        <>
          {myGroups.map(group =>
            /* För varje grupp printar vi det här elementet */
            <div key={group.toString()}>
              <h5 className="tagg">{group.title}</h5>
              <div className="infobox">
                <p>
                  {me.firstName + ", "+group.members.map(m => m.firstName).join(", ")
                  /*+ (group.members.length > 1 ?
                  group.members.reduce((m1, m2) => m1.firstName + ", " + m2.firstName)
                  : group.members[0].firstName)*/}
                </p>
                {/* Vi behöver på något vis få med oss rätt grupp till CreateSchedule */}
                {/* <Link className="button-grupp" to='/createschedule'>SKAPA KÖRSCHEMA</Link> */}
                <div className="button-holder-center">
                  <button className="button-v2" onClick={() => createScheduleForGroup(group)}>Skapa körschema</button>
                </div>
              </div>
            </div>
          )}
          <Link className="button-grupp" to='/creategroup'>SKAPA NY GRUPP</Link>
        </>
        : <>
          <h5 className="tagg">Grupper</h5>
          <div className="infobox">
            <p>Du är inte med i någon grupp än. Skapa en ny grupp och ett nytt körschema.</p>

            <Link className="button-grupp" to='/creategroup'>SKAPA NY GRUPP</Link>
          </div>
        </>}

      <div className="loose-text-field">
        <h3>&nbsp;&nbsp;Så kommer du igång</h3>
        <ol className="how_to" start="1">
          <li className="info_text">Skapa en ny grupp</li>
          <li className="info_text">Lägg till medlemar</li>
          <li className="info_text">Skapa ett körschema</li>
        </ol>
      </div>


    </div>
  )
}
