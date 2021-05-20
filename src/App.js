import React from 'react'
import { useState } from 'react'

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

import Startpage from './components/Startpage';
import Registrera from './components/Registrera';
import Login from './components/Login';


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

  const [loginStatus, setLoginStatus] = useState(false);
  
  const [myId, setMyId] = useState("");

  // Den som är inloggad (när ingen är inloggad är det Alba)
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
    },
    "phone": "0701111111",
    "password": "crudcrud"
  });

  const [currentGroup, setCurrentGroup] = useState({});

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

  const [myGroups, setMyGroups] = useState([]); // Till MinaSidor?

  return (
    <div className="App">
      <Router>

        <Header loginStatus={loginStatus} me={me}/>
      
        <Switch>

          {/* Nås bara som utloggad */}
          <Route path="/registrera">
            <Registrera />
          </Route>
          <Route path="/login">
            <Login loginStatus={loginStatus} setLoginStatus={setLoginStatus} setMe={setMe} setMyId={setMyId} />
          </Route>

          {/* Nås bara som inloggad - skapa en LoggedIn-komponent för att samla allt? */}
          <Route path="/minasidor">
            <MinaSidor me={me}
              myGroups={myGroups} setMyGroups={setMyGroups}
              setCurrentGroup={setCurrentGroup} />
          </Route>
          <Route path="/creategroup">
            <CreateGroup
              me={me} myId={myId}
              myGroups={myGroups} setMyGroups={setMyGroups} />
          </Route>
          <Route path="/createschedule">
            <CreateSchedule
              schedule={schedule} setSchedule={setSchedule}
              members={members} setMembers={setMembers}
              currentGroup={currentGroup} />
          </Route>
          <Route path="/viewschedule">
            <ViewSchedule schedule={schedule} members={members} />
          </Route>

          {/* Testsidor */}
          <Route path="/testdatabase">
            <TestDatabase />
          </Route>
          <Route path="/testapi">
            <TestAPI />
          </Route>
          <Route path="/testlogin">
            <TestLogin />
          </Route>
          
          {/* Nås av alla? */}
          <Route path="/">
            <Startpage />
          </Route>

        </Switch>

      </Router>

      {/* <GroupCreated /> */}

    </div>
  );
}

export default App;
