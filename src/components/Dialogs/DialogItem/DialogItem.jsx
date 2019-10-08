import React from "react";
import classTags from "./../Dialogs.module.css";
import {NavLink} from "react-router-dom";
import { ADDRGETNETWORKPARAMS } from "dns";


const DialogItem = (props) => {
let path = '/Dialogs/' + props.id;
    return (
        <div className={classTags.dialog + ' ' + classTags.active}>
        <NavLink to = {path}>{props.name}</NavLink>
        </div>
    );
};



export default DialogItem;
