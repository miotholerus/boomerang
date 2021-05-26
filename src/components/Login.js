import React, { useState, useEffect } from 'react'
import firebase from "firebase/app";
import { useHistory } from "react-router-dom";

export default function Login(props) {
  let history = useHistory();

  const db = firebase.database();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(false);

  useEffect(() => {
    setError(false);

  }, [email, password])

  function handleSubmit(e) {
    e.preventDefault();

    var keyToLogin;

    var queryOnEmail = db.ref("users")
      .orderByChild("email")
      .equalTo(email.toLowerCase())
      .limitToFirst(1)

    queryOnEmail.on("value", snap => {

      if (snap.exists()) {
        setError(false);

        queryOnEmail.on("child_added", snap => {
          
          keyToLogin = snap.key;

          db.ref("users/" + keyToLogin)
            .on("value", snap => {
              
              if (snap.exists()) {
                
                if (snap.val().password == password) {
                  setError(false);

                  props.setLoginStatus(true);

                  props.setMe(snap.val());
                  props.setMyId(keyToLogin);

                  history.push("/minasidor")
                } else {
                  console.log("Felaktigt lösenord")
                  setError(true);
                }
              }
            })
        })
      } else {
        console.log("Användaren hittades ej");
        setError(true);
      }
    })
    
  }

  return (
    <div className="page-content">
      <div className="loose-text-field">
        <h2>Logga in</h2>
      </div>

      <div className="box-a">
        <form onSubmit={e => handleSubmit(e)}>
          <label htmlFor="email">E-post</label>
          <input type="text" className="standard-input" id="email" required
            value={email} onChange={e => setEmail(e.target.value)}>
          </input>

          <label htmlFor="password">Lösenord</label>
          <input type="password" className="standard-input" id="password" required
            value={password} onChange={e => setPassword(e.target.value)}>
          </input>
          {error ? <div className="error">&nbsp;Felaktig epostadress eller lösenord</div> : null}
          <div className="button-holder-center">
            <button type="submit" className="button-v2">LOGGA IN</button>
          </div>
        </form>
      </div>
      <div className="loose-text-field">
        <p className="linkcolor">
          Har du inget konto? <a className="linkcolor" href="/registrera">Registrera dig här</a>
        </p>
      </div>

    </div>
  )
}
