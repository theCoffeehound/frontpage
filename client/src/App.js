import React, { useEffect } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';


import ima from './images/IMG_3024.JPG'
import logo from './logo.svg';
import './styles/App.css';
import Testi from './pages/Testi'
import Navbar from './components/Navbar';
import Frontpage from './pages/Frontpage';
import Authentication from './pages/Authenticate';
import Borke from './pages/Borke';
import Data from './pages/Data';
import User from './pages/User';
import Uutiset from './pages/Uutiset';
import AddItem from './pages/AddItem';
import Home from './pages/Home';
import ProjectManager from './pages/ProjectManager/ProjectManager';
import Project from './pages/ProjectManager/Project';



import { UserProvider } from './contexts/UserContext';






function App() {



  return (
    <Router>
      <div className="App">
      <img src={ima} className='background-image'/>
        <UserProvider>
          <Navbar />
          <Routes>
            <Route path='/' element={ <Frontpage /> } />
            <Route path='/projectmanager' element={ <ProjectManager /> } />
            <Route path='/projectmanager/project/:id' element={ <Project /> } />
            <Route path='/data' element={ <Data /> } />
            <Route path='/data/add' element={ <AddItem /> } />
            <Route path='/user' element={ <User /> } />
            <Route path='/uutiset' element={ <Uutiset /> } />
            <Route path='/home' element={ <Home /> } />
            <Route path="/testi" element={ <Testi /> } />
            <Route path='/authentication' element={ <Authentication /> } />
            <Route path='/*' element={<Borke />} />
          </Routes>
        </UserProvider>
      </div>
    </Router>
  );
}

export default App;
