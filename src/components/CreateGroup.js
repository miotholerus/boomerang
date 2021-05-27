import React, { useState } from 'react'
import { AiOutlineLeft, AiOutlineClose, AiOutlineUserAdd } from "react-icons/ai"
import firebase from "firebase/app";
import AltUserLogo from "./logos/AltUserLogo";
import { useHistory } from "react-router-dom";
import PopupCreateGroup from './PopupCreateGroup';


export default function CreateGroup({ me, myId, setCurrentGroup }) {

  const [buttonPopup, setButtonPopup] = useState(false);
  const db = firebase.database();

  let history = useHistory();

  const adminName = me.firstName; // Ska hämtas från medlemsregistret

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
      admin: me,
      title: groupName,
      message,
      members: userSnaps.map(user => user.val())
    }

    groupsRef.push(newGroup); // lägger till i databassamlingen groups

    setCurrentGroup(newGroup);

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
              <input type="text" className="standard-input" value={groupName} required
                onChange={e => setGroupName(e.target.value)} placeholder="Ex. Badmintongruppen"></input>
              
              <label>Meddelandetext:</label>
              <textarea className="messagetext" value={message} onChange={e => setMessage(e.target.value)}></textarea><br></br>
              
              <label>Bjud in med mail eller mobilnummer</label>
              <input type="email" className="standard-input" value={inviteEmail} onChange={e => setInviteEmail(e.target.value)}></input>
              
              <button type="button" className='addmore' onClick={e => addToList(e)}>
                <svg width="25" height="25" viewBox="0 0 21 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M16.6667 1.82617V6.78269" stroke="#363636" stroke-width="2" stroke-miterlimit="10" stroke-linecap="round" />
                  <path d="M14.1667 4.30444H19.1667" stroke="#363636" stroke-width="2" stroke-miterlimit="10" stroke-linecap="round" />
                  <path d="M8.31019 11.0422C10.5926 10.8254 12.3765 8.87373 12.3765 6.43419C12.3765 3.88623 10.3827 1.82617 7.91667 1.82617C5.45062 1.82617 3.45679 3.88623 3.45679 6.43419C3.45679 8.87373 5.24074 10.8254 7.52315 11.0422C3.74537 11.2862 0.833336 14.5118 0.833336 18.6319V19.174H15V18.6319C15 14.5118 12.088 11.2862 8.31019 11.0422ZM4.50618 6.43419C4.50618 4.48256 6.02778 2.91041 7.91667 2.91041C9.80556 2.91041 11.3272 4.48256 11.3272 6.43419C11.3272 8.38582 9.80556 9.95797 7.91667 9.95797C6.02778 9.95797 4.50618 8.38582 4.50618 6.43419ZM1.90895 18.0898C2.14506 14.6473 4.63735 12.1264 7.91667 12.1264C11.196 12.1264 13.6883 14.6473 13.9244 18.0898H1.90895Z" fill="#363636" stroke="#363636" stroke-miterlimit="10" />
                </svg>
                <b id="lägg-till-person">Lägg till person</b>
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