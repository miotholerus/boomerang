import futbol from './futbol-solid.svg';
import logo from './logo.svg';

import {
  BrowserRouter as Router,
  Route,
  Switch,
  Link
} from "react-router-dom";

import GroupCreated from './components/GroupCreated';
import CreateSchedule from './components/CreateSchedule';
import ViewSchedule from './components/ViewSchedule';

import {useState, useEffect} from 'react'

const LOCAL_STORAGE_KEY = "boomerang.schedule";

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
  
  const [schedule, setSchedule] = useState([]);
  
  // setSchedule varje gång schemat ändras, börjar tomt
  // schedule ska bli en array/json med all info schemat behöver
  // Behövs en Schedule-komponent? En komponent per skjutstillfälle?

  // function getRideDates() {
  //   const dayOfWeekIndex = schedule[3].value;
  //   const startDate = new Date(schedule[5].value);
  //   const endDate = new Date(schedule[6].value);
    
  //   Date.prototype.addDays = function(days){
  //     var dat = new Date(this.valueOf())
  //     dat.setDate(dat.getDate() + days);
  //     return dat;
  //   }
  //   function getDates(startDate, endDate){
  //     var dateArray = new Array();
  //     var dateToAdd = startDate;
  //     while(dateToAdd <= endDate){
  //       dateArray.push(new Date(dateToAdd))
  //       dateToAdd = dateToAdd.addDays(1);
  //     }
  //     return dateArray;
  //   }
  //   var dateArray = getDates(new Date(), (new Date()).addDays(2));
  //   for ( i = 0; i < dateArray.length; i ++){
  //     alert (dateArray[i]);
  //   }

  // }
  
  

  // useEffect(() => {
  //   localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(schedule))
  // }, [schedule])

  return (
    <div className="App">
      <Router>
        <Switch>

          <Route path="/viewschedule">
            <ViewSchedule schedule={schedule} KEY={LOCAL_STORAGE_KEY} />
          </Route>
          
          <Route path="/">
            <CreateSchedule schedule={schedule} setSchedule={setSchedule} KEY={LOCAL_STORAGE_KEY} />
          </Route>

        </Switch>
        
        {/* <GroupCreated /> */}
      
        
      
        
      </Router>
    </div>
  );
}

export default App;
