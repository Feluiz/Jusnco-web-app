import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { BrowserRouter, Routes, Route } from 'react-router'
import App from './App.jsx'
import Home from './Components/Home/Home.jsx'
import FincaComponent from './Components/FincaComponent/FincaComponent.jsx'
import YutecoComponent from './Components/Yuteco/YutecoComponent.jsx'
import EcotactComponent from './Components/Ecotact/EcotactComponent.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element ={<App />} >
          <Route index element={<Home />} />
          <Route path='/finca' element={<FincaComponent />} />
          <Route path='/ecotact' element={<EcotactComponent />} />
          <Route path='/yuteco' element={<YutecoComponent />} />
        </Route>
      </Routes>  
    </BrowserRouter>
  </StrictMode>
)