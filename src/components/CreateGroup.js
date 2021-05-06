import React from 'react'
import Header from './Header'
import { AiOutlineLeft, AiOutlineClose } from "react-icons/ai"


export default function CreateGroup() {
    return (
        <div>
            <Header />
            <div className="page-content">
                <div>
                    <div className="sub-header-football">
                        <div className="leftcorner">
                            <AiOutlineLeft />
                        </div>
                        <div className="middel">
                            <h4>Skapa grupp</h4>
                        </div>
                        <div className="rightcorner">
                            <AiOutlineClose />
                        </div>
                    </div>
                    <div className="blackbackground">
                        <div className="whitebackground">
                            <form><br></br>
                                <p className="text">Namn på grupp:</p>
                                <input type="text" className="creategroupinfo borderradius" placeholder="Ex. Badmintongruppen"></input>
                                <p className="text">Meddelandetext:</p>
                                <textarea className="messagetext borderradius" value="Exempeltext:
Hej, här är en inbjudan till gruppen (namn) som vi pratade om. 
Gå med i gruppen så skapar vi ett gemensant körschema. Du registrar dig på boomerang.nu
Mvh (namn)"></textarea><br></br>
                                <p className="text">Bjud in med mail eller mobilnr</p>
                                <input type="text" className="creategroupinfo borderradius" placeholder="Fyll i mail eller mobilnummer"></input><br></br>
                                <button type="button" className='button-v2 '>
                                    <b>LÄGG TILL PERSONER</b>
                                </button>
                            </form>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    )
}