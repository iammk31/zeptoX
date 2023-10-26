import React from 'react';
import Navbar from './Components/Navbar';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import SignUp from './Components/Auth/SignUp';
import LogIn from './Components/Auth/LogIn';

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/SignUp" element={<SignUp />}/>
        <Route path="/LogIn" element={<LogIn />}/>
        
      </Routes>
    </Router>
  );
}

export default App;
