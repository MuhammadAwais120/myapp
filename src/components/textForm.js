import React , {useState} from 'react';

export default function TextForm(props) {
  const handleUpClick = () =>{
   let newText = text.toUpperCase();
   setText(newText);
  }
  const handleOnChange = (event) =>{
    console.log('on change');   
    setText(event.target.value);
  }
  const [text, setText] = useState('Change To Uppercase');
  // setText("Text only");
  return (
    <div>
      <h1>{props.heading}</h1>
      <div className="mb-3">
        <textarea className="form-control" onChange={handleOnChange} value={text} rows="8"></textarea>
        <button className="btn btn-group btn-primary mt-2" onClick={handleUpClick}>Convert To Uppercase</button>
      </div>
    </div>
  )
}
