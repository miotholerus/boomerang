import React from 'react'

export default function Registrera() {
    
    
    return (
        <div>
            <form className="register_form">
                <label for="namn">Namn (förnamn och efternamn)</label>
                <input placeholder="Namn" id="namn"></input>
                <br></br>
                <label>Namn på barn</label><br></br>
                <input placeholder="Namn på barn"  id="barn"></input>
                <br></br>
                <a href="">Lägg till fler barn</a><br></br>
                <label>Adress</label><br></br>
                <input placeholder="Adress" id="adress"></input>
                <br></br>
                <label>Mobilnumer</label><br></br>
                <input placeholder="Mobilnumer" id="mobilnr"></input>
                <br></br>
                <label>E-post</label><br></br>
                <input placeholder="E-post" id="epost" type="email"></input>
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
                    <button className="button-v2">SKAPA PROFIL</button>
            </form>

            
        </div>
    )
}
