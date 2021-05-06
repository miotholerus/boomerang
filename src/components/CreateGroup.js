import React, { useState, useEffect } from 'react'
import Header from './Header'
import { AiOutlineLeft, AiOutlineClose, AiOutlineUserAdd } from "react-icons/ai"
import firebase from "firebase/app";
import AltUserLogo from "./logos/AltUserLogo";


export default function CreateGroup() {

  const db = firebase.database();

  const adminName = "Alba"; // Ska hämtas från medlemsregistret

  // Tillfälliga states som uppdateras onChange, och sparas i databasen onSubmit
  const [groupName, setGroupName] = useState("");
  const [message, setMessage] = useState(`Exempeltext:\nHej, här är en inbjudan till skjutsgruppen som vi pratade om. Gå med i gruppen så skapar vi ett gemensamt körschema. Du registrerar dig på boomerang.nu\nMvh ${adminName}`)
  const [inviteEmail, setInviteEmail] = useState("");

  // inviteEmail läggs till i listan onClick
  const [emailList, setEmailList] = useState([]);
  const [userSnaps, setUserSnaps] = useState([]);


  function addToList(e) {
    e.preventDefault();

    // Tillfällig lösning: söka i medlemsregistret redan här?

    // let usersRef2 = firebase.database().ref("users/");


    const query = db.ref("users")           // SELECT * FROM users
      .orderByChild("email")                // WHERE email
      .equalTo(inviteEmail.toLowerCase())   // = inviteEmail
      .limitToFirst(1);                     // LIMIT 1;

    query.on("child_added", snap => {
      setEmailList(emailList => [...emailList, inviteEmail.toLowerCase()]);

      setUserSnaps(userSnaps => [...userSnaps, snap]);
      // snap.key = "-MZx8..."
      // snap.val() = elementets innehåll
      // snap.val().firstName = t.ex "Berit"

      //console.log(emailList);
      setInviteEmail("");

    })

    query.on("value", snapshot => {
      //console.log("value, ", snapshot.val());

      // const userList = [];
      // for (let id in users) {
      //   userList.push(users[id]);
      // }
      // console.log(userList);
      // setUserList(userList)

    });

    // var dbRef = db.ref("users");
    // dbRef.orderByChild("email").equalTo(inviteEmail).limitToFirst(1).on("child_added", snap => {
    //   console.log(snap.val());
    // })

    // Lägger till inviteEmail i emailList


    // console.log(emailList);
  }

  return (
    <div>
      {/* <Header /> */}
      <div className="page-content">
        <div>

          <div className="sub-header-football">
            <div className="leftcorner">
              <AiOutlineLeft />
            </div>
            <div className="middel">
              <h4>Skapa grupp</h4>
            </div>
            <div className="rightcorner">
              <AiOutlineClose />
            </div>
          </div>

          <div className="blackbackground">
            <div className="whitebackground">

              <form ><br></br>
                <p className="text">Namn på grupp:</p> {/* labels till inputfält? Se CreateScehdule hur */}
                <input type="text" className="creategroupinfo borderradius standard-input" value={groupName} onChange={e => setGroupName(e.target.value)} placeholder="Ex. Badmintongruppen"></input>

                <p className="text">Meddelandetext:</p>
                <textarea className="messagetext borderradius standard-input" value={message} onChange={e => setMessage(e.target.value)}></textarea><br></br>

                <p className="text">Bjud in med mail eller mobilnr</p>
                <input type="email" className="creategroupinfo borderradius standard-input" value={inviteEmail} onChange={e => setInviteEmail(e.target.value)}></input>

                <button type="button" className='addmore' onClick={e => addToList(e)}>
                  <b><AiOutlineUserAdd fontSize="25px" />Lägg till person</b>
                </button>

                {emailList.length ?
                  <>
                    <table>
                      {emailList.map(email => {
                        console.log(email)
                        return (
                          <tr>
                            <td>&nbsp;&nbsp;&nbsp;<AltUserLogo /></td>
                            <td>&nbsp;{email}</td>
                          </tr>
                        )
                      })}
                    </table>
                    <br></br>
                  </>
                  : null}

                {emailList.length ?
                  <button type="submit" className='button-v2'>
                    <b>SPARA GRUPP</b>
                  </button>
                  : null}

              </form>

            </div>
          </div>
        </div>

      </div>
    </div >
  )
}