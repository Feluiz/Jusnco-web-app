import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { BrowserRouter, Routes, Route } from 'react-router'
import App from './App.jsx'
import Home from './Components/Home/Home.jsx'
// import YutecoComponent from './Components/Yuteco/YutecoComponent.jsx'
import FincaComponent from './Components/FincaComponent/FincaComponent.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element ={<App />} >
          <Route index element={<Home />} />
          <Route path='/ecotact' element={<FincaComponent />} />
        </Route>
      </Routes>  
    </BrowserRouter>
  </StrictMode>
)