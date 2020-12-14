import React from 'react' 
import './MemeCard.css'

function MemeCard({ id, deleteMeme, topText, bottomText, imgUrl }){
    console.log(imgUrl)
    return (
        <div className="memecontainer">
            <div style={{backgroundImage: `url(${imgUrl})`}} id={id} onClick={deleteMeme} className="memecard">
                <p className="topText">{topText}</p>
                <p className="bottomText">{bottomText
            }</p>
            </div> 
        </div>
    )
}

export default MemeCard;