import {applyMiddleware, combineReducers, createStore } from "redux";
import {reducer as formReducer} from 'redux-form';
import profileReducers from './profile-reducer';
import dialogReducer from './dialogs-reducer';
import sideBarReducer from './sidebar-reducer';
import usersReducer from "./users-reducer";
import authReducer from "./auth-reducer";
import thunkMiddleware from 'redux-thunk';
import appReducer from "./app-reducer";


let reducers = combineReducers ({
    profilePage: profileReducers,
    dialogsPage: dialogReducer,
    sidebarPage: sideBarReducer,
    usersPage: usersReducer,
    auth: authReducer,
    form: formReducer,
    app: appReducer
});

let store = createStore (reducers, applyMiddleware(thunkMiddleware));

window.store = store;

export default store;