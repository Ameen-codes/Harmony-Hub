import { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'; 
import Navbar from './Navbar';
import Home from './Home';
import MelodyMints from './MelodyMints';
import './App.css';

function App() {
  const [count, setCount] = useState(0);

  return (
    <Router>

      <Navbar />

      <Routes >
        
        <Route path="/" element={<Home />} />
        
        <Route path="/MelodyMints" element={<MelodyMints />} />

      </Routes>

    </Router>
  );
}

export default App;
