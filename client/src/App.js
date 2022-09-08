import React, { useEffect } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';



import logo from './logo.svg';
import './styles/App.css';
import Navbar from './components/Navbar';
import Frontpage from './pages/Frontpage';
import Authentication from './pages/Authenticate';
import Borke from './pages/Borke';
import Data from './pages/Data';

import { UserProvider } from './contexts/UserContext';




function App() {



  return (
    <Router>
      <div className="App">
        <UserProvider>
          <Navbar />
          <Routes>
            <Route path='/' element={ <Frontpage /> } />
            <Route path="/data" element={ <Data /> } />
            <Route path="/user" element={ <Data /> } />
            <Route path='/authentication' element={ <Authentication /> } />
            <Route path='/*' element={<Borke />} />
          </Routes>
        </UserProvider>
      </div>
    </Router>
  );
}

export default App;
