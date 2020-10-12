import React from 'react'

function Banner() {
    return(
        <div>
            <h1 className="banner"> Instructions: </h1>
            <ul>
                <li>Press 'X' to remove default players.</li>
                <li>Add players on the bottom input field.</li>
                <li> "+" and "-" buttons to update scores.</li>
                <li>Timer provided for your convenience.</li>
                <li> **You can go negative with the scores if you want 
                <span role="img" aria-label="idk-emoji"> 🤷‍♂️</span></li>      
            </ul>
        </div>
    )
}

export default Banner