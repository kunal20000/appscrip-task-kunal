import logo from "./logo.svg";
import "./App.css";
import Navbar from "./component/navbar/Navbar";
import MainContent from "./component/mainContent/MainContent";
import Footer from "./component/footer/Footer";

function App() {
  return (
    <div className="App">
      <Navbar />
      <MainContent />
      <Footer/>
    </div>
  );
}

export default App;
