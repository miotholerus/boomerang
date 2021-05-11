import React, { useState, useEffect } from 'react'
import firebase from "../../util/firebase";

export default function TestDatabase() {
  // Test add members to database
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [child, setChild] = useState("");
  const [address, setAddress] = useState("");

  const [userList, setUserList] = useState([]);

  useEffect(() => {
    const usersRef = firebase.database().ref("users");

    usersRef.on("value", snapshot => {
      console.log(snapshot.val());

      const users = snapshot.val();

      const userList = [];
      for (let id in users) {
        userList.push(users[id]);
      }
      console.log(userList);
      setUserList(userList)

    });
  }, [])


  function createUser(e) {
    //e.preventDefault();
    console.log("Kör createUser");

    // const dbRef = firebase.database().ref();
    // dbRef.child("Members").child("firstName").get().then((snapshot) => {
    //   if (snapshot.exists()) {
    //     console.log(snapshot.val());
    //   } else {
    //     console.log("No data available");
    //   }
    // }).catch((error) => {
    //   console.error(error);
    // });


    const usersRef = firebase.database().ref("users");

    const user = {
      firstName,
      lastName,
      child,
      address
    }

    console.log("user: ", user);

    usersRef.push(user); // lägger till i listan över users






  }

  return (
    <div>
      <form onSubmit={(e) => createUser(e)}>
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
      {userList.map(user => (
        <div>
          Förnamn: {user.firstName}<br></br>
          Efternamn: {user.lastName}<br></br>
          Barn: {user.child}<br></br>
          Adress: {user.address}<br></br>
          {user.email ? user.email : null}<br></br><br></br>
        </div>
      ))}
    </div>

  )
}
