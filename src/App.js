import React from 'react';
import './App.css';
import Header from './components/Header/Header.jsx';
import Navbar from './components/Navbar/Navbar.jsx';
import Profile from './components/Profile/Profile.jsx';
import {BrowserRouter, Route} from "react-router-dom";
import News from './components/News/News';
import Music from './components/Music/Music';
import Settings from './components/Settings/Settings';
import DialogsContainer from './components/Dialogs/DialogsContainer';


const App = (props) => {
  debugger;
  return (
    <BrowserRouter>
     <div className = 'app-wrapper'>

       <Header />
       <Navbar />
       <div className = 'app-wrapper-content'>

       <Route path = '/Dialogs'
              render = { () => <DialogsContainer
                     store = {props.store} /> } />

       <Route path = '/Profile'
              render = { () => <Profile store = {props.store}
              /> } />

       <Route path = '/News' render = { () => <News />} />
       <Route path = '/Music' render = { () => <Music />} />
       <Route path = '/Settings' render = { () => <Settings />} />
      </div>
      

     </div>
     </BrowserRouter>
  );
}

export default App;

