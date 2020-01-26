import React from "react";
import classTags from "./ProfileInfo.module.css";
import { render } from "react-dom";


class ProfileStatus extends React.Component {


  state = {
    editMode: false,
    status: this.props.status
  }

activateEditMode = () => { // метод

  this.setState( { // setState - ассинхронен
      editMode: true
  } );

}


deactivateEditMode = () => { // метод
  this.setState( { // setState - ассинхронен
      editMode: false
  } );
  this.props.updateStatus(this.state.status);
}



onStatusChange = (e) => {
 this.setState({
   status: e.currentTarget.value
 });
}

componentDidUpdate(prevProps, prevState) {
  debugger;
  if (prevProps.status !== this.props.status) { 
  this.setState({
    status: this.props.status
  });
  }
}


  render() {

    console.log('render');


    return (
      <>
        <div className={classTags}> <span>{this.props.aboutMe}</span>
          {!this.state.editMode &&
            <div>
              <span onDoubleClick = { this.activateEditMode }> {this.props.status || '----'}</span>
            </div>
          }
          {this.state.editMode &&
            <div>
              <input onChange = {this.onStatusChange} autoFocus={true} onBlur= {this.deactivateEditMode} value={this.state.status} />
            </div>
          }
        </div>
      </>
    );
  }
}







export default ProfileStatus;
