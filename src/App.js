import './App.css';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import 'aos/dist/aos.css';
import Home from "./layout/Home";
import About from "./layout/About";
import Contact from "./layout/Contact";
import Projects from "./layout/Projects";
import Hero from "./layout/Hero";

function App() {
  return (
    <div className="App">
        <Router >
            <Routes>
                <Route exact path="/" element={<Hero/>}/>
                <Route path="/home" element={<Home/>}/>
                <Route path="/projects" element={<Projects/>}/>
                <Route path="/about" element={<About/>}/>
                <Route path="/contact" element={<Contact/>}/>
            </Routes>

        </Router>
    </div>
  );
}

export default App;
