import { combineReducers, createStore } from "redux";
import profileReducers from './profile-reducer';
import dialogReducer from './dialogs-reducer';
import sideBarReducer from './sidebar-reducer';

let reducers = combineReducers ({
    profilePage: profileReducers,
    dialogsPage: dialogReducer,
    sidebarPage: sideBarReducer
});

let store = createStore (reducers);


export default store;