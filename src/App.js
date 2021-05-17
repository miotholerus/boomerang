import React from 'react'
import { useState, useEffect } from 'react'
import firebase from "firebase/app";

import {
  BrowserRouter as Router,
  Route,
  Switch,
} from "react-router-dom";

// import GroupCreated from './components/GroupCreated';
import CreateSchedule from './components/CreateSchedule';
import ViewSchedule from './components/ViewSchedule';
import CreateGroup from './components/CreateGroup';
import MinaSidor from "./components/MinaSidor";
import Header from "./components/Header";

import TestAPI from "./components/test/TestAPI";
import TestDatabase from "./components/test/TestDatabase";
import TestLogin from './components/test/TestLogin';


/**
* Hittade på stackoverflow - funktion som konverterar veckodagens nummer (date.getDay()) till veckonamnet.
*
* @param {Number} dayIndex
* @return {String} Returns day as string
*/
export function dayOfWeekAsString(dayIndex) {
  return ["Söndag", "Måndag", "Tisdag", "Onsdag", "Torsdag", "Fredag", "Lördag"][dayIndex] || '';
}

function App() {

  // Den som är inloggad
  const [me, setMe] = useState({
    "child": "Anna",
    "email": "albacrud@gmail.com",
    "firstName": "Alba",
    "lastName": "Andersson",
    "location": {
      "address": "Uddeholmsvägen 239",
      "city": "Stockholm",
      "country": "SWEDEN",
      "postalCode": 12241
    }
  });

  // Medlemslistan för tillfället, en array av json-element:
  const [members, setMembers] = useState([
    {
      "id": 0,
      "name": "Alba",
      "child": "Anna",
      "address": "Uddeholmsvägen 239"
    },
    {
      "id": 1,
      "name": "Berit",
      "child": "Blenda",
      "address": "Årdalavägen 133"
    },
    {
      "id": 2,
      "name": "Chris",
      "child": "Charlie",
      "address": "Lerbäcksgränd 18"
    }
  ]);
  
  // Schemat refaktorerat till json efter Jonatans input
  const [schedule, setSchedule] = useState(
    {
      "id": 0,
      "startTime": "12:00",
      "endTime": "12:00",
      "destination": "Sergelgatan 1",
      "weekday": 2,
      "startDate": "0000-00-00",
      "endDate": "0000-00-00",
      "rides": []
    }
  )

  const [groups, setGroups] = useState([]); // Till MinaSidor

  useEffect(() => {
    const db = firebase.database();
    const query = db.ref("groups")          // SELECT * FROM groups
      .orderByChild("admin/firstName")      // WHERE admin
      .equalTo("Alba")                      // = Alba
      .limitToFirst(1);                     // LIMIT 1;

    query.on("child_added", snap => {
      // snap.key = "-MZx8..."
      // snap.val() = elementets innehåll
      // snap.val().firstName = t.ex "Berit"
      
      setGroups(groups => [...groups, snap.val()]);
      

      console.log(snap.key, snap.val());

    })

  }, [])

  return (
    <div className="App">
      
      <Header/>

      {/* <TestAPI/>  */}
      {/* <TestDatabase/> */}

      <Router>
        <Switch>
          <Route path="/creategroup">
            <CreateGroup groups={groups} setGroups={setGroups} />
          </Route>

          <Route path="/testdatabase">
            <TestDatabase/>
          </Route>
          <Route path="/testapi">
            <TestAPI/>
          </Route>
          <Route path="/testlogin">
            <TestLogin/>
          </Route>
          

          <Route path="/viewschedule">
            <ViewSchedule schedule={schedule} members={members} />
          </Route>

          <Route path="/createschedule">
            <CreateSchedule schedule={schedule} setSchedule={setSchedule} members={members} />
          </Route>

          <Route path="/">
            <MinaSidor me={me} groups={groups} />
          </Route>

        </Switch>
        
      </Router>
      
      {/* <GroupCreated /> */}

    </div>
  );
}

export default App;
