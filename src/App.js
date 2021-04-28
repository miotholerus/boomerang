import {
  BrowserRouter as Router,
  Route,
  Switch,
} from "react-router-dom";

// import GroupCreated from './components/GroupCreated';
import CreateSchedule from './components/CreateSchedule';
import ViewSchedule from './components/ViewSchedule';

import {useState, useEffect} from 'react'

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
  
  // Schemat med grundvärden inlaggt (för att det inte ska krascha när vi testar saker och man inte angett
  //                                   index:  0        1            2          3         4             5       6
  const [schedule, setSchedule] = useState(["00:00", "00:00", "Sergelgatan 1", "0", "0000-00-00", "0000-00-00", [] ]);
  // 0 - starttid


  return (
    <div className="App">
      <Router>
        <Switch>

          <Route path="/viewschedule">
            <ViewSchedule schedule={schedule} />
          </Route>
          
          <Route path="/">
            <CreateSchedule schedule={schedule} setSchedule={setSchedule} members={members} />
          </Route>

        </Switch>
        
        {/* <GroupCreated /> */}      
        
      </Router>
    </div>
  );
}

export default App;
