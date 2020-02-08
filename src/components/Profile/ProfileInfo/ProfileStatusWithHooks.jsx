import React, { useState, useEffect } from "react";
import classTags from "./ProfileInfo.module.css";



const ProfileStatusWithHooks = (props) => {

let [editMode, setEditMode] = useState(false);
let [status, setStatus] = useState(props.status);
const activateEditMode = () => {
  setEditMode(true);
}

useEffect( () => {
  setStatus(props.status);
}, [props.status] );

const deactivateEditMode = () => { 
  setEditMode(false);
 props.updateStatus(status);
}

const onStatusChange = (e) => {
  setStatus(e.currentTarget.value)
 }

  return (
    <div className={classTags}> <span>{props.aboutMe}</span>
      { !editMode && 
        <div>
          <span onDoubleClick = { activateEditMode } > {props.status || '----'}</span>
        </div>
      }
      {editMode &&
        <div>
          <input onChange = {onStatusChange} onBlur= {deactivateEditMode} autoFocus={true} value={status} />
        </div>
      }
    </div>
    );
  }







export default ProfileStatusWithHooks;
