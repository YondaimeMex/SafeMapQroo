import './index.css'
import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import App from './App.jsx'
import Home from './pages/Home.jsx'
import Information from './pages/Information.jsx'
import Contact from './pages/Contact.jsx'
import Login from './pages/Login.jsx'
import Register from './pages/Register.jsx'
import Dashboard from './Dashboard.jsx'


import Modal from "react-modal";

Modal.setAppElement('#root');

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
      {/*Route Main*/}
      <Routes>
        <Route path="/" element={<App />} >
          <Route index element={<Information/>} />
          <Route path='/home' element={<Information />} />
          <Route path='/Map' element={<Home />} />
          <Route path='/login' element={<Login />} />
          <Route path='/register' element={<Register />} />
          <Route path='/dash' element={<Dashboard />} />
        </Route>
      </Routes>
    </BrowserRouter>

  </StrictMode>
);
