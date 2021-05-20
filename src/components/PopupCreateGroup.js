import React, { useState, useEffect } from 'react'
import Header from './Header'
import { AiOutlineLeft, AiOutlineClose, AiOutlineUserAdd } from "react-icons/ai"
import firebase from "firebase/app";
import { Link } from 'react-router-dom';
import CreateSchedule from './CreateSchedule';


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
    // <div className="page-content blackbackground">
    // <div>
    <div className="popup">
      <div className="popup-inner1">
        {/* <form><br></br> */}
        <h6>Grattis!</h6>
        <p className="text">Du har nu skapat en grupp.</p>
        <p className="text">Vill du skapa körschema?</p>
        <Link className='button-v2' to='/CreateSchedule'>SKAPA KÖRSCHEMA</Link>
        <br></br>
        <Link className='goback linkcolor' to='/minasidor'>Tillbaks till Mina sidor</Link>
        {/* </form> */}
        {props.children}
      </div>
    </div>
    // // </div>
  ) : "";
}