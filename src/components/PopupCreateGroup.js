import React, { useState, useEffect } from 'react'
import Header from './Header'
import { AiOutlineLeft, AiOutlineClose, AiOutlineUserAdd } from "react-icons/ai"
import firebase from "firebase/app";


export default function PopupCreateGroup(props) {
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

                <div className=/*"blackbackground */"popup-inner2">

                    <div className="whitebackground">

                        <form><br></br>
                            <h6 className="Grattis">Grattis!</h6>

                            <p className="text">Du har nu skapat en grupp.</p>
                            <p className="text">Vill du skapa körschema?</p>
                            <button type="button" className='addmore' onClick={e => addToList(e)}>
                                <b>Tillbaks till Mina sidor</b>
                            </button>

                            <button type="button" className='button-v2'>
                                <b>SPARA GRUPP</b>
                            </button>

                        </form>
                        {props.children}
                    </div>
                </div>

            </div>
        </div >
    ) : "";
}