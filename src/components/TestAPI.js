import React, {useState, usRef} from 'react'

export default function TestAPI() {

    const [origin, setOrigin] = useState("59.26078347858798,18.02139952888256"); // "Lerbäcksgränd 18, 124 66 Bandhagen"
    const [destination, setDestination] = useState("59.28772349484027,18.058070840530874"); // "Sockenvägen 290, 122 63 Enskede"

    const url = `https://api.distancematrix.ai/maps/api/distancematrix/json?origins=${origin}&destinations=${destination}&key=bp6pjpgmaCcdxjtccQlnDpjTPEUqk`;

    const submitForm = (event) => {
        event.preventDefault();
        
        fetch(url)
        .then(responseFromAPI =>
            responseFromAPI.json()
            .then(data =>
                alert(JSON.stringify(data))
            )
        );
    }

    return (
        <form onSubmit={(event) => submitForm(event)}>
            {/* <div>
                <label for="title">Title: </label>
                <input type="text" id="title" value={origin} onChange={(event) => setOrigin(event.target.value)}/>
            </div>
            <div>
                <label for="content">Content: </label>
                <textarea type="text" id="content" value={destination} onChange={(event) => setDestination(event.target.value)}/>
            </div> */}
            <div>
                <input type="submit" id="submitbutton" value="Send" />
            </div>
        </form>
    )
}
