import React from 'react';
import './App.css';
import Header from './components/Header/Header.jsx';
import Navbar from './components/Navbar/Navbar.jsx';
import Profile from './components/Profile/Profile.jsx';
import Dialogs from './components/Dialogs/Dialogs';
import {BrowserRouter, Route} from "react-router-dom";
import News from './components/News/News';
import Music from './components/Music/Music';
import Settings from './components/Settings/Settings';


const App = (props) => {

  

  return (
    <BrowserRouter>
     <div className = 'app-wrapper'>

       <Header />
       <Navbar />
       <div className = 'app-wrapper-content'>

       <Route path = '/Dialogs' render = { () => <Dialogs messages = {props.messages} dialogs = {props.dialogs} /> } />
       <Route path = '/Profile' render = { () => <Profile posts = {props.posts} />} />
       <Route path = '/News' render = { () => <News />} />
       <Route path = '/Music' render = { () => <Music />} />
       <Route path = '/Settings' render = { () => <Settings />} />
      </div>
      

     </div>
     </BrowserRouter>
  );
}

export default App;

