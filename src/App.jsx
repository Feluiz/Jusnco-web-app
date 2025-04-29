import { NavLink, Link, Outlet } from 'react-router'
import { useState } from 'react'
import './App.css'
import CustomHeader from './Components/Main/CustomHeader/CustomHeader'
import CustomFooter from './Components/Main/CustomFooter/CustomFooter'
import ScrollBar from './Components/Main/ScrollBar/ScrollBar'

function App() {
  const [currentTab, setCurrentTab] = useState('home');
  const activeTab = (clickedTab) => {
    setCurrentTab(clickedTab);
  };

  return (
    <div className="App">
      <CustomHeader actions={activeTab}/>
      <ScrollBar />
      <Outlet />
      <CustomFooter actions={activeTab} />
    </div>
  );
}

export default App;
