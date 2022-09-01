import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';



import logo from './logo.svg';
import './styles/App.css';
import Login from './components/Login';
import Navbar from './components/Navbar';
import Frontpage from './pages/Frontpage';



function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <Routes>
          <Route path='/' element={ <Frontpage /> } />
          <Route path='/login' element={ <Login /> } />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
