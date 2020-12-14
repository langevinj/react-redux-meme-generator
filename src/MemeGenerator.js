import React, { useState } from 'react';
import { useDispatch } from "react-redux";
import { v4 as uuid} from 'uuid'

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
            <h1>Make a meme:</h1>
            <form onSubmit={add}>
                <label htmlFor="topText">Top Text:</label>
                <textarea onChange={handleChange} name="topText" value={formData.topText} id="topText" row="4" cols="50"></textarea>
                <label htmlFor="bottomText">Bottom Text:</label>
                <textarea onChange={handleChange} name="bottomText" value={formData.bottomText} id="bottonText" row="4" cols="50"></textarea>
                <label htmlForm="imgUrl">Image Url:</label>
                <input type="text" name="imgUrl" value={formData.imgUrl} id="imgUrl"></input>
            </form>
        </div>
    )
}

export default MemeGenerator;