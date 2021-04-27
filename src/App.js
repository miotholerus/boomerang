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
  
  const [members, setMembers] = useState(["Siri", "Peter", "Hanna"]);
  const [schedule, setSchedule] = useState(["","","","","","",[]]);

  return (
    <div className="App">
      
      <TestAPI/>

      {/* <Router>
        <Switch>

          <Route path="/viewschedule">
            <ViewSchedule schedule={schedule} />
          </Route>
          
          <Route path="/">
            <CreateSchedule schedule={schedule} setSchedule={setSchedule} members={members} />
          </Route>

        </Switch>
        
      </Router> */}
      
      {/* <GroupCreated /> */}

    </div>
  );
}

export default App;
