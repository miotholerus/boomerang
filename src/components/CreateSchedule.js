import React from 'react'


export default function CreateSchedule() {
  function createTheSchedule(){

  }
  return (


    <div >

      <div className="container create-schedule-box">
        <form>
          <b>Skapa körschema</b>
          <label for="container create-schedule-box"><br></br>Fyll i destination: </label>
          <input type="text" class="s" name="new" />
          <br></br><br></br>
        </form>
      </div>

  <div className="s">
      <button onclick={() =>createTheSchedule()}  class="dropbtn">Välj dag för skjustning</button>
        <label for="container create-schedule-box">Måndag</label>
        <input type="radio" className="s" name="new" /><br></br>
        <label for="container create-schedule-box">Tisdag</label>
        <input type="radio" className="s" name="new" /><br></br>
        <label for="container create-schedule-box">Onsdag</label>
        <input type="radio" className="s" name="new" /><br></br>
        <label for="container create-schedule-box">Torsdag</label>
        <input type="radio" className="s" name="new" /><br></br>
        <label for="container create-schedule-box">Fredag</label>
        <input type="radio" className="s" name="new" /><br></br>
        <label for="container create-schedule-box">Lördag</label>
        <input type="radio" className="s" name="new" /><br></br>
        <label for="container create-schedule-box">Söndag</label>
        <input type="radio" className="s" name="new" /><br></br>
      </div>
    </div>
  )
}

window.onclick = function(event) {
  if (!event.target.matches('.dropbtn')) {
    var dropdowns = document.getElementsByClassName("dropdown-content");
    var i;
    for (i = 0; i < dropdowns.length; i++) {
      var openDropdown = dropdowns[i];
      if (openDropdown.classList.contains('show')) {
        openDropdown.classList.remove('show');
     }
    }
  }
}