import React from 'react'
import Header from './Header'


export default function MinaSidor() {
    return (
        <div>
            <Header/>
            <h3 className="topline">Mina Sidor</h3>
            
            <div>
                <label className="tagg1">Skjutsningar</label>
                <div className="infoskjuts">
                <p>Här får du upp alla dina kommande skjutsningar. För att skjutsningar ska visas behöver du gå med i en grupp och skapa ett körschema.</p>
                </div>
            
                <label className="tagg2">Grupper</label>
                <div className="infogrupp">
                <p>Du är inte med i någon grupp än. Skapa en ny grupp och ett nytt körschema.</p>
                <br></br>
                <button className="button-v2">Skapa ny grupp</button>
                </div>
                <div>
                    <h3 className="topline_2">Så kommer du igång</h3>
                    <ol className="how_to" start="1">
                        <li className="info_text">Skapa en ny grupp</li>
                        <li className="info_text">Lägg till medlemar</li>
                        <li className="info_text">Skapa ett körschema</li>
                    </ol>
                    
                </div>
            </div>
        </div>
    )
}
