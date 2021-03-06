import React, { Component } from 'react';
import './App.css';
import Navbar from './components/Navbar/Navbar.jsx';
import { BrowserRouter, Route, withRouter } from "react-router-dom";
import News from './components/News/News';
import Music from './components/Music/Music';
import Settings from './components/Settings/Settings';
import DialogsContainer from './components/Dialogs/DialogsContainer';
import UsersContainer from './components/Users/UsersContainer';
import ProfileContainer from './components/Profile/ProfileContainer';
import HeaderContainer from './components/Header/HeaderContainer';
import Loginpage from './components/Login/Login';
import { connect } from 'react-redux';
import {initializeApp} from '../src/redux/app-reducer'
import { compose } from 'redux';
import Preloader from './components/common/Preloader/Preloader';


class App extends Component {

  componentDidMount() {
    this.props.initializeApp();
  }

  
  render() {

    if (!this.props.initialized) {
      return <Preloader />
    } 
    return (
      <BrowserRouter>
        <div className='app-wrapper'>

          <HeaderContainer />
          <Navbar />
          <div className='app-wrapper-content'>

            <Route path='/Dialogs'
              render={() => <DialogsContainer />} />

            <Route path='/Profile/:userId?'
              render={() => <ProfileContainer />} />
            <Route path='/Users' render={() => <UsersContainer />} />
            <Route path='/Login' render={() => <Loginpage />} />
            <Route path='/News' render={() => <News />} />
            <Route path='/Music' render={() => <Music />} />
            <Route path='/Settings' render={() => <Settings />} />
          </div>


        </div>
      </BrowserRouter>
    );
}

}

const mapStateToProps = (state) => ({
  initialized: state.app.initialized
})

export default  compose(
  withRouter,
  connect (mapStateToProps, {initializeApp}))(App) ;

