import React, { useState } from 'react';
import { useDispatch } from "react-redux";
import { v4 as uuid} from 'uuid'

import './MemeGenerator.css'

function MemeGenerator() {
    const dispatch = useDispatch();
    const [formData, setFormData] = useState({
        topText: "",
        bottomText: "",
        imgUrl: "" 
    });
    
    const handleChange = (evt) => {
        const { name, value } = evt.target
        setFormData({
            ...formData,
            [name]: value
        });
    }

    const add = (evt) => {
        evt.preventDefault();
        const payload = {...formData, id: uuid()}
        dispatch({ type: "ADD", payload: payload})
    }

    return (
        <div>
            <h1>Make a Meme:</h1>
            <form onSubmit={add}>
                <div>
                    <label htmlFor="topText">Top Text:</label>
                    <textarea onChange={handleChange} name="topText" value={formData.topText} id="topText" row="4" cols="50"></textarea>   
                </div>
                <div>
                    <label htmlFor="bottomText">Bottom Text:</label>
                    <textarea onChange={handleChange} name="bottomText" value={formData.bottomText} id="bottonText" row="4" cols="50"></textarea>
                </div>
                <div>
                    <label htmlFor="imgUrl">Image Url:</label>
                    <input type="text" name="imgUrl" value={formData.imgUrl} id="imgUrl" onChange={handleChange}></input>
                </div>
                <div>
                    <button>Create a meme</button>
                </div>
            </form>
        </div>
    )
}

export default MemeGenerator;