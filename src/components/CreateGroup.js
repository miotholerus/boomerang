import React, { useState, useEffect } from 'react'
import Header from './Header'
import { AiOutlineLeft, AiOutlineClose, AiOutlineUserAdd } from "react-icons/ai"
import firebase from "firebase/app";
import AltUserLogo from "./logos/AltUserLogo";
import { useHistory } from "react-router-dom";
import PopupCreateGroup from './PopupCreateGroup';


export default function CreateGroup(props) {

  const db = firebase.database();

  const [buttonPopup, setButtonPopup] = useState(false);
  const db = firebase.database();

  let history = useHistory();

  const adminName = props.me.firstName; // Ska hämtas från medlemsregistret

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
  }
  function saveGroup(e) {
    e.preventDefault();

    const groupsRef = firebase.database().ref("groups");

    const newGroup = {
      admin: props.me,
      title: groupName,
      message,
      members: userSnaps.map(user => user.val())
    }

    // groupsRef.push(newGroup); // lägger till i databassamlingen groups


  // // Ska visas en popup här
  // alert("Grattis!\nDu har nu skapat en grupp.\nGår tillbaka till Mina sidor.")
  setButtonPopup(true);
  // history.push("/minasidor"); // Går tillbaka till Mina sidor
}
return (
  <div>
    <div className="page-content">
      <div>
        <div className="sub-header">
          <div className="leftcorner">
            <AiOutlineLeft />
          </div>
          <div className="middel">
            <h6>Skapa grupp</h6> {/* ska eg vara h4, men buggar då */}
          </div>
          <div className="rightcorner">
            <AiOutlineClose />
          </div>
        </div>


        {/* OBS: Det finns redan klasser för vita boxar */}
        {/* <div className="blackbackground"> */}
        <div className="box-a">
          <form onSubmit={e => saveGroup(e)}><br></br>
            <label>Namn på grupp:</label> {/* labels till inputfält? Se CreateScehdule hur */}
            <input type="text" className="standard-input" value={groupName} onChange={e => setGroupName(e.target.value)} placeholder="Ex. Badmintongruppen"></input>
            <label>Meddelandetext:</label>
            <textarea className="messagetext" value={message} onChange={e => setMessage(e.target.value)}></textarea><br></br>
            <label>Bjud in med mail eller mobilnr</label>
            <input type="email" className="standard-input" value={inviteEmail} onChange={e => setInviteEmail(e.target.value)}></input>
            <button type="button" className='addmore' onClick={e => addToList(e)}>
              <b><AiOutlineUserAdd fontSize="25px" />Lägg till person</b>
            </button>
            {emailList.length ?
              <>
                <table>
                  {emailList.map(email => {
                    return (
                      <tr key={email}>
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
              <div className="button-holder-center">
                <button type="submit" className='button-v2'>
                  <b>SPARA GRUPP</b>
                </button>
              </div>
              : null}
          </form>
        </div>
        {/* </div> */}
      </div>
    </div>
    <PopupCreateGroup trigger={buttonPopup} setTrigger={setButtonPopup}></PopupCreateGroup>
  </div >
)
}