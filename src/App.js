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

import {useState} from 'react'
// import StateComponent from './StateComponent'

function App() {
  const [schedule, setSchedule] = useState([])
  // setSchedule varje gång schemat ändras, börjar tomt
  // schedule ska bli en array/json med all info schemat behöver
  // Behövs en Schedule-komponent? En komponent per skjutstillfälle?

  

  return (
    <div className="App">
      {/* {state}
      <StateComponent setState={setState}/> */}
      
      {/* <GroupCreated /> */}
    
      <CreateSchedule schedule={schedule} setSchedule={setSchedule} />


    
      {/* <ViewSchedule /> */}

    </div>
  );
}

export default App;
