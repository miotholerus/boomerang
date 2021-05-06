import {
  BrowserRouter as Router,
  Route,
  Switch,
} from "react-router-dom";

// import GroupCreated from './components/GroupCreated';
import CreateSchedule from './components/CreateSchedule';
import ViewSchedule from './components/ViewSchedule';
import {useState, useEffect} from 'react'
import TestAPI from "./components/TestAPI";
import TestDatabase from "./components/TestDatabase";

import React from 'react'


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


  return (
    <div className="App">
      
      {/* <TestAPI/>  */}
      <TestDatabase/>

      {/* <Router>
        <Switch>
          <Route path="/viewschedule">
            <ViewSchedule schedule={schedule} members={members} />
          </Route>
          
          <Route path="/">
            <CreateSchedule schedule={schedule} setSchedule={setSchedule} members={members}  />
          </Route>

        </Switch>
        
      </Router> */}
      
      {/* <GroupCreated /> */}

    </div>
  );
}

export default App;
