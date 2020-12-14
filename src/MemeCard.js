import React from 'react' 
import './MemeCard.css'

function MemeCard({ id, deleteMeme, topText, bottomText, imgUrl }){
    return (
        <div style={`background-image: url(${imgUrl})`} id={id} onClick={deleteMeme} className="memecard">
            <h3 className="top-text">{topText}</h3>
            <h3 className="bottom-text">{bottomText}</h3>
        </div>
    )
}

export default MemeCard;