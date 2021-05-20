import React, { useState } from 'react'
import firebase from "firebase/app";
import { useHistory } from "react-router-dom";

export default function Login(props) {
  let history = useHistory();

  const db = firebase.database();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  function handleSubmit(e) {
    e.preventDefault();

    var keyToLogin;

    var queryOnEmail = db.ref("users")
      .orderByChild("email")
      .equalTo(email.toLowerCase())
      .limitToFirst(1)
    // console.log("queryEmail: ", queryEmail);

    queryOnEmail.on("value", snap => {

      if (snap.exists()) {
        queryOnEmail.on("child_added", snap => {
          
          keyToLogin = snap.key;

          db.ref("users/" + keyToLogin)
            .on("value", snap => {
              
              if (snap.exists()) {
                
                if (snap.val().password == password) {
                  props.setLoginStatus(true);

                  // console.log(snap.val());
                  props.setMe(snap.val());
                  props.setMyId(keyToLogin);

                  history.push("/minasidor")
                } else {
                  console.log("Felaktigt lösenord")
                }
              }
            })
        }) 
      } else {
        console.log("NEJ");
      }
    })
    

    // queryEmail.then(() => {
    //   console.log("queryEmail then", queryEmail);
    //   db.ref("users/" + keyToLogin)
    //     .on("value", snap => {
    //       if (snap.exists()) {
    //         if (snap.val().password == password) {
    //           result.push(snap);

    //           props.setLoginStatus(true);

    //           console.log(snap.val());
    //           props.setMe(snap.val());

    //           history.push("/minasidor")
    //         } else {
    //           console.log("Felaktigt lösenord")
    //         }
    //       }
    //     })
    //   // .then(() => history.push("/minasidor"))
    // })

    // console.log(queryEmail);
    // var querableQuery = MakeQuerablePromise(query);

    // console.log("Final fulfilled:", querableQuery.isFulfilled());//true
    // console.log("Final rejected:", querableQuery.isRejected());//false
    // console.log("Final pending:", querableQuery.isPending());//false
  }

  return (
    <div className="page-content">
      <div className="loose-text-field">
        <h2>Logga in</h2>
      </div>

      <div className="box-a">
        <form onSubmit={e => handleSubmit(e)}>
          <label htmlFor="email">E-post</label>
          <input type="text" className="standard-input" id="email"
            value={email} onChange={e => setEmail(e.target.value)}>
          </input>

          <label htmlFor="password">Lösenord</label>
          <input type="password" className="standard-input" id="password"
            value={password} onChange={e => setPassword(e.target.value)}>
          </input>
          <div className="button-holder-center">
            <button type="submit" className="button-v2">LOGGA IN</button>
          </div>
        </form>
      </div>
      <div className="loose-text-field">
        <p>
          Har du inget konto? <a href="/registrera">Registrera dig här</a>
        </p>
      </div>

    </div>
  )
}
