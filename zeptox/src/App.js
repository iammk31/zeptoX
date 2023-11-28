import React from 'react';
import Navbar from './Components/Navbar';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import SignUp from './Components/Auth/SignUp';
import LogIn from './Components/Auth/LogIn';
import Content from './Components/Content';
import Footer from './Components/Footer';
function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/SignUp" element={<SignUp />} />
        <Route path="/LogIn" element={<LogIn />} />

      </Routes>
      <Content />
      <Footer />
    </Router>
  );
}

export default App;
