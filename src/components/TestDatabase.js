import React, { useState } from 'react'
import firebase from "../util/firebase";

export default function TestDatabase() {
  // Test add members to database

  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [child, setChild] = useState("");
  const [address, setAddress] = useState("");


  function createMember(e) {
    e.preventDefault();
    console.log("Kör createMember");

    const membersRef = firebase.database().ref("Members");

    const user = {
      firstName,
      lastName,
      child,
      address
    }

    usersRef.push(user); // lägger till i listan över users
  }

  return (
    <form onSubmit={(e) => createMember(e)}>
      <p>
        Sida för att testa lägga in användare i databasen.
        De som läggs in kan senare användas för att hämta användare när vi bjuder in medlemmar till en grupp.
      </p>

      <label htmlFor="first-name">Förnamn</label><br></br>
      <input type="text" id="first-name" onChange={e => setFirstName(e.target.value)} value={firstName} /><br></br>

      <label htmlFor="last-name">Efternamn</label><br></br>
      <input type="text" id="last-name" onChange={e => setLastName(e.target.value)} value={lastName} /><br></br>

      <label htmlFor="child">Barnets namn</label><br></br>
      <input type="text" id="child" onChange={e => setChild(e.target.value)} value={child} /><br></br>

      <label htmlFor="address">Adress</label><br></br>
      <input type="text" id="address" onChange={e => setAddress(e.target.value)} value={address} /><br></br>

      <input type="submit" id="hejhopp" value="Registrera" />
    </form>
  )
}
