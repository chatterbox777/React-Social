import React from 'react';
import './App.css';
import Header from './components/Header/Header.jsx';
import Navbar from './components/Navbar/Navbar.jsx';
import {BrowserRouter, Route} from "react-router-dom";
import News from './components/News/News';
import Music from './components/Music/Music';
import Settings from './components/Settings/Settings';
import DialogsContainer from './components/Dialogs/DialogsContainer';
import UsersContainer from './components/Users/UsersContainer';
import ProfileContainer from './components/Profile/ProfileContainer';


const App = (props) => {
  return (
    <BrowserRouter>
     <div className = 'app-wrapper'>

       <Header />
       <Navbar />
       <div className = 'app-wrapper-content'>

       <Route path = '/Dialogs'
              render = { () => <DialogsContainer /> } />

       <Route path = '/Profile/:userId?'
              render = { () => <ProfileContainer /> } />
      <Route path = '/Users' render = { () => <UsersContainer />} />
       <Route path = '/News' render = { () => <News />} />
       <Route path = '/Music' render = { () => <Music />} />
       <Route path = '/Settings' render = { () => <Settings />} />
      </div>
      

     </div>
     </BrowserRouter>
  );
}

export default App;

