import React from 'react'

export default function PopupViewSchedule(props) {

    return (props.trigger) ? (
        <div className="popup">
          <div className="popup-inner1" id="box">
            <h6 id="for-h6-grattis" >Grattis!</h6>
            <p className="text" id="for-popup">Körschema skickat!</p>
            <button className="button-v2" id="btn" onClick={() => props.setTrigger(false)}>Okej</button>
            {props.children}
          </div>
        </div>
      ) : "";
}
