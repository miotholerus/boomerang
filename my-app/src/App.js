import futbol from './futbol-solid.svg';
import logo from './logo.svg';

import {
  BrowserRouter as Router,
  Route,
  Switch,
  Link
} from "react-router-dom";

import GroupCreated from './components/GroupCreated'
import CreateSchedule from './components/CreateSchedule'
import ViewSchedule from './components/ViewSchedule'

import {useState, useEffect} from 'react'

const LOCAL_STORAGE_KEY = "boomerang.schedule";

function App() {
  
  const [schedule, setSchedule] = useState([]);
  // setSchedule varje gång schemat ändras, börjar tomt
  // schedule ska bli en array/json med all info schemat behöver
  // Behövs en Schedule-komponent? En komponent per skjutstillfälle?

  // useEffect(() => {

  // }, [])

  // useEffect(() => {
  //   localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(schedule))
  // }, [schedule])

  return (
    <div className="App">
      <Router>
        <Switch>

          <Route path="/viewschedule">
            <ViewSchedule KEY={LOCAL_STORAGE_KEY} />
          </Route>
          
          <Route path="/">
            <CreateSchedule KEY={LOCAL_STORAGE_KEY} />
          </Route>

        </Switch>
        
        {/* <GroupCreated /> */}
      
        
      
        
      </Router>
    </div>
  );
}

export default App;
