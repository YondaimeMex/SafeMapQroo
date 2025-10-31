import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter,Routes,Route } from 'react-router-dom'
import App from './App.jsx'
import Home from './pages/Home.jsx'
import Information from './pages/Information.jsx'
import Contact from './pages/Contact.jsx'
import Login from './pages/Login.jsx'
import Register from './pages/Register.jsx'
import Dashboard from './pages/Dashboard.jsx'
import './index.css'


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App/>} >
          <Route index element={<Home/>}/> 
          <Route path='/home' element={<Home/>}/> 
          <Route path='/info' element={<Information/>}/>
          <Route path='/contact' element={<Contact/>}/>
          <Route path='/login' element={<Login/>}/>
          <Route path='/register' element={<Register/>}/>
          <Route path='/dash' element={<Dashboard/>}/>
        </Route>  
      </Routes>    
    </BrowserRouter>

  </StrictMode>
);
