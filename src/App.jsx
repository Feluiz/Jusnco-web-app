import { NavLink, Link } from 'react-router'
import { useState } from 'react'
import './App.css'
import CustomHeader from './Components/Main/CustomHeader/CustomHeader'
import CustomFooter from './Components/Main/CustomFooter/CustomFooter'
import ServiceBar from './Components/Home/ServiceBar/ServiceBar'
import ScrollBar from './Components/Main/ScrollBar/ScrollBar'
import Home from './Components/Home/Home'

function App() {
  const [currentTab, setCurrentTab] = useState('home');
  const activeTab = (clickedTab) => {
    setCurrentTab(clickedTab);
  };

  return (
    <div className="App">
      <CustomHeader actions={activeTab}/>
      <ScrollBar />
      <Home />
      <CustomFooter actions={activeTab} />
    </div>
  );
}

export default App;
