import React , {useState} from 'react';

export default function TextForm(props) {
  const handleUpClick = () =>{
   let newText = text.toUpperCase();
   setText(newText);
  }

  const handleLoClick = () =>{
    let newText = text.toLowerCase();
    setText(newText);
   }
  const handleClear = () =>{
    let newText = "";
    setText(newText);
   }

  const removeExtraSpace = () =>{
    let newText = text.split(/[ ]+/);
    setText(newText.join(" "));
    }

  const handleOnChange = (event) =>{
    console.log('on change');   
    setText(event.target.value);
  }
  const [text, setText] = useState("");
  // setText("Text only");
  return (
    <>
    <div className="container">
      <h1>{props.heading}</h1>
      <div className="mb-3">
        <textarea className="form-control" onChange={handleOnChange} value={text} rows="8"></textarea>
        <button className="btn btn-group btn-primary mt-2" onClick={handleUpClick}>Convert To Uppercase</button>
        <button className="btn btn-group btn-primary mt-2 mx-2" onClick={handleLoClick}>Convert To Lowercase</button>
        <button className="btn btn-group btn-primary mt-2 mx-2" onClick={handleClear}>Clear Text</button>
        <button className="btn btn-group btn-primary mt-2 mx-2" onClick={removeExtraSpace}>Remove Extra Spaces</button>
      </div>
    </div>
    <div className="container">
      <h1>About Text</h1>
      <p>{text.split('').length} words and {text.length} characters</p>
      <h2>Preview</h2>
      <p>{text.length>0?text:"Enter Somthing to show"}</p>
    </div>
    </>
  )
}
