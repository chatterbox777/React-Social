import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';


let posts = [
    {id: 1, message: "Hello, bitch, why are you  alive?", likeCount: 11}, 
    {id: 2, message: "Sorry, its not adress to you", likeCount: 76},
    {id:3, message: 'Fuck you', likeCount: 120}
    
  ];

  let messages = [
    {id: 1, message: 'Hey'}, 
    {id: 2, message: 'WazzUPPP'},
    {id: 3, message: 'nothing interesting , AND YOU?'},
    {id: 4, message: 'IM TOOOOO'}
  ];

  let dialogs = [
    {id: 1, name: 'Artyom'}, 
    {id: 2, name: 'Vasiliy'},
    {id: 3, name: 'Dmitriy'},
    {id: 4, name: 'Nik'}
  ];

ReactDOM.render(<App posts = {posts} messages = {messages} dialogs = {dialogs} />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
