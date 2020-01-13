import { combineReducers, createStore } from "redux";
import profileReducers from './profile-reducer';
import dialogReducer from './dialogs-reducer';
import sideBarReducer from './sidebar-reducer';
import usersReducer from "./users-reducer";

let reducers = combineReducers ({
    profilePage: profileReducers,
    dialogsPage: dialogReducer,
    sidebarPage: sideBarReducer,
    usersPage: usersReducer
});

let store = createStore (reducers);

window.store = store;

export default store;