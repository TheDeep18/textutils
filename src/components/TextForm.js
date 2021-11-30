// import { cleanup } from '@testing-library/react';
import React, {useState} from 'react'



export default function TextForm(props) {
    const handleUpClick = () => {
        // console.log('Uppercase was clicked ' + text);
        let newText = text.toUpperCase();
        setText(newText) 
    }
    const handleLowClick = () => {
        // console.log('Uppercase was clicked ' + text);
        let newText = text.toLowerCase();
        setText(newText) 
    }
    const handleClearClick = () => {
        // console.log('Uppercase was clicked ' + text);
        let newText = "";
        setText(newText) 
    }

    const handleOnChange = (event) => {
        // console.log('Handleon change');
        setText(event.target.value)  
    }

    // const onClear = () => {
    //     // console.log('Textarea was clicked');
    //     setText("")
    // }

    const handlecopy = () => {
        console.log('I am copy');
        var text = document.getElementById("myBox")
        text.select();
        navigator.clipboard.writeText(text.value);
        
    }

    const handleExtraSpaces = () => {
        let newText = text.split(/[ ]+/);
        setText(newText.join(" "))
    }

    const [text, setText] = useState('');
    // text = "afafadfd" // wrong way to change the state 
    // setText("sfsfdfsf"); // right way to change the state
    return (
        <>
        <div className="container">
            <div>
                <h1>{props.heading}</h1>
                <textarea className="form-control" id="myBox" cols="30" rows="10" value={text} onChange={handleOnChange}></textarea>
            </div>
            <button className="btn btn-primary my-3" onClick={handleUpClick}>Convert to uppercase</button>
            <button className="btn btn-primary my-3 mx-2" onClick={handleLowClick}>Convert to lowercase</button>
            <button className="btn btn-primary my-3 mx-2" onClick={handleClearClick}>Clear</button>
            <button className="btn btn-primary my-3 mx-2" onClick={handlecopy}>Copy text</button>
                <button className="btn btn-primary my-3 mx-2" onClick={handleExtraSpaces}>Remove extra spaces</button>
        </div>

        <div className="container">
            <h2>Your text summary</h2>
            <p>{text.split(" ").length - 1} words and {text.length} characters</p>
            <p>{(0.008 * (text.split(" ").length - 1))} Minutes read</p>
            <h2>Preview</h2>
            <p>{text}</p>
        </div>
        </>
    )
}
