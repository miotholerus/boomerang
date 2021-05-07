import React, { useState, useEffect } from 'react'
import Header from './Header'
import { AiOutlineLeft, AiOutlineClose, AiOutlineUserAdd } from "react-icons/ai"
import firebase from "firebase/app";


export default function CreateGroup(props) {
    const db = firebase.database();


    // Tillfälliga states som uppdateras onChange, och sparas i databasen onSubmit
    const [groupName, setGroupName] = useState("");
    const [message, setMessage] = useState("Exempeltext:\nHej, här är en inbjudan till gruppen (namn) som vi pratade om. Gå med i gruppen så skapar vi ett gemensant körschema. Du registrar dig på boomerang.nu\nMvh (namn)")
    const [inviteEmail, setInviteEmail] = useState("");

    // inviteEmail läggs till i listan onClick
    const [emailList, setEmailList] = useState([]);

    function addToList(e) {
        e.preventDefault();

        // Tillfällig lösning: söka i medlemsregistret redan här?

        // let usersRef2 = firebase.database().ref("users/");
        // const usersRef = db.child("users");

        // usersRef.orderByChild("email").equalTo(inviteEmail);

        // Lägger till inviteEmail i emailList
        setEmailList(emailList => [...emailList, inviteEmail]);

        console.log(emailList);
    }

    return (props.trigger) ? (
        <div>
            {/* <Header /> */}
            <div className="page-content popup">
                <div>

                    <div className="popup-inner1">
                        <div className="sub-header-football">
                            <div className="leftcorner">
                                <AiOutlineLeft />
                            </div>
                            <div className="middel">
                                <h6 className="skapagrupp">Skapa grupp</h6>
                            </div>
                            <div className="rightcorner">
                                <AiOutlineClose />
                                <button className="close-btn" onClick={() => props.setTrigger(false)}>Stäng</button>
                                {props.children}
                            </div>
                        </div>
                    </div>

                    <div className=/*"blackbackground */"popup-inner2">
                        
                        
                        <div className="whitebackground">
                            
                            <form><br></br>
                                <p className="text">Namn på grupp:</p> {/* labels till inputfält? Se CreateScehdule hur */}
                                <input type="text" className="creategroupinfo borderradius" value={groupName} onChange={e => setGroupName(e.target.value)} placeholder="Ex. Badmintongruppen"></input>

                                <p className="text">Meddelandetext:</p>
                                <textarea className="messagetext borderradius" value={message} onChange={e => setMessage(e.target.value)}></textarea><br></br>

                                <p className="email text">Bjud in med mail eller mobilnr</p>
                                <input type="text" className="creategroupinfo borderradius" value={inviteEmail} onChange={e => setInviteEmail(e.target.value)}></input>

                                <button type="button" className='addmore' onClick={e => addToList(e)}>
                                    <b><AiOutlineUserAdd fontSize="25px" />Lägg till person</b>
                                </button>

                                <button type="button" className='button-v2'>
                                    <b>SPARA GRUPP</b>
                                </button>

                            </form>
                            {props.children}
                        </div>
                    </div>
                </div>

            </div>
        </div >
    ) : "";
}