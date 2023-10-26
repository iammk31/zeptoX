import React from 'react';
import Navbar from './Components/Navbar';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import SignUp from './Components/Auth/SignUp';

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/SignUp" element={<SignUp />}/>
        {/* Add more routes for other components as needed */}
      </Routes>
    </Router>
  );
}

export default App;
