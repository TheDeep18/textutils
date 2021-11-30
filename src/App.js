import './App.css';
// import About from './components/About';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';

function App() {
  return (
    <>
      {/* <Navbar title = "Textutils" aboutText = "About Textutils"/> */}
      <Navbar title="Textutils" />
      {/* <Navbar/> */}

      <div className="container my-3">
      <TextForm heading="Enter The Text To Analyse Below"/>
      {/* <About/> */}
      </div>
    </>
  );
}

export default App;
