import './App.css';
import Navbar from "./components/general/Navbar"

var companyNameString = "Naturality";

function App() {
  return (
    <div className="App">
      <Navbar companyName={companyNameString}></Navbar>
    </div>
  );
}

export default App;
