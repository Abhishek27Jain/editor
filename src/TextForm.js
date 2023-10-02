import React, {useState} from 'react'

export default function TextForm(props) {

    const onChangeHandle=(event)=>{
        console.log("UpperCase was clicked");
        setText(event.target.value);

    }
        const handleUpClick=()=>{
            let newText=text.toUpperCase();
            setText(newText);
            props.showAlert("Converted to Upper Case","success");
        }

        const handleClearClick=()=>{
            let newText="";
            setText(newText);
            props.showAlert("The text is cleared successfully","success");
        }
    const handleDownClick=()=>{
        let newText=text.toLowerCase();
        setText(newText);
        props.showAlert("Converted to Lower Case","success");
    }
    const handleTrimClick=()=>{
        let newText=text.trim();
        setText(newText);
        props.showAlert("The text is trimmed from start and end point","success");
    }
    const[text,setText]=useState("Enter the Text Here");
  return (
    <>
    <div>
      
    <div className="mb-3" style={{color:props.mode==='dark'?'white':'black'}} >
        <h1>{props.heading}</h1>
    <label htmlFor="mybox" className="form-label">Example text area</label>
    <textarea className="form-control" style={{backgroundColor:props.mode==='dark'?'gray':'white',color:props.mode==='dark'?'white':'black'}} value={text}onChange={onChangeHandle} id="mybox"  rows="15"></textarea>
    </div>
    <button className="btn btn-primary" onClick={handleUpClick} >Convert to UpperCase</button>
    <button className="btn btn-primary mx-5" onClick={handleDownClick}>Convert to LowerCase</button>
    <button className="btn btn-primary " onClick={handleClearClick}>Clear the space</button>
    <button className="btn btn-primary mx-5 " onClick={handleTrimClick}>Trim</button>
    </div>

    <div className="container my-3">
    <h2>Your Text Summary</h2>
    <h6>Total words {text.split(" ").length} and Characters {text.length} </h6>
    <h6>Time to read the text is {0.008 *(text.split(" ").length)}</h6>
    <h4>Preview of your Text</h4>
    <h6>{text.length>0?text:"Enter Something in your text box"}</h6>

    </div>
</>
  )
}
