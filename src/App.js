import React , { useState } from "react";
import NavBar from "./components/NavBar";
import TextForm from "./components/textForm";
function App() {
  const [mode, setMode] = useState('light');
  const toggleMode = () => {
    if ( mode === 'light') {
      setMode('dark')
      document.body.style.backgroundColor='grey';
      document.body.style.color='white';
    }else{
      setMode('light')
      document.body.style.backgroundColor = 'white';
      document.body.style.color='black';
    }
  }

  return (
    <>
      <NavBar title="My Website3" mode={mode} toggleMode={ toggleMode }/>
      <div className="container">
        <TextForm heading="Enter Text Below" mode={mode} />
      </div>
    </>
  );
}


export default App;