
import React from 'react'
import Header from './Header'

function Football() {
  return (
    <svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="futbol" className="svg-inline--fa fa-futbol fa-w-16" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
      <path fill="currentColor" d="M504 256c0 136.967-111.033 248-248 248S8 392.967 8 256 119.033 8 256 8s248 111.033 248 248zm-48 0l-.003-.282-26.064 22.741-62.679-58.5 16.454-84.355 34.303 3.072c-24.889-34.216-60.004-60.089-100.709-73.141l13.651 31.939L256 139l-74.953-41.525 13.651-31.939c-40.631 13.028-75.78 38.87-100.709 73.141l34.565-3.073 16.192 84.355-62.678 58.5-26.064-22.741-.003.282c0 43.015 13.497 83.952 38.472 117.991l7.704-33.897 85.138 10.447 36.301 77.826-29.902 17.786c40.202 13.122 84.29 13.148 124.572 0l-29.902-17.786 36.301-77.826 85.138-10.447 7.704 33.897C442.503 339.952 456 299.015 456 256zm-248.102 69.571l-29.894-91.312L256 177.732l77.996 56.527-29.622 91.312h-96.476z"></path>
    </svg>
  )
}

export default function CreateSchedule() {
  return (
    <div>
      <Header />
      <div className="page-content">
        <div className="sub-header side-by-side">
          <div className="icon-column">
            <Football />
          </div>
          <div className="group-column">
            <p>Fotbollsgruppen<br></br>
            Peter, Hanna, Siri</p>
          </div>
        </div>
        <form className="container form">
          <div>
            <h3>Skapa körschema</h3>
            <div className="container create-schedule-box">
              <form>
                <label for="container create-schedule-box"><br></br>Fyll i destination: </label>
                <input type="text" className="container create-schedule-box" name="new" />
                <br></br><br></br>
              </form>
            </div>

            <input className="standard-input" placeholder="Fyll i destinationen" id="fyll-i-destination"></input>
            <br></br>
            <input className="standard-input" ></input>

            <select placeholder="Välj dag för skjutsning" id="valj-dag-for-skjutsning">
              <option value="måndag">Måndag</option>
              <option value="tisdag">Tisdag</option>
              <option value="onsdag">Onsdag</option>
              <option value="torsdag">Torsdag</option>
              <option value="fredag">Fredag</option>
              <option value="lördag">Lördag</option>
              <option value="söndag">Söndag</option>
            </select>

            <br></br>
            <input className="standard-input" placeholder="Välj antal veckor" id="valj-antal-veckor"></input>

          </div>
          <div>
            <p>Tid för aktivitet:</p>

            <div className="input-side-by-side">
              <input className="small-input" placeholder="Aktivitetens start" id="aktivitetens-start"></input>

              <input className="small-input" placeholder="Aktivitetens slut" id="aktivitetens-slut"></input>
            </div>

            <br></br>
            <input className="standard-input" placeholder="Välj ordning för chaufförer" id="valj-ordning-for-chaufforer"></input>

          </div>
          <div id="upphamtningslista">
            <h5>Upphämtningslista:</h5>
          </div>
        </form>
      </div>
    </div>
  )
}









// import React from 'react'


// export default function CreateSchedule() {
//   function createTheSchedule(){

//   }
//   return (


//     <div >

      // <div className="container create-schedule-box">
      //   <form>
      //     <b>Skapa körschema</b>
      //     <label for="container create-schedule-box"><br></br>Fyll i destination: </label>
      //     <input type="text" class="s" name="new" />
      //     <br></br><br></br>
      //   </form>
      // </div>

//   <div className="s">
//       <button onclick={() =>createTheSchedule()}  class="dropbtn">Välj dag för skjustning</button>
//         <label for="container create-schedule-box">Måndag</label>
//         <input type="radio" className="s" name="new" /><br></br>
//         <label for="container create-schedule-box">Tisdag</label>
//         <input type="radio" className="s" name="new" /><br></br>
//         <label for="container create-schedule-box">Onsdag</label>
//         <input type="radio" className="s" name="new" /><br></br>
//         <label for="container create-schedule-box">Torsdag</label>
//         <input type="radio" className="s" name="new" /><br></br>
//         <label for="container create-schedule-box">Fredag</label>
//         <input type="radio" className="s" name="new" /><br></br>
//         <label for="container create-schedule-box">Lördag</label>
//         <input type="radio" className="s" name="new" /><br></br>
//         <label for="container create-schedule-box">Söndag</label>
//         <input type="radio" className="s" name="new" /><br></br>
//       </div>
//     </div>
//   )
// }

// window.onclick = function(event) {
//   if (!event.target.matches('.dropbtn')) {
//     var dropdowns = document.getElementsByClassName("dropdown-content");
//     var i;
//     for (i = 0; i < dropdowns.length; i++) {
//       var openDropdown = dropdowns[i];
//       if (openDropdown.classList.contains('show')) {
//         openDropdown.classList.remove('show');
//      }
//     }
//   }
// }