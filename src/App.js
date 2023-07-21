import NavBar from "./components/NavBar";
import TextForm from "./components/textForm";
function App() {
  return (
    <>
      <NavBar title="My Website3" />
      <div className="container">
        <TextForm heading="Enter Text Below" />
      </div>
    </>
  );
}


export default App;