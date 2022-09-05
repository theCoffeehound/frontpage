import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';



import logo from './logo.svg';
import './styles/App.css';
import Navbar from './components/Navbar';
import Frontpage from './pages/Frontpage';
import Authentication from './pages/Authenticate';
import Borke from './pages/Borke';



function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <Routes>
          <Route path='/' element={ <Frontpage /> } />
          <Route path='/authentication' element={ <Authentication /> } />
          <Route path='/*' element={<Borke />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
