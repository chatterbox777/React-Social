import React from "react";
import classTags from "./ProfileInfo.module.css";
import { render } from "react-dom";


class ProfileStatus extends React.Component {

  state = {
    editMode: false, 
    title: 'Yo'
  }

activateEditMode() { // метод
  this.setState( { // setState - ассинхронен
      editMode: true
  } );

}


deactivateEditMode() { // метод
  this.setState( { // setState - ассинхронен
      editMode: false
  } );

}


  render() {

    return (
      <>
        <div className={classTags}> <span>{this.props.aboutMe}</span>
          {!this.state.editMode &&
            <div>
              <span onDoubleClick = { this.activateEditMode.bind(this) }> {this.props.status}</span>
            </div>
          }
          {this.state.editMode &&
            <div>
              <input autoFocus={true} onBlur= {this.deactivateEditMode.bind(this)} value={this.props.status} />
            </div>
          }
        </div>
      </>
    );
  }
}







export default ProfileStatus;
