import React, { useState } from 'react'
import firebase from "firebase/app";
import { useHistory } from "react-router-dom";

export default function Registrera() {

  const db = firebase.database();

  let history = useHistory();

  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [child, setChild] = useState("");
  // + lista över barn?

  const [address, setAddress] = useState("");
  const [postalCode, setPostalCode] = useState("");
  const [city, setCity] = useState("");
  const country = "SWEDEN";

  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [repeatEmail, setRepeatEmail] = useState("");

  const [password, setPassword] = useState("");
  const [repeatPassword, setRepeatPassword] = useState("");

  // checkboxes send to email + phone

  function handleCreateAccount(e) {
    e.preventDefault();
    console.log("Kör handleCreateAccount");

    const usersRef = db.ref("users");

    const user = {
      child,
      email,
      firstName,
      lastName,
      location: {
        address,
        city,
        country,
        postalCode
      },
      password,
      phone
    }

    console.log("user: ", user);

    usersRef.push(user);

    console.log("ANVÄNDARE SKAPAD");

    alert("Grattis!\nDu kan nu gå till din inkorg "
    +"och bekräfta registreringen för att kunna logga in.")

    history.push("/");
  }

  return (
    <div className="page-content">

      <div className="loose-text-field">
        <h4>Registrera</h4>
      </div>

      <div className="box-a">

        <form onSubmit={e => handleCreateAccount(e)} className="form">

          {/* För- och efternamn - input-side-by-side? */}
          <div className="input-side-by-side">
            <div className="input-column">
              <label htmlFor="firstName" className="input-left">Förnamn&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</label>
              <input id="firstName" className="small-input input-left"
                value={firstName} onChange={e => setFirstName(e.target.value)}></input>
            </div>

            <div className="input-column">
              <label htmlFor="lastName" className="input-right">Efternamn</label>
              <input id="lastName" className="small-input input-right"
                value={lastName} onChange={e => setLastName(e.target.value)}></input>
            </div>
          </div>

          <div>
            <label htmlFor="child">Namn på barn</label>
            <input className="standard-input" id="child"
              value={child} onChange={e => setChild(e.target.value)}></input><br></br>
            <a href="">Lägg till fler barn</a><br></br>
            <br></br>
          </div>

          <div>
            <label>Adress</label>
            <input className="standard-input" id="address"
              value={address} onChange={e => setAddress(e.target.value)}></input>
          </div>


          {/* input-side-by-side? */}
          <div className="input-side-by-side">
            <div className="input-column">
              <label htmlFor="postalCode" className="input-left">Postnummer</label>
              <input className="small-input input-left" id="postalCode"
                value={postalCode} onChange={e => setPostalCode(e.target.value)}></input>
            </div>

            <div className="input-column">
              <label htmlFor="city" className="input-right">Postort</label>
              <input className="small-input input-right" id="city"
              value={city} onChange={e => setCity(e.target.value)}></input>
            </div>
          </div>

          <div>
            <label htmlFor="phone">Mobilnummer</label>
            <input className="standard-input" id="phone"
            value={phone} onChange={e => setPhone(e.target.value)}></input>
          </div>

          <div>
            <label htmlFor="email">E-post</label>
            <input className="standard-input" id="email" type="email"
            value={email} onChange={e => setEmail(e.target.value)}></input>
          </div>

          <div>
            <label htmlFor="email2">Bekräfta e-post</label>
            <input className="standard-input" id="email2" type="email"
            value={repeatEmail} onChange={e => setRepeatEmail(e.target.value)}></input>
          </div>

          <div>
            <label htmlFor="password">Lösenord</label>
            <input className="standard-input" type="password" id="password" minLength="8"
            value={password} onChange={e => setPassword(e.target.value)}></input>
          </div>

          <label htmlFor="password2">Bekräfta lösenord</label><br></br>
          <input className="standard-input" type="password" id="password" minLength="8"
          value={repeatPassword} onChange={e => setRepeatPassword(e.target.value)}></input>
          
          <span id="message"></span>
          <div>
            <h6>Skicka meddelanden till</h6>
            <input type="checkbox" id="e-post" name="epost"></input>
            <label htmlFor="e-post">E-post</label>
            <br></br>
            <input type="checkbox" id="mobilenr" name="mobilenr"></input>
            <label htmlFor="mobilenr">Mobilnumer</label>
          </div>
          <br></br>

          <div className="button-holder-center">
            <button type="submit" className="button-v2">SKAPA PROFIL</button>
          </div>

        </form>
      </div>
    </div>
  )
}
