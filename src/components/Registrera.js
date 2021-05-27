import React, { useState } from 'react'
import firebase from "firebase/app";
import { useHistory } from "react-router-dom";
import PopupRegister from './PopupRegister'

export default function Registrera() {

  const db = firebase.database();

  let history = useHistory();

  const [firstName, setFirstName] = useState("David");
  const [lastName, setLastName] = useState("Dahl");
  const [child, setChild] = useState("Dezi");
  // + lista över barn?

  const [address, setAddress] = useState("Dagövägen 13");
  const [postalCode, setPostalCode] = useState("12237");
  const [city, setCity] = useState("");
  const country = "SWEDEN";

  const [phone, setPhone] = useState("0734444444");
  const [email, setEmail] = useState("davidcrud@gmail.com");
  const [repeatEmail, setRepeatEmail] = useState("davidcrud@gmail.com");

  const [password, setPassword] = useState("crudcrud");
  const [repeatPassword, setRepeatPassword] = useState("crudcrud");
  const [buttonPopup, setButtonPopup] = useState(false);

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

    // alert("Grattis!\nDu kan nu gå till din inkorg "
    // +"och bekräfta registreringen för att kunna logga in.")

    // history.push("/");
    setButtonPopup(true);
  }

  return (
    <div className="page-content">

      <div className="loose-text-field">
        <h2>Registrera</h2>
      </div>

      <div className="box-a">

        <form onSubmit={e => handleCreateAccount(e)} className="form">

          {/* För- och efternamn - input-side-by-side? */}
          <div className="input-side-by-side">
            <div className="input-column">
              <label htmlFor="firstName" className="input-left">Förnamn&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</label>
              <input id="firstName" className="small-input input-left" required
                value={firstName} onChange={e => setFirstName(e.target.value)}></input>
            </div>

            <div className="input-column">
              <label htmlFor="lastName" className="input-right">Efternamn</label>
              <input id="lastName" className="small-input input-right" required
                value={lastName} onChange={e => setLastName(e.target.value)}></input>
            </div>
          </div>

          <div>
            <label htmlFor="child">Namn på barn</label>
            <input className="standard-input" id="child" required
              value={child} onChange={e => setChild(e.target.value)}></input><br></br>
            <a className="linkcolor" href="">Lägg till fler barn</a><br></br>
            <br></br>
          </div>

          <div>
            <label>Adress</label>
            <input className="standard-input" id="address" required
              value={address} onChange={e => setAddress(e.target.value)}></input>
          </div>


          {/* input-side-by-side? */}
          <div className="input-side-by-side">
            <div className="input-column">
              <label htmlFor="postalCode" className="input-left">Postnummer</label>
              <input className="small-input input-left" id="postalCode" required
                value={postalCode} onChange={e => setPostalCode(e.target.value)}></input>
            </div>

            <div className="input-column">
              <label htmlFor="city" className="input-right">Postort</label>
              <input className="small-input input-right" id="city" required
              value={city} onChange={e => setCity(e.target.value)}></input>
            </div>
          </div>

          <div>
            <label htmlFor="phone">Mobilnummer</label>
            <input className="standard-input" id="phone" required
            value={phone} onChange={e => setPhone(e.target.value)}></input>
          </div>

          <div>
            <label htmlFor="email">E-post</label>
            <input className="standard-input" id="email" type="email" required
            value={email} onChange={e => setEmail(e.target.value)}></input>
          </div>

          <div>
            <label htmlFor="email2">Bekräfta e-post</label>
            <input className="standard-input" id="email2" type="email" required
            value={repeatEmail} onChange={e => setRepeatEmail(e.target.value)}></input>
          </div>

          <div>
            <label htmlFor="password">Lösenord</label>
            <input className="standard-input" type="password" id="password" minLength="8" required
            value={password} onChange={e => setPassword(e.target.value)}></input>
          </div>

          <label htmlFor="password2">Bekräfta lösenord</label><br></br>
          <input className="standard-input" type="password" id="password" minLength="8" required
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
      <PopupRegister trigger={buttonPopup} setTrigger={setButtonPopup}></PopupRegister>
    </div>
  )
}
