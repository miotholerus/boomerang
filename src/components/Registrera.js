import React, {useState} from 'react'

export default function Registrera() {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [child, setChild] = useState("");
  // + lista över barn?

  const [address, setAddress] = useState("");
  const [postalCode, setPostalCode] = useState(0);
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

    
  }

  return (
    <div className="page-content">
      <div ></div>
      <form onSubmit={e => handleCreateAccount(e)} className="register_form">
        
        {/* För- och efternamn - input-side-by-side? */}
        <label for="firstName">Förnamn</label><br></br>
        <input id="firstName" className="standard-input"></input>
        <br></br>
        <label for="lastName">Efternamn</label><br></br>
        <input id="lastName"></input>
        <br></br>

        <label>Namn på barn</label><br></br>
        <input id="child"></input><br></br>
        <a href="">Lägg till fler barn</a><br></br>
        <br></br>

        <label>Adress</label><br></br>
        <input id="address"></input>
        <br></br>

        {/* input-side-by-side? */}
        <label>Postnummer</label><br></br>
        <input id="postalCode"></input>
        <br></br>
        <label>Postort</label><br></br>
        <input id="city"></input>
        <br></br>
        
        
        <label>Mobilnummer</label><br></br>
        <input id="phone"></input>
        <br></br>
        
        <label>E-post</label><br></br>
        <input id="email" type="email"></input>
        <br></br>
        
        <label>Bekräfta e-post</label><br></br>
        <input placeholder="Bekräfta e-post" id="epost" type="email"></input>
        <br></br>
        
        <label>Lösenord</label><br></br>
        <input type="password" placeholder="Lösenord" id="lösenord" minLength="8"></input>
        <br></br>
        
        <label>Bekräfta lösenord</label><br></br>
        <input type="password" placeholder="Bekräfta lösenord" id="bekräfta_lösenord" minLength="8" ></input>
        <span id="message"></span>

        <div>
          <input type="checkbox" id="e-post" name="epost"></input>
          <label for="e-post">E-post</label>
          <br></br>
          <input type="checkbox" id="mobilenr" name="mobilenr"></input>
          <label for="mobilenr">Mobilnumer</label>
        </div>
        <br></br>
        <button type="submit" className="button-v2">SKAPA PROFIL</button>
      </form>


    </div>
  )
}
