// import { cleanup } from '@testing-library/react';
import React, {useState} from 'react'



export default function TextForm(props) {
    const handleUpClick = () => {
        // console.log('Uppercase was clicked ' + text);
        let newText = text.toUpperCase();
        setText(newText)
        
    }
    const handleOnChange = (event) => {
        // console.log('Handleon change');
        setText(event.target.value)
        
    }
    const onClear = () => {
        // console.log('Textarea was clicked');
        setText("")
        
        
    }
    const [text, setText] = useState('Enter the text here');
    // text = "afafadfd" // wrong way to change the state 
    // setText("sfsfdfsf"); // right way to change the state
    return (
        <div>
            <div>
                <h1>{props.heading}</h1>
                <textarea className="form-control" id="myBox" cols="30" rows="10" value={text} onClick={onClear} onChange={handleOnChange}></textarea>
            </div>
            <button className="btn btn-primary my-3" onClick={handleUpClick}>Convert to uppercase</button>
        </div>
    )
}
