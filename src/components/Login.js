import React, {useState} from 'react'
import firebase from "firebase/app";
import {useHistory} from "react-router-dom";

export default function Login(props) {
  let history = useHistory();

  const db = firebase.database();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  /**
   * This function allow you to modify a JS Promise by adding some status properties.
   * Based on: http://stackoverflow.com/questions/21485545/is-there-a-way-to-tell-if-an-es6-promise-is-fulfilled-rejected-resolved
   * But modified according to the specs of promises : https://promisesaplus.com/
   */
  function MakeQuerablePromise(promise) {
    // Don't modify any promise that has been already modified.
    if (promise.isResolved) return promise;

    // Set initial state
    var isPending = true;
    var isRejected = false;
    var isFulfilled = false;

    // Observe the promise, saving the fulfillment in a closure scope.
    var result = promise.then(
        function(v) {
            isFulfilled = true;
            isPending = false;
            return v; 
        }, 
        function(e) {
            isRejected = true;
            isPending = false;
            throw e; 
        }
    );

    result.isFulfilled = function() { return isFulfilled; };
    result.isPending = function() { return isPending; };
    result.isRejected = function() { return isRejected; };
    return result;
  }

  function handleSubmit(e) {
    e.preventDefault();

    var keyToLogin;

    console.log(email);

    var result = [];

    var query = db.ref("users")
      .orderByChild("email")
      .equalTo(email.toLowerCase())
      .limitToFirst(1)
      .once("child_added", snap => {
        keyToLogin = snap.key;
        console.log(snap.key);
      }).then(() => {
        query = db.ref("users/"+keyToLogin)
        // .orderByChild("password")
        // .equalTo(password)
        // .limitToFirst(1)
        .on("value", snap => {
          if (snap.exists()) {
            if (snap.val().password == password) {
              result.push(snap);
              
              props.setLoginStatus(true);
              
              console.log(snap.val());
              props.setMe(snap.val());
              
              history.push("/minasidor")
            } else {
              console.log("Felaktigt lösenord")
            }
          }
        })
        // .then(() => history.push("/minasidor"))
      })
    
    console.log(query);
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

          <button type="submit" className="button-v2">LOGGA IN</button>
        </form>
      </div>
      
    </div>
  )
}
