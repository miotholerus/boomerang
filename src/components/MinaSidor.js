import React from 'react'
import Header from './Header'
export default function MinaSidor() {
    return (
        <div>
            <Header/>
            <h3 className="topline">Mina Sidor</h3>
            <label className="tagg1">Skjutsningar</label>
            <div className="infoskjuts">
                <p>Här får du upp alla dina kommande skjutsningar. För att skjutsningar ska visas behöver du gå med i en grupp och skapa ett körschema.</p>
            </div>
            <label className="tagg2">Grupper</label>
            <div className="infogrupp">
                <p>Du är inte med i någon grupp än. Skapa en ny grupp och ett nytt körschema.</p>
                <button className="button-grupp">Skapa ny grupp</button>
                </div>
            
        </div>
    )
}
