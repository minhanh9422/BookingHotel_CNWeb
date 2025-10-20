import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Rooms from './pages/Rooms';
import Gallery from './pages/Gallery';
import Amenities from './pages/Amenities';
import Booking from './pages/Booking';
import Contact from './pages/Contact';

function App() {
  return (
    <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/home" element={<Home />} />
          <Route path='/rooms' element={<Rooms />} />
          <Route path='/gallery' element={<Gallery />} />
          <Route path='/amenities' element={<Amenities />} />
          <Route path='/booking' element = {<Booking/>} />
          <Route path='/contact' element = {<Contact/>} />
        </Routes>
    </Router>
  );
}

export default App;