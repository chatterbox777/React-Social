import React from 'react';
import './App.css';
import Header from './components/Header/Header.jsx';
import Navbar from './components/Navbar/Navbar.jsx';
import Profile from './components/Profile/Profile.jsx';
import Dialogs from './components/Dialogs/Dialogs';




const App = () => {
  return (
     <div className = 'app-wrapper'>

      <Header />
      <Navbar />
      <div className = 'app-wrapper-content'>
      <Profile />
      </div>
      {/* <Profile /> */}

     </div>
    
  );
}

export default App;

