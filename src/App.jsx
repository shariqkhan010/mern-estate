import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import './index.css';
import Home from './pages/Home';
import About from './pages/About';
import Profile from './pages/Profile';
import Sign from './pages/Sign';
import SignU from './pages/SignU';
import Header from './components/Header';



export default function App() {
  return (
  <BrowserRouter>
  <Header />
    <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/about' element={<About />} />
      <Route path='/Profile' element={<Profile />} />
      <Route path='/Sign' element={<Sign />} />
      <Route path='/SignU' element={<SignU />} />
    </Routes>
  </BrowserRouter>
)}


