import React from 'react'
import { Link } from 'react-router-dom';

export default function PopupRegister(props) {

    return (props.trigger) ? (
        <div className="popup">
            <div className="popup-inner1" id="box">
                <h6 id="for-h6-grattis" >Grattis!</h6>
                <p className="text" id="for-popup">
                    Du kan nu gå till  din inkorg
                    och bekräfta registreringen
för att kunna logga in.</p>
<Link className="button-v2" id="btn-margin" to='/login'>LOGGA IN</Link>
                {props.children}
            </div>
        </div>
    ) : "";
}
