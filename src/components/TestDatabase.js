import React, {useState} from 'react'
import firebase from "../util/firebase";

export default function TestDatabase() {
  // Test add members to database
  
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [child, setChild] = useState("");
  const [address, setAddress] = useState("");

  
  function createMember() {
    const membersRef = firebase.database().ref("Members");
  
    const member = {
      firstName,
      lastName,
      child,
      address,
    }
  
    membersRef.push(member); // lägger till i listan över members
  }  

  return (
    <form>
      <label for="first-name">Förnamn</label><br></br>
      <input type="text" id="first-name" onChange={e => setFirstName(e.target.value)} value={firstName}/><br></br>
      
      <label for="last-name">Efternamn</label><br></br>
      <input type="text" id="last-name" onChange={e => setLastName(e.target.value)} value={lastName}/><br></br>
      
      <label for="child">Barnets namn</label><br></br>
      <input type="text" id="child" onChange={e => setChild(e.target.value)} value={child}/><br></br>

      <label for="address">Adress</label><br></br>
      <input type="text" id="address" onChange={e => setAddress(e.target.value)} value={address}/><br></br>

      <button onClick={createMember}>Registrera</button>
    </form>
  )
}
