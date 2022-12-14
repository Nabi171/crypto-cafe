import './App.css';
import { Routes, Route, Link } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './Components/Header';
import Home from './Components/Home';
import About from './Components/About';
import SingeleCoinDetails from './Components/SingeleCoinDetails';
function App() {
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/home" element={<Home />} />
        <Route path="/coindetails/:id" element={<SingeleCoinDetails />} />

        <Route path="about" element={<About />} />
      </Routes>
    </div>
  );
}

export default App;
