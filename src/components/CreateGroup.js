import React, { useState, useEffect } from 'react'
import Header from './Header'
import { AiOutlineLeft, AiOutlineClose } from "react-icons/ai"


export default function CreateGroup() {

  // Tillfälliga states som uppdateras onChange, och sparas i databasen onSubmit
  const [groupName, setGroupName] = useState("");
  const [message, setMessage] = useState("Exempeltext:\nHej, här är en inbjudan till gruppen (namn) som vi pratade om. Gå med i gruppen så skapar vi ett gemensant körschema. Du registrar dig på boomerang.nu\nMvh (namn)")
  const [inviteEmail, setInviteEmail] = useState("");

  // inviteEmail läggs till i listan onClick
  const [emailList, setEmailList] = useState([]);

  function addToList() {
    setEmailList(emailList => [...emailList, inviteEmail]);
  }

  return (
    <div>
      <Header />
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

              <form><br></br>
                <p className="text">Namn på grupp:</p> {/* labels till inputfält? Se CreateScehdule hur */}
                <input type="text" className="creategroupinfo borderradius" value={groupName} onChange={e => setGroupName(e.target.value)} placeholder="Ex. Badmintongruppen"></input><br></br>
                
                <p className="text">Meddelandetext:</p>
                <textarea className="messagetext borderradius" value={message} onChange={e => setMessage(e.target.value)}></textarea><br></br>
                
                <p className="email">Bjud in med mail eller mobilnr</p>
                <input type="text" className="creategroupinfo borderradius" value={inviteEmail} onChange={e => setInviteEmail(e.target.value)}></input><br></br>
                
                <button type="button" className='button-v2' onClick={e => addToList(e)}>
                  <b>Lägg till person</b>
                </button>

                <button type="button" className='button-v2'>
                  <b>SPARA GRUPP</b>
                </button>

              </form>

            </div>
          </div>
        </div>

      </div>
    </div>
  )
}