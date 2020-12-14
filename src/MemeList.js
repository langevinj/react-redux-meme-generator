import React from 'react'
import { useSelector, useDispatch } from "react-redux"
import MemeCard from './MemeCard'

function MemeList() {
    const memes = useSelector(st => st.memes)
    const dispatch = useDispatch();
    //function for deleting a meme when clicked
    const deleteMeme = (evt) => {
        dispatch({ type: "DELETE", payload: evt.target.id })
    }

    return (
        <div className="meme-container">
            {memes ? memes.map(meme => <MemeCard id={meme.id} deleteMeme={deleteMeme} topText={meme.topText} bottomText={meme.bottomText} imgUrl={meme.imgUrl}/>) : null} 
        </div>
    )
}

export default MemeList;