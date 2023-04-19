import React from 'react';
import './App.css';
import { BrowserRouter, Route, Routes, } from 'react-router-dom';
import Home from './pages/Home';
import AddEditUser from './pages/AddEditUser';
import UserInfo from './pages/UserInfo';
import About from './pages/About';
import Header from './components/Header';

function App() {
  return (
    <>
      <BrowserRouter>
        <Header />
        <div className="App">
          <Routes>
            <Route exact path='/' Component={Home} />
            <Route path='/addUser' Component={AddEditUser} />
            <Route path='/editUser/:id' Component={AddEditUser} />
            <Route path='/userInfo/:id' Component={UserInfo} />
            <Route path='/about' Component={About} />
          </Routes>
        </div>
      </BrowserRouter>
    </>
  );
}

export default App;
