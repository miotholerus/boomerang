import './App.css';
// $ npm install --save react-router-dom
import { BrowserRouter, Route, Link } from "react-router-dom";
import GroupCreated from './components/GroupCreated';
import CreateSchedule from './components/CreateSchedule';
import ViewSchedule from './components/ViewSchedule';
// or? put this in index.html
// <script src="https://unpkg.com/react-router-dom/umd/react-router-dom.min.js"></script>
// or? just this
const ReactRouterDOM = window.ReactRouterDOM; // contains functions BrowserRouter, Route, Link

function App() {

  return (
    <div className="App">
      {/* Router */}
      <GroupCreated />
      <CreateSchedule />
      <ViewSchedule />
    </div>
  );
}

export default App;
